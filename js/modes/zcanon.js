// zcanon.js — v5: Saga Saiyajin + Saga Freeza, arena automática, zeni reward
const ZCanon = (() => {
  let activeSaga = 'saiyan';

  function init() {
    document.querySelector('#screen-zcanon .back-btn').onclick = () => ScreenManager.show('mainmenu');

    // Tabs de saga
    document.querySelectorAll('.saga-tab').forEach(tab => {
      tab.onclick = () => {
        document.querySelectorAll('.saga-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeSaga = tab.dataset.saga;
        renderChapters();
      };
    });

    renderChapters();
  }

  function renderChapters() {
    const container = document.getElementById('chaptersContainer');
    container.innerHTML = '';

    const chapters = STORY_CHAPTERS.filter(ch => {
      if (activeSaga === 'saiyan') return !ch.id.startsWith('ch_namek') && ch.saga !== 'android' && ch.saga !== 'freeza' && ch.saga !== 'cell';
      if (activeSaga === 'freeza') return ch.id.startsWith('ch_namek') || ch.saga === 'freeza';
      if (activeSaga === 'android') return ch.saga === 'android';
      if (activeSaga === 'cell') return ch.saga === 'cell';
      return false;
    });

    chapters.forEach((ch, idx) => {
      const unlocked = SaveManager.isChapterUnlocked(ch);
      const completed = SaveManager.isCompleted(ch.id);

      const card = document.createElement('div');
      card.className = 'chapter-card' +
        (!unlocked ? ' locked' : '') +
        (completed ? ' completed' : '');

      const p1c = CHARACTERS[ch.player];
      const p2c = CHARACTERS[ch.opponent];

      card.innerHTML = `
        <div class="chapter-num">CAP. ${ch.num}</div>
        <div class="chapter-info">
          <div class="chapter-title">${ch.title}</div>
          <div class="chapter-subtitle">${ch.subtitle}</div>
          <div class="chapter-fighters">
            <span class="cf-player" style="color:${p1c?.color||'#fff'}">${p1c?.displayName||ch.player}</span>
            <span class="cf-vs">vs</span>
            <span class="cf-opponent" style="color:${p2c?.color||'#f44'}">${p2c?.displayName||ch.opponent}</span>
          </div>
          ${ch.zeniReward ? `<span class="chapter-zeni">💰 +${ch.zeniReward} Zeni</span>` : ''}
        </div>
        <div class="chapter-status">${completed ? '✅' : unlocked ? '▶' : '🔒'}</div>
      `;

      if (unlocked) card.onclick = () => startChapter(ch);
      container.appendChild(card);
    });
  }

  function startChapter(ch) {
    // Arena automática pelo capítulo (STORY_STAGE_MAP)
    const stageId = STORY_STAGE_MAP[ch.id] || ch.stage || 'kame_house';
    setStageById(stageId);

    // Se o capítulo tem opponentTag, é uma batalha tag team (CPU com múltiplos)
    const isTagBattle = !!(ch.opponentTag && ch.opponentTag.length > 1);
    // Se o capítulo tem playerTag, o player também entra com time tag
    const hasPlayerTag = !!(ch.playerTag && ch.playerTag.length > 1);

    showLoading(() => {
      ScreenManager.show('charselect', {
        mode: 'story',
        backTo: 'zcanon',
        isZCanon: true,
        storyConfig: {
          ...ch,
          stage: stageId,
          chapterId: ch.id,
          zeniReward: ch.zeniReward || 200,
          costumeUnlock: ch.costumeUnlock || null,
          isZCanon: true,
          // Tag team CPU
          p2Team: isTagBattle ? ch.opponentTag : null,
          // Tag team Player
          p1Team: hasPlayerTag ? ch.playerTag : null,
          isTagBattle: isTagBattle || hasPlayerTag
        }
      });
    });
  }

  function showLoading(cb) {
    const overlay = document.getElementById('loadingOverlay');
    const bar = document.getElementById('loadingBarFill');
    const text = document.getElementById('loadingText');
    if (!overlay) { cb(); return; }
    overlay.style.display = 'flex';
    if (bar) bar.style.width = '0%';

    const saiyajinQuotes = [
      '"O poder real vem de dentro!" — Goku',
      '"Eu sou o Príncipe dos Saiyajins!" — Vegeta',
      '"Esta força... está superando meus limites!" — Gohan',
      '"Kakarot... você é o único que pode vencer Freeza." — Vegeta',
      '"EU SOU O SUPER SAIYAJIN!" — Goku'
    ];
    if (text) text.textContent = saiyajinQuotes[Math.floor(Math.random() * saiyajinQuotes.length)];

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 25 + 10;
      if (bar) bar.style.width = Math.min(progress, 100) + '%';
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          overlay.style.display = 'none';
          cb();
        }, 200);
      }
    }, 120);
  }

  return { init };
})();
ScreenManager.register('zcanon', ZCanon.init);
