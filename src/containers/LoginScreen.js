import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stuffActions from '../actions/stuffActions';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withRouter from 'react-router-dom/withRouter';

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

  componentWillMount() {
    this.props.stuffActions.fetchStuff();
  }

  onChangeInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    console.log(this.state);
    this.props.history.push('/articles')
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
    stuffActions: bindActionCreators(stuffActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginScreen));
