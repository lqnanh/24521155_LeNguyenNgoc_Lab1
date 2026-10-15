const TARGET = Date.parse(
  document.querySelector('#event-time').getAttribute('datetime')
);

const els = {
  days: document.querySelector('#cd-days'),
  hours: document.querySelector('#cd-hours'),
  minutes: document.querySelector('#cd-minutes'),
  seconds: document.querySelector('#cd-seconds'),
};

function render(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  els.days.textContent = Math.floor(total / 86400);
  els.hours.textContent = String(Math.floor((total % 86400) / 3600)).padStart(2, '0');
  els.minutes.textContent = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
  els.seconds.textContent = String(total % 60).padStart(2, '0');
}

let timerId;
function tick() {
  const remaining = TARGET - Date.now(); // luôn tính từ đồng hồ thật => không drift
  render(remaining);
  if (remaining <= 0) clearInterval(timerId);
}

tick();
timerId = setInterval(tick, 1000);

const form = document.querySelector('#signup-form');
const submitBtn = document.querySelector('#signup-submit');
const statusEl = document.querySelector('#signup-status');

let state = 'idle'; 

const MESSAGES = {
  idle: '',
  submitting: 'Submitting...',
  success: 'Registration successful!',
  error: 'Something went wrong. Please try again.',
};

function setState(next) {
  state = next;
  form.dataset.state = next;
  submitBtn.disabled = next === 'submitting';
  statusEl.textContent = MESSAGES[next];
}

function sendRegistration(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (Math.random() > 0.5 ? resolve(data) : reject(new Error('fail'))), 1200);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (state === 'submitting') return;      // chặn double-submit
  if (!form.reportValidity()) return;

  const name = form.elements.name.value.trim();
  setState('submitting');
  try {
    await sendRegistration(new FormData(form));
    statusEl.textContent = `Thanks, ${name}! You are registered.`; // textContent => an toàn XSS
    setState('success');
    form.reset();
  } catch {
    setState('error');
  }
});