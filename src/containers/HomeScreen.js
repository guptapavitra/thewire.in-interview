import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default class HomeScreen extends Component {
  static propTypes = {
    prop: PropTypes.string
  }

  render() {
    return (
      <div>
        <Link to='/aboutus/profile'>Profile</Link>
        <Link to='/aboutus/team'>Team</Link>
        <Link to='/articles'>Articles</Link>
      </div>
    )
  }
}
