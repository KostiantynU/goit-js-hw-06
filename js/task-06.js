const validationInputEl = document.querySelector('#validation-input');
function checkInput(event) {
  if (event.currentTarget.value.length == validationInputEl.dataset.length) {
    validationInputEl.classList.add('valid');
  } else {
    validationInputEl.classList.add('invalid');
  }
}
validationInputEl.addEventListener('blur', checkInput);
