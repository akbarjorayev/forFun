import appData from './appData.js'

const { x: column, y: row } = appData.point.amount

function getAroundPoints(i) {
  const points = document.querySelectorAll('.point')
  const indexArr = [
    [i - column - 1, i - column, i - column + 1],
    [i - 1, i + 1],
    [i + column - 1, i + column, i + column + 1],
  ].flat(2)

  return indexArr.map((j) => (points[j] ? points[j] : false)).filter((i) => i)
}

export { getAroundPoints }
