const arraySmile = [
  {
    name: '😂',
    counts: 0,
  },
  {
    name: '😀',
    counts: 0,
  },
  {
    name: '😇',
    counts: 0,
  },
  {
    name: '😍',
    counts: 0,
  },
  {
    name: '😱',
    counts: 0,
  },
]
const smilesRow = document.getElementById('smiles-row');
const votesRow = document.getElementById('votes-count');

for (let i = 0; i < arraySmile.length; i++) {
  const smilesItem = document.createElement('td');
  const votesItem = document.createElement('td');

  smilesItem.innerHTML = arraySmile[i].name;
  votesItem.innerHTML = arraySmile[i].counts;

  smilesRow.appendChild(smilesItem);
  votesRow.appendChild(votesItem);
  
  smilesItem.addEventListener('click', function() {
    votesItem.innerHTML = +votesItem.innerHTML + 1;
    ++arraySmile[i].counts;
  })
}

