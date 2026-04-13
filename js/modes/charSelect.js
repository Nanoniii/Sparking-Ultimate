// charSelect.js — BT3-style character select with render/pixel art toggle
const CharSelect = (() => {
  let selectState = {};
  let onSelectDone = null;
  // Track art mode: sempre 'pixel' (renders removidos)
  let artMode = { p1: 'pixel', p2: 'pixel' };
  // Track selected costume per side
  let selectedCostume = { p1: null, p2: null };

  function init(options = {}) {
    onSelectDone = options.onDone || (() => {});
    artMode = { p1: 'pixel', p2: 'pixel' };
    selectedCostume = { p1: null, p2: null };

    const isTag = options.mode === 'tag';
    const is1v1VsCpu = options.mode === '1v1vscpu';
    selectState = {
      p1: null, p2: null,
      selecting: 'p1',
      mode: options.mode || '1v1',
      storyConfig: options.storyConfig || null,
      options: options,
      // Tag team
      isTag,
      tagSize: options.tagSize || 2,
      tagSizeP1: options.tagSizeP1 || options.tagSize || 2,
      tagSizeP2: options.tagSizeP2 || options.tagSize || 2,
      tagVsCpu: options.tagVsCpu || false,
      is1v1VsCpu,
      p1Team: [],
      p2Team: [],
    };

    // 1v1 vs CPU: player picks p1, then picks which CPU opponent to face
    if (is1v1VsCpu) {
      selectState.selecting = 'p1';
    }

    // Story mode: auto-assign
    if (selectState.storyConfig) {
      const sc = selectState.storyConfig;
      selectState.p1 = sc.player;
      selectState.p2 = sc.opponent;
      selectState.selecting = 'done';
    }

    buildGrid();
    buildStrips();
    updatePreviews();
    updateIndicator();

    // Saga filter buttons
    let activeSagaFilter = 'all';
    document.querySelectorAll('.cs-saga-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.cs-saga-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeSagaFilter = btn.dataset.saga;
        // Filter grid cards
        document.querySelectorAll('#csGrid .cs-char-card').forEach(card => {
          const id = card.dataset.id;
          const c = CHARACTERS[id];
          if (!c) return;
          if (activeSagaFilter === 'all') card.style.display = '';
          else card.style.display = c.saga === activeSagaFilter ? '' : 'none';
        });
      };
    });

    // Story mode: lock stage selection (arena é automática)
    const stageControls = document.querySelector('.cs-stage-select');
    if (stageControls) {
      stageControls.style.display = options.storyConfig ? 'none' : '';
    }

    document.getElementById('csBackBtn').onclick = () => {
      if (selectState.selecting === 'p2') {
        selectState.selecting = 'p1';
        selectState.p1 = null;
        updateGrid();
        updatePreviews();
        updateIndicator();
      } else {
        ScreenManager.show(options.backTo || 'mainmenu');
      }
    };

    document.getElementById('stagePrev').onclick = () => { prevStage(); updateStageLabel(); };
    document.getElementById('stageNext').onclick = () => { nextStage(); updateStageLabel(); };
    updateStageLabel();

    document.getElementById('btnStartFight').onclick = () => {
      if (selectState.is1v1VsCpu && selectState.p1 && selectState.p2) { startFight(); return; }
      if (selectState.p1 && selectState.p2) startFight();
    };

    // Toggle buttons
    document.getElementById('csToggleP1').onclick = () => toggleArt('p1');
    document.getElementById('csToggleP2').onclick = () => toggleArt('p2');

    document.addEventListener('keydown', onKey);

    if (selectState.storyConfig) {
      document.getElementById('btnStartFight').disabled = false;
    }
  }

  function onKey(e) {
    if (e.key === 'Escape') ScreenManager.show('mainmenu');
  }

  function toggleArt(side) {
    // Renders removidos — sempre usa pixel art (idle sprite)
    return;
  }

  function getCharImg(charId, mode) {
    if (!charId || !CHARACTERS[charId]) return null;
    const c = CHARACTERS[charId];
    // Sempre retorna idle sprite (renders removidos)
    return c.spritePath + (c.sprites.Idle || 'Idle.png');
  }

  function buildGrid() {
    const grid = document.getElementById('csGrid');
    grid.innerHTML = '';
    ROSTER_ORDER.forEach(id => {
      const c = CHARACTERS[id];
      if (!c) return;
      const unlocked = SaveManager.isCharUnlocked(id);
      const card = document.createElement('div');
      card.className = 'cs-char-card' + (!unlocked ? ' locked' : '');
      card.dataset.id = id;

      const icon = document.createElement('div');
      icon.className = 'cs-card-icon';
      if (unlocked) {
        const img = new Image();
        // Primary: Idle sprite (pixel art)
        img.src = c.spritePath + (c.sprites.Idle || 'Idle.png');
        img.onerror = function() {
          // Fallback 1: render image
          img.onerror = function() {
            // Fallback 2: emoji placeholder
            icon.innerHTML = `<div class="cs-card-icon-placeholder">${getCharEmoji(id)}</div>`;
          };
          img.src = 'assets/renders/' + id + '.png';
        };
        icon.appendChild(img);
      } else {
        // Locked: show idle sprite greyed out, fallback to lock icon
        const img = new Image();
        img.src = c.spritePath + (c.sprites.Idle || 'Idle.png');
        img.style.filter = 'grayscale(1) brightness(0.35)';
        img.onerror = function() {
          icon.innerHTML = `<div class="cs-card-icon-placeholder">🔒</div>`;
        };
        icon.appendChild(img);
      }

      const name = document.createElement('div');
      name.className = 'cs-card-name';
      name.textContent = c.displayName;

      // Classe badge
      if (c.charClass && unlocked) {
        const badge = document.createElement('div');
        badge.className = 'cs-class-badge ' + c.charClass;
        const classLabels = { rusher: '⚡ Rusher', zuner: '🔵 Zuner', grappler: '🛡 Grappler', 'all-rounder': '⚖ All-Rounder' };
        badge.textContent = classLabels[c.charClass] || c.charClass;
        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(badge);
      } else {
        card.appendChild(icon);
        card.appendChild(name);
      }

      if (unlocked) {
        card.onclick = () => selectChar(id);
      } else {
        card.title = c.unlockHint || 'Bloqueado';
      }

      grid.appendChild(card);
    });
  }

  function buildStrips() {
    // Build icon strip entries for all roster chars
    ['p1', 'p2'].forEach(side => {
      const strip = document.getElementById(side === 'p1' ? 'csStripIconsP1' : 'csStripIconsP2');
      strip.innerHTML = '';
      ROSTER_ORDER.forEach(id => {
        const c = CHARACTERS[id];
        if (!c) return;
        const unlocked = SaveManager.isCharUnlocked(id);
        const div = document.createElement('div');
        div.className = 'cs-strip-icon';
        div.dataset.id = id;
        div.dataset.side = side;
        if (unlocked) {
          const img = new Image();
          img.src = c.spritePath + (c.sprites.Idle || 'Idle.png');
          div.appendChild(img);
          div.onclick = () => {
            if (side === 'p1' && selectState.selecting === 'p1') selectChar(id);
            else if (side === 'p2' && selectState.selecting === 'p2') selectChar(id);
          };
        }
        strip.appendChild(div);
      });
    });
  }

  function updateStripHighlight() {
    ['p1', 'p2'].forEach(side => {
      const strip = document.getElementById(side === 'p1' ? 'csStripIconsP1' : 'csStripIconsP2');
      strip.querySelectorAll('.cs-strip-icon').forEach(el => {
        el.classList.remove('active-p1', 'active-p2');
        const charId = side === 'p1' ? selectState.p1 : selectState.p2;
        if (el.dataset.id === charId) {
          el.classList.add(side === 'p1' ? 'active-p1' : 'active-p2');
        }
      });
    });
  }

  function getCharEmoji(id) {
    const map = { EarlyGoku:'🟠', KidGohan:'🟡', Krillin:'🔴', Piccolo:'🟢', Raditz:'🟤', Nappa:'🔴', ScouterVegeta:'🟣', Tien:'🔵', Yamcha:'🟠', Yajirobe:'🟤', Saibaman:'🟢' };
    return map[id] || '👤';
  }

  function selectChar(id) {
    if (selectState.isTag) {
      // Tag team: accumulate picks per side
      const side = selectState.selecting; // 'p1' or 'p2'
      if (side === 'done') return;
      const team = side === 'p1' ? selectState.p1Team : selectState.p2Team;
      const maxSz = side === 'p1' ? selectState.tagSizeP1 : selectState.tagSizeP2;
      // Toggle: if already in team remove it, otherwise add
      const idx = team.indexOf(id);
      if (idx !== -1) {
        team.splice(idx, 1);
      } else if (team.length < maxSz) {
        team.push(id);
      }
      // Set active char as first of team
      if (side === 'p1') selectState.p1 = selectState.p1Team[0] || null;
      if (side === 'p2') selectState.p2 = selectState.p2Team[0] || null;
      // Auto-advance when team is full
      if (team.length === maxSz) {
        if (side === 'p1') {
          // Always advance to P2 picks — even vs CPU, player chooses who to fight
          selectState.selecting = 'p2';
        } else {
          selectState.selecting = 'done';
        }
      }
      updateGrid();
      updatePreviews();
      updateIndicator();
      // Ready when both teams are picked
      const ready = selectState.p1Team.length > 0 && selectState.p2Team.length > 0;
      document.getElementById('btnStartFight').disabled = !ready;
      return;
    }
    // 1v1 vs CPU: player picks P1 then picks the opponent (P2)
    if (selectState.is1v1VsCpu) {
      if (selectState.selecting === 'p1') {
        selectState.p1 = id;
        selectedCostume.p1 = null;
        selectState.selecting = 'p2';
      } else if (selectState.selecting === 'p2') {
        selectState.p2 = id;
        selectedCostume.p2 = null;
        selectState.selecting = 'done';
        document.getElementById('btnStartFight').disabled = false;
      }
      updateGrid();
      updatePreviews();
      updateIndicator();
      updateStripHighlight();
      return;
    }
    // Normal 1v1 / cpu
    if (selectState.selecting === 'p1') {
      selectState.p1 = id;
      selectedCostume.p1 = null;
      selectState.selecting = 'p2';
    } else if (selectState.selecting === 'p2') {
      selectState.p2 = id;
      selectedCostume.p2 = null;
      selectState.selecting = 'done';
    }
    updateGrid();
    updatePreviews();
    updateIndicator();
    updateStripHighlight();
    if (selectState.p1 && selectState.p2) {
      document.getElementById('btnStartFight').disabled = false;
    }
  }

  function updateGrid() {
    document.querySelectorAll('.cs-char-card').forEach(card => {
      card.classList.remove('selected-p1', 'selected-p2', 'tag-p1', 'tag-p2');
      const id = card.dataset.id;
      if (selectState.isTag) {
        if (selectState.p1Team.includes(id)) card.classList.add('selected-p1', 'tag-p1');
        if (selectState.p2Team.includes(id)) card.classList.add('selected-p2', 'tag-p2');
      } else {
        if (id === selectState.p1) card.classList.add('selected-p1');
        if (id === selectState.p2) card.classList.add('selected-p2');
      }
    });
  }

  function updatePreviews() {
    updatePreview('p1', selectState.p1);
    updatePreview('p2', selectState.p2);
  }

  function updatePreview(side, charId) {
    const nameEl = document.getElementById('csName' + (side === 'p1' ? 'P1' : 'P2'));
    const spriteEl = document.getElementById('csSprite' + (side === 'p1' ? 'P1' : 'P2'));
    const statsEl = document.getElementById('csStats' + (side === 'p1' ? 'P1' : 'P2'));
    const toggleBtn = document.getElementById(side === 'p1' ? 'csToggleP1' : 'csToggleP2');

    if (!charId || !CHARACTERS[charId]) {
      nameEl.textContent = '—';
      spriteEl.innerHTML = '<div class="cs-sprite-placeholder">?</div>';
      statsEl.innerHTML = '';
      if (toggleBtn) toggleBtn.classList.remove('visible');
      return;
    }
    const c = CHARACTERS[charId];
    nameEl.textContent = c.displayName;

    // Show toggle button
    if (toggleBtn) toggleBtn.classList.add('visible');

    // Build image: sempre pixel art (idle sprite)
    spriteEl.innerHTML = '';
    const img = new Image();

    img.src = c.spritePath + (c.sprites.Idle || 'Idle.png');
    img.onerror = () => {
      spriteEl.innerHTML = `<div class="cs-sprite-placeholder" style="font-size:3rem">${getCharEmoji(charId)}</div>`;
    };
    spriteEl.appendChild(img);

    // Stats bars
    const stats = c.stats;
    const statKeys = [['hp','HP',1200],['power','PWR',100],['speed','SPD',100],['defense','DEF',100]];
    statsEl.innerHTML = statKeys.map(([k, label, max]) =>
      `<div class="stat-bar-row"><span class="stat-label">${label}</span><div class="stat-bar"><div class="stat-bar-fill" style="width:${Math.min(100, stats[k] / max * 100)}%"></div></div></div>`
    ).join('') + `<div class="cs-char-desc">${c.description}</div>`;

    // Costume picker (versus mode only, not story mode)
    const costumeContainer = document.getElementById('csCostumes' + (side === 'p1' ? 'P1' : 'P2'));
    if (costumeContainer) {
      costumeContainer.innerHTML = '';
      if (!selectState.storyConfig && c.costumes) {
        const unlockedCostumes = Object.entries(c.costumes).filter(([cId]) =>
          SaveManager.isCostumeUnlocked(charId, cId)
        );
        if (unlockedCostumes.length > 0) {
          const label = document.createElement('div');
          label.className = 'cs-costume-label';
          label.textContent = 'TRAJE:';
          costumeContainer.appendChild(label);

          // Default (no costume) button
          const defaultBtn = document.createElement('button');
          defaultBtn.className = 'cs-costume-btn' + (!selectedCostume[side] ? ' active' : '');
          defaultBtn.textContent = 'Padrão';
          defaultBtn.onclick = () => {
            selectedCostume[side] = null;
            updatePreview(side, charId);
          };
          costumeContainer.appendChild(defaultBtn);

          unlockedCostumes.forEach(([cId, costume]) => {
            const btn = document.createElement('button');
            btn.className = 'cs-costume-btn' + (selectedCostume[side] === cId ? ' active' : '');
            btn.textContent = costume.displayName;
            btn.onclick = () => {
              selectedCostume[side] = cId;
              updatePreview(side, charId);
            };
            costumeContainer.appendChild(btn);
          });
        }
      }
    }

    // Update sprite to show costume idle if selected
    if (!selectState.storyConfig && selectedCostume[side] && c.costumes && c.costumes[selectedCostume[side]]) {
      const costume = c.costumes[selectedCostume[side]];
      spriteEl.innerHTML = '';
      const cosImg = new Image();
      cosImg.src = costume.spritePath + 'Idle.png';
      cosImg.onerror = () => { cosImg.src = c.spritePath + (c.sprites.Idle || 'Idle.png'); };
      spriteEl.appendChild(cosImg);
    }
  }

  function updateIndicator() {
    const ind = document.getElementById('cs-player-indicator');
    const title = document.getElementById('cs-title');
    if (selectState.storyConfig) {
      ind.textContent = 'MODO HISTÓRIA';
      title.textContent = 'CONFIRMAÇÃO';
      return;
    }
    if (selectState.is1v1VsCpu) {
      if (selectState.selecting === 'p1') {
        ind.textContent = 'SEU PERSONAGEM';
        title.textContent = 'ESCOLHA SEU LUTADOR';
      } else if (selectState.selecting === 'p2') {
        ind.textContent = 'OPONENTE CPU';
        title.textContent = 'ESCOLHA COM QUEM VOCÊ QUER LUTAR!';
      } else {
        ind.textContent = 'PRONTO!';
        title.textContent = 'PERSONAGEM SELECIONADO — PRESSIONE LUTAR!';
      }
      return;
    }
    if (selectState.isTag) {
      const szP1 = selectState.tagSizeP1 || selectState.tagSize;
      const szP2 = selectState.tagSizeP2 || selectState.tagSize;
      if (selectState.selecting === 'p1') {
        ind.textContent = selectState.tagVsCpu ? 'SEU TIME' : 'JOGADOR 1 — TIME';
        title.textContent = (selectState.tagVsCpu ? 'MONTE SEU TIME: ' : 'P1: ') + selectState.p1Team.length + '/' + szP1 + ' personagens';
      } else if (selectState.selecting === 'p2') {
        ind.textContent = selectState.tagVsCpu ? 'TIME ADVERSÁRIO (CPU)' : 'JOGADOR 2 — TIME';
        title.textContent = (selectState.tagVsCpu ? 'ESCOLHA O TIME DA CPU: ' : 'P2: ') + selectState.p2Team.length + '/' + szP2 + ' personagens';
      } else {
        ind.textContent = 'PRONTO!';
        title.textContent = 'TIMES CONFIRMADOS — LUTAR!';
      }
      return;
    }
    if (selectState.selecting === 'p1') {
      ind.textContent = 'JOGADOR 1';
      title.textContent = 'SELECIONE — JOGADOR 1';
    } else if (selectState.selecting === 'p2') {
      ind.textContent = 'JOGADOR 2';
      title.textContent = 'SELECIONE — JOGADOR 2';
    } else {
      ind.textContent = 'PRONTO!';
      title.textContent = 'CONFIRME A BATALHA';
    }
  }

  function updateStageLabel() {
    const s = getCurrentStage();
    document.getElementById('csStageLabel').textContent = s ? s.name : '—';
  }

  function startFight() {
    const sc = selectState.storyConfig;
    const opts = selectState.options || {};

    // 1v1 vs CPU: player chose both P1 and P2
    if (selectState.is1v1VsCpu) {
      const cfg = {
        p1: selectState.p1,
        p2: selectState.p2,
        p1Costume: selectedCostume.p1 || null,
        p2Costume: selectedCostume.p2 || null,
        vsMode: 'cpu',
        aiDifficulty: opts.aiDifficulty || 'medium',
        roundsToWin: opts.roundsToWin || 2,
        timer: opts.timer !== undefined ? opts.timer : 60,
        preDialogue: [], postDialogue: []
      };
      document.removeEventListener('keydown', onKey);
      ScreenManager.show('battle');
      BattleEngine.init(cfg, (result, winnerSide) => {
        ScreenManager.show(opts.backTo || 'mainmenu');
      });
      return;
    }

    const cfg = sc ? (() => {
      // Batalha tag team de história (ex: Gohan Futuro vs A17+A18, Piccolo+Krillin vs A17)
      const isTagBattle = !!(sc.isTagBattle && (sc.p2Team || sc.p1Team));
      // p1Team: usa time fixo do capítulo (playerTag) se definido, senão só o player
      const p1TeamResolved = sc.p1Team && sc.p1Team.length > 1 ? sc.p1Team : (isTagBattle ? [sc.player] : null);
      return {
        p1: sc.p1Team && sc.p1Team.length > 0 ? sc.p1Team[0] : sc.player,
        p2: sc.p2Team && sc.p2Team.length > 0 ? sc.p2Team[0] : sc.opponent,
        // Times tag: fixos pelo capítulo
        p1Team: p1TeamResolved,
        p2Team: isTagBattle ? (sc.p2Team || null) : null,
        p1Costume: sc.p1Costume || null,
        p2Costume: sc.p2Costume || null,
        vsMode: 'cpu',
        isZCanon: sc.isZCanon || opts.isZCanon || false,
        aiDifficulty: sc.opponentAI || 'medium',
        roundsToWin: sc.roundFighters ? sc.roundFighters.length : (sc.roundsToWin || 1),
        roundFighters: sc.roundFighters || null,
        timer: sc.timer !== undefined ? sc.timer : 60,
        chapterId: sc.id || sc.chapterId,
        preDialogue: sc.preDialogue || [],
        postDialogue: sc.postDialogue || [],
        midDialogue: sc.midDialogue || null,
        specialUnlock: sc.specialUnlock || null,
        unlocks: sc.unlocks || [],
        zeniReward: sc.zeniReward || 0,
        costumeUnlock: sc.costumeUnlock || null,
        hasNext: sc.unlocks && sc.unlocks.length > 0
      };
    })() : selectState.isTag ? (() => {
      // Tag Team — CPU auto-selects its team from unlocked chars (excluding P1 team)
      const p1t = selectState.p1Team;
      const p2t = selectState.p2Team;
      return {
        p1: p1t[0],
        p2: p2t[0],
        p1Team: p1t,
        p2Team: p2t,
        vsMode: 'cpu',
        aiDifficulty: opts.aiDifficulty || 'medium',
        roundsToWin: opts.roundsToWin || 2,
        timer: opts.timer !== undefined ? opts.timer : 60,
        preDialogue: [],
        postDialogue: []
      };
    })() : {
      p1: opts.forcedP1 || selectState.p1,
      p2: opts.forcedP2 || selectState.p2,
      p1Costume: selectedCostume.p1 || null,
      p2Costume: selectedCostume.p2 || null,
      vsMode: selectState.mode === 'cpu' ? 'cpu' : '1v1',
      roundsToWin: opts.roundsToWin || 2,
      timer: opts.timer !== undefined ? opts.timer : 60,
      preDialogue: [],
      postDialogue: []
    };

    document.removeEventListener('keydown', onKey);
    ScreenManager.show('battle');
    BattleEngine.init(cfg, (result, winnerSide) => {
      // onBattleEnd hook from calling mode (tournament, zparallel)
      const opts2 = selectState.options || {};
      if (opts2.onBattleEnd) {
        opts2.onBattleEnd(winnerSide, cfg.p1, cfg.p2);
        return;
      }
      if (result === 'next' && sc) {
        ScreenManager.show('zcanon');
      } else if (opts2.backTo) {
        ScreenManager.show(opts2.backTo);
      } else {
        ScreenManager.show('mainmenu');
      }
    });
  }

  return { init };
})();

ScreenManager.register('charselect', CharSelect.init);
