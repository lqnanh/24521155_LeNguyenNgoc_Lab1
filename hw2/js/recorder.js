const queue = [];
let startTime = 0;
let recording = false;

export function startRecording() {
  queue.length = 0;
  startTime = performance.now();
  recording = true;
}

export function stopRecording() { recording = false; }

export function recordHit(key) {
  if (!recording) return;
  queue.push({ key, t: performance.now() - startTime });
}

export function playback(playFn) {
  queue.forEach(({ key, t }) => setTimeout(() => playFn(key), t));
}