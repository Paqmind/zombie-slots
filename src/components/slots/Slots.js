import React from 'react'
import colsTemplate from './colsTemplate'
import svgClassNames from './svgClassNames'

const Slots = (props) => {
  let { cols, winningIcons, winningCoins, isCoinsCounterOpen } = props.state
  let displayedCols = cols.slice()

  for (let col in displayedCols) { // replacing first three and last three icons in template with new ones from state
    displayedCols[col] = displayedCols[col].concat(colsTemplate.concat(displayedCols[col]))
  }

  return <div className="wrapper">
    <div className={isCoinsCounterOpen ? "show-coins-counter" : "hide-coins-counter"}>
      <div className="coins-amount">{winningCoins}</div>
    </div>
    {
      displayedCols.map((col, i) => {
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