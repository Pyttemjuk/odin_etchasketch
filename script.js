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
  clearGrid()
  createGridItems()
  setColor()
}

function clearGrid() {
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

function colorItems(e, item) {
  // Prevent default behavior "grab"
  e.preventDefault()
  item.style.setProperty('background-color', currentColor)
}

function setColor() {
  const gridItem = document.querySelectorAll('.grid-item')
  gridItem.forEach((item) => {
    item.addEventListener('mousedown', (e) => {
      colorItems(e, item)
    })
    item.addEventListener('mouseenter', (e) => {
      if (mousedown) {
        colorItems(e, item)
      }
    })
  })
}

function colorChange(e) {
  currentColor = e.target.value
  setColor()
}

// Default values for grid
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
  btnGridSizeAll.forEach((btn) => btn.classList.remove('active'))
  btnSize16.classList.add('active')
  size = 16
  createGrid()
  gridContainer.style.setProperty(
    'grid-template-columns',
    `repeat(${size}, 1fr)`
  )
})

btnSize32.addEventListener('click', () => {
  btnGridSizeAll.forEach((btn) => btn.classList.remove('active'))
  btnSize32.classList.add('active')
  size = 32
  createGrid()
  gridContainer.style.setProperty(
    'grid-template-columns',
    `repeat(${size}, 1fr)`
  )
})

btnSize64.addEventListener('click', () => {
  btnGridSizeAll.forEach((btn) => btn.classList.remove('active'))
  btnSize64.classList.add('active')
  size = 64
  createGrid()
  gridContainer.style.setProperty(
    'grid-template-columns',
    `repeat(${size}, 1fr)`
  )
})

btnDraw.addEventListener('click', () => {
  btnGridOptions.forEach((btn) => btn.classList.remove('active'))
  btnDraw.classList.add('active')
})

btnErase.addEventListener('click', () => {
  btnGridOptions.forEach((btn) => btn.classList.remove('active'))
  btnErase.classList.add('active')
})

btnClear.addEventListener('click', () => {
  const gridItem = document.querySelectorAll('.grid-item')
  gridItem.forEach((item) =>
    item.style.setProperty('background-color', GRID_ITEM_COLOR)
  )
})

colorPicker.addEventListener('input', (e) => colorChange(e))
colorPicker.addEventListener('change', (e) => colorChange(e))

/* --- Initiate default values --- */
init()
