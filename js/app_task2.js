const btnOne = document.getElementsByClassName('btn-1');
const linkEl = document.getElementById('link');

btnOne[0].onclick = function() {
  let userLink = prompt('Enter your link.');
  if (!userLink.startsWith('https://') && !userLink.startsWith('http://')) {
    userLink = 'https://' + userLink;
  }
  linkEl.href = userLink;
}

