function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorSpanEl = document.querySelector('.color');
const btnChangeColorEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
function onBtnChangeColorClick(event) {
  let tempColor = getRandomHexColor();
  bodyEl.style.backgroundColor = tempColor;
  colorSpanEl.textContent = tempColor;
}
btnChangeColorEl.addEventListener('click', onBtnChangeColorClick);
