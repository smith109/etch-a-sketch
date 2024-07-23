const gridContainer = document.querySelector('.grid-container');
const resizeGridBtn = document.querySelector('.resize-btn');

gridContainer.addEventListener('mouseover', changeSquareColor);
resizeGridBtn.addEventListener('click', changeGridSize);

function createGrid(columns, rows) {
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

function changeSquareColor(event) {
  const target = event.target;
  if (target.classList.contains('row')) {
    changeBackgroundColor(target, '#333333');
  }
}

function changeGridSize() {
  const input = prompt('Enter the number of squares per side (max 100)', 16);
  if (!input) return;

  const gridSize = Number(input);

  if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
    alert('Please enter a number from 1 to 100');
    return;
  }

  gridContainer.replaceChildren();
  createGrid(gridSize, gridSize);
}

function generateRandomColor() {
  const HEX_VALUES = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += HEX_VALUES[Math.floor(Math.random() * 16)];
  }

  return color;
}

function changeBackgroundColor(target, color) {
  target.style.backgroundColor = color;
}

function changeOpacity(target) {
  target.style.backgroundColor = '#333333';
  const currentOpacity = target.style.opacity;
  if (currentOpacity > 1) return;
  target.style.opacity = Number(currentOpacity) + 0.1;
}

createGrid(16, 16);