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
    let result = this.state.cols
    let firstLine = [result[0][0], result[1][0], result[2][0], result[3][0], result[4][0]]
    let secondLine = [result[0][1], result[1][1], result[2][1], result[3][1], result[4][1]]
    let thirdLine = [result[0][2], result[1][2], result[2][2], result[3][2], result[4][2]]
    winningLogic(firstLine, secondLine, thirdLine)
    this.setState({coins: this.state.coins + winningCoins})
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

    setTimeout(() => this.winningCombs(), 2000)

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