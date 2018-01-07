import React from 'react'

const OptionalBar = (props) => {
  return <div className="optional-bar">
    <span className="bet">{props.bet}</span>
    <input id="input" type="button" onClick={props.spin} value="spin" />
    <span className="coins">{props.coins}</span>
  </div>
}

export default OptionalBar