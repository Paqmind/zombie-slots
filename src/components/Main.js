import React, { Component } from 'react'
import OptionalBar from './OptionalBar'
import winningLogic from './WinningLogic'
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
      cols: [[], [], [], [], []],
      bet: 1,
      coins: 100,
      winningIcons: [],
      spinning: false,
      btnDisabled: false
    }
  }

  spin = () => {
    this.setState({
      spinning: true,
      btnDisabled: true
    })

    let cols = [
      setCol(this.icons, this.colLength),
      setCol(this.icons, this.colLength),
      setCol(this.icons, this.colLength),
      setCol(this.icons, this.colLength),
      setCol(this.icons, this.colLength)
    ]
    let winningParams = winningLogic(cols)

    setTimeout(() => {
        this.setState({
          cols,
          winningIcons: winningParams.icons
        })
    }, 1500)

    setTimeout(() => {
      this.setState({
        spinning: false,
        btnDisabled: false
      })
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
      <OptionalBar spin={this.spin} bet={this.state.bet} coins={this.state.coins}/>
    </div>
  }
}

export default Main