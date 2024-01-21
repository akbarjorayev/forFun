import * as Random from './random.js'
import appData from './appData.js'
import * as HTML from './html.js'

let range = {
  pos: {
    x: 0,
    y: 0,
  },
  value: 1,
}

window.onmousedown = window.ontouchstart = (e) => {
  appData.show = true
  handleMoveEvent(e)
}

window.onmouseup = window.ontouchend = () => {
  appData.show = false
  appData.starBgColor = Random.number(0, 357)
}

window.oncontextmenu = (e) => {
  e.preventDefault()
}

window.onmousemove = window.ontouchmove = handleMoveEvent

function handleMoveEvent(e) {
  if (!appData.show || (!isInWindow(e) && !e.touches)) return

  const touches = e.touches || [e]
  for (const touch of touches) {
    const cX = touch.clientX + window.scrollX
    const cY = touch.clientY + window.scrollY

    if (range.value) {
      var way =
        Math.sqrt(
          Math.pow(range.pos.x - cX, 2) + Math.pow(range.pos.y - cY, 2)
        ) + 0.1
      range.value = way
    }
    range.pos.x = cX
    range.pos.y = cY

    if (way >= appData.starRange) {
      const star = HTML.add(HTML.star(), document.body)

      star.style.left = `${cX}px`
      star.style.top = `${cY}px`

      star.style.background = `${Random.color()}`
      star.ontransitionend = () => {
        star.remove()
      }
    }
  }
}

const bWidth = document.body.clientWidth
const bHeight = document.body.clientHeight

function isInWindow(e) {
  const x = 0 <= e.x && e.x <= bWidth
  const y = 0 <= e.y && e.y <= bHeight

  return true
  return x && y
}
