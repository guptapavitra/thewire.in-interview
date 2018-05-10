import React from 'react'
import PropTypes from 'prop-types'

const CroppedContent = (props) => {
  let i = props.limit;

  while(true) {
    if (props.content[i] === ' ') {
      break;
    }
    i = i - 1;
  }

  return (
    <span>
      {props.content.substr(0, i)}
    </span>
  )
}

CroppedContent.propTypes = {
  content: PropTypes.string.isRequired,
  limit: PropTypes.number
}

CroppedContent.defaultProps = {
  limit: 250
}

export default CroppedContent;