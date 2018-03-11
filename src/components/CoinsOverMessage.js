import React from 'react'

const CoinsOverMessage = (props) => {
  return <div className={props.isOpen ? "show-coins-over-message" : "hide-coins-over-message"}>
    <div className="message">Not enough coins</div>
    <input className="try-again" value="Try again" type="button"></input>
  </div>
}

export default CoinsOverMessage