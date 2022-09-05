const gridContainer = document.querySelector('.grid-container')

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div')

    gridContainer.appendChild(div)
  }
}

createGrid()
