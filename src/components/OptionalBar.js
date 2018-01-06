import React from 'react'

const OptionalBar = (props) => {
  return <div className="optional-bar">
    <input id="input" type="button" onClick={props.spin} value="spin" />
  </div>
}

export default OptionalBar