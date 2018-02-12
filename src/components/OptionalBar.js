import React from 'react'

const OptionalBar = (props) => {
  const { bet, coins, btnDisabled } = props.state
  return <div className="optional-bar">
    <span className="bet">{bet}</span>
    <input id="input" type="button" onClick={props.spin} value="spin" disabled={btnDisabled} />
    <span className="coins">{coins}</span>
  </div>
}

export default OptionalBar