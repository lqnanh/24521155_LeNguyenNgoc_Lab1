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