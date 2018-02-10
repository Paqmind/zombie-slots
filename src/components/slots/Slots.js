import React from 'react'
import colsTemplate from './colsTemplate'

const Slots = (props) => {
  let cols = props.state.cols.slice()

  for (let col in cols) {
    cols[col] = cols[col].concat(colsTemplate.concat(cols[col]))
  }

  return <div className="wrapper">{
    cols.map((col, i) => {
      return <div className="outer-col" key={i}>
        <div className="col">{
          col.map((value, i) => {
            return <svg className="zombies" key={i}>
              <use xlinkHref={`#zombie-${value}`}></use>
            </svg>
          })
        }</div>
      </div>
    })
  }</div>
}

export default Slots