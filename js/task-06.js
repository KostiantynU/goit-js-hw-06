const validationInputEl = document.querySelector('#validation-input');
function checkInput(event) {
  if (event.currentTarget.value.length == validationInputEl.dataset.length) {
    validationInputEl.classList.add('valid');
    validationInputEl.classList.remove('invalid');
  } else {
    validationInputEl.classList.add('invalid');
    validationInputEl.classList.remove('valid');
  }
}
validationInputEl.addEventListener('blur', checkInput);
