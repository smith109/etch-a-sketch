const gridContainer = document.querySelector('.grid-container');

gridContainer.addEventListener('mouseover', changeSquareColor);

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
    target.style.backgroundColor = '#333333';
  }
}

createGrid(16, 16);