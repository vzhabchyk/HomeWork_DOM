const tableContainer = document.getElementById('table-wrap');
const table = document.createElement('table');

tableContainer.appendChild(table);
let count = 1;

for (let i = 0; i < 10; i++) {
  const row = document.createElement('tr');
  table.appendChild(row);
  for (let j = 0; j < 10; j++) {
    const column = document.createElement('td');
    column.innerHTML = count++;
    row.appendChild(column);
  }
}