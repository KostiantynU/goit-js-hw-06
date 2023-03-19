const formEl = document.querySelector('.login-form');
function onFormSubmit(event) {
  event.preventDefault();
  const resultObj = {};
  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;
  if (email.value === '' || password.value === '') {
    alert('Всі поля мають бути заповненні!');
  } else {
    resultObj.email = email.value;
    resultObj.password = password.value;
  }
  event.currentTarget.reset();
  console.log(resultObj);
}
formEl.addEventListener('submit', onFormSubmit);
