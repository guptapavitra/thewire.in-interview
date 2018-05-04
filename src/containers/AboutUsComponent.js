import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
// import Switch from 'react-router-dom/Switch';
// import { Route } from 'react-router-dom';
import ProfileComponent from './ProfileComponent';
import TeamComponent from './TeamComponent';

export default class AboutUsComponent extends Component {
  static propTypes = {
    prop: PropTypes.string
  }

  componentDidMount() {
    this.scrollToElementBasedOnRoute();
  }

  componentDidUpdate() {
    this.scrollToElementBasedOnRoute();
  }

  scrollToElementBasedOnRoute() {
    if (this.props.location.pathname.includes('/profile')) {
      findDOMNode(this.refs.profile).scrollIntoView();
    }

    if (this.props.location.pathname.includes('/team')) {
      findDOMNode(this.refs.team).scrollIntoView();
    }
  }

  render() {
    return (
      <div>
        <h1>About Us Component</h1>
        <Link to='/aboutus/profile'>Profile</Link>
        <Link to='/aboutus/team'>Team</Link>
        <Link to='/home'>Home</Link>

        <ProfileComponent ref='profile'></ProfileComponent>
        <TeamComponent ref='team'></TeamComponent>
        {/* <Switch>
          <Route path='/aboutus/profile' component={ProfileComponent}/>
          <Route path='/aboutus/team' component={TeamComponent}/>
        </Switch> */}
      </div>
    )
  }
}
