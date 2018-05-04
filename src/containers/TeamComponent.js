import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TeamComponent extends Component {
  static propTypes = {
    prop: PropTypes.string
  }

  render() {
    return (
      <div>
        <h2>Team Component</h2>
        {[...Array(50).keys()].map(function(value, index) {
          return <div key={value}>Random Team Row</div>
        })}
      </div>
    )
  }
}
