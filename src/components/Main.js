import React, { Component } from 'react'
import '../styles/styles.css'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let icons = [
      'apple','bananas','cherry','grapes','orange','pineapple','strawberry','watermelon'
    ];

    let slots = document.querySelector('.slots');
    let cols = document.querySelectorAll('.col');
    for(let i in cols) {
      if (!cols.hasOwnProperty(i))
        continue;
      let col = cols[i];
      let str = '';
      let firstThree = '';
      for(let x = 0; x < 30; x++) {
        let part = '<svg class="icon"><use xlink:href="#icon-'+icons[Math.floor(Math.random()*icons.length)]+'"></use></svg>';
        str += part
        if (x < 3) firstThree += part;
      }
      col.innerHTML = str+firstThree;
    }

    document.querySelector('input').focus();
  }

  spin = () => {
    let slots = document.querySelector('.slots')
    let cols = document.querySelectorAll('.col')
    let button = document.getElementById('input')
    button.setAttribute('disabled', true)

    slots.classList.toggle('spinning', true)

    setTimeout(function () {
      for (let i in cols) {
        if (!cols.hasOwnProperty(i)) continue
        let col = cols[i]

        let iconsNames = [
          'apple','bananas','cherry','grapes','orange','pineapple','strawberry','watermelon'
        ]

        let results = [
          iconsNames[Math.floor(Math.random()*iconsNames.length)],
          iconsNames[Math.floor(Math.random()*iconsNames.length)],
          iconsNames[Math.floor(Math.random()*iconsNames.length)]
        ]

        let icons = col.querySelectorAll('.icon use');
        for(let x = 0; x < 3; x++) {
          icons[x].setAttribute('xlink:href', '#icon-'+results[x]);
          icons[(icons.length-3)+x].setAttribute('xlink:href', '#icon-'+results[x]);
        }
      }
    }, 1500)

    setTimeout(function () {
      slots.classList.toggle('spinning', false)
      button.removeAttribute('disabled')
    }, 3500
    )
  }

  render() {
    return (
    <div className="slots">
      <div className="window">
        <div className="outer-col">
          <div className="col"></div>
        </div>
        <div className="outer-col">
          <div className="col"></div>
        </div>
        <div className="outer-col">
          <div className="col"></div>
        </div>
        <div className="outer-col">
          <div className="col"></div>
        </div>
        <div className="outer-col">
          <div className="col"></div>
        </div>
      </div>
      <input id="input" type="button" onClick={this.spin} value="spin" />
    </div>
    )
  }
}

export default Main