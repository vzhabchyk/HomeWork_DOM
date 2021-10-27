const imagesWrap = document.getElementById('img-wrap');
const image = document.createElement('img');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const imageNumber = getRandomNumber(1,10);
image.src = './images/' + imageNumber + '.jpg';
imagesWrap.appendChild(image);