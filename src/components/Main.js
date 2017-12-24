import React, { Component } from 'react'
import '../styles/svg_styles.css'
import '../styles/styles.css'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let icons = ['one','two','three','four','five','six','seven','eight'],
        slots = document.querySelector('.slots'),
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

  spin = () => {
    let slots = document.querySelector('.slots'),
        cols = document.querySelectorAll('.col'),
        button = document.getElementById('input')

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

        let icons = col.querySelectorAll('.zombies use')
        for(let x = 0; x < 3; x++) {
          icons[x].setAttribute('xlink:href', '#zombie-'+results[x])
          icons[(icons.length-3)+x].setAttribute('xlink:href', '#zombie-'+results[x])
        }
      }
    }, 1500)

    setTimeout(() => {
      slots.classList.toggle('spinning', false)
      button.removeAttribute('disabled')
      document.querySelector('input').focus()
    }, 3500
    )
  }

  render() {
    return <div className="slots">
      <div className="window">
        <div className="outer-col"><div className="col"></div></div>
        <div className="outer-col"><div className="col"></div></div>
        <div className="outer-col"><div className="col"></div></div>
        <div className="outer-col"><div className="col"></div></div>
        <div className="outer-col"><div className="col"></div></div>
      </div>
      <input id="input" type="button" onClick={this.spin} value="spin" />
    </div>
  }
}

export default Main