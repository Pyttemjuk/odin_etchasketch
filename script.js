const gridContainer = document.querySelector('.grid-container')
const btnSize16 = document.querySelector('.btn-size-16')
const btnSize32 = document.querySelector('.btn-size-32')
const btnSize64 = document.querySelector('.btn-size-64')
const btnGridSizeAll = document.querySelectorAll('.btn-grid-sizes')
const btnDraw = document.querySelector('.btn-draw')
const btnErase = document.querySelector('.btn-erase')
const btnClear = document.querySelector('.btn-clear')
const btnGridOptions = document.querySelectorAll('.btn-grid-options')
const colorPicker = document.querySelector('#color-picker')

const GRID_ITEM_COLOR = '#dcdcdc'
const DEFAULT_DRAW_COLOR = '#5DD089'
const DEFAULT_SIZE = 16

// Size of grid
let size
// Color from color picker
let currentColor
// Color items if true
let mousedown = false

function createGrid() {
  removeGrid()
  createGridItems()
  setColor()
}

function removeGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild)
  }
}

function createGridItems() {
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridItem.style.setProperty('background-color', GRID_ITEM_COLOR)
    gridContainer.appendChild(gridItem)
  }
}

function changeSize(newSize) {
  btnGridSizeAll.forEach((btn) => btn.classList.remove('active'))
  size = newSize
  createGrid()
  gridContainer.style.setProperty(
    'grid-template-columns',
    `repeat(${size}, 1fr)`
  )
}

function setDrawActive() {
  btnGridOptions.forEach((btn) => btn.classList.remove('active'))
  btnDraw.classList.add('active')
  currentColor = colorPicker.value
  setColor()
}

function setEraseActive() {
  btnGridOptions.forEach((btn) => btn.classList.remove('active'))
  btnErase.classList.add('active')
  currentColor = GRID_ITEM_COLOR
  setColor()
}

function itemColor(e, item) {
  // Prevent default behavior "grab"
  e.preventDefault()
  item.style.setProperty('background-color', currentColor)
}

function setColor() {
  const gridItem = document.querySelectorAll('.grid-item')
  gridItem.forEach((item) => {
    item.addEventListener('mousedown', (e) => {
      itemColor(e, item)
    })
    item.addEventListener('mouseenter', (e) => {
      if (mousedown) {
        itemColor(e, item)
      }
    })
  })
}

function colorChange(e) {
  setDrawActive()
  currentColor = e.target.value
  setColor()
}

/* --- Default values for grid --- */
function init() {
  size = DEFAULT_SIZE
  currentColor = DEFAULT_DRAW_COLOR
  colorPicker.value = DEFAULT_DRAW_COLOR
  btnSize16.classList.add('active')
  btnDraw.classList.add('active')
  createGrid()
  gridContainer.style.setProperty(
    'grid-template-columns',
    `repeat(${DEFAULT_SIZE}, 1fr)`
  )
}

/* --- Event listeners --- */

document.addEventListener('mousedown', () => (mousedown = true))
document.addEventListener('mouseup', () => (mousedown = false))

btnSize16.addEventListener('click', () => {
  changeSize(16)
  btnSize16.classList.add('active')
})

btnSize32.addEventListener('click', () => {
  changeSize(32)
  btnSize32.classList.add('active')
})

btnSize64.addEventListener('click', () => {
  changeSize(64)
  btnSize64.classList.add('active')
})

btnDraw.addEventListener('click', () => {
  setDrawActive()
})

btnErase.addEventListener('click', () => {
  setEraseActive()
})

btnClear.addEventListener('click', () => {
  setDrawActive()
  const gridItem = document.querySelectorAll('.grid-item')
  gridItem.forEach((item) =>
    item.style.setProperty('background-color', GRID_ITEM_COLOR)
  )
})

colorPicker.addEventListener('input', (e) => colorChange(e))
colorPicker.addEventListener('change', (e) => colorChange(e))

/* --- Initiate default values --- */
init()
