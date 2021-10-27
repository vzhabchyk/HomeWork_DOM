function vote (cellNumber) {
  const cell = document.getElementById('count-' + cellNumber);
  if (!cell.innerHTML) {
    cell.innerHTML = 1;
  } else {
    cell.innerHTML = +cell.innerHTML + 1;
  }
}