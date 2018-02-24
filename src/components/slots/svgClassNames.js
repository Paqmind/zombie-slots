let classNames = require('classnames')
let icon = 0

const svgClassNames = (icons) => {
  if (icon % 165 == 0) icon = 0
  icon++

  return classNames({
    "zombies": true,
    "winning-animation": icons.includes(icon)
  })
}

export default svgClassNames