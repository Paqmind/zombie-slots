import React from 'react'

const OptionalBar = (props) => {
  return <div>
    <input id="input" type="button" onClick={props.spin} value="spin" />
  </div>
}

export default OptionalBar