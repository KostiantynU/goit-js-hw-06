function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  inputNumberEl: document.querySelector('#controls > input'),
  createBtnEl: document.querySelector('button[data-create]'),
  destoryBtnEl: document.querySelector('button[data-destroy]'),
  divParent: document.querySelector('#boxes'),
  startWidth: 30,
  startHeight: 30,
};
refs.createBtnEl.addEventListener('click', takeNumFromInput);
function takeNumFromInput() {
  createBoxes(refs.inputNumberEl.value);
}

function createBoxes(amount) {
  const collectDiv = [];
  for (let i = 0; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${refs.startWidth}px`;
    divEl.style.height = `${refs.startHeight}px`;
    collectDiv.push(divEl);
    refs.startWidth += 10;
    refs.startHeight += 10;
  }
  refs.divParent.append(...collectDiv);
}
refs.destoryBtnEl.addEventListener('click', destroyAll);
function destroyAll() {
  refs.divParent.innerHTML = '';
  refs.startWidth = 30;
  refs.startHeight = 30;
}
