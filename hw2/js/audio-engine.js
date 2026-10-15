const cache = new Map();
const playing = new Set();

export function playSound(src) {
  if (!cache.has(src)) cache.set(src, new Audio(src));
  const instance = cache.get(src).cloneNode();
  playing.add(instance);
  instance.addEventListener('ended', () => playing.delete(instance));
  instance.play().catch(() => playing.delete(instance));
}

export function stopAll() {
  playing.forEach((a) => { a.pause(); a.currentTime = 0; });
  playing.clear();
}