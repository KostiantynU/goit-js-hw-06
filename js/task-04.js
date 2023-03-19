const btnElIncrement = document.querySelector('[data-action="increment"]');
const btnElDecrement = document.querySelector('[data-action="decrement"]');
const spanEl = document.querySelector('#value');
console.log(spanEl);
let counterValue = 0;
function handleIncrement() {
  spanEl.textContent = counterValue += 1;
}
btnElIncrement.addEventListener('click', handleIncrement);
function handleDecrement() {
  spanEl.textContent = counterValue -= 1;
}
btnElDecrement.addEventListener('click', handleDecrement);
