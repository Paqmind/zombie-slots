import React from 'react'
import Button from './Button'

const OptionalBar = (props) => {
  const { bet, totalCoins, spinning } = props.state
  return <div className="optional-bar">
    <div className="stats">
      <div className="title">BET</div>
      <div className="value">{bet}</div>
    </div>
    <Button spin={props.spin} btnDisabled={spinning} />
    <div className="stats">
      <div className="title">COINS</div>
      <div className="value">{totalCoins}</div>
    </div>
  </div>
}

export default OptionalBar