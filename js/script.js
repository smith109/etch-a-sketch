const gridContainer = document.querySelector('.grid-container');

gridContainer.addEventListener('mouseover', changeSquareColor);

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

createGridSquares(16, 16);