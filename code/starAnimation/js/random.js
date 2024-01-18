import appData from './appData.js'

function color() {
  const c1 = number(50, 100)
  const c2 = number(30, 50)

  return `hsl(${appData.starBgColor}, ${c1}%, ${c2}%)`
}

function itemOfArray(arr) {
  const i = number(0, arr.length - 1)

  return arr[i]
}

function number(min, max) {
  return Math.floor(Math.random() * max + min)
}

export { color, number, itemOfArray }
