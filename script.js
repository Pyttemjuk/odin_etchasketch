const gridContainer = document.querySelector('.grid-container')

function createGrid(size) {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild)
  }

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridContainer.appendChild(gridItem)
  }

  const gridItem = document.querySelectorAll('.grid-item')
  gridItem.forEach((item) =>
    item.addEventListener('mouseenter', () => {
      item.classList.add('colored')
      console.log(item)
    })
  )
}

const btnSize16 = document
  .querySelector('.btn-size-16')
  .addEventListener('click', () => {
    createGrid(16)
    gridContainer.style.setProperty('grid-template-columns', `repeat(16, 1fr)`)
  })

const btnSize32 = document
  .querySelector('.btn-size-32')
  .addEventListener('click', () => {
    createGrid(32)
    gridContainer.style.setProperty('grid-template-columns', `repeat(32, 1fr)`)
  })

const btnSize64 = document
  .querySelector('.btn-size-64')
  .addEventListener('click', () => {
    createGrid(64)
    gridContainer.style.setProperty('grid-template-columns', `repeat(64, 1fr)`)
  })

// createGrid(16)
