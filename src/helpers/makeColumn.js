import pickRandom from './pickRandom'
const R = require('ramda')

const makeColumn = (icons, colLength) => {
  return R.range(0, colLength).map(() => pickRandom(icons))
}

export default makeColumn