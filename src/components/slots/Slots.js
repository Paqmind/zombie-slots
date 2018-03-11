import React from 'react'
import CoinsOverMessage from '../CoinsOverMessage'
import CoinsCounter from '../CoinsCounter'
import colsTemplate from './colsTemplate'
import svgClassNames from './svgClassNames'

const Slots = (props) => {
  let {cols, winningIcons, winningCoins, isCoinsCounterOpen, isCoinsOverMessageOpen} = props.state
  let displayedCols = cols.map(col => col.concat(colsTemplate.concat(col)))

  return <div className="wrapper">
    <div className="coins-properties">
      <CoinsOverMessage isOpen={isCoinsOverMessageOpen} />
      <CoinsCounter isOpen={isCoinsCounterOpen} coins={winningCoins} />
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