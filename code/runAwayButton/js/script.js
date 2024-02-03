const btn = document.querySelector('button')

const { width: btnW, height: btnH } = getDataOfElement(btn)
const { innerWidth: wWidth, innerHeight: wHeight } = window

window.onmousemove = window.ontouchmove = (e) => moveBtn(e)

window.addEventListener('DOMContentLoaded', () => {
  btn.style.left = `${wWidth / 2 - btn.offsetWidth / 2}px`
  btn.style.top = `${wHeight / 2 - btn.offsetHeight / 2}px`
})

function moveBtn(e) {
  const { x, y } = getDataOfElement(btn)
  const touch = e.touches ? e.touches[0] : e

  const cursorPos = { x: touch.clientX, y: touch.clientY }
  const btnPos = {
    x: x + btnW / 2,
    y: y + btnH / 2,
  }

  if (distance(cursorPos, btnPos) < 100) {
    const dx = touch.clientX - (x + btnW / 2)
    const dy = touch.clientY - (y + btnH / 2)
    let newX = x - dx
    let newY = y - dy

    const windowWidth = wWidth - btnW
    const windowHeight = wHeight - btnH

    newX = Math.min(Math.max(newX, 0), windowWidth)
    newY = Math.min(Math.max(newY, 0), windowHeight)

    btn.style.left = `${newX}px`
    btn.style.top = `${newY}px`
  }
}

function getDataOfElement(el) {
  const rect = el.getBoundingClientRect()

  return {
    x: rect.x,
    y: rect.y,
    width: el.clientWidth,
    height: el.clientHeight,
  }
}

function distance(pos1, pos2) {
  return Math.sqrt((pos2.x - pos1.x) ** 2 + (pos2.y - pos1.y) ** 2)
}
