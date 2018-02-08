import React from 'react'

const Slots = (props) => {
  let cols = props.state.cols

  let colsTemplate = ["three", "six", "eight", "seven", "three", "three", "seven", "eight", "one", "two", "eight", "six", "three", "two", "one", "four", "four", "one", "seven", "six", "four", "five", "three", "eight", "seven", "three", "one"]

  for (let col in cols) {
    cols[col] = cols[col].concat(colsTemplate.concat(cols[col]))
    //cols[col] = R.concat(cols[col], R.concat(colsTemplate, cols[col]))
  }

  return <div className="wrapper">{
    cols.map((col, i) => {
      return <div className="outer-col" key={i}>
        <div className="col">{
          col.map((value, i) => {
            return <svg className="zombies" key={i}><use xlinkHref={`#zombie-${value}`}></use></svg>
          })
        }</div>
      </div>
    })
  }</div>
}

export default Slots