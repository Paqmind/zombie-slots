const setCol = (icons, colLength) => {
  let col = []
  for (let i = 0; i < colLength; i++) {
    col.push(icons[Math.floor(Math.random()*icons.length)])
  }
  return col
}

export default setCol