import appData from './appData.js'
import * as HTML from './html/html.js'
import * as Point from './point.js'

document.addEventListener('DOMContentLoaded', () => {
  const pointArea = document.querySelector('.points_area')

  pointArea.innerHTML = HTML.pointArea()
})

window.onload = () => {
  const points = document.querySelectorAll('.point')

  for (let i = 0; i < points.length; i++) {
    points[i].onclick = () => {
      const aPoints = Point.getAroundPoints(i)
      console.log(aPoints)
    }
  }
}
