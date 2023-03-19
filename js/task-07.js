const abraEl = document.querySelector('#text');
const inputEl = document.querySelector('#font-size-control');
function fontSize(event) {
  abraEl.style.fontSize = `${event.currentTarget.value}px`;
}
inputEl.addEventListener('input', fontSize);
