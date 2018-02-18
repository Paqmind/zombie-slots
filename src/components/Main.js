import React, { Component } from 'react'
import OptionalBar from './OptionalBar'
import winningDeterminant from '../helpers/winningDeterminant'
import Slots from './slots/Slots'
import setCol from '../helpers/setCol'
import '../styles/svg_styles.css'
import '../styles/styles.css'

class Main extends Component {
  constructor(props) {
    super(props)
    this.icons = ['one','two','three','four','five','six','seven','eight']
    this.colLength = 3
    this.state = {
      bet: 1,
      totalCoins: 100,
      winningCoins: 0,
      winningIcons: [],
      isCoinsCounterOpen: false,
      spinning: false,
      btnDisabled: false,
      cols: [[], [], [], [], []]
    }
  }

  spin = () => {
    this.setState((prevState) => ({
      spinning: true,
      btnDisabled: true,
      totalCoins: prevState.totalCoins - 1,
      isCoinsCounterOpen: false,
      winningCoins: 0
    }))

    let cols = [
      setCol(this.icons, this.colLength),
      setCol(this.icons, this.colLength),
      setCol(this.icons, this.colLength),
      setCol(this.icons, this.colLength),
      setCol(this.icons, this.colLength)
    ],
      winningParams = winningDeterminant(cols)

    setTimeout(() => {
      this.setState({
        cols,
        winningIcons: winningParams.icons,
        currentWinQuantity: winningParams.coins
      })
    }, 1500)

    setTimeout(() => {
      this.countCoins(winningParams.coins)
      this.setState((prevState) => ({
        spinning: false,
        btnDisabled: false
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
        setCol(this.icons, this.colLength),
        setCol(this.icons, this.colLength),
        setCol(this.icons, this.colLength),
        setCol(this.icons, this.colLength),
        setCol(this.icons, this.colLength)
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