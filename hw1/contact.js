
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

function setError(input, message) {
  const id = `${input.id}-error`;
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('p');
    el.id = id;
    el.className = 'field-error';
    input.insertAdjacentElement('afterend', el);
  }
  el.textContent = message;                   
  input.setAttribute('aria-invalid', 'true');
  const ids = (input.getAttribute('aria-describedby') || '').split(' ').filter(Boolean);
  if (!ids.includes(id)) input.setAttribute('aria-describedby', [...ids, id].join(' '));
}