function createGridSquares(columns, rows) {
  const gridContainer = document.querySelector('.grid-container');

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

createGridSquares(16, 16);