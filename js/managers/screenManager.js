// screenManager.js
const ScreenManager = (() => {
  let currentScreen = null;
  const _inits = {};

  function show(screenId, options = {}) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById('screen-' + screenId);
    if (!target) { console.warn('Screen not found:', screenId); return; }
    target.classList.add('active');
    currentScreen = screenId;
    if (_inits[screenId]) _inits[screenId](options);
  }

  function current() { return currentScreen; }
  function register(screenId, fn) { _inits[screenId] = fn; }

  return { show, current, register, _inits };
})();
