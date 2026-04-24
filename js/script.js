const gridContainer = document.querySelector('.grid-container');
const gridResizeBtn = document.querySelector('.resize-btn');
const btnContainer = document.querySelector('.btn-container');
let currentColor = 'black';

gridContainer.addEventListener('mouseover', changeSquareColor);
gridResizeBtn.addEventListener('click', changeGridSize);
btnContainer.addEventListener('click', changeCurrentColor);

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

function changeCurrentColor(e) {
  const color = e.target.dataset.color;
  if (!color) return;
  currentColor = color;
}

function getCurrentColor() {
  if (currentColor === 'black'){
    const COLOR_BLACK = 'rgb(51,51,51)';
    return COLOR_BLACK;
  } else if (currentColor === 'rainbow') {
    return getRandomColor();
  }
}

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
  if (!target.classList.contains('row')) return;
  target.style.backgroundColor = getCurrentColor();
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