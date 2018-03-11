import React from 'react'

const CoinsCounter = (props) => {
  return <div className={props.isOpen ? "show-coins-counter" : "hide-coins-counter"}>
    <div className="coins-amount">{props.coins}</div>
  </div>
}

export default CoinsCounter