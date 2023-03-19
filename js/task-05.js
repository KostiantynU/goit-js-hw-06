const nameElInput = document.querySelector('#name-input');
const nameElOutput = document.querySelector('#name-output');
function changeElOutput(event) {
  nameElOutput.textContent = event.currentTarget.value;
  if (nameElInput.value === '') {
    nameElOutput.textContent = 'Anonymous';
  }
}
nameElInput.addEventListener('input', changeElOutput);
