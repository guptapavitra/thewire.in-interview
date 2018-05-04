import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as articlesActions from '../actions/articlesActions';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withRouter from 'react-router-dom/withRouter';
import AuthService from '../Auth/AuthService';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    email: '',
    password: ''
  }

  onChangeInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    AuthService(this.state)
      .then(({ isAuthenticated }) => {
        console.log("AUTHENTICATED: " + isAuthenticated);
        this.props.history.push('/home');
      })
      .catch((e) => {
        console.log("Use admin@thewire.in and admin as username and passwords.");
        throw e;
      });
  }

  render() {
    return (
      <div>
        <input type='text' id='email' name='email' placeholder='email: johnybravo@gmail.com' value={this.state.email} onChange={this.onChangeInput}/>
        <input type='password' id='password' name='password' placeholder='password: *********' value={this.state.password} onChange={this.onChangeInput}/>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    )
  }
}

LoginScreen.propTypes = {
  stuffActions: PropTypes.object,
  stuffs: PropTypes.array
}

function mapStateToProps(state) {
  return {
    stuffs: state.stuffs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // stuffActions: bindActionCreators(stuffActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginScreen));
