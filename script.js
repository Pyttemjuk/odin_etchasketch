const gridContainer = document.querySelector('.grid-container')
const btnSize16 = document.querySelector('.btn-size-16')
const btnSize32 = document.querySelector('.btn-size-32')
const btnSize64 = document.querySelector('.btn-size-64')
const btnEraser = document.querySelector('.btn-eraser')
const btnClear = document.querySelector('.btn-clear')
const colorPicker = document.querySelector('#color')

const DEFAULT_COLOR = '#424242'
const DEFAULT_SIZE = 16
const ERASER_COLOR = '#dcdcdc'

// Size of grid
let size
// Color from color picker
let currentColor
// Eraser on
let erase = false

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
    gridContainer.appendChild(gridItem)
  }
}

function setColor() {
  const gridItem = document.querySelectorAll('.grid-item')
  gridItem.forEach((item) =>
    item.addEventListener('mouseenter', () => {
      item.style.setProperty('background-color', currentColor)
    })
  )
}

// Default values for grid
function init() {
  size = DEFAULT_SIZE
  currentColor = DEFAULT_COLOR
  colorPicker.value = DEFAULT_COLOR
  createGrid()
  gridContainer.style.setProperty(
    'grid-template-columns',
    `repeat(${DEFAULT_SIZE}, 1fr)`
  )
}

/* --- Event listeners --- */
btnSize16.addEventListener('click', () => {
  size = 16
  createGrid()
  gridContainer.style.setProperty(
    'grid-template-columns',
    `repeat(${size}, 1fr)`
  )
})

btnSize32.addEventListener('click', () => {
  size = 32
  createGrid()
  gridContainer.style.setProperty(
    'grid-template-columns',
    `repeat(${size}, 1fr)`
  )
})

btnSize64.addEventListener('click', () => {
  size = 64
  createGrid()
  gridContainer.style.setProperty(
    'grid-template-columns',
    `repeat(${size}, 1fr)`
  )
})

btnEraser.addEventListener('click', () => {
  erase ? (erase = false) : (erase = true)

  if (erase) {
    currentColor = ERASER_COLOR
    btnEraser.textContent = 'Draw'
  } else {
    currentColor = colorPicker.value
    btnEraser.textContent = 'Erase'
  }

  setColor()
})

btnClear.addEventListener('click', () => {
  clearGrid()
  createGrid()
})

colorPicker.addEventListener('input', (e) => {
  currentColor = e.target.value
  setColor()
})

/* --- Initiate default values --- */
init()
