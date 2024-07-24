const gridContainer = document.querySelector('.grid-container');
const resizeGridBtn = document.querySelector('.resize-btn');
const btnContainer = document.querySelector('.btn-container');
let penColor = 'black';

gridContainer.addEventListener('mouseover', changeSquareColor);
resizeGridBtn.addEventListener('click', changeGridSize);
btnContainer.addEventListener('click', changePenColor);

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
  if (!target.classList.contains('row')) return;

  switch (penColor) {
    case 'black':
      changeBackgroundColor(target, '#333333');
      break;
    case 'rainbow':
      changeBackgroundColor(target, generateRandomColor());
      break;
    case 'shader':
      changeOpacity(target);
      break;
    case 'white':
      changeBackgroundColor(target, '#f7f5f5');
      break;
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
  target.style.opacity = '';
  target.style.backgroundColor = color;
}

function changeOpacity(target) {
  target.style.backgroundColor = '#333333';
  const currentOpacity = target.style.opacity;
  if (currentOpacity > 1) return;
  target.style.opacity = Number(currentOpacity) + 0.1;
}

function changePenColor(event) {
  const target = event.target;
  if (target.tagName !== 'BUTTON') return;
  toggleActiveClass(target);

  if (target.classList.contains('black-btn')) {
    penColor = 'black';
  }
  if (target.classList.contains('rainbow-btn')) {
    penColor = 'rainbow';
  }
  if (target.classList.contains('shader-btn')) {
    penColor = 'shader';
  }
  if (target.classList.contains('eraser-btn')) {
    penColor = 'white';
  }
}

function toggleActiveClass(target) {
  const activeElement = document.querySelector('.active');
  activeElement.classList.remove('active');
  target.classList.add('active');
}

createGrid(16, 16);