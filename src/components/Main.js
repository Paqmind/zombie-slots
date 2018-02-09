import React, { Component } from 'react'
import OptionalBar from './OptionalBar'
import {winningLogic} from './WinningLogic'
import Slots from './slots/Slots'
import setCol from '../helpers/setCol'
import {winningCoins} from './WinningLogic'
import '../styles/svg_styles.css'
import '../styles/styles.css'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cols: [[], [], [], [], []],
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
    let icons = ['one','two','three','four','five','six','seven','eight'],
        colLength = 3
    let slots = document.querySelector('.slots'),
      button = document.getElementById('input')

    button.setAttribute('disabled', true)
    slots.classList.toggle('spinning', true)

    setTimeout(() => {
        this.setState({
          cols: [
            setCol(icons, colLength),
            setCol(icons, colLength),
            setCol(icons, colLength),
            setCol(icons, colLength),
            setCol(icons, colLength)
          ]
        })
    }, 1500)

    setTimeout(() => {
        slots.classList.toggle('spinning', false)
        button.removeAttribute('disabled')
        document.querySelector('input').focus()
      }, 3500
    )
  }

  componentWillMount() {
    let icons = ['one','two','three','four','five','six','seven','eight'],
        colLength = 3
    this.setState({
      cols: [
        setCol(icons, colLength),
        setCol(icons, colLength),
        setCol(icons, colLength),
        setCol(icons, colLength),
        setCol(icons, colLength)
      ]
    })
  }

  render() {
    return <div className="slots">
      <Slots state={this.state}/>
      <OptionalBar spin={this.spin} bet={this.state.bet} coins={this.state.coins}/>
    </div>
  }
}

export default Main