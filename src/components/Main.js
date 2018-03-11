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
    this.maxBet = 10
    this.minBet = 1
    this.state = {
      bet: 1,                       // current bet value
      totalCoins: 100,              // total number of coins per game
      winningCoins: 0,              // the number of current winning coins
      winningIcons: [],             // array of current winning icons
      isCoinsCounterOpen: false,    // show or hide coins counter after coins winning
      spinning: false,              // start/stop spin the icons
      btnDisabled: false,           // enable/desable spin button
      decreaseArrowPressed: false,  // helper for arrow pressing animation
      increaseArrowPressed: false,  // helper for arrow pressing animation
      cols: [[], [], [], [], []]    // array of icons that are displayed on the screen
    }
  }

  spin = () => {
    let {totalCoins, bet, cols} = this.state
    this.setState({
      spinning: totalCoins >= bet,
      btnDisabled: totalCoins >= bet,
      totalCoins: totalCoins >= bet ? totalCoins - bet : this.onCoinsOver(),
      isCoinsCounterOpen: false,
      winningCoins: 0
    })

    let newCols = [
      makeColumn(this.icons, this.colLength),
      makeColumn(this.icons, this.colLength),
      makeColumn(this.icons, this.colLength),
      makeColumn(this.icons, this.colLength),
      makeColumn(this.icons, this.colLength)
    ],
      winningParams = totalCoins >= bet ? winningDeterminant(newCols) : null

    setTimeout(() => {
      this.setState({
        cols: totalCoins >= bet ? newCols : cols,
        winningIcons: winningParams.icons
      })
    }, 1500)

    setTimeout(() => {
      this.countCoins(winningParams.coins)
      this.setState({
        spinning: false,
        btnDisabled: false
      })
    }, 3500)
  }

  decreaseBet = () => {
    this.state.bet <= this.minBet
      ? this.setState({bet: 10, decreaseArrowPressed: true})
      : this.setState({bet: this.state.bet - 1, decreaseArrowPressed: true})
    setTimeout(() => {
      this.setState({decreaseArrowPressed: false})
    }, 100)
  }

  increaseBet = () => {
    this.state.bet >= this.maxBet
      ? this.setState({bet: 1, increaseArrowPressed: true})
      : this.setState({bet: this.state.bet + 1, increaseArrowPressed: true})
    setTimeout(() => {
      this.setState({increaseArrowPressed: false})
    }, 100)
  }

  countCoins = (currentWinQuantity) => {
    if (!currentWinQuantity) return

    this.setState({isCoinsCounterOpen: true})
    let interval = setInterval(() => {
      this.setState({
        winningCoins: this.state.winningCoins + 1,
        totalCoins: this.state.totalCoins + 1
      })

    if (this.state.winningCoins >= currentWinQuantity)
      clearInterval(interval)

    }, 60)
  }

  onCoinsOver = () => {
    let {totalCoins} = this.state
    alert("coins over")
    return totalCoins
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
        <OptionalBar spin={this.spin}
                     state={this.state}
                     increase={this.increaseBet}
                     decrease={this.decreaseBet}
        />
      </div>
    </div>
  }
}

export default Main