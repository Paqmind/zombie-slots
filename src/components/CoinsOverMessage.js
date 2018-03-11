import React from 'react'

const CoinsOverMessage = (props) => {
  return <div className={props.isOpen ? "show-coins-over-message" : "hide-coins-over-message"}>
    <div className="message">Not enough coins</div>
    <input type="button"
           className="try-again"
           value="Try again"
           onClick={props.clickHandler}>
    </input>
  </div>
}

export default CoinsOverMessage