import React from 'react'
import Button from './Button'

const OptionalBar = (props) => {
  const { bet, totalCoins, btnDisabled } = props.state
  return <div className="optional-bar">
    <span className="bet">{bet}</span>
    <Button spin={props.spin} btnDisabled={btnDisabled} />
    <span className="coins">{totalCoins}</span>
  </div>
}

export default OptionalBar