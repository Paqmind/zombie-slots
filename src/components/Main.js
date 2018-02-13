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
      winningIcons: [],
      spinning: false,
      btnDisabled: false,
      cols: [[], [], [], [], []]
    }
  }

  spin = () => {
    this.setState((prevState) => ({
      spinning: true,
      btnDisabled: true,
      totalCoins: prevState.totalCoins - 1
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
        winningIcons: winningParams.icons
      })
    }, 1500)

    setTimeout(() => {
      this.setState((prevState) => ({
        spinning: false,
        btnDisabled: false,
        totalCoins: prevState.totalCoins + winningParams.coins
      }))
    }, 3500)
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
    return <div className={`slots ${spinning ? "spinning" : null}`}>
      <Slots state={this.state}/>
      <OptionalBar spin={this.spin} state={this.state} />
    </div>
  }
}

export default Main