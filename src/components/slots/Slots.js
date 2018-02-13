import React from 'react'
import colsTemplate from './colsTemplate'
import svgClassNames from './svgClassNames'

const Slots = (props) => {
  let { cols, winningIcons, winningCoins, isCoinsCounterOpen } = props.state
  let slotsCols = cols.slice()

  for (let col in slotsCols) {
    slotsCols[col] = slotsCols[col].concat(colsTemplate.concat(slotsCols[col]))
  }

  return <div className="wrapper">
    <div className={isCoinsCounterOpen ? "show-coins-counter" : "hide-coins-counter"}>
      <div className="coins-amount">{winningCoins}</div>
    </div>
    {
      slotsCols.map((col, i) => {
        return <div className="outer-col" key={i}>
          <div className="col">{
            col.map((value, i) => {
              return <svg className={svgClassNames(winningIcons)} key={i}>
                <use xlinkHref={`#zombie-${value}`}></use>
              </svg>
            })
          }</div>
        </div>
      })
    }
  </div>
}

export default Slots