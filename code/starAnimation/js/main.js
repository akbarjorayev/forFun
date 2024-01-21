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
    if (range.value) {
      var way =
        Math.sqrt(
          Math.pow(range.pos.x - touch.clientX, 2) +
            Math.pow(range.pos.y - touch.clientY, 2)
        ) + .1
      range.value = way
    }
    range.pos.x = touch.clientX
    range.pos.y = touch.clientY

    if (way >= appData.starRange) {
      const star = HTML.add(HTML.star(), document.body)

      star.style.left = `${touch.clientX}px`
      star.style.top = `${touch.clientY}px`

      star.style.background = `${Random.color()}`
      setTimeout(() => star.remove(), appData.starRemoveTime)
    }
  }
}

const bWidth = document.body.clientWidth
const bHeight = document.body.clientHeight

function isInWindow(e) {
  const x = 0 <= e.x && e.x <= bWidth
  const y = 0 <= e.y && e.y <= bHeight

  return x && y
}
