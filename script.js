const gridContainer = document.querySelector('.grid-container')
const btnSize16 = document.querySelector('.btn-size-16')
const btnSize32 = document.querySelector('.btn-size-32')
const btnSize64 = document.querySelector('.btn-size-64')
const colorPicker = document.querySelector('#color')

const defaultColor = '#424242'
const defaultSize = 16

// Color from color picker
let currentColor = defaultColor
colorPicker.value = defaultColor

function createGrid(size, color) {
  clearGrid()
  createGridItems(size)
  setColor(color)
}

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild)
  }
}

function createGridItems(size) {
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridContainer.appendChild(gridItem)
  }
}

function setColor(color) {
  const gridItem = document.querySelectorAll('.grid-item')
  gridItem.forEach((item) =>
    item.addEventListener('mousedown', () => {
      item.style.setProperty('background-color', color)
    })
  )
}

// Default values for grid
function init() {
  createGrid(16, defaultColor)
  gridContainer.style.setProperty(
    'grid-template-columns',
    `repeat(${defaultSize}, 1fr)`
  )
}

/* --- Event listeners --- */
btnSize16.addEventListener('click', () => {
  createGrid(16, currentColor)
  gridContainer.style.setProperty('grid-template-columns', 'repeat(16, 1fr)')
})

btnSize32.addEventListener('click', () => {
  createGrid(32, currentColor)
  gridContainer.style.setProperty('grid-template-columns', 'repeat(32, 1fr)')
})

btnSize64.addEventListener('click', () => {
  createGrid(64, currentColor)
  gridContainer.style.setProperty('grid-template-columns', 'repeat(64, 1fr)')
})

colorPicker.addEventListener('input', (e) => {
  currentColor = e.target.value
  setColor(currentColor)
})

/* --- Initiate default values --- */
init()
