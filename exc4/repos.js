const section = document.querySelector('#repo-list');
const list = document.querySelector('#repo-items');
const retryBtn = document.querySelector('#retry-btn');

// Cho phép test từng trạng thái: ?mode=empty | ?mode=error
const mode = new URLSearchParams(location.search).get('mode');

function fakeFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mode === 'error') return reject(new Error('Network error'));
      if (mode === 'empty') return resolve([]);
      resolve([
        { name: 'state-engine', description: 'Lightweight event bus.', tags: ['TypeScript', 'MIT'] },
        { name: 'drum-kit', description: 'Polyphonic web audio.', tags: ['JavaScript'] },
        { name: 'a11y-audit', description: 'WCAG 2.2 checklist.', tags: ['HTML', 'CSS'] },
      ]);
    }, 1500);
  });
}

function setState(state) {
  section.dataset.state = state;
  section.setAttribute('aria-busy', String(state === 'loading'));
}

function renderList(items) {
  list.replaceChildren();
  for (const item of items) {
    const li = document.createElement('li');
    li.className = 'repo-item';

    const title = document.createElement('h3');
    title.textContent = item.name;

    const desc = document.createElement('p');
    desc.textContent = item.description;

    const meta = document.createElement('ul');
    meta.className = 'repo-meta';
    for (const tag of item.tags) {
      const badge = document.createElement('li');
      badge.className = 'badge';
      badge.textContent = tag;
      meta.append(badge);
    }

    li.append(title, desc, meta);
    list.append(li);
  }
}

async function load() {
  setState('loading');
  try {
    const items = await fakeFetch();
    renderList(items);
    setState(items.length > 0 ? 'success' : 'empty');
  } catch {
    setState('error');
  }
}

retryBtn.addEventListener('click', load);
load();