let classNames = require('classnames')
let icon = 0

const svgClassNames = (icons) => {
  icon >= 165 ? icon = 0 : null
  icon++
  return classNames({
    "zombies": true,
    "winning-animation": icons.includes(icon)
  })
}

export default svgClassNames