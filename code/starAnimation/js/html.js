import * as Random from './random.js'

const classArr = ['x_rotate', 'y_rotate', 'z_rotate', '']

function star() {
  const div = document.createElement('div')
  const rClass = Random.itemOfArray(classArr)

  div.classList.add(`${rClass}`, 'star')
  return div
}

function add(el, pEl) {
  pEl.appendChild(el)
  return el
}

export { star, add }
