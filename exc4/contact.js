
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const nameInput = document.querySelector('#contact-name');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    status.textContent = 'Please fix the highlighted fields and try again.';
    form.reportValidity();
    return;
  }

  status.textContent = `Thank you, ${nameInput.value.trim()}. Your message was recorded.`;
  form.reset();
});