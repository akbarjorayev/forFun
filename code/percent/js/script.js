const appData = {
  html: [
    {
      menu: 'a sonning p% i',
      labels: ['Nechini', 'Nechi foizi'],
      callBack: pOfNum,
    },
    {
      menu: 'p% i a ga teng son',
      labels: ['Nechi % i', 'Nechiga teng'],
      callBack: numOfP,
    },
    {
      menu: 'a va b sonlar nisbati',
      labels: ['1-son', '2-son'],
      callBack: ratioOfNums,
    },
  ],
}
let activeIndex = 0

document.addEventListener('DOMContentLoaded', () => {
  writeHTML(appData.html)
})

const resField = document.querySelector('.result_field')
const inputs = document.querySelectorAll('input')

window.addEventListener('load', () => {
  const menuItems = document.querySelectorAll('.menu_field > div')
  menuItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      hideMenu()
      resField.parentElement.classList.add('hide')
      inputs.forEach((input) => (input.value = ''))

      labelsHTML(appData.html[i])
      activeIndex = i
    })
  })
})

const fNum = document.querySelector('.f_num')
const sNum = document.querySelector('.s_num')
const resNum = document.querySelector('.result')

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    const val1 = +inputs[0].value
    const val2 = +inputs[1].value

    const resVal = appData.html[activeIndex].callBack(val1, val2)
    writeResult(resVal)
  })
})

const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu_btn')
const menuBg = document.querySelector('.menu_bg')

menuBtn.addEventListener('click', () => showMenu())

menu.addEventListener('click', () => hideMenu())
menuBg.addEventListener('click', () => hideMenu())

function showMenu() {
  menu.classList.remove('hide')
  menuBg.classList.remove('hide')
}

function hideMenu() {
  menu.classList.add('hide')
  menuBg.classList.add('hide')
}

function pOfNum(num, p) {
  const res = num && p ? (num / 100) * p : 0
  return +res.toFixed(2)
}

function numOfP(p, num) {
  const res = num && p ? (num * 100) / p : 0
  return +res.toFixed(2)
}

function ratioOfNums(num1, num2) {
  const res = num1 && num2 ? (num1 / num2) * 100 : 0
  return +res.toFixed(2)
}

const menuArea = document.querySelector('.menu_field')
function writeHTML(data) {
  for (let i = 0; i < data.length; i++) {
    const menuItem = menuItemHTML(data[i].menu)
    menuArea.insertAdjacentHTML('beforeend', menuItem)
  }

  labelsHTML(data[0])
}

function menuItemHTML(txt) {
  return `<div class="con_field">${txt}</div>`
}

function labelsHTML(data) {
  const labels = document.querySelectorAll('.input_label')
  for (let i = 0; i < labels.length; i++) {
    labels[i].textContent = data.labels[i]
  }
}

function writeResult(res) {
  if (!res) return resField.parentElement.classList.add('hide')

  resField.parentElement.classList.remove('hide')
  resField.textContent = res
}

// result_field
