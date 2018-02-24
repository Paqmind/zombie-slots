import React, { Component } from 'react'
import OptionalBar from './OptionalBar'
import winningDeterminant from '../helpers/winningDeterminant'
import Slots from './slots/Slots'
import makeColumn from '../helpers/makeColumn'
import '../styles/svg_styles.css'
import '../styles/styles.css'

class Main extends Component {
  constructor(props) {
    super(props)
    this.icons = ['one','two','three','four','five','six','seven','eight']
    this.colLength = 3
    this.state = {
      bet: 1,                       // current bet value
      totalCoins: 100,              // total number of coins per game
      winningCoins: 0,              // the number of current winning coins
      winningIcons: [],             // array of current winning icons
      isCoinsCounterOpen: false,    // show or hide coins counter after coins winning
      spinning: false,              // start/stop spin the icons
      cols: [[], [], [], [], []]    // array of icons that are displayed on the screen
    }
  }

  spin = () => {
    this.setState((prevState) => ({
      spinning: true,
      totalCoins: prevState.totalCoins - prevState.bet,
      isCoinsCounterOpen: false,
      winningCoins: 0
    }))

    let cols = [                                // randomly generate new icons
      makeColumn(this.icons, this.colLength),       // which will be displayed next
      makeColumn(this.icons, this.colLength),
      makeColumn(this.icons, this.colLength),
      makeColumn(this.icons, this.colLength),
      makeColumn(this.icons, this.colLength)
    ],
      winningParams = winningDeterminant(cols)  // check new icons position for winning combs

    setTimeout(() => {
      this.setState({
        cols,
        winningIcons: winningParams.icons       // display new icons on the screen
      })
    }, 1500)

    setTimeout(() => {
      this.countCoins(winningParams.coins)
      this.setState((prevState) => ({
        spinning: false
      }))
    }, 3500)
  }

  countCoins = (currentWinQuantity) => {
    if (currentWinQuantity == 0) return

    this.setState({isCoinsCounterOpen: true})
    let interval = setInterval(() => {
      this.setState((prevState) => ({
        winningCoins: prevState.winningCoins + 1,
        totalCoins: prevState.totalCoins + 1
      }))
      this.state.winningCoins >= currentWinQuantity ? clearInterval(interval) : null
    }, 60)
  }

  componentWillMount() {
    this.setState({
      cols: [
        makeColumn(this.icons, this.colLength),
        makeColumn(this.icons, this.colLength),
        makeColumn(this.icons, this.colLength),
        makeColumn(this.icons, this.colLength),
        makeColumn(this.icons, this.colLength)
      ]
    })
  }

  render() {
    const { spinning } = this.state
    return <div className="container">
      <div className="header">Zombie Reels</div>
      <div className={`slots ${spinning ? "spinning" : null}`}>
        <Slots state={this.state}/>
        <OptionalBar spin={this.spin} state={this.state} />
      </div>
    </div>
  }
}

export default Main