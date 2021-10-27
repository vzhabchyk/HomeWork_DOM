const myText = document.getElementById('text');
const invisibleText = document.getElementsByClassName('invisible');
myText.onfocus = function () {
  invisibleText[0].style.display = 'block';
}

myText.onblur = function () {
  invisibleText[0].style.display = 'none';
}