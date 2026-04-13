// splash.js
const Splash = (() => {
  function init() {
    // Generate stars
    const container = document.getElementById('splashStars');
    if (container) {
      for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'splash-star';
        const size = Math.random() * 2.5 + 0.5;
        star.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-duration:${2+Math.random()*3}s;animation-delay:${Math.random()*4}s;`;
        container.appendChild(star);
      }
    }

    const handler = () => {
      document.removeEventListener('keydown', handler);
      document.removeEventListener('click', handler);
      ScreenManager.show('mainmenu');
    };
    document.addEventListener('keydown', handler);
    document.addEventListener('click', handler);
  }

  return { init };
})();

ScreenManager.register('splash', Splash.init);

// mainMenu.js
const MainMenu = (() => {
  function init() {
    // Particles
    const container = document.getElementById('menuParticles');
    if (container) {
      container.innerHTML = '';
      for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'menu-particle';
        const size = Math.random() * 4 + 1;
        const colors = ['#ff6a00','#ff9c00','#ffd200','#00cfff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;bottom:0;background:${color};animation-duration:${4+Math.random()*6}s;animation-delay:${Math.random()*5}s;--drift:${(Math.random()-0.5)*100}px;`;
        container.appendChild(p);
      }
    }

    // Navigation
    const validScreens = ['zcanon','versus','ztimebreak','training','tournament','zparallel','shop','settings'];
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.onclick = () => {
        const mode = btn.dataset.mode;
        if (validScreens.includes(mode)) ScreenManager.show(mode);
      };
    });

    // Back buttons
    document.querySelectorAll('.back-btn[data-back]').forEach(btn => {
      btn.onclick = () => ScreenManager.show(btn.dataset.back || 'mainmenu');
    });
  }

  return { init };
})();

ScreenManager.register('mainmenu', MainMenu.init);
