const gridContainer = document.querySelector('.grid-container');
const gridResizeBtn = document.querySelector('.resize-btn');

gridContainer.addEventListener('mouseover', changeSquareColor);
gridResizeBtn.addEventListener('click', changeGridSize);

function createGridSquares(columns, rows) {
  for (let i = 0; i < columns; i++) {
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('column');

    for (let j = 0; j < rows; j++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      columnDiv.appendChild(rowDiv);
      gridContainer.appendChild(columnDiv);
    }
  }
}

function changeSquareColor(e) {
  const target = e.target;
  const COLOR_BLACK = 'rgb(0,0,0)';

  target.style.backgroundColor = COLOR_BLACK;
}

function changeGridSize() {
  const input = prompt('How many squares per side? (max 100)', 16);
  const gridSize = Number(input);

  if (gridSize <= 0 || gridSize > 100 || isNaN(gridSize)) {
    alert('Please enter a number from 1 to 100');
    return;
  }
    
  gridContainer.replaceChildren();
  createGridSquares(gridSize, gridSize);
}

createGridSquares(16, 16);