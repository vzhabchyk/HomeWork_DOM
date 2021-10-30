const myText = document.getElementById('text');
const invisibleText = document.getElementById('invisible');
myText.onfocus = function () {
  invisibleText.classList.remove('hidden');
}

myText.onblur = function () {
  invisibleText.classList.add('hidden');
}