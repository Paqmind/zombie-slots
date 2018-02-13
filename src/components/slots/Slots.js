import React from 'react'
import colsTemplate from './colsTemplate'
import svgClassNames from './svgClassNames'

const Slots = (props) => {
  let cols = props.state.cols.slice(),
    icons = props.state.winningIcons

  for (let col in cols) {
    cols[col] = cols[col].concat(colsTemplate.concat(cols[col]))
  }

  return <div className="wrapper">
    <div className="show-coins-counter">
      <div className="coins-amount">200</div>
    </div>
    {
      cols.map((col, i) => {
        return <div className="outer-col" key={i}>
          <div className="col">{
            col.map((value, i) => {
              return <svg className={svgClassNames(icons)} key={i}>
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