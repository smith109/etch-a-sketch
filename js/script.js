const gridContainer = document.querySelector('.grid-container');
const gridResizeBtn = document.querySelector('.resize-btn');
const btnContainer = document.querySelector('.btn-container');
let currentColor = 'black';

gridContainer.addEventListener('mouseover', changeSquareColor);
gridResizeBtn.addEventListener('click', changeGridSize);
btnContainer.addEventListener('click', changeCurrentColor);

function toggleActiveClass(target) {
  const activeElement = document.querySelector('.active');
  activeElement.classList.remove('active');
  target.classList.add('active');
}

function resetAlphaValue(){
  const rowDivs = document.querySelectorAll('.row');
  rowDivs.forEach((rowDiv) => rowDiv.dataset.alphaValue = '0');
}

function changeCurrentColor(e) {
  const target = e.target
  const color = e.target.dataset.color;

  if (!color) return;
  if (!target.tagName === 'BUTTON') return;

  resetAlphaValue();
  toggleActiveClass(target);
  currentColor = color;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

function adjustBrightness(target, newAlpha) {
  let alphaValue = target.dataset.alphaValue;
  alphaValue = Number(alphaValue) + newAlpha;

  if (alphaValue < 0) {
    alphaValue = 0;
  } else if (alphaValue > 1) {
    alphaValue = 1;
  }

  const rgba = `rgba(51,51,51,${alphaValue})`;
  target.dataset.alphaValue = alphaValue;
  target.style.backgroundColor = rgba;
}

function applySquareColor(target) {
  if (currentColor === 'black') {
    const COLOR_BLACK = 'rgb(51,51,51)';
    target.style.backgroundColor = COLOR_BLACK;
  } 
  
  if (currentColor === 'rainbow') {
    target.style.backgroundColor = getRandomColor();
  }

  if (currentColor === 'shader') {
    adjustBrightness(target, 0.1);
  }
}

function changeSquareColor(e) {
  const target = e.target;
  if (!target.classList.contains('row')) return;

  if (e.shiftKey && currentColor === 'shader') {
    adjustBrightness(target, -0.1);
  } else {
    applySquareColor(target);
  }
}

function createGridSquares(columns, rows) {
  for (let i = 0; i < columns; i++) {
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('column');

    for (let j = 0; j < rows; j++) {
      const rowDiv = document.createElement('div');
      rowDiv.dataset.alphaValue = '0';
      rowDiv.classList.add('row');
      columnDiv.appendChild(rowDiv);
      gridContainer.appendChild(columnDiv);
    }
  }
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