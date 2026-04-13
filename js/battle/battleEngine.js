// battleEngine.js — Complete 2D fighting game engine

// ─── What-If desbloqueios por capítulo ───────────────────────
// Mapa: chapterId → [whatif ids] desbloqueados ao vencer aquele capítulo
const WHATIF_CHAPTER_UNLOCKS = {
  'ch2':           ['whatif_raditz_good'],         // Raditz do bem — após lutar contra ele
  'ch5':           ['whatif_tien_honor'],           // Honra de Tien — após saga de Piccolo vs Nappa
  'ch7':           ['whatif_piccolo_wins', 'whatif_turles_namek'], // Piccolo sozinho + Turles — ao completar TODA saga Saiyajin
  'ch_namek11':    ['whatif_ginyu_wins'],           // Ginyu no corpo de Goku
  'ch_namek16':    ['whatif_vegeta_ssj'],           // Vegeta SSJ antes de Goku
  'ch_namek17':    ['whatif_krillin_survives'],     // Krillin sobrevive a Freeza
  'ch_namek19':    ['whatif_cooler_arrives'],       // Cooler — ao completar TODA saga Freeza
  // Saga Androide: what-if disponível após desbloquear A14 e A13 (via android_ch9)
  'android_ch9':   ['whatif_android_super13'],
};

const BattleEngine = (() => {

  // ─── State ───────────────────────────────────────────────
  let canvas, ctx, animId;
  let config = {};
  let state = {};
  let keys = {};
  let onBattleEnd = null;

  // Fighter template
  function makeFighter(charId, x, side, costumeId) {
    const c = CHARACTERS[charId];
    const s = c.stats;
    // Apply costume spritePath if specified and unlocked
    let spritePath = c.spritePath;
    if (costumeId && c.costumes && c.costumes[costumeId]) {
      spritePath = c.costumes[costumeId].spritePath;
    }
    return {
      id: charId, char: c, side,
      x, y: 0,
      vx: 0, vy: 0,
      w: 60, h: 100,
      hp: s.hp, maxHp: s.hp,
      ki: 0, maxKi: 100,
      facing: side === 'p1' ? 1 : -1,
      state: 'idle',
      stateTimer: 0,
      stun: 0,
      charging: false,
      fire1Cooldown: 0, fire2Cooldown: 0,
      transforming: false, transformed: false,
      blocking: false,
      roundsWon: 0,
      sprite: null,
      sprites: {},
      color: c.color || '#ff9900',
      costumeSpritePath: spritePath
    };
  }

  // Projectile template
  function makeProjectile(owner, type, x, y, dir, charData) {
    const move = charData.moves[type === 'fire1' ? 'fire1' : 'fire2'];
    const isBeam = move && move.type === 'beam';
    return {
      owner, type, x, y,
      vx: dir * (move ? move.speed : 6),
      w: isBeam ? 80 : (move ? move.size : 18),
      h: isBeam ? 20 : (move ? move.size : 18),
      damage: move ? move.damage : 120,
      name: move ? move.name : 'Ki Blast',
      color: move ? (move.color || '#00cfff') : '#00cfff',
      isBeam, alive: true,
      age: 0
    };
  }

  // ─── Init ─────────────────────────────────────────────────
  function init(cfg, endCallback) {
    // Cancel any previous session
    if (animId) { cancelAnimationFrame(animId); animId = null; }
    window.removeEventListener('resize', resizeCanvas);
    document.onkeydown = null;
    document.onkeyup = null;
    keys = {};

    config = cfg;
    onBattleEnd = endCallback;

    canvas = document.getElementById('battleCanvas');
    ctx = canvas.getContext('2d');

    // Story mode: always single round unless roundFighters (multi-character) is defined
    // roundFighters = [{p1:'CharA', p2:'CharB'}, {p1:'CharC', p2:'CharB'}] → each element is a round with different chars
    const isStoryMode = !!cfg.chapterId;
    const hasMultiChar = isStoryMode && cfg.roundFighters && cfg.roundFighters.length > 1;
    const effectiveRoundsToWin = hasMultiChar ? cfg.roundFighters.length : (isStoryMode ? 1 : (cfg.roundsToWin || 2));

    // ── Tag Team setup ──────────────────────────────────────
    // Ativa tag team se qualquer um dos times tem múltiplos personagens
    const isTagTeam = !!(
      (cfg.p1Team && cfg.p1Team.length > 1) ||
      (cfg.p2Team && cfg.p2Team.length > 1)
    );
    // Normaliza times: garante que p1/p2 estejam nos respectivos teams
    const p1TeamNorm = cfg.p1Team && cfg.p1Team.length > 0 ? cfg.p1Team : [cfg.p1];
    const p2TeamNorm = cfg.p2Team && cfg.p2Team.length > 0 ? cfg.p2Team : [cfg.p2];

    const buildBench = (team, activeId) =>
      (team || [activeId]).filter(id => id !== activeId).map(id => {
        const c = CHARACTERS[id];
        return { id, hp: c ? c.stats.hp : 1000, maxHp: c ? c.stats.hp : 1000, ki: 0 };
      });

    state = {
      phase: 'intro',
      round: 1,
      roundsToWin: effectiveRoundsToWin,
      isStoryMode,
      hasMultiChar,
      roundFighters: cfg.roundFighters || null,
      timer: cfg.timer !== undefined ? cfg.timer : 60,
      timerFull: cfg.timer !== undefined ? cfg.timer : 60,
      timerTick: 0,
      p1: makeFighter(cfg.p1, 0, 'p1', cfg.p1Costume),
      p2: makeFighter(cfg.p2, 0, 'p2', cfg.p2Costume),
      projectiles: [],
      clash: null,
      introTimer: 0,
      resultTimer: 0,
      paused: false,
      vsMode: cfg.vsMode || '1v1',
      aiTimer: 0,
      storyContext: cfg.storyContext || null,
      dialogueQueue: [],
      dialogueActive: false,
      dialogueIndex: 0,
      specialFlags: {},
      fighterAlive: { p1: true, p2: true },
      // ── Tag Team ──
      isTagTeam,
      p1Bench: isTagTeam ? buildBench(p1TeamNorm, cfg.p1) : [],
      p2Bench: isTagTeam ? buildBench(p2TeamNorm, cfg.p2) : [],
      tagCooldown: { p1: 0, p2: 0 },
      tagging: { p1: false, p2: false }
    };

    window.addEventListener('resize', resizeCanvas);
    setupInput();
    setupUI();
    loadSprites();
    loadSounds();

    // Show/hide tag bench HUD panels
    ['p1','p2'].forEach(side => {
      const wrap = document.getElementById('benchHUD_wrap_' + side);
      if (wrap) wrap.style.display = isTagTeam ? 'flex' : 'none';
    });
    if (isTagTeam) updateBenchHUD();

    // Start battle music
    if (window.MusicManager) {
      const _stg = getCurrentStage(); MusicManager.forBattle(cfg.chapterId || null, _stg ? _stg.id : null, cfg.p1, cfg.p2);
    }

    if (animId) cancelAnimationFrame(animId);
    lastTime = 0;

    // Resize canvas BEFORE starting gameLoop so fighters are placed correctly.
    // Use setTimeout(0) to let the browser flush layout (screen visibility, bench HUDs, etc.)
    // before we measure dimensions. Then start the loop and the round.
    setTimeout(() => {
      resizeCanvas();
      gameLoop();
      if (cfg.preDialogue && cfg.preDialogue.length > 0) {
        state.phase = 'dialogue';
        state.dialogueQueue = cfg.preDialogue;
        state.dialogueIndex = 0;
        showDialogue(state.dialogueQueue[0]);
      } else {
        startRound();
      }
    }, 50);
  }

  function resizeCanvas() {
    // Usar getBoundingClientRect para dimensão CSS real do canvas
    const rect = canvas.getBoundingClientRect();
    let w = rect.width || canvas.offsetWidth || window.innerWidth;
    let h = rect.height || canvas.offsetHeight || window.innerHeight;
    // Se ainda zero (canvas oculto), tentar pelo parent ou window
    if (!w || !h) {
      const parent = canvas.parentElement;
      w = parent ? parent.offsetWidth : window.innerWidth;
      h = parent ? parent.offsetHeight : window.innerHeight;
    }
    canvas.width  = Math.round(w)  || 800;
    canvas.height = Math.round(h)  || 450;
    if (state && state.p1) placesFighters();
  }

  function placesFighters() {
    const h = canvas.height || canvas.parentElement?.offsetHeight || 500;
    const w = canvas.width || canvas.parentElement?.offsetWidth || 800;
    const stageData = STAGES[currentStageIndex] || STAGES[0];
    const groundY = Math.floor(h * (stageData.groundY || 0.76));
    state.p1.y = groundY - state.p1.h;
    state.p2.y = groundY - state.p2.h;
    if (state.p1.x === 0 || state.phase === 'intro') {
      state.p1.x = Math.floor(w * 0.25);
      state.p2.x = Math.floor(w * 0.72);
    }
    state.groundY = groundY;
  }

  function loadSprites() {
    [state.p1, state.p2].forEach(f => loadSpritesFor(f));
  }

  function loadSpritesFor(f) {
    const c = f.char;
    const spritePath = f.costumeSpritePath || c.spritePath;
    f.sprites = {};
    Object.keys(c.sprites).forEach(name => {
      const img = new Image();
      img.src = spritePath + c.sprites[name];
      f.sprites[name] = img;
    });
  }

  // ─── Input ────────────────────────────────────────────────
  const KEY_MAP_P1 = { a:'left', d:'right', w:'block', s:'charge', j:'punch', k:'kick', l:'fire1', u:'fire2', t:'transform', q:'tag' };
  const KEY_MAP_P2 = { arrowleft:'left', arrowright:'right', arrowup:'block', arrowdown:'charge', numpad4:'punch', numpad5:'kick', numpad6:'fire1', numpad7:'fire2', numpad8:'transform', numpad9:'tag', '4':'punch', '5':'kick', '6':'fire1', '7':'fire2', '8':'transform', '9':'tag' };

  function setupInput() {
    document.onkeydown = e => {
      const k = e.key.toLowerCase();
      if (!keys[k]) {
        keys[k] = true;
        handleKeyPress(k, e);
      }
    };
    document.onkeyup = e => { keys[e.key.toLowerCase()] = false; };
  }

  function handleKeyPress(k, e) {
    if (k === 'escape') {
      if (state.phase === 'fight') togglePause();
      return;
    }
    if (state.paused) {
      if (k === 'escape') togglePause();
      return;
    }
    if (state.phase === 'dialogue') {
      advanceDialogue();
      return;
    }
    if (state.phase === 'result') return;

    // P1 actions
    const a1 = KEY_MAP_P1[k];
    if (a1 && state.phase === 'fight') handleAction(state.p1, state.p2, a1);

    // P2 actions (only if 1v1)
    if (config.vsMode !== 'cpu') {
      const a2 = KEY_MAP_P2[k];
      if (a2 && state.phase === 'fight') handleAction(state.p2, state.p1, a2);
    }

    // Clash mashing
    if (state.clash) {
      if (KEY_MAP_P1[k]) state.clash.p1Power += 15;
      if (KEY_MAP_P2[k]) state.clash.p2Power += 15;
    }
  }

  function handleAction(f, opp, action) {
    if (f.stun > 0 || f.state === 'dead') return;
    if (action === 'block') { f.blocking = true; setFighterState(f, 'block'); return; }
    if (action === 'charge') {
      if (!f.char.hasCharge) return;
      f.charging = true; setFighterState(f, 'charge'); return;
    }
    // Movement
    if (action === 'left' || action === 'right') return; // handled in update loop

    if (f.state === 'punch' || f.state === 'kick' || f.state === 'fire1' || f.state === 'fire2') return;

    if (action === 'punch') {
      setFighterState(f, 'punch');
      f.stateTimer = 300;
      tryHit(f, opp, 'punch');
      playSound('punch');
    } else if (action === 'kick') {
      setFighterState(f, 'kick');
      f.stateTimer = 350;
      tryHit(f, opp, 'kick');
      playSound('punch');
    } else if (action === 'fire1') {
      if (!f.char.hasFire1) return;
      const cost = f.char.kiCostFire1 || 25;
      if (f.ki < cost) { flashKi(f); return; }
      // Nerf anti-spam: cooldown de 1200ms entre ki blasts
      if (f.fire1Cooldown > 0) { flashKi(f); return; }
      // Special: Guldo timestop
      if (f.char.specialType === 'timestop') {
        triggerTimestop(f, opp); return;
      }
      // Special: Ginyu bodyswap
      if (f.char.specialType === 'bodyswap') {
        triggerBodyswap(f, opp); return;
      }
      f.ki -= cost;
      setFighterState(f, 'fire1');
      f.stateTimer = 800;  // Aumentado para reduzir spam
      f.fire1Cooldown = 1200; // 1.2s de cooldown
      spawnProjectile(f, 'fire1');
      playSound('kiblast');
    } else if (action === 'fire2') {
      if (!f.char.hasFire2) return;
      const cost = f.char.kiCostFire2 || 60;
      if (f.ki < cost) { flashKi(f); return; }
      // Nerf anti-spam: cooldown de 2000ms entre ultimates
      if (f.fire2Cooldown > 0) { flashKi(f); return; }
      f.ki -= cost;
      setFighterState(f, 'fire2');
      f.stateTimer = 1000; // Aumentado
      f.fire2Cooldown = 2000; // 2s de cooldown
      spawnProjectile(f, 'fire2');
      playSound('special');
    } else if (action === 'transform') {
      triggerTransformation(f);
    } else if (action === 'tag') {
      triggerTag(f);
    }
  }

  // ── Tag Team: trocar personagem ──────────────────────────
  function triggerTag(f) {
    if (!state.isTagTeam) return;
    const side = f.side; // 'p1' or 'p2'
    const bench = state[side + 'Bench'];
    if (!bench || bench.length === 0) return;
    if (state.tagCooldown[side] > 0) { flashKi(f); return; }
    if (f.stun > 0 || f.state === 'dead') return;
    if (state.phase !== 'fight') return;

    // Save current fighter's HP/Ki to bench
    const currentEntry = { id: f.id, hp: f.hp, maxHp: f.maxHp, ki: f.ki };

    // Pop next from bench
    const next = bench.shift();

    // Push current to back of bench
    bench.push(currentEntry);

    // Spawn new fighter with saved HP
    const newFighter = makeFighter(next.id, 0, side);
    newFighter.hp    = next.hp;
    newFighter.maxHp = next.maxHp;
    newFighter.ki    = next.ki;

    // Position where old fighter was
    newFighter.x = f.x;
    newFighter.y = f.y;
    newFighter.facing = f.facing;

    state[side] = newFighter;
    state.tagCooldown[side] = 180; // ~3 seconds at 60fps

    // Flash effect
    showTagFlash(newFighter);

    // Reload sprites for new fighter
    loadSpritesFor(newFighter);
  }

  function showTagFlash(f) {
    // Show a brief "TAG IN!" overlay near the fighter
    const el = document.createElement('div');
    el.textContent = 'TAG IN!';
    el.style.cssText = 'position:absolute;left:50%;top:30%;transform:translateX(-50%);color:#fff;font-size:2rem;font-weight:bold;font-family:Orbitron,sans-serif;text-shadow:0 0 20px ' + (f.char.auraColor || '#00cfff') + ';pointer-events:none;z-index:99;animation:fadeup 0.8s forwards;';
    const bc = document.getElementById('battleCanvas')?.parentElement;
    if (bc) { bc.appendChild(el); setTimeout(() => el.remove(), 800); }
  }

  function triggerTransformation(f) {
    if (!f.char.transformation) return;
    const { targetId, kiRequired, animDuration } = f.char.transformation;
    if (f.ki < kiRequired) { flashKi(f); return; }
    if (f.transforming) return;

    // ── Verifica se a forma de destino está desbloqueada (apenas P1) ──
    const isPlayer = f.side === 'p1';
    if (isPlayer && !SaveManager.isCharUnlocked(targetId)) {
      showTransformBlocked(f, targetId);
      return;
    }

    f.transforming = true;
    f.ki = 0;
    // Animação de transformação: personagem fica "carregando" por 3s
    setFighterState(f, 'charge');
    showTransformAura(f);
    setTimeout(() => {
      if (!state.p1 || !state.p2) return;
      const targetChar = CHARACTERS[targetId];
      if (!targetChar) { f.transforming = false; return; }
      // Mantém hp proporcional
      const hpRatio = f.hp / f.maxHp;
      f.char = targetChar;
      f.id = targetId;
      f.maxHp = targetChar.stats.hp;
      f.hp = Math.floor(f.maxHp * hpRatio);
      f.color = targetChar.color || f.color;
      f.transformed = true;
      f.transforming = false;
      f.ki = 0;
      f.fire1Cooldown = 0;
      f.fire2Cooldown = 0;
      // Recarrega sprites
      const charData = targetChar;
      Object.keys(charData.sprites).forEach(name => {
        const img = new Image();
        img.src = charData.spritePath + charData.sprites[name];
        f.sprites[name] = img;
      });
      setFighterState(f, 'idle');
      updateHUD();
      showTransformAnnounce(targetChar.displayName);
    }, animDuration || 3000);
  }

  function showTransformAura(f) {
    const vfx = document.getElementById('vfxLayer');
    const aura = document.createElement('div');
    aura.className = 'transform-aura';
    aura.style.cssText = `position:absolute;left:0;top:0;right:0;bottom:0;
      background:radial-gradient(ellipse at center, ${f.color}88 0%, transparent 70%);
      animation:transformPulse 0.5s ease-in-out infinite alternate;pointer-events:none;z-index:10;`;
    vfx.appendChild(aura);
    setTimeout(() => aura.remove(), 3000);
  }

  function showTransformAnnounce(name) {
    const el = document.getElementById('roundAnnounce');
    const t = document.getElementById('roundAnnounceText');
    t.textContent = name.toUpperCase() + '!';
    el.style.display = 'flex';
    el.style.color = '#ffee00';
    setTimeout(() => {
      el.style.display = 'none';
      el.style.color = '';
    }, 2000);
  }

  function showTransformBlocked(f, targetId) {
    // Remove aviso anterior se houver
    const oldMsg = document.getElementById('transformBlockedMsg');
    if (oldMsg) oldMsg.remove();

    const targetName = (CHARACTERS[targetId] && CHARACTERS[targetId].displayName) || targetId;
    const msg = document.createElement('div');
    msg.id = 'transformBlockedMsg';
    msg.style.cssText = [
      'position:absolute',
      'top:18%',
      'left:50%',
      'transform:translateX(-50%)',
      'background:rgba(20,0,0,0.92)',
      'border:2px solid #ff4444',
      'color:#fff',
      'padding:10px 22px',
      'border-radius:8px',
      'font-size:0.95rem',
      'font-weight:bold',
      'z-index:200',
      'text-align:center',
      'pointer-events:none',
      'white-space:nowrap',
      'box-shadow:0 0 20px #ff444488'
    ].join(';');
    msg.innerHTML = `🔒 <span style="color:#ff8888">${targetName}</span> não desbloqueado!<br><span style="font-size:0.78rem;opacity:0.8">Desbloqueie essa forma para poder se transformar</span>`;

    const battleArea = document.getElementById('battleCanvas')?.parentElement || document.body;
    battleArea.style.position = battleArea.style.position || 'relative';
    battleArea.appendChild(msg);
    setTimeout(() => { if (msg.parentNode) msg.remove(); }, 2500);
  }

  function triggerTimestop(f, opp) {
    const cost = f.char.kiCostFire1 || 35;
    if (f.ki < cost) { flashKi(f); return; }
    f.ki -= cost;
    f.fire1Cooldown = 3000;
    setFighterState(f, 'fire1');
    f.stateTimer = 500;
    // Paralisa o oponente por 2 segundos
    const stunDuration = f.char.moves.fire1?.stunDuration || 2000;
    opp.stun = stunDuration;
    setFighterState(opp, 'damage');
    // Efeito visual: flash azul
    const vfx = document.getElementById('vfxLayer');
    const freeze = document.createElement('div');
    freeze.style.cssText = `position:absolute;left:0;top:0;right:0;bottom:0;
      background:rgba(150,200,255,0.25);pointer-events:none;z-index:5;
      animation:none;transition:opacity ${stunDuration}ms;`;
    vfx.appendChild(freeze);
    setTimeout(() => freeze.remove(), stunDuration);
    showMessage('TEMPO PARADO!', '#aaddff', 1500);
  }

  function triggerBodyswap(f, opp) {
    const cost = f.char.kiCostFire1 || 60;
    if (f.ki < cost) { flashKi(f); return; }
    f.ki -= cost;
    f.fire1Cooldown = 5000;
    // Projétil de bodyswap: se acertar, troca
    setFighterState(f, 'fire1');
    f.stateTimer = 600;
    const proj = {
      owner: f.side, type: 'bodyswap',
      x: f.x + (f.facing > 0 ? f.w : -30),
      y: f.y + f.h * 0.4,
      vx: f.facing * 10,
      w: 16, h: 16,
      damage: 0, name: 'Troca de Corpo',
      color: '#ff44aa', isBeam: false, alive: true, age: 0
    };
    state.projectiles.push(proj);
  }

  function applyBodyswap(f1, f2) {
    // Troca personagens mas mantém HPs e lados
    const tmpChar = f1.char, tmpId = f1.id, tmpSprites = {...f1.sprites};
    const tmpColor = f1.color;
    f1.char = f2.char; f1.id = f2.id;
    Object.keys(f2.sprites).forEach(k => f1.sprites[k] = f2.sprites[k]);
    f1.color = f2.color;
    f2.char = tmpChar; f2.id = tmpId;
    Object.keys(tmpSprites).forEach(k => f2.sprites[k] = tmpSprites[k]);
    f2.color = tmpColor;
    setFighterState(f1, 'idle');
    setFighterState(f2, 'idle');
    updateHUD();
    showMessage('TROCA DE CORPO!', '#ff44aa', 2000);
  }

  function showMessage(text, color, duration) {
    const el = document.getElementById('roundAnnounce');
    const t = document.getElementById('roundAnnounceText');
    t.textContent = text;
    el.style.display = 'flex';
    if (color) el.style.color = color;
    setTimeout(() => { el.style.display = 'none'; el.style.color = ''; }, duration || 1500);
  }

  // ─── Sound Effects Directory ──────────────────────────────
  // Sons serão adicionados em assets/sounds/
  // Estrutura esperada:
  //   assets/sounds/punch.mp3       — socos/chutes
  //   assets/sounds/kiblast.mp3     — ki blast disparado
  //   assets/sounds/kicharge.mp3    — carregando ki (loop)
  //   assets/sounds/special.mp3     — ataque especial/ultimate
  //   assets/sounds/hit.mp3         — quando um golpe conecta
  //   assets/sounds/block.mp3       — quando bloqueia
  //   assets/sounds/ko.mp3          — K.O.
  const SOUNDS = {};
  let soundEnabled = true;

  function loadSounds() {
    const soundFiles = {
      punch: 'assets/sounds/punch.mp3',
      kiblast: 'assets/sounds/kiblast.mp3',
      kicharge: 'assets/sounds/kicharge.mp3',
      special: 'assets/sounds/special.mp3',
      hit: 'assets/sounds/hit.mp3',
      block: 'assets/sounds/block.mp3',
      ko: 'assets/sounds/ko.mp3'
    };
    Object.entries(soundFiles).forEach(([key, src]) => {
      const audio = new Audio();
      audio.src = src;
      audio.preload = 'auto';
      audio.volume = 0.5;
      SOUNDS[key] = audio;
    });
  }

  function playSound(key) {
    if (!soundEnabled) return;
    if (!SOUNDS[key]) return;
    try {
      const s = SOUNDS[key].cloneNode();
      s.volume = 0.45;
      s.play().catch(() => {});
    } catch(e) {}
  }



  function setFighterState(f, s) { f.state = s; }

  function tryHit(attacker, defender, type) {
    const move = attacker.char.moves[type];
    if (!move) return;
    const dist = Math.abs(attacker.x - defender.x);
    const range = attacker.w * 1.5;
    if (dist > range) return;
    const dmg = defender.blocking ? Math.floor(move.damage * 0.2) : move.damage;
    applyDamage(defender, dmg, attacker);
  }

  function spawnProjectile(f, type) {
    const dir = f.facing;
    const px = f.x + (dir > 0 ? f.w : -30);
    const py = f.y + f.h * 0.4;
    state.projectiles.push(makeProjectile(f.side, type, px, py, dir, f.char));
  }

  function applyDamage(f, dmg, attacker) {
    if (f.state === 'dead') return;
    f.hp = Math.max(0, f.hp - dmg);
    if (!f.blocking) {
      f.stun = attacker ? (attacker.char.moves.punch?.stun || 250) : 250;
      setFighterState(f, 'damage');
      playSound('hit');
    } else {
      playSound('block');
    }
    flashScreen();
    updateHUD();
    if (f.hp <= 0) knockOut(f);
  }

  function flashScreen() {
    const vfx = document.getElementById('vfxLayer');
    const flash = document.createElement('div');
    flash.className = 'hit-flash';
    vfx.appendChild(flash);
    setTimeout(() => flash.remove(), 200);
    document.getElementById('arenaWrapper').classList.add('screen-shake');
    setTimeout(() => document.getElementById('arenaWrapper').classList.remove('screen-shake'), 300);
  }

  function flashKi(f) {
    // Visual flash on ki bar to indicate not enough ki
    const bar = document.getElementById(f.side === 'p1' ? 'hudKiFillP1' : 'hudKiFillP2');
    if (bar) { bar.style.background = '#ff4444'; setTimeout(() => bar.style.background = '', 300); }
  }

  // ─── KO & Rounds ──────────────────────────────────────────
  function knockOut(f) {
    setFighterState(f, 'dead');
    state.fighterAlive[f.side] = false;
    playSound('ko');

    // Tag Team: se ainda há membros no banco, trazer o próximo
    if (state.isTagTeam) {
      const side = f.side;
      const bench = state[side + 'Bench'];
      if (bench && bench.length > 0) {
        showKO();
        setTimeout(() => {
          if (state.phase === 'roundend' || state.phase === 'result') return;
          const next = bench.shift();
          const newFighter = makeFighter(next.id, 0, side);
          newFighter.hp    = next.hp;
          newFighter.maxHp = next.maxHp;
          newFighter.ki    = next.ki;
          newFighter.x     = f.x;
          newFighter.y     = f.y;
          newFighter.facing = f.facing;
          state[side] = newFighter;
          state.tagCooldown[side] = 0;
          loadSpritesFor(newFighter);
          showTagFlash(newFighter);
          updateBenchHUD();
        }, 1200);
        return; // não encerra o round ainda
      }
    }

    showKO();
    setTimeout(() => endRound(f.side === 'p1' ? 'p2' : 'p1'), 1800);
  }

  function showKO() {
    const ko = document.getElementById('koAnnounce');
    ko.style.display = 'flex';
    setTimeout(() => ko.style.display = 'none', 1800);
  }

  function endRound(winnerSide) {
    if (state.phase !== 'fight' && state.phase !== 'intro') return;
    state.phase = 'roundend';

    const winner = state[winnerSide];
    const loser = state[winnerSide === 'p1' ? 'p2' : 'p1'];
    winner.roundsWon++;
    updateRoundDots();

    // Check what-if conditions
    checkSpecialConditions(winnerSide);

    // Post-dialogue mid check
    if (config.midDialogue && config.midDialogue.triggerHp !== undefined) {
      const hp = loser.hp / loser.maxHp;
      if (hp <= config.midDialogue.triggerHp && !state.specialFlags.midShown) {
        state.specialFlags.midShown = true;
        setTimeout(() => {
          state.phase = 'dialogue';
          state.dialogueQueue = config.midDialogue.lines;
          state.dialogueIndex = 0;
          showDialogue(state.dialogueQueue[0]);
        }, 500);
        return;
      }
    }

    // Story mode: single fight — end match immediately after this round
    if (state.isStoryMode && !state.hasMultiChar) {
      setTimeout(() => endMatch(winnerSide), 800);
      return;
    }

    // Multi-character story mode: swap fighters each round
    if (state.hasMultiChar) {
      const nextRoundIdx = state.round; // 0-based index for next round
      if (nextRoundIdx >= state.roundFighters.length || winner.roundsWon >= state.roundsToWin) {
        // All rounds played or someone swept
        setTimeout(() => endMatch(winnerSide), 800);
      } else {
        // Swap characters for next round
        const nextFighters = state.roundFighters[nextRoundIdx];
        state.round++;
        setTimeout(() => {
          state.p1 = makeFighter(nextFighters.p1, 0, 'p1');
          state.p2 = makeFighter(nextFighters.p2, 0, 'p2');
          loadSprites();
          startRound();
        }, 2000);
      }
      return;
    }

    // Versus mode: normal rounds
    if (winner.roundsWon >= state.roundsToWin) {
      setTimeout(() => endMatch(winnerSide), 800);
    } else {
      state.round++;
      setTimeout(() => startRound(), 2000);
    }
  }

  function checkSpecialConditions(winnerSide) {
    if (!config.specialUnlock) return;
    const cond = config.specialUnlock.condition;
    if (cond === 'timer_end_raditz_alive' && winnerSide === 'p2' && state.timer <= 0) {
      SaveManager.unlockWhatif(config.specialUnlock.whatif);
      showUnlock('What If: E se Raditz fosse do bem?');
    }
    if (cond === 'yamcha_only_all_saibamans' && winnerSide === 'p1' && config.p1 === 'Yamcha') {
      SaveManager.unlockWhatif(config.specialUnlock.whatif);
      showUnlock('What If: O Plano de Yamcha');
    }
  }

  function endMatch(winnerSide) {
    state.phase = 'result';
    const winner = state[winnerSide];

    // Unlock characters and complete chapter ONLY if player won
    if (winnerSide === 'p1') {
      // Unlock characters based on chapter completion
      const unlockMap = {
        'ch2': ['Raditz'], 'ch3': ['KidGohan'], 'ch4': ['Saibaman', 'Yamcha'], 'ch5': [],
        'ch6': ['Krillin'], 'ch7': ['ScouterVegeta', 'Nappa'],
        'ch_namek1': ['Cui'], 'ch_namek2': ['Appule'],
        'ch_namek3': ['Dodoria'], 'ch_namek4': ['Zarbon'],
        'ch_namek5': ['MonsterZarbon'], 'ch_namek6': ['Guldo'],
        'ch_namek7': ['Rikum'], 'ch_namek8': ['Burter'],
        'ch_namek9': ['Jeice'], 'ch_namek10': ['Ginyu'],
        'ch_namek11': [], 'ch_namek12': [],
        'ch_namek13': ['Frieza1'], 'ch_namek14': ['Frieza2'],
        'ch_namek15': ['Frieza3'], 'ch_namek16': ['Frieza4'],
        'ch_namek17': ['NamekGoku'], 'ch_namek18': ['NamekSSJGoku'],
        'ch_namek19': ['Frieza5'],
        // Saga Androide
        'android_ch0': ['FGohan', 'FGohanSSJ'],
        'android_ch1': ['FTrunks', 'FTrunksSSJ', 'MechaFreeza', 'KingCold'],
        'android_ch2': ['A20', 'Yamcha'],
        'android_ch3': ['MidGoku', 'MidGokuSSJ', 'A19'],
        'android_ch4': ['Vegeta', 'SSJVegeta'],
        'android_ch5': [],
        'android_ch6': ['A17'],
        'android_ch7': [],
        'android_ch8': ['A18'],
        'android_ch9': ['A16', 'Piccolo'],
        // Saga Cell
        'cell_ch1':  ['Cell1'],
        'cell_ch2':  [],
        'cell_ch3':  ['Cell2'],
        'cell_ch4':  ['A16'],
        'cell_ch5':  ['Tien'],
        'cell_ch6':  ['TeenGohan'],
        'cell_ch7':  ['Cell2'],
        'cell_ch8':  ['ArmorTrunksSSJ', 'ArmorTrunksUltraSSJ'],
        'cell_ch9':  ['Cell3'],
        'cell_ch10': ['MrSatan'],
        'cell_ch11': [],
        'cell_ch12': ['TeenGohanSSJ'],
        'cell_ch13': ['CellJr'],
        'cell_ch14': ['TeenGohanSSJ2'],
        'cell_ch15': [],
      };
      if (config.chapterId && unlockMap[config.chapterId]) {
        unlockMap[config.chapterId].forEach(id => {
          if (SaveManager.unlockChar(id)) showUnlock('Personagem: ' + (CHARACTERS[id]?.displayName || id));
        });
      }
      // Costume unlock from chapter config
      if (config.costumeUnlock) {
        const { charId, costumeId } = config.costumeUnlock;
        if (SaveManager.unlockCostume(charId, costumeId)) {
          const c = CHARACTERS[charId]?.costumes?.[costumeId];
          if (c) showUnlock('Traje: ' + c.displayName);
        }
      }
      // Zeni reward
      if (config.zeniReward) {
        SaveManager.addZeni(config.zeniReward);
        showUnlock('+' + config.zeniReward + ' Zeni');
      }
      // Complete chapter and unlock what-ifs
      if (config.chapterId) {
        SaveManager.completeChapter(config.chapterId, config.unlocks);
        // Unlock what-ifs tied to chapter completion
        WHATIF_CHAPTER_UNLOCKS[config.chapterId]?.forEach(wiId => {
          if (SaveManager.unlockWhatif(wiId)) showUnlock('What-If: ' + (WHATIFS.find(w => w.id === wiId)?.title || wiId));
        });
      }
      // Unlock characters listed in config.unlocks (used by what-if chapters)
      if (config.unlocks && config.unlocks.length > 0) {
        config.unlocks.forEach(id => {
          if (CHARACTERS[id] && SaveManager.unlockChar(id)) {
            showUnlock('Personagem: ' + (CHARACTERS[id]?.displayName || id));
          }
        });
      }

      // ── Dragon Ball: 30% chance por vitória ──────────────
      const baseChance = 0.30;
      const bonusChance = (typeof DragonBallHUD !== 'undefined') ? DragonBallHUD.getBonusChance() : 0;
      const dbChance = baseChance + bonusChance;
      if (Math.random() < dbChance) {
        const got = SaveManager.addDragonBall();
        if (got) {
          const balls = SaveManager.getDragonBalls();
          setTimeout(() => {
            showUnlock(`⭐ Esfera do Dragão! (${balls}/7)`);
            if (typeof DragonBallHUD !== 'undefined') DragonBallHUD.update();
            if (balls === 7) {
              setTimeout(() => {
                if (typeof DragonBallHUD !== 'undefined') DragonBallHUD.showReadyNotice();
              }, 1200);
            }
          }, 800);
        }
      }
    }

    if (config.postDialogue && config.postDialogue.length > 0 && winnerSide === 'p1') {
      state.phase = 'dialogue';
      state.dialogueQueue = config.postDialogue;
      state.dialogueIndex = 0;
      showDialogue(state.dialogueQueue[0]);
      state.specialFlags.postDialogueDone = false;
    } else {
      showResult(winner);
    }
  }

  function showResult(winner) {
    if (window.MusicManager) MusicManager.onVictory();
    state._lastWinnerSide = winner.side;
    const rs = document.getElementById('resultScreen');
    const wn = document.getElementById('resultWinnerName');
    const sub = document.getElementById('resultSub');
    wn.textContent = winner.char.displayName;
    sub.textContent = config.chapterId ? 'Capítulo concluído! 💰 +' + (config.zeniReward || 0) + ' Zeni' : '';
    const btnNext = document.getElementById('btnResultNext');
    if (config.hasNext) btnNext.style.display = '';
    else btnNext.style.display = 'none';
    rs.style.display = 'flex';
  }

  function showUnlock(name) {
    const notif = document.getElementById('unlockNotif');
    document.getElementById('unlockName').textContent = name;
    notif.style.display = 'flex';
    setTimeout(() => notif.style.display = 'none', 3500);
  }

  // ─── Round Start ──────────────────────────────────────────
  function startRound() {
    state.phase = 'intro';
    state.timer = state.timerFull;
    state.timerTick = 0;
    state.projectiles = [];
    state.clash = null;
    state.introTimer = 0;
    state.fighterAlive = { p1: true, p2: true };
    placesFighters();
    resetFighterForRound(state.p1);
    resetFighterForRound(state.p2);
    showRoundAnnounce('ROUND ' + state.round);
  }

  function resetFighterForRound(f) {
    // In tag team, HP is preserved between rounds for active fighter
    if (!state.isTagTeam) {
      const base = f.char.stats;
      f.hp = base.hp;
    }
    f.ki = 0;
    f.stun = 0; f.blocking = false; f.charging = false;
    setFighterState(f, 'idle');
    updateHUD();
  }

  function showRoundAnnounce(text) {
    const el = document.getElementById('roundAnnounce');
    const t = document.getElementById('roundAnnounceText');
    t.textContent = text;
    el.style.display = 'flex';
    setTimeout(() => { el.style.display = 'none'; showFightAnnounce(); }, 2000);
  }

  function showFightAnnounce() {
    const el = document.getElementById('fightAnnounce');
    el.style.display = 'flex';
    setTimeout(() => { el.style.display = 'none'; state.phase = 'fight'; }, 1200);
  }

  // ─── Dialogue ─────────────────────────────────────────────
  function showDialogue(line) {
    if (!line) return;
    const box = document.getElementById('dialogueBox');
    const narr = document.getElementById('narratorBox');
    if (line.char === 'narrator') {
      box.style.display = 'none';
      narr.style.display = 'block';
      document.getElementById('narratorText').textContent = line.text;
    } else {
      narr.style.display = 'none';
      box.style.display = 'flex';
      const char = CHARACTERS[line.portrait || line.char];
      document.getElementById('dialogueSpeaker').textContent = char ? char.displayName : line.char.toUpperCase();
      document.getElementById('dialogueText').textContent = line.text;
      const portrait = document.getElementById('dialoguePortrait');
      portrait.innerHTML = '';
      if (char) {
        const img = new Image();
        img.src = char.spritePath + (char.sprites.Idle || 'Idle.png');
        portrait.appendChild(img);
      } else {
        portrait.textContent = '💬';
      }
    }
  }

  function advanceDialogue() {
    state.dialogueIndex++;
    if (state.dialogueIndex < state.dialogueQueue.length) {
      showDialogue(state.dialogueQueue[state.dialogueIndex]);
    } else {
      document.getElementById('dialogueBox').style.display = 'none';
      document.getElementById('narratorBox').style.display = 'none';
      if (state.specialFlags.postDialogueDone === false) {
        state.specialFlags.postDialogueDone = true;
        showResult(state.p1.roundsWon >= state.roundsToWin ? state.p1 : state.p2);
      } else {
        startRound();
      }
    }
  }

  // ─── Pause ────────────────────────────────────────────────
  function togglePause() {
    state.paused = !state.paused;
    document.getElementById('pauseMenu').style.display = state.paused ? 'flex' : 'none';
    if (state.paused) state.phase === 'fight' && (state.pausedPhase = state.phase);
  }

  // ── Tag Team Bench HUD ───────────────────────────────────
  function updateBenchHUD() {
    if (!state.isTagTeam) return;
    ['p1','p2'].forEach(side => {
      const bench = state[side + 'Bench'];
      const el = document.getElementById('benchHUD_' + side);
      if (!el) return;
      el.innerHTML = bench.map(entry => {
        const c = CHARACTERS[entry.id];
        const pct = Math.max(0, entry.hp / entry.maxHp);
        const col = c ? (c.auraColor || '#00cfff') : '#aaa';
        const name = c ? c.displayName : entry.id;
        return `<div class="bench-slot" title="${name}">
          <img src="${c ? c.spritePath + 'Idle.png' : ''}" onerror="this.style.display='none'" style="height:32px;image-rendering:pixelated">
          <div class="bench-hp-bar"><div class="bench-hp-fill" style="width:${(pct*100).toFixed(0)}%;background:${col}"></div></div>
        </div>`;
      }).join('');
      // Tag cooldown overlay
      const cd = state.tagCooldown[side];
      const cdEl = document.getElementById('tagCooldown_' + side);
      if (cdEl) cdEl.textContent = cd > 0 ? 'TAG ' + Math.ceil(cd/60) + 's' : 'TAG [' + (side==='p1'?'Q':'9') + ']';
    });
  }

  function setupUI() {
    document.getElementById('pauseResume').onclick = togglePause;
    document.getElementById('pauseRestart').onclick = () => { togglePause(); resetMatch(); };
    document.getElementById('pauseToMenu').onclick = () => { stop(); ScreenManager.show('mainmenu'); };
    document.getElementById('btnResultRematch').onclick = resetMatch;
    document.getElementById('btnResultMenu').onclick = () => {
      const ws = state._lastWinnerSide;
      stop();
      if (onBattleEnd) onBattleEnd('menu', ws);
      else ScreenManager.show('mainmenu');
    };
    document.getElementById('btnResultNext').onclick = () => {
      const ws = state._lastWinnerSide;
      stop();
      if (onBattleEnd) onBattleEnd('next', ws);
    };
    const dialogueBox = document.getElementById('dialogueBox');
    const narratorBox = document.getElementById('narratorBox');
    dialogueBox.onclick = advanceDialogue;
    narratorBox.onclick = advanceDialogue;
  }

  function resetMatch() {
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('pauseMenu').style.display = 'none';
    state.p1.roundsWon = 0; state.p2.roundsWon = 0;
    state.round = 1;
    startRound();
  }

  // ─── HUD ──────────────────────────────────────────────────
  function updateHUD() {
    const p1 = state.p1, p2 = state.p2;
    // HP — sistema 3 camadas estilo BT3/Xenoverse 2
    // Verde cobre 100% → some abaixo de 33%
    // Amarelo cobre 100% → some abaixo de 66%
    // Vermelho sempre visível (base)
    const hp1 = Math.max(0, p1.hp / p1.maxHp);
    const hp2 = Math.max(0, p2.hp / p2.maxHp);

    // P1 — barras crescem da esquerda
    const g1 = document.getElementById('hudHpGreenP1');
    const y1 = document.getElementById('hudHpYellowP1');
    if (g1) g1.style.width = (Math.max(0, (hp1 - 0.667) / 0.333) * 100) + '%';
    if (y1) y1.style.width = (Math.max(0, Math.min(1, (hp1 - 0.333) / 0.334)) * 100) + '%';

    // P2 — barras crescem da direita
    const g2 = document.getElementById('hudHpGreenP2');
    const y2 = document.getElementById('hudHpYellowP2');
    if (g2) g2.style.width = (Math.max(0, (hp2 - 0.667) / 0.333) * 100) + '%';
    if (y2) y2.style.width = (Math.max(0, Math.min(1, (hp2 - 0.333) / 0.334)) * 100) + '%';

    const n1 = document.getElementById('hudHpNumP1');
    const n2 = document.getElementById('hudHpNumP2');
    if (n1) n1.textContent = Math.ceil(p1.hp);
    if (n2) n2.textContent = Math.ceil(p2.hp);
    // KI
    const ki1 = p1.ki / p1.maxKi;
    const ki2 = p2.ki / p2.maxKi;
    const kf1 = document.getElementById('hudKiFillP1');
    const kf2 = document.getElementById('hudKiFillP2');
    if (kf1) kf1.style.width = (ki1*100)+'%';
    if (kf2) { kf2.style.width = (ki2*100)+'%'; kf2.style.marginLeft = (100-ki2*100)+'%'; }
    // Highlight Ki cheio (pode se transformar)
    if (kf1 && p1.char.transformation) kf1.style.boxShadow = ki1 >= 1 ? '0 0 8px 2px #ffee00' : '';
    if (kf2 && p2.char.transformation) kf2.style.boxShadow = ki2 >= 1 ? '0 0 8px 2px #ffee00' : '';
    // Timer
    const timer = document.getElementById('hudTimer');
    if (timer) { timer.textContent = state.timer <= 0 ? '∞' : Math.ceil(state.timer); timer.className = 'hud-timer' + (state.timer < 10 && state.timer > 0 ? ' low' : ''); }
    // Nomes
    const hn1 = document.getElementById('hudNameP1'); const hn2 = document.getElementById('hudNameP2');
    if (hn1) hn1.textContent = p1.char.displayName;
    if (hn2) hn2.textContent = p2.char.displayName;
    // Indicador de transformação disponível
    const ti1 = document.getElementById('hudTransformP1'); const ti2 = document.getElementById('hudTransformP2');
    if (ti1) ti1.style.display = (p1.char.transformation && ki1 >= 1) ? 'flex' : 'none';
    if (ti2) ti2.style.display = (p2.char.transformation && ki2 >= 1) ? 'flex' : 'none';
  }

  function updateRoundDots() {
    ['p1','p2'].forEach(side => {
      const el = document.getElementById('hudRounds' + (side === 'p1' ? 'P1' : 'P2'));
      if (!el) return;
      el.innerHTML = '';
      // Story mode (single fight): hide dots
      if (state.isStoryMode && !state.hasMultiChar) return;
      for (let i = 0; i < state.roundsToWin; i++) {
        const dot = document.createElement('div');
        dot.className = 'hud-round-dot' + (i < state[side].roundsWon ? ' won' : '');
        el.appendChild(dot);
      }
    });
    const rd = document.getElementById('hudRound');
    if (rd) {
      if (state.isStoryMode && !state.hasMultiChar) {
        rd.textContent = '';
      } else {
        rd.textContent = 'RD ' + state.round;
      }
    }
  }

  // ─── AI ───────────────────────────────────────────────────
  function updateAI(dt) {
    if (config.vsMode !== 'cpu') return;
    state.aiTimer -= dt;
    const ai = state.p2, player = state.p1;
    const dist = Math.abs(ai.x - player.x);
    const diff = config.aiDifficulty || 'medium';
    const reactionTime = diff === 'easy' ? 800 : diff === 'hard' ? 200 : diff === 'veryhard' ? 100 : 450;

    if (ai.state === 'dead' || ai.stun > 0) return;

    // ── AI: Transformação automática ────────────────────────
    // CPU se transforma em qualquer modo (inclusive história com tag team)
    if (ai.char.transformation && !ai.transforming && !ai.transformed) {
      const kiReq = ai.char.transformation.kiRequired || 100;
      const transformChance = diff === 'easy' ? 0.3 : diff === 'hard' ? 0.85 : diff === 'veryhard' ? 0.98 : 0.6;
      if (ai.ki >= kiReq && Math.random() < transformChance) {
        handleAction(ai, player, 'transform');
      }
    }

    // ── AI: Tag Team — trocar quando HP baixo ───────────────
    if (state.isTagTeam && state.tagCooldown['p2'] === 0) {
      const hpPct = ai.hp / ai.maxHp;
      // Chance de trocar aumenta conforme HP cai
      const tagThreshold = diff === 'easy' ? 0.15 : diff === 'hard' ? 0.40 : diff === 'veryhard' ? 0.55 : 0.28;
      const tagChance    = diff === 'easy' ? 0.3  : diff === 'hard' ? 0.7  : diff === 'veryhard' ? 0.9  : 0.5;
      if (hpPct < tagThreshold && state.p2Bench && state.p2Bench.length > 0 && Math.random() < tagChance) {
        triggerTag(ai);
        return;
      }
    }

    if (state.aiTimer > 0) {
      // Move toward player
      if (dist > 100) {
        ai.vx = ai.x > player.x ? -2 : 2;
        if (ai.state === 'idle') setFighterState(ai, 'walk');
      } else {
        ai.vx = 0;
        if (ai.state === 'walk') setFighterState(ai, 'idle');
      }
      return;
    }
    state.aiTimer = reactionTime;

    // ── Sempre limpa charging antes de tomar nova decisão ───
    if (ai.charging) {
      ai.charging = false;
      if (ai.state === 'charge') setFighterState(ai, 'idle');
    }

    // ── AI: Carregar ki quando longe e ki baixo ─────────────
    const kiCostFire1 = ai.char.kiCostFire1 || 25;
    const kiCostFire2 = ai.char.kiCostFire2 || 60;
    if (ai.ki < kiCostFire1 * 0.5 && dist > 150 && Math.random() < 0.4 && ai.char.hasCharge) {
      ai.charging = true; setFighterState(ai, 'charge');
      // Auto-para charge após 800-1200ms
      setTimeout(() => { if (ai.charging) { ai.charging = false; if (ai.state === 'charge') setFighterState(ai, 'idle'); } }, 800 + Math.random() * 400);
      return;
    }

    // ── AI decisions ────────────────────────────────────────
    if (dist < 80) {
      const r = Math.random();
      if (r < 0.4) handleAction(ai, player, 'punch');
      else if (r < 0.65) handleAction(ai, player, 'kick');
      else if (r < 0.75 && ai.char.hasCharge) {
        ai.charging = true; setFighterState(ai, 'charge');
        setTimeout(() => { if (ai.charging) { ai.charging = false; if (ai.state === 'charge') setFighterState(ai, 'idle'); } }, 600 + Math.random() * 300);
      }
      else if (r < 0.9) { ai.blocking = true; setFighterState(ai, 'block'); setTimeout(() => { if(ai.state === 'block'){ai.blocking=false;setFighterState(ai,'idle');} }, 400); }
    } else if (dist < 250 && ai.ki > kiCostFire1) {
      if (Math.random() < 0.4) handleAction(ai, player, 'fire1');
      else if (dist > 150) { ai.vx = ai.x > player.x ? -3 : 3; if (ai.state === 'idle') setFighterState(ai, 'walk'); }
    } else {
      ai.vx = ai.x > player.x ? -3 : 3;
      if (ai.state === 'idle') setFighterState(ai, 'walk');
    }
    if (ai.ki > kiCostFire2 && dist < 300 && Math.random() < 0.15 && diff !== 'easy') {
      handleAction(ai, player, 'fire2');
    }
  }

  // ─── Game Loop ────────────────────────────────────────────
  let lastTime = 0;
  function gameLoop(ts = 0) {
    animId = requestAnimationFrame(gameLoop);
    // Skip first frame spike; clamp dt
    const dt = lastTime === 0 ? 16 : Math.min(ts - lastTime, 50);
    lastTime = ts;
    if (!state || !state.p1) return;
    // Don't render until canvas has real dimensions
    if (!canvas || !canvas.width || canvas.width < 100) return;
    // Always render so background/fighters show during intro/dialogue
    render();
    if (state.paused || state.phase === 'dialogue' || state.phase === 'intro' || state.phase === 'roundend' || state.phase === 'result') return;
    if (state.phase === 'fight') update(dt);
  }

  function update(dt) {
    const p1 = state.p1, p2 = state.p2;

    // Timer
    if (state.timerFull > 0) {
      state.timerTick += dt;
      if (state.timerTick >= 1000) {
        state.timerTick -= 1000;
        state.timer--;
        if (state.timer <= 0) {
          state.timer = 0;
          // Time up — higher HP wins
          const winner = p1.hp >= p2.hp ? 'p1' : 'p2';
          endRound(winner);
          return;
        }
      }
    }
    updateHUD();

    updateAI(dt);

    // Movement P1 (always player controlled)
    if (p1.state !== 'dead' && p1.stun <= 0) {
      if (keys['a']) { p1.vx = -3; setFighterState(p1, 'walk'); }
      else if (keys['d']) { p1.vx = 3; setFighterState(p1, 'walk'); }
      else p1.vx = 0;
      if (!keys['s'] && !keys['w'] && p1.state === 'walk' && p1.vx === 0) setFighterState(p1, 'idle');
      if (keys['w']) { p1.blocking = true; if(p1.state !== 'block') setFighterState(p1, 'block'); }
      else { p1.blocking = false; if(p1.state === 'block') setFighterState(p1, 'idle'); }
      if (keys['s'] && p1.char.hasCharge) { p1.charging = true; setFighterState(p1, 'charge'); }
      else { p1.charging = false; if(p1.state === 'charge') setFighterState(p1, 'idle'); }
    }

    // Movement P2 (only if not CPU)
    if (config.vsMode !== 'cpu' && p2.state !== 'dead' && p2.stun <= 0) {
      if (keys['arrowleft']) { p2.vx = -3; setFighterState(p2, 'walk'); }
      else if (keys['arrowright']) { p2.vx = 3; setFighterState(p2, 'walk'); }
      else p2.vx = 0;
      if (!keys['arrowdown'] && !keys['arrowup'] && p2.state === 'walk' && p2.vx === 0) setFighterState(p2, 'idle');
      if (keys['arrowup']) { p2.blocking = true; if(p2.state !== 'block') setFighterState(p2, 'block'); }
      else { p2.blocking = false; if(p2.state === 'block') setFighterState(p2, 'idle'); }
      if (keys['arrowdown'] && p2.char.hasCharge) { p2.charging = true; setFighterState(p2, 'charge'); }
      else { p2.charging = false; if(p2.state === 'charge') setFighterState(p2, 'idle'); }
    }

    // CPU movement
    if (config.vsMode === 'cpu') {
      if (p2.state !== 'dead' && p2.stun <= 0) {
        const dir = p2.x > p1.x ? -1 : 1;
        if (p2.state === 'idle' || p2.state === 'walk') {
          // Already handled in updateAI
        }
      }
    }

    // Apply movement
    [p1, p2].forEach(f => {
      if (f.state === 'dead') return;
      f.x += f.vx * (dt / 16);
      // Clamp to canvas
      f.x = Math.max(0, Math.min(canvas.width - f.w, f.x));
      // Update facing
      const other = f.side === 'p1' ? p2 : p1;
      f.facing = f.x < other.x ? 1 : -1;
      // Stun cooldown
      if (f.stun > 0) {
        f.stun -= dt;
        if (f.stun <= 0) { f.stun = 0; setFighterState(f, 'idle'); }
      }
      // State timer
      if (f.stateTimer > 0) {
        f.stateTimer -= dt;
        if (f.stateTimer <= 0) {
          f.stateTimer = 0;
          if (['punch','kick','fire1','fire2'].includes(f.state)) setFighterState(f, 'idle');
        }
      }
      // Fire cooldowns
      if (f.fire1Cooldown > 0) f.fire1Cooldown = Math.max(0, f.fire1Cooldown - dt);
      if (f.fire2Cooldown > 0) f.fire2Cooldown = Math.max(0, f.fire2Cooldown - dt);
      // Ki charge
      if (f.charging && f.ki < f.maxKi) {
        f.ki = Math.min(f.maxKi, f.ki + f.char.kiPerCharge * (dt / 1000) * 30);
      }
    });

    // Tag cooldown decrement
    if (state.isTagTeam) {
      ['p1','p2'].forEach(side => {
        if (state.tagCooldown[side] > 0) state.tagCooldown[side]--;
      });
      updateBenchHUD();
    }

    // Projectiles
    state.projectiles.forEach(p => {
      if (!p.alive) return;
      p.x += p.vx * (dt / 16);
      p.age += dt;
      if (p.x < -p.w || p.x > canvas.width + p.w) { p.alive = false; return; }

      // Check hit on opponent
      const target = p.owner === 'p1' ? p2 : p1;
      if (rectsOverlap(p, target)) {
        if (p.type === 'bodyswap') {
          applyBodyswap(p.owner === 'p1' ? p1 : p2, target);
        } else if (!target.blocking) {
          applyDamage(target, p.damage, null);
        } else {
          applyDamage(target, Math.floor(p.damage * 0.1), null);
        }
        p.alive = false;
      }
      // Clash: p1 blast meets p2 blast
      state.projectiles.forEach(p2b => {
        if (!p2b.alive || p2b.owner === p.owner) return;
        if (rectsOverlap(p, p2b)) {
          startClash(p, p2b);
          p.alive = false; p2b.alive = false;
        }
      });
    });
    state.projectiles = state.projectiles.filter(p => p.alive && p.age < 5000);

    // Clash update
    if (state.clash) {
      state.clash.timer -= dt;
      if (state.clash.timer <= 0) {
        const winner = state.clash.p1Power >= state.clash.p2Power ? 'p1' : 'p2';
        const loser = winner === 'p1' ? p2 : p1;
        applyDamage(loser, 200, null);
        document.getElementById('clashLayer').style.display = 'none';
        state.clash = null;
      } else {
        const total = state.clash.p1Power + state.clash.p2Power;
        const p1w = total > 0 ? (state.clash.p1Power / total * 100) : 50;
        document.getElementById('clashBarP1').style.width = p1w + '%';
        document.getElementById('clashBarP2').style.width = (100 - p1w) + '%';
      }
    }
  }

  function startClash(proj1, proj2) {
    state.clash = { timer: 3000, p1Power: 50, p2Power: 50, projX: (proj1.x + proj2.x) / 2 };
    document.getElementById('clashLayer').style.display = 'flex';
    setTimeout(() => { if (state.clash) {
      const winner = state.clash.p1Power >= state.clash.p2Power ? 'p1' : 'p2';
      const loser = winner === 'p1' ? state.p2 : state.p1;
      applyDamage(loser, 180, null);
      document.getElementById('clashLayer').style.display = 'none';
      state.clash = null;
    }}, 3000);
  }

  function rectsOverlap(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }

  // ─── Render ───────────────────────────────────────────────
  function render() {
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const stage = STAGES[currentStageIndex] || STAGES[0];
    drawBackground(stage, w, h);
    drawProjectiles();
    drawFighter(state.p1, w, h);
    drawFighter(state.p2, w, h);
  }

  function drawBackground(stage, w, h) {
    const now = Date.now();
    // Sky gradient
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, stage.bgColor[0]);
    grad.addColorStop(1, stage.bgColor[1]);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    const gy = Math.floor(h * (stage.groundY || 0.76));
    state.groundY = gy;

    // Draw stage elements BEHIND ground
    if (stage.elements) stage.elements.forEach(el => drawStageElement(el, w, h, gy, now, 'bg'));

    // Ground
    const groundGrad = ctx.createLinearGradient(0, gy, 0, h);
    groundGrad.addColorStop(0, stage.groundColor);
    groundGrad.addColorStop(1, '#000');
    ctx.fillStyle = groundGrad;
    ctx.fillRect(0, gy, w, h - gy);

    // Ground line
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, gy);
    ctx.lineTo(w, gy);
    ctx.stroke();

    // Draw stage elements ON TOP of ground
    if (stage.elements) stage.elements.forEach(el => drawStageElement(el, w, h, gy, now, 'fg'));

    // Stage name
    ctx.font = '11px Orbitron, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.textAlign = 'center';
    ctx.fillText(stage.name.toUpperCase(), w/2, h - 12);
    ctx.textAlign = 'left';
  }

  // _starCache: pre-generate star positions per stage
  const _starCache = {};
  function getStars(stageId, w, h) {
    const key = stageId + '_' + w + '_' + h;
    if (_starCache[key]) return _starCache[key];
    const stars = [];
    for (let i = 0; i < 80; i++) {
      stars.push({ x: Math.random() * w, y: Math.random() * h * 0.72, r: Math.random() * 1.5 + 0.3, phase: Math.random() * Math.PI * 2 });
    }
    _starCache[key] = stars;
    return stars;
  }

  function drawStageElement(el, w, h, gy, now, pass) {
    ctx.save();
    ctx.globalAlpha = 1;
    switch (el.type) {
      // ── BG PASS ONLY ──
      case 'stars': if (pass !== 'bg') break; {
        const stars = getStars('s', w, h);
        stars.forEach(s => {
          const alpha = 0.5 + 0.5 * Math.sin(now / 800 + s.phase);
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
          ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(2)})`;
          ctx.fill();
        });
      } break;

      case 'sun': if (pass !== 'bg') break; {
        const sx = el.x * w, sy = el.y * h;
        // Glow
        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, el.r * 2.5);
        glow.addColorStop(0, el.color + 'cc');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath(); ctx.arc(sx, sy, el.r * 2.5, 0, Math.PI*2); ctx.fill();
        // Sun disc
        ctx.beginPath(); ctx.arc(sx, sy, el.r, 0, Math.PI*2);
        ctx.fillStyle = el.color; ctx.fill();
      } break;

      case 'moon': if (pass !== 'bg') break; {
        const mx = el.x * w, my = el.y * h;
        const glow = ctx.createRadialGradient(mx, my, 0, mx, my, el.r * 2.2);
        glow.addColorStop(0, 'rgba(255,250,200,0.25)');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath(); ctx.arc(mx, my, el.r * 2.2, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(mx, my, el.r, 0, Math.PI*2);
        ctx.fillStyle = el.color; ctx.fill();
        // Moon craters
        ctx.fillStyle = 'rgba(180,170,140,0.4)';
        ctx.beginPath(); ctx.arc(mx - el.r*0.25, my - el.r*0.15, el.r*0.15, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(mx + el.r*0.3, my + el.r*0.2, el.r*0.10, 0, Math.PI*2); ctx.fill();
      } break;

      case 'cloud': if (pass !== 'bg') break; {
        const cx = el.x * w, cy = el.y * h;
        const drift = Math.sin(now / 6000) * 8;
        ctx.fillStyle = 'rgba(255,255,255,0.82)';
        [[0,0,el.h*0.7],[el.w*0.25,-el.h*0.35,el.h*0.85],[el.w*0.55,-el.h*0.2,el.h*0.7],[el.w*0.8,el.h*0.05,el.h*0.55]].forEach(([ox,oy,r]) => {
          ctx.beginPath(); ctx.arc(cx + ox + drift, cy + oy, r, 0, Math.PI*2); ctx.fill();
        });
      } break;

      case 'cloud_dark': if (pass !== 'bg') break; {
        const cx = el.x * w, cy = el.y * h;
        ctx.fillStyle = 'rgba(30,10,60,0.55)';
        [[0,0,el.h*0.7],[el.w*0.3,-el.h*0.3,el.h*0.8],[el.w*0.6,-el.h*0.1,el.h*0.6],[el.w*0.85,0,el.h*0.5]].forEach(([ox,oy,r]) => {
          ctx.beginPath(); ctx.arc(cx+ox, cy+oy, r, 0, Math.PI*2); ctx.fill();
        });
      } break;

      case 'planet': if (pass !== 'bg') break; {
        const px = el.x * w, py = el.y * h;
        const pg = ctx.createRadialGradient(px - el.r*0.3, py - el.r*0.3, 0, px, py, el.r);
        pg.addColorStop(0, el.color); pg.addColorStop(1, el.color2);
        ctx.beginPath(); ctx.arc(px, py, el.r, 0, Math.PI*2);
        ctx.fillStyle = pg; ctx.fill();
        // Ring
        ctx.save(); ctx.translate(px, py); ctx.scale(1, 0.28);
        ctx.beginPath(); ctx.arc(0, 0, el.r * 1.55, 0, Math.PI*2);
        ctx.strokeStyle = el.color + '88'; ctx.lineWidth = 7; ctx.stroke();
        ctx.restore();
      } break;

      case 'mountain': if (pass !== 'bg') break; {
        const peaks = el.peaks || [[0,0.76],[0.15,0.50],[0.30,0.76]];
        ctx.beginPath();
        ctx.moveTo(el.x * w + peaks[0][0]*w*0.35, peaks[0][1]*h);
        peaks.forEach(([px,py]) => ctx.lineTo(el.x * w + px * w * 0.35, py * h));
        ctx.closePath();
        ctx.fillStyle = el.color; ctx.fill();
        // Snow cap
        ctx.fillStyle = 'rgba(255,255,255,0.25)';
        const top = peaks.reduce((a,b) => b[1] < a[1] ? b : a);
        ctx.beginPath();
        ctx.arc(el.x*w + top[0]*w*0.35, top[1]*h, 18, 0, Math.PI*2); ctx.fill();
      } break;

      case 'grid': if (pass !== 'bg') break; {
        ctx.strokeStyle = 'rgba(180,180,220,0.18)'; ctx.lineWidth = 1;
        for (let x2 = 0; x2 < w; x2 += 40) { ctx.beginPath(); ctx.moveTo(x2,0); ctx.lineTo(x2,gy); ctx.stroke(); }
        for (let y2 = 0; y2 < gy; y2 += 40) { ctx.beginPath(); ctx.moveTo(0,y2); ctx.lineTo(w,y2); ctx.stroke(); }
      } break;

      case 'grid_dark': if (pass !== 'bg') break; {
        ctx.strokeStyle = 'rgba(0,150,255,0.12)'; ctx.lineWidth = 1;
        for (let x2 = 0; x2 < w; x2 += 50) { ctx.beginPath(); ctx.moveTo(x2,0); ctx.lineTo(x2,h); ctx.stroke(); }
        for (let y2 = 0; y2 < h; y2 += 50) { ctx.beginPath(); ctx.moveTo(0,y2); ctx.lineTo(w,y2); ctx.stroke(); }
      } break;

      case 'glow': if (pass !== 'bg') break; {
        const gx = el.x * w, gy2 = el.y * h;
        const gg = ctx.createRadialGradient(gx, gy2, 0, gx, gy2, el.r);
        gg.addColorStop(0, el.color); gg.addColorStop(1, 'transparent');
        ctx.fillStyle = gg;
        ctx.beginPath(); ctx.arc(gx, gy2, el.r, 0, Math.PI*2); ctx.fill();
      } break;

      case 'spotlight': if (pass !== 'bg') break; {
        const sx = el.x * w;
        const sg = ctx.createLinearGradient(sx, 0, sx, gy);
        sg.addColorStop(0, el.color); sg.addColorStop(1, 'transparent');
        ctx.fillStyle = sg;
        ctx.beginPath();
        ctx.moveTo(sx, 0);
        ctx.lineTo(sx - 80, gy); ctx.lineTo(sx + 80, gy);
        ctx.closePath(); ctx.fill();
      } break;

      case 'void_mist': if (pass !== 'bg') break; {
        ctx.fillStyle = el.color; ctx.fillRect(0, 0, w, h);
      } break;

      case 'fire_bg': if (pass !== 'bg') break; {
        const pulse = 0.85 + 0.15 * Math.sin(now / 300);
        const fg = ctx.createLinearGradient(0, gy * 0.5, 0, gy);
        fg.addColorStop(0, 'transparent');
        fg.addColorStop(1, el.color.replace('0.12', String((0.12 * pulse).toFixed(2))));
        ctx.fillStyle = fg; ctx.fillRect(0, 0, w, h);
      } break;

      case 'dust': if (pass !== 'bg') break; {
        ctx.fillStyle = el.color; ctx.fillRect(0, 0, w, h);
      } break;

      // ── FG PASS ONLY ──
      case 'building': if (pass !== 'fg') break; {
        const bx = el.x * w - el.w/2, by = gy - el.h;
        // Body
        ctx.fillStyle = el.color;
        ctx.fillRect(bx, by + el.roofH, el.w, el.h - el.roofH);
        // Roof (triangle)
        ctx.fillStyle = el.roof;
        ctx.beginPath();
        ctx.moveTo(bx - 10, by + el.roofH);
        ctx.lineTo(bx + el.w/2, by);
        ctx.lineTo(bx + el.w + 10, by + el.roofH);
        ctx.closePath(); ctx.fill();
        // Window
        ctx.fillStyle = '#ffe090';
        ctx.fillRect(bx + el.w*0.35, by + el.roofH + 15, el.w*0.3, el.h*0.25);
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.strokeStyle = '#aaa'; ctx.lineWidth = 1.5;
        ctx.strokeRect(bx + el.w*0.35, by + el.roofH + 15, el.w*0.3, el.h*0.25);
        // Door
        ctx.fillStyle = '#8b5a2b';
        ctx.beginPath();
        ctx.roundRect(bx + el.w*0.42, gy - el.h*0.3, el.w*0.16, el.h*0.3, [4,4,0,0]);
        ctx.fill();
      } break;

      case 'water': if (pass !== 'fg') break; {
        const wave = Math.sin(now / 600) * 3;
        ctx.fillStyle = el.color;
        ctx.fillRect(0, gy + 4 + wave, w, h - gy);
        ctx.strokeStyle = 'rgba(180,220,255,0.4)'; ctx.lineWidth = 2;
        for (let wx = 0; wx < w; wx += 60) {
          ctx.beginPath();
          ctx.moveTo(wx, gy + 10 + wave);
          ctx.quadraticCurveTo(wx+20, gy + 5 + wave, wx+40, gy + 10 + wave);
          ctx.stroke();
        }
      } break;

      case 'palm': if (pass !== 'fg') break; {
        const px = el.x * w, py = el.y * h;
        // Trunk
        ctx.strokeStyle = '#7a5230'; ctx.lineWidth = 7; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + 5, py - 60); ctx.stroke();
        // Leaves
        ctx.fillStyle = '#2d7a2d';
        [[-30,-12],[10,-20],[30,-8],[-10,-22],[20,-15]].forEach(([lx,ly]) => {
          ctx.beginPath();
          ctx.ellipse(px + 5 + lx/2, py - 60 + ly/2, Math.abs(lx)||18, 8, Math.atan2(ly,lx), 0, Math.PI*2);
          ctx.fill();
        });
      } break;

      case 'rock': if (pass !== 'fg') break; {
        const rx = el.x * w - el.w/2, ry = gy - el.h + 5;
        ctx.fillStyle = el.color;
        ctx.beginPath();
        ctx.moveTo(rx, gy + 2);
        ctx.lineTo(rx + el.w*0.15, ry);
        ctx.lineTo(rx + el.w*0.5, ry - el.h*0.15);
        ctx.lineTo(rx + el.w*0.85, ry);
        ctx.lineTo(rx + el.w, gy + 2);
        ctx.closePath(); ctx.fill();
        // Highlight
        ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(rx + el.w*0.2, ry + 4);
        ctx.lineTo(rx + el.w*0.5, ry - el.h*0.12);
        ctx.stroke();
      } break;

      case 'crack': if (pass !== 'fg') break; {
        ctx.strokeStyle = 'rgba(0,0,0,0.4)'; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(el.x1 * w, el.y1 * h);
        ctx.lineTo(el.x2 * w, el.y2 * h);
        ctx.stroke();
      } break;

      case 'pillar': if (pass !== 'fg') break; {
        const ph = h * el.h;
        ctx.fillStyle = el.color;
        ctx.fillRect(el.x * w, gy - ph, 22, ph);
        ctx.fillStyle = 'rgba(255,255,255,0.08)';
        ctx.fillRect(el.x * w, gy - ph, 5, ph);
      } break;

      case 'pillar_white': if (pass !== 'fg') break; {
        const ph2 = h * el.h;
        ctx.fillStyle = 'rgba(240,240,255,0.5)';
        ctx.fillRect(el.x * w - 12, gy - ph2, 24, ph2);
        ctx.strokeStyle = 'rgba(200,200,255,0.3)'; ctx.lineWidth = 1;
        ctx.strokeRect(el.x * w - 12, gy - ph2, 24, ph2);
      } break;

      case 'pillar_blue': if (pass !== 'fg') break; {
        const ph3 = h * el.h;
        ctx.fillStyle = 'rgba(0,80,160,0.5)';
        ctx.fillRect(el.x * w - 10, gy - ph3, 20, ph3);
        ctx.strokeStyle = 'rgba(0,150,255,0.5)'; ctx.lineWidth = 1.5;
        ctx.strokeRect(el.x * w - 10, gy - ph3, 20, ph3);
      } break;

      case 'arena_ring': if (pass !== 'fg') break; {
        // Draw ring lines on ground
        ctx.strokeStyle = el.lineColor; ctx.lineWidth = 3;
        ctx.setLineDash([10, 12]);
        ctx.beginPath();
        ctx.ellipse(w/2, gy + 8, w * 0.42, 16, 0, 0, Math.PI*2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.strokeStyle = 'rgba(255,240,160,0.25)'; ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(w*0.08, gy); ctx.lineTo(w*0.92, gy);
        ctx.stroke();
      } break;

      case 'crowd_blur': if (pass !== 'fg') break; {
        ctx.fillStyle = el.color;
        ctx.fillRect(0, gy + 22, w, h - gy);
      } break;

      case 'crater': if (pass !== 'fg') break; {
        const cg = ctx.createRadialGradient(el.x*w, gy+2, 0, el.x*w, gy+2, el.rx);
        cg.addColorStop(0, el.color); cg.addColorStop(1, 'transparent');
        ctx.fillStyle = cg;
        ctx.beginPath();
        ctx.ellipse(el.x*w, gy+2, el.rx, el.ry, 0, 0, Math.PI*2);
        ctx.fill();
      } break;

      case 'namek_grass': if (pass !== 'fg') break; {
        for (let gx2 = 30; gx2 < w; gx2 += 45) {
          const wave = Math.sin(now/800 + gx2*0.05) * 3;
          ctx.strokeStyle = el.color; ctx.lineWidth = 3; ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(gx2, gy);
          ctx.quadraticCurveTo(gx2 + wave, gy - 18, gx2 + wave*1.5, gy - 26);
          ctx.stroke();
        }
      } break;

      case 'grass': if (pass !== 'fg') break; {
        for (let gx3 = 20; gx3 < w; gx3 += 55) {
          ctx.strokeStyle = el.color; ctx.lineWidth = 2; ctx.lineCap = 'round';
          ctx.beginPath(); ctx.moveTo(gx3, gy); ctx.lineTo(gx3 + 4, gy - 14); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(gx3+8, gy); ctx.lineTo(gx3 + 12, gy - 10); ctx.stroke();
        }
      } break;

      case 'energy_lines': if (pass !== 'fg') break; {
        const t = now / 400;
        for (let i = 0; i < 5; i++) {
          const lx = ((t * 60 + i * (w/5)) % w);
          const alpha = 0.08 + 0.06 * Math.sin(t + i);
          ctx.strokeStyle = `rgba(0,150,255,${alpha.toFixed(2)})`; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(lx, 0); ctx.lineTo(lx, h); ctx.stroke();
        }
      } break;
    }
    ctx.restore();
  }

  const CHAR_COLORS = {
    EarlyGoku: '#ff9c00', KidGohan: '#ffcc00', Krillin: '#ff6600', Piccolo: '#00aa44',
    Raditz: '#884400', Nappa: '#cc0000', ScouterVegeta: '#7700cc', Tien: '#4466cc',
    Yamcha: '#cc4400', Yajirobe: '#997700', Saibaman: '#336600'
  };

  const CHAR_EMOJI = {
    EarlyGoku: '🟠', KidGohan: '🟡', Krillin: '🔴', Piccolo: '🟢',
    Raditz: '🟤', Nappa: '🔴', ScouterVegeta: '🟣', Tien: '🔵',
    Yamcha: '🟠', Yajirobe: '🟤', Saibaman: '🟢'
  };

  function drawFighter(f, w, h) {
    const x = Math.round(f.x), y = Math.round(f.y);
    const fw = f.w, fh = f.h;
    const cx = x + fw / 2;
    const cy = y + fh / 2;

    // ── Charge aura — desenhada ANTES do sprite (por baixo) ──
    if (f.charging) {
      const baseHex = f.char.auraColor || (f.side === 'p1' ? '#00cfff' : '#ff6400');
      const t = Date.now();
      const pulse  = 0.92 + 0.08 * Math.sin(t / 90);
      const pulse2 = 0.85 + 0.15 * Math.sin(t / 60 + 1.2);

      ctx.save();

      // Camada 1: halo externo suave
      const grd = ctx.createRadialGradient(cx, cy, fw * 0.1, cx, cy, fw * 1.5 * pulse);
      grd.addColorStop(0,   baseHex + 'cc');
      grd.addColorStop(0.4, baseHex + '55');
      grd.addColorStop(1,   baseHex + '00');
      ctx.fillStyle = grd;
      ctx.shadowColor = baseHex;
      ctx.shadowBlur  = 24;
      ctx.beginPath();
      ctx.ellipse(cx, cy, fw * 1.5 * pulse, fh * 0.9 * pulse, 0, 0, Math.PI * 2);
      ctx.fill();

      // Camada 2: elipse central pulsante
      ctx.globalAlpha = 0.45;
      ctx.fillStyle = baseHex;
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.ellipse(cx, cy, fw * pulse2, fh * 0.55 * pulse2, 0, 0, Math.PI * 2);
      ctx.fill();

      // Camada 3: anel giratório
      ctx.globalAlpha = 0.4;
      ctx.strokeStyle = baseHex;
      ctx.lineWidth = 2.5;
      ctx.shadowBlur = 12;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t / 320);
      ctx.beginPath();
      ctx.ellipse(0, 0, fw * 0.9, fh * 0.25, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Camada 4: anel secundário
      ctx.globalAlpha = 0.25;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-t / 240 + 0.8);
      ctx.beginPath();
      ctx.ellipse(0, 0, fw * 0.7, fh * 0.2, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Camada 5: partículas subindo
      ctx.globalAlpha = 0.6;
      ctx.shadowColor = baseHex;
      ctx.shadowBlur = 8;
      for (let i = 0; i < 6; i++) {
        const angle = (t / 500 + i * Math.PI / 3) % (Math.PI * 2);
        const r = fw * (0.55 + 0.15 * Math.sin(t / 200 + i));
        const px = cx + Math.cos(angle) * r;
        const py = cy + Math.sin(angle) * r * 0.4 - (((t / 4 + i * 40) % (fh * 1.2)));
        if (py < y - fh * 0.5) continue;
        const psize = 2.5 + 1.5 * Math.sin(t / 150 + i);
        ctx.fillStyle = i % 2 === 0 ? baseHex : '#ffffff';
        ctx.beginPath();
        ctx.arc(px, py, psize, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    // Try sprite
    let sprKey = getSpriteKey(f);
    const img = f.sprites[sprKey];
    if (img && img.complete && img.naturalWidth > 0) {
      ctx.save();
      if (f.facing < 0) {
        ctx.translate(x + fw/2, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(img, -fw/2, y, fw, fh);
      } else {
        ctx.drawImage(img, x, y, fw, fh);
      }
      ctx.restore();
    } else {
      // Fallback: draw colored rectangle fighter
      drawFallbackFighter(f, x, y, fw, fh);
    }

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.ellipse(x + fw/2, f.y + fh + 2, fw*0.4, 6, 0, 0, Math.PI*2);
    ctx.fill();

    // Block shield
    if (f.blocking) {
      ctx.save();
      ctx.globalAlpha = 0.4;
      ctx.strokeStyle = '#00cfff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(x + (f.facing > 0 ? fw*0.8 : fw*0.2), y + fh/2, fw*0.35, fh*0.5, 0, 0, Math.PI*2);
      ctx.stroke();
      ctx.restore();
    }

    // Name tag
    ctx.font = '9px Orbitron, sans-serif';
    ctx.fillStyle = f.side === 'p1' ? '#00cfff' : '#ff9c00';
    ctx.textAlign = 'center';
    ctx.fillText(f.char.displayName, x + fw/2, y - 6);
    ctx.textAlign = 'left';
  }

  function drawFallbackFighter(f, x, y, fw, fh) {
    const col = CHAR_COLORS[f.id] || '#888';
    ctx.save();

    // Body
    const bodyGrad = ctx.createLinearGradient(x, y, x + fw, y + fh);
    bodyGrad.addColorStop(0, col);
    bodyGrad.addColorStop(1, adjustColor(col, -40));
    ctx.fillStyle = bodyGrad;

    // Draw simple humanoid
    if (f.state === 'damage') {
      ctx.globalAlpha = 0.7 + 0.3 * Math.sin(Date.now() / 50);
    }

    // Torso
    ctx.beginPath();
    ctx.roundRect(x + fw*0.2, y + fh*0.25, fw*0.6, fh*0.45, 4);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Head
    ctx.fillStyle = '#f5d0a0';
    ctx.beginPath();
    ctx.ellipse(x + fw/2, y + fh*0.15, fw*0.22, fw*0.22, 0, 0, Math.PI*2);
    ctx.fill();
    ctx.strokeStyle = col;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Arms (animated based on state)
    ctx.strokeStyle = col;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    if (f.state === 'punch') {
      const punchDir = f.facing;
      ctx.beginPath();
      ctx.moveTo(x + fw*0.5, y + fh*0.38);
      ctx.lineTo(x + fw*0.5 + punchDir * fw*0.7, y + fh*0.35);
      ctx.stroke();
      // Other arm
      ctx.beginPath();
      ctx.moveTo(x + fw*0.5, y + fh*0.38);
      ctx.lineTo(x + fw*0.5 - punchDir * fw*0.2, y + fh*0.55);
      ctx.stroke();
    } else if (f.state === 'kick') {
      const kickDir = f.facing;
      // Kick leg
      ctx.strokeStyle = '#888';
      ctx.beginPath();
      ctx.moveTo(x + fw*0.5, y + fh*0.7);
      ctx.lineTo(x + fw*0.5 + kickDir * fw*0.75, y + fh*0.6);
      ctx.stroke();
      // Arms
      ctx.strokeStyle = col;
      ctx.beginPath();
      ctx.moveTo(x + fw*0.3, y + fh*0.38);
      ctx.lineTo(x + fw*0.2, y + fh*0.58);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + fw*0.7, y + fh*0.38);
      ctx.lineTo(x + fw*0.8, y + fh*0.58);
      ctx.stroke();
    } else if (f.state === 'block') {
      // Cross arms in front
      ctx.beginPath();
      ctx.moveTo(x + fw*0.25, y + fh*0.38);
      ctx.lineTo(x + fw*0.65, y + fh*0.42);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + fw*0.75, y + fh*0.38);
      ctx.lineTo(x + fw*0.35, y + fh*0.42);
      ctx.stroke();
    } else if (f.state === 'charge') {
      // Both arms extended down
      ctx.beginPath();
      ctx.moveTo(x + fw*0.3, y + fh*0.38);
      ctx.lineTo(x + fw*0.2, y + fh*0.68);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + fw*0.7, y + fh*0.38);
      ctx.lineTo(x + fw*0.8, y + fh*0.68);
      ctx.stroke();
    } else {
      // Idle/walk arms
      const swing = f.state === 'walk' ? Math.sin(Date.now() / 200) * 0.15 : 0;
      ctx.beginPath();
      ctx.moveTo(x + fw*0.3, y + fh*0.38);
      ctx.lineTo(x + fw*(0.15+swing), y + fh*0.65);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + fw*0.7, y + fh*0.38);
      ctx.lineTo(x + fw*(0.85-swing), y + fh*0.65);
      ctx.stroke();
    }

    // Legs
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 6;
    const legSwing = f.state === 'walk' ? Math.sin(Date.now() / 180) * 0.12 : 0;
    ctx.beginPath();
    ctx.moveTo(x + fw*0.38, y + fh*0.7);
    ctx.lineTo(x + fw*(0.32+legSwing), y + fh*0.98);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x + fw*0.62, y + fh*0.7);
    ctx.lineTo(x + fw*(0.68-legSwing), y + fh*0.98);
    ctx.stroke();

    ctx.restore();
  }

  function getSpriteKey(f) {
    const s = f.state;
    if (s === 'walk') return f.vx < 0 ? 'WalkLeft' : 'WalkRight';
    if (s === 'punch') return 'Punch';
    if (s === 'kick') return 'Kick';
    if (s === 'block') return 'Block';
    if (s === 'damage') return 'Damage';
    if (s === 'dead') return 'Dead';
    if (s === 'charge') return 'Charge';
    if (s === 'fire1') {
      // Prefer Fire1; if missing, fall back to Fire, then Idle
      if (f.sprites['Fire1'] && f.sprites['Fire1'].naturalWidth > 0) return 'Fire1';
      if (f.sprites['Fire']  && f.sprites['Fire'].naturalWidth  > 0) return 'Fire';
      return 'Idle';
    }
    if (s === 'fire2') {
      // Prefer Fire2; if missing, fall back to Fire, then Idle
      if (f.sprites['Fire2'] && f.sprites['Fire2'].naturalWidth > 0) return 'Fire2';
      if (f.sprites['Fire']  && f.sprites['Fire'].naturalWidth  > 0) return 'Fire';
      return 'Idle';
    }
    if (s === 'fire') return 'Fire';
    return 'Idle';
  }

  function adjustColor(hex, amount) {
    try {
      const r = Math.max(0, Math.min(255, parseInt(hex.slice(1,3), 16) + amount));
      const g = Math.max(0, Math.min(255, parseInt(hex.slice(3,5), 16) + amount));
      const b = Math.max(0, Math.min(255, parseInt(hex.slice(5,7), 16) + amount));
      return `rgb(${r},${g},${b})`;
    } catch(e) { return hex; }
  }

  function drawProjectiles() {
    const now = Date.now();
    state.projectiles.forEach(p => {
      if (!p.alive) return;
      const cx = p.x + p.w / 2;
      const cy = p.y + p.h / 2;
      const r  = p.w / 2;
      const pulse = 1 + 0.12 * Math.sin(p.age / 70);
      const spin  = now / 220;

      ctx.save();

      if (p.isBeam) {
        // ── Beam: layered glow + bright core ─────────────────
        const dir = p.vx > 0 ? 1 : -1;
        const bx = p.vx > 0 ? p.x : p.x + p.w;
        const ex = p.vx > 0 ? p.x + p.w : p.x;

        // Outer glow
        ctx.shadowColor = p.color;
        ctx.shadowBlur  = 28;
        const glow = ctx.createLinearGradient(bx, 0, ex, 0);
        glow.addColorStop(0,   'transparent');
        glow.addColorStop(0.1, p.color + '88');
        glow.addColorStop(0.5, p.color);
        glow.addColorStop(0.9, p.color + '88');
        glow.addColorStop(1,   'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.roundRect(Math.min(bx,ex), cy - p.h * 0.85, Math.abs(ex-bx), p.h * 1.7, 6);
        ctx.fill();

        // Bright core
        ctx.shadowBlur = 10;
        const core = ctx.createLinearGradient(bx, 0, ex, 0);
        core.addColorStop(0,   'transparent');
        core.addColorStop(0.15,'#ffffff');
        core.addColorStop(0.5, '#ffffff');
        core.addColorStop(0.85,'#ffffff');
        core.addColorStop(1,   'transparent');
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.roundRect(Math.min(bx,ex), cy - p.h * 0.22, Math.abs(ex-bx), p.h * 0.44, 3);
        ctx.fill();

        // Leading edge orb
        const edgeX = p.vx > 0 ? p.x + p.w : p.x;
        const edgeGrad = ctx.createRadialGradient(edgeX, cy, 0, edgeX, cy, p.h * 1.1);
        edgeGrad.addColorStop(0, '#ffffff');
        edgeGrad.addColorStop(0.4, p.color);
        edgeGrad.addColorStop(1,   'transparent');
        ctx.fillStyle = edgeGrad;
        ctx.beginPath();
        ctx.arc(edgeX, cy, p.h * 1.1, 0, Math.PI * 2);
        ctx.fill();

      } else {
        // ── Ki Orb: sphere + glow rings + sparks ─────────────
        const rp = r * pulse;

        // Outer aura halo
        ctx.shadowColor = p.color;
        ctx.shadowBlur  = 30;
        const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, rp * 2.4);
        halo.addColorStop(0,   p.color + 'aa');
        halo.addColorStop(0.5, p.color + '33');
        halo.addColorStop(1,   'transparent');
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(cx, cy, rp * 2.4, 0, Math.PI * 2);
        ctx.fill();

        // Rotating energy ring 1
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(spin);
        ctx.strokeStyle = p.color;
        ctx.lineWidth   = 2.5;
        ctx.globalAlpha = 0.55;
        ctx.shadowBlur  = 12;
        ctx.beginPath();
        ctx.ellipse(0, 0, rp * 1.55, rp * 0.55, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Rotating energy ring 2 (perpendicular)
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-spin * 0.7 + 1.0);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth   = 1.5;
        ctx.globalAlpha = 0.35;
        ctx.shadowBlur  = 8;
        ctx.beginPath();
        ctx.ellipse(0, 0, rp * 1.3, rp * 0.45, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Core sphere gradient
        ctx.shadowColor = p.color;
        ctx.shadowBlur  = 20;
        const sphere = ctx.createRadialGradient(cx - rp * 0.3, cy - rp * 0.3, 0, cx, cy, rp);
        sphere.addColorStop(0,   '#ffffff');
        sphere.addColorStop(0.3, p.color);
        sphere.addColorStop(0.75, p.color + 'cc');
        sphere.addColorStop(1,   p.color + '44');
        ctx.fillStyle = sphere;
        ctx.beginPath();
        ctx.arc(cx, cy, rp, 0, Math.PI * 2);
        ctx.fill();

        // Specular highlight
        ctx.shadowBlur = 0;
        const highlight = ctx.createRadialGradient(cx - rp * 0.38, cy - rp * 0.38, 0, cx - rp * 0.2, cy - rp * 0.2, rp * 0.55);
        highlight.addColorStop(0, 'rgba(255,255,255,0.85)');
        highlight.addColorStop(1, 'transparent');
        ctx.fillStyle = highlight;
        ctx.beginPath();
        ctx.arc(cx - rp * 0.25, cy - rp * 0.25, rp * 0.5, 0, Math.PI * 2);
        ctx.fill();

        // Trailing sparks
        ctx.globalAlpha = 0.6;
        const sparkDir = p.vx < 0 ? 1 : -1;
        for (let i = 0; i < 4; i++) {
          const t   = (i + 1) * 0.22;
          const sx  = cx + sparkDir * rp * (1.1 + t * 1.8);
          const sy  = cy + (Math.sin(spin * 3 + i * 1.4) * rp * 0.7);
          const sr  = rp * (0.22 - i * 0.04);
          if (sr <= 0) continue;
          const sg  = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
          sg.addColorStop(0, '#ffffff');
          sg.addColorStop(0.5, p.color);
          sg.addColorStop(1,   'transparent');
          ctx.fillStyle = sg;
          ctx.beginPath();
          ctx.arc(sx, sy, sr, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    });
  }

  // ─── Public ───────────────────────────────────────────────
  function stop() {
    if (animId) { cancelAnimationFrame(animId); animId = null; }
    window.removeEventListener('resize', resizeCanvas);
    document.onkeydown = null;
    document.onkeyup = null;
    keys = {};
    state = {};
    document.getElementById('pauseMenu').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('dialogueBox').style.display = 'none';
    document.getElementById('narratorBox').style.display = 'none';
    document.getElementById('roundAnnounce').style.display = 'none';
    document.getElementById('fightAnnounce').style.display = 'none';
    document.getElementById('koAnnounce').style.display = 'none';
    ['p1','p2'].forEach(side => {
      const w = document.getElementById('benchHUD_wrap_' + side);
      if (w) w.style.display = 'none';
    });
    document.getElementById('clashLayer').style.display = 'none';
  }

  return { init, stop };
})();
