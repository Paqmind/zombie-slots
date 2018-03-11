import React from 'react'
import Button from './Button'

const OptionalBar = (props) => {
  const { bet, totalCoins, spinning, btnDisabled, increaseArrowPressed, decreaseArrowPressed } = props.state
  return <div className="optional-bar">
    <div className="stats">
      <div className="title">BET</div>
      <div className="value">
        <span onClick={props.decrease}>
          <i className={`arrow left ${decreaseArrowPressed ? "arrow-pressed" : null}`}></i>
        </span>
        {bet}
        <span onClick={props.increase}>
          <i className={`arrow right ${increaseArrowPressed ? "arrow-pressed" : null}`}></i>
        </span>
      </div>
    </div>
    <Button spin={props.spin} btnDisabled={btnDisabled} />
    <div className="stats">
      <div className="title">COINS</div>
      <div className="value">{totalCoins}</div>
    </div>
  </div>
}

export default OptionalBar