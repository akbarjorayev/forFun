import appData from '../appData.js'
import * as GetHTML from './getHTML.js'

const { x: column, y: row } = appData.point.amount

function pointArea() {
  const columnHTML = GetHTML.pointColumn(column)
  return GetHTML.pointRow(row, columnHTML)
}

export { pointArea }
