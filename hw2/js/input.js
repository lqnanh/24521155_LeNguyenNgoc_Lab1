import { playSound, stopAll } from './audio-engine.js';

export function playPad(key) {
  const pad = document.querySelector(`.drum-pad[data-key="${key.toLowerCase()}"]`);
  if (!pad) return;
  playSound(pad.dataset.sound);
  pad.classList.add('active');
  setTimeout(() => pad.classList.remove('active'), 100);
}

window.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  playPad(e.key);
});

document.querySelectorAll('.drum-pad').forEach((pad) => {
  pad.addEventListener('click', () => playPad(pad.dataset.key));
});