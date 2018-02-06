import React from 'react'

const Slots = (props) => {
  let {colOne, colTwo, colThree, colFour, colFive} = props.state.cols

  let one = [`${colOne[0]}`, `${colOne[1]}`, `${colOne[2]}`, "three", "six", "eight", "seven", "three", "three", "seven", "eight", "one", "two", "eight", "six", "three", "two", "one", "four", "four", "one", "seven", "six", "four", "five", "three", "eight", "seven", "three", "one", `${colOne[0]}`, `${colOne[1]}`, `${colOne[2]}`],
      two = [`${colTwo[0]}`, `${colTwo[1]}`, `${colTwo[2]}`, "three", "six", "eight", "seven", "three", "three", "seven", "eight", "one", "two", "eight", "six", "three", "two", "one", "four", "four", "one", "seven", "six", "four", "five", "three", "eight", "seven", "three", "one", `${colTwo[0]}`, `${colTwo[1]}`, `${colTwo[2]}`],
      three = [`${colThree[0]}`, `${colThree[1]}`, `${colThree[2]}`, "three", "six", "eight", "seven", "three", "three", "seven", "eight", "one", "two", "eight", "six", "three", "two", "one", "four", "four", "one", "seven", "six", "four", "five", "three", "eight", "seven", "three", "one", `${colThree[0]}`, `${colThree[1]}`, `${colThree[2]}`],
      four = [`${colFour[0]}`, `${colFour[1]}`, `${colFour[2]}`, "three", "six", "eight", "seven", "three", "three", "seven", "eight", "one", "two", "eight", "six", "three", "two", "one", "four", "four", "one", "seven", "six", "four", "five", "three", "eight", "seven", "three", "one", `${colFour[0]}`, `${colFour[1]}`, `${colFour[2]}`],
      five = [`${colFive[0]}`, `${colFive[1]}`, `${colFive[2]}`, "three", "six", "eight", "seven", "three", "three", "seven", "eight", "one", "two", "eight", "six", "three", "two", "one", "four", "four", "one", "seven", "six", "four", "five", "three", "eight", "seven", "three", "one", `${colFive[0]}`, `${colFive[1]}`, `${colFive[2]}`]

  return <div className="wrapper">
    <div className="outer-col"><div className="col">{
      one.map((value, i) => {
        return <svg className="zombies" key={i}><use xlinkHref={`#zombie-${value}`}></use></svg>
      })
    }</div></div>
    <div className="outer-col"><div className="col">{
      two.map((value, i) => {
        return <svg className="zombies" key={i}><use xlinkHref={`#zombie-${value}`}></use></svg>
      })
    }</div></div>
    <div className="outer-col"><div className="col">{
      three.map((value, i) => {
        return <svg className="zombies" key={i}><use xlinkHref={`#zombie-${value}`}></use></svg>
      })
    }</div></div>
    <div className="outer-col"><div className="col">{
      four.map((value, i) => {
        return <svg className="zombies" key={i}><use xlinkHref={`#zombie-${value}`}></use></svg>
      })
    }</div></div>
    <div className="outer-col"><div className="col">{
      five.map((value, i) => {
        return <svg className="zombies" key={i}><use xlinkHref={`#zombie-${value}`}></use></svg>
      })
    }</div></div>
  </div>
}

export default Slots