import React, { Component } from 'react'
import OptionalBar from './OptionalBar'
import {winningLogic} from './WinningLogic'
import {winningCoins} from './WinningLogic'
import '../styles/svg_styles.css'
import '../styles/styles.css'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bet: 1,
      coins: 100,
      result: []
    }
  }

  winningCombs = () => {
    let result = this.state.result
    let firstLine = [result[0], result[3], result[6], result[9], result[12]]
    let secondLine = [result[1], result[4], result[7], result[10], result[13]]
    let thirdLine = [result[2], result[5], result[8], result[11], result[14]]
    winningLogic(firstLine, secondLine, thirdLine)
    this.setState({coins: this.state.coins + winningCoins})
    console.log(winningCoins)
  }

  spin = () => {
    let slots = document.querySelector('.slots'),
      cols = document.querySelectorAll('.col'),
      button = document.getElementById('input')

    this.setState({coins: this.state.coins - 1})
    this.setState({result: []})

    button.setAttribute('disabled', true)
    slots.classList.toggle('spinning', true)

    setTimeout(() => {
      for (let i in cols) {
        if (!cols.hasOwnProperty(i)) continue

        let col = cols[i]

        let iconsNames = ['one','two','three','four','five','six','seven','eight']

        let results = [
          iconsNames[Math.floor(Math.random()*iconsNames.length)],
          iconsNames[Math.floor(Math.random()*iconsNames.length)],
          iconsNames[Math.floor(Math.random()*iconsNames.length)]
        ]

        this.setState({result: this.state.result.concat(results)})


        let icons = col.querySelectorAll('.zombies use')
        for(let x = 0; x < 3; x++) {
          icons[x].setAttribute('xlink:href', '#zombie-'+results[x])
          icons[(icons.length-3)+x].setAttribute('xlink:href', '#zombie-'+results[x])
        }
      }
    }, 1500)

    setTimeout(() => this.winningCombs(), 2000)

    setTimeout(() => {
        slots.classList.toggle('spinning', false)
        button.removeAttribute('disabled')
        document.querySelector('input').focus()
      }, 3500
    )
  }

  componentDidMount() {
    let icons = ['one','two','three','four','five','six','seven','eight'],
        cols = document.querySelectorAll('.col')

    for(let i in cols) {
      if (!cols.hasOwnProperty(i)) continue
      let col = cols[i],
          str = '',
          firstThree = ''

      for(let x = 0; x < 30; x++) {
        let part = '<svg class="zombies"><use xlink:href="#zombie-'+icons[Math.floor(Math.random()*icons.length)]+'"></use></svg>'
        str += part
        if (x < 3) firstThree += part
      }
      col.innerHTML = str+firstThree
    }
    document.querySelector('input').focus()
  }

  render() {
    return <div className="slots">
      <div className="wrapper">
        <div className="outer-col"><div className="col"></div></div>
        <div className="outer-col"><div className="col"></div></div>
        <div className="outer-col"><div className="col"></div></div>
        <div className="outer-col"><div className="col"></div></div>
        <div className="outer-col"><div className="col"></div></div>
      </div>
      <OptionalBar spin={this.spin} bet={this.state.bet} coins={this.state.coins}/>
    </div>
  }
}

export default Main