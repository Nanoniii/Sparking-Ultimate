// main.js — Entry point + Music Manager + Menu interactions

// ─── Music Manager ────────────────────────────────────────
const MusicManager = (() => {
  const TRACKS = {
    // ── Menus ──────────────────────────────────────────────
    menu_main:           'assets/songs/menu_main.mp3',
    menu_charselect:     'assets/songs/menu_charselect.mp3',
    menu_results:        'assets/songs/menu_results.mp3',

    // ── Batalha — genéricas ────────────────────────────────
    battle_normal:       'assets/songs/battle_normal.mp3',
    battle_normal2:      'assets/songs/battle_normal2.mp3',
    battle_normal3:      'assets/songs/battle_normal3.mp3',
    battle_boss:         'assets/songs/battle_boss.mp3',
    battle_boss2:        'assets/songs/battle_boss2.mp3',
    battle_final:        'assets/songs/battle_final.mp3',
    battle_intense:      'assets/songs/battle_intense.mp3',

    // ── Batalha — por arena ────────────────────────────────
    stage_kame_house:       'assets/songs/stage_kame_house.mp3',
    stage_wasteland:        'assets/songs/stage_wasteland.mp3',
    stage_kami_lookout:     'assets/songs/stage_kami_lookout.mp3',
    stage_hyperbolic_chamber: 'assets/songs/stage_hyperbolic_chamber.mp3',
    stage_arena:            'assets/songs/stage_arena.mp3',
    stage_saiyan_crater:    'assets/songs/stage_saiyan_crater.mp3',
    stage_namek:            'assets/songs/stage_namek.mp3',
    stage_hyperbolic_night: 'assets/songs/stage_hyperbolic_night.mp3',
    stage_planet_earth:     'assets/songs/stage_planet_earth.mp3',

    // ── Batalha — por personagem (tema do lutador) ─────────
    char_EarlyGoku:      'assets/songs/char_EarlyGoku.mp3',
    char_KidGohan:       'assets/songs/char_KidGohan.mp3',
    char_Piccolo:        'assets/songs/char_Piccolo.mp3',
    char_Krillin:        'assets/songs/char_Krillin.mp3',
    char_Yamcha:         'assets/songs/char_Yamcha.mp3',
    char_Tien:           'assets/songs/char_Tien.mp3',
    char_Yajirobe:       'assets/songs/char_Yajirobe.mp3',
    char_Raditz:         'assets/songs/char_Raditz.mp3',
    char_Nappa:          'assets/songs/char_Nappa.mp3',
    char_ScouterVegeta:  'assets/songs/char_ScouterVegeta.mp3',
    char_Saibaman:       'assets/songs/char_Saibaman.mp3',

    // ── Batalha — personagens Saga Freeza ──────────────────
    char_Vegeta:         'assets/songs/char_Vegeta.mp3',
    char_SSJVegeta:      'assets/songs/char_Vegeta.mp3',       // reutiliza tema do Vegeta
    char_Frieza1:        'assets/songs/char_Frieza.mp3',
    char_Frieza2:        'assets/songs/char_Frieza.mp3',
    char_Frieza3:        'assets/songs/char_Frieza.mp3',
    char_Frieza4:        'assets/songs/char_Frieza.mp3',
    char_Frieza5:        'assets/songs/char_Frieza.mp3',
    char_Ginyu:          'assets/songs/char_GinyuForce.mp3',
    char_Burter:         'assets/songs/char_GinyuForce.mp3',
    char_Jeice:          'assets/songs/char_GinyuForce.mp3',
    char_Rikum:          'assets/songs/char_GinyuForce.mp3',
    char_Guldo:          'assets/songs/char_GinyuForce.mp3',
    char_Zarbon:         'assets/songs/char_Zarbon.mp3',
    char_MonsterZarbon:  'assets/songs/char_Zarbon.mp3',       // reutiliza tema do Zarbon
    char_Dodoria:        'assets/songs/char_Dodoria.mp3',
    char_Appule:         'assets/songs/char_GinyuForce.mp3',   // soldado Freeza, reutiliza GF
    char_Cui:            'assets/songs/char_GinyuForce.mp3',
    char_KingCold:       'assets/songs/char_KingCold.mp3',
    char_MechaFreeza:    'assets/songs/char_Frieza.mp3',
    char_Cooler:         'assets/songs/char_Cooler.mp3',
    char_FinalCooler:    'assets/songs/char_Cooler.mp3',       // reutiliza tema do Cooler
    char_MechaCooler:    'assets/songs/char_Cooler.mp3',
    char_NamekGoku:      'assets/songs/char_EarlyGoku.mp3',    // Goku em Namek, reutiliza Goku
    char_NamekSSJGoku:   'assets/songs/char_SSJGoku.mp3',
    char_MidGoku:        'assets/songs/char_EarlyGoku.mp3',
    char_MidGokuSSJ:     'assets/songs/char_SSJGoku.mp3',
    char_Piccolo:        'assets/songs/char_Piccolo.mp3',      // já existia, mantido
    char_FGohan:         'assets/songs/char_FutureGohan.mp3',
    char_FGohanSSJ:      'assets/songs/char_FutureGohan.mp3',
    char_FTrunks:        'assets/songs/char_FutureTrunks.mp3',
    char_FTrunksSSJ:     'assets/songs/char_FutureTrunks.mp3',
    char_ArmorTrunksSSJ: 'assets/songs/char_FutureTrunks.mp3',
    char_ArmorTrunksUltraSSJ: 'assets/songs/char_FutureTrunks.mp3',
    char_TeenGohan:      'assets/songs/char_TeenGohan.mp3',
    char_TeenGohanSSJ:   'assets/songs/char_TeenGohan.mp3',
    char_TeenGohanSSJ2:  'assets/songs/char_TeenGohan.mp3',
    char_Cell1:          'assets/songs/char_Cell.mp3',
    char_Cell2:          'assets/songs/char_Cell.mp3',
    char_Cell3:          'assets/songs/char_Cell.mp3',
    char_CellJr:         'assets/songs/char_Cell.mp3',
    char_A13:            'assets/songs/char_Androids.mp3',
    char_A13Super:       'assets/songs/char_Androids.mp3',
    char_A14:            'assets/songs/char_Androids.mp3',
    char_A16:            'assets/songs/char_Androids.mp3',
    char_A17:            'assets/songs/char_Androids.mp3',
    char_A18:            'assets/songs/char_Androids.mp3',
    char_A19:            'assets/songs/char_Androids.mp3',
    char_A20:            'assets/songs/char_Androids.mp3',
    char_MrSatan:        'assets/songs/char_MrSatan.mp3',
    char_Turles:         'assets/songs/char_Turles.mp3',
    char_Paragus:        'assets/songs/char_Broly.mp3',
    char_Broly1:         'assets/songs/char_Broly.mp3',
    char_Broly2:         'assets/songs/char_Broly.mp3',
    char_Broly3:         'assets/songs/char_Broly.mp3',
    char_Bojack:         'assets/songs/char_Bojack.mp3',
    char_BojackFullPower:'assets/songs/char_Bojack.mp3',
    char_Bujin:          'assets/songs/char_Bojack.mp3',
    char_Zangya:         'assets/songs/char_Bojack.mp3',

    // ── História / Narrativa ───────────────────────────────
    story_intro:         'assets/songs/story_intro.mp3',
    story_chapter1:      'assets/songs/story_chapter1.mp3',
    story_chapter2:      'assets/songs/story_chapter2.mp3',
    story_chapter_saiyans: 'assets/songs/story_chapter_saiyans.mp3',
    story_chapter_namek: 'assets/songs/story_chapter_namek.mp3',
    tension:             'assets/songs/tension.mp3',
    tension2:            'assets/songs/tension2.mp3',
    sadness:             'assets/songs/sadness.mp3',

    // ── Outros ────────────────────────────────────────────
    victory:             'assets/songs/victory.mp3',
    victory2:            'assets/songs/victory2.mp3',
    training:            'assets/songs/training.mp3',
    tournament:          'assets/songs/tournament.mp3',
    game_over:           'assets/songs/game_over.mp3'
  };

  // Boss chapters (harder fights → boss music)
  const BOSS_CHAPTERS = ['ch2','ch5','ch6','ch7','ch_namek10','ch_namek13','ch_namek14','ch_namek15','ch_namek16','ch_namek17','ch_namek18','ch_namek19'];

  const STAGE_TRACKS = {
    kame_house:          'stage_kame_house',
    wasteland:           'stage_wasteland',
    kami_lookout:        'stage_kami_lookout',
    hyperbolic_chamber:  'stage_hyperbolic_chamber',
    arena:               'stage_arena',
    saiyan_crater:       'stage_saiyan_crater',
    namek_surface:       'story_chapter_namek',
    namek_village:       'story_chapter_namek',
    namek_freeza_ship:   'battle_boss',
    namek_crater:        'battle_boss2',
    namek_dying:         'battle_final',
    space:               'battle_boss2',
    planet_earth:        'stage_planet_earth'
  };

  const CHAPTER_TRACKS = {
    ch1: 'story_chapter1', ch2: 'story_chapter2',
    ch3: 'story_chapter_saiyans', ch4: 'story_chapter_saiyans',
    ch5: 'battle_boss', ch6: 'battle_boss2', ch7: 'battle_final',
    // Saga Freeza — usa story_chapter_namek como base, chefões usam battle_boss/boss2/final
    ch_namek1: 'story_chapter_namek', ch_namek2: 'story_chapter_namek',
    ch_namek3: 'story_chapter_namek', ch_namek4: 'story_chapter_namek',
    ch_namek5: 'battle_boss',         ch_namek6: 'story_chapter_namek',
    ch_namek7: 'battle_boss',         ch_namek8: 'story_chapter_namek',
    ch_namek9: 'story_chapter_namek', ch_namek10: 'battle_boss',
    ch_namek11: 'battle_boss',        ch_namek12: 'story_chapter_namek',
    ch_namek13: 'battle_boss',        ch_namek14: 'battle_boss2',
    ch_namek15: 'battle_boss2',       ch_namek16: 'battle_boss2',
    ch_namek17: 'battle_final',       ch_namek18: 'battle_final',
    ch_namek19: 'battle_final'
  };

  // Audio element pool — tries each src in order, plays first that loads.
  // Stops the old track first, then tries candidates in sequence.
  function tryPlay(keys, loop = true) {
    const list = (Array.isArray(keys) ? keys : [keys]).filter(k => TRACKS[k]);
    if (!list.length) return;

    // If the best available candidate is already playing, do nothing
    const best = list[0];
    if (currentKey === best && current && !current.paused) return;

    // Stop whatever is playing now
    stop();

    let idx = 0;
    function attempt() {
      if (idx >= list.length) return;
      const key = list[idx++];
      const audio = new Audio(TRACKS[key]);
      audio.loop = loop;
      audio.volume = muted ? 0 : volume;

      audio.onerror = () => { audio.onerror = null; attempt(); };

      audio.play().then(() => {
        // Another attempt may have already won the race — abort if so
        if (current && current !== audio) { audio.pause(); return; }
        current = audio;
        currentKey = key;
      }).catch(() => attempt());
    }
    attempt();
  }

  let current = null;
  let currentKey = null;
  let volume = 0.55;
  let muted = false;
  let fadeTimer = null;

  function play(key, loop = true) {
    if (currentKey === key && current && !current.paused) return;
    stop();
    if (!TRACKS[key]) return;
    currentKey = key;
    current = new Audio(TRACKS[key]);
    current.loop = loop;
    current.volume = muted ? 0 : volume;
    current.play().catch(() => {}); // Autoplay policy — silently ignore
  }

  function stop() {
    if (current) {
      current.pause();
      current.currentTime = 0;
      current = null;
      currentKey = null;
    }
    if (fadeTimer) { clearInterval(fadeTimer); fadeTimer = null; }
  }

  function fadeOut(duration = 800, onDone) {
    if (!current) { if (onDone) onDone(); return; }
    const startVol = current.volume;
    const steps = 20;
    const stepTime = duration / steps;
    const dec = startVol / steps;
    fadeTimer = setInterval(() => {
      if (!current) { clearInterval(fadeTimer); if (onDone) onDone(); return; }
      current.volume = Math.max(0, current.volume - dec);
      if (current.volume <= 0) {
        clearInterval(fadeTimer);
        fadeTimer = null;
        stop();
        if (onDone) onDone();
      }
    }, stepTime);
  }

  function fadeIn(key, loop = true, duration = 600) {
    // Guard: don't restart if already playing this key
    if (currentKey === key && current && !current.paused) return;
    fadeOut(300, () => {
      play(key, loop);
      if (current) {
        current.volume = 0;
        const target = muted ? 0 : volume;
        const steps = 15;
        const stepTime = duration / steps;
        const inc = target / steps;
        const fi = setInterval(() => {
          if (!current) { clearInterval(fi); return; }
          current.volume = Math.min(target, current.volume + inc);
          if (current.volume >= target) clearInterval(fi);
        }, stepTime);
      }
    });
  }

  function forScreen(screenId, extra = {}) {
    const map = {
      'splash':       'menu_main',
      'mainmenu':     'menu_main',
      'charselect':   'menu_charselect',
      'zcanon':       'story_intro',
      'ztimebreak':   'story_intro',
      'versus':       'menu_main',
      'pvplocal':     'menu_main',
      'training':     'training',
      'tournament':   'tournament',
      'zparallel':    'story_intro',
      'shop':         'menu_charselect',
      'settings':     'menu_main'
    };
    const key = map[screenId];
    if (!key) return;
    if (currentKey === key && current && !current.paused) return;
    tryPlay([key]);
  }

  function forBattle(chapterId, stageId, p1Id, p2Id) {
    const isBoss = chapterId && BOSS_CHAPTERS.includes(chapterId);
    const candidates = [];
    if (chapterId && CHAPTER_TRACKS[chapterId]) candidates.push(CHAPTER_TRACKS[chapterId]);
    if (isBoss) { candidates.push('battle_boss', 'battle_boss2'); }
    if (stageId && STAGE_TRACKS[stageId]) candidates.push(STAGE_TRACKS[stageId]);
    if (p2Id) candidates.push('char_' + p2Id);
    if (p1Id) candidates.push('char_' + p1Id);
    candidates.push('battle_normal', 'battle_normal2', 'battle_normal3');
    // tryPlay already guards against replaying the same track
    tryPlay(candidates);
  }

  function onVictory() {
    tryPlay(['victory', 'victory2'], false);
  }

  function setVolume(v) {
    volume = Math.max(0, Math.min(1, v));
    if (current && !muted) current.volume = volume;
  }

  function toggleMute() {
    muted = !muted;
    if (current) current.volume = muted ? 0 : volume;
    return muted;
  }

  return { play, stop, fadeIn, fadeOut, forScreen, forBattle, onVictory, setVolume, toggleMute };
})();

// Expose globally
window.MusicManager = MusicManager;

// ─── Main Menu interactions ────────────────────────────────
  function initMainMenuInteractions() {
    const descMap = {
      'zcanon':      'Reviva a Saga Saiyajin e a Saga Freeza capítulo a capítulo em batalhas épicas narradas.',
      'versus':      'Tag Team vs CPU — monte um time de até 5 e enfrente a CPU com troca de personagens!',
      'pvplocal':    'Duelo local 1v1 entre dois jogadores no mesmo teclado.',
      'ztimebreak':  'Explore histórias alternativas — e se as coisas tivessem sido diferentes?',
      'training':    'Aprenda os controles no tutorial ou pratique livremente sem restrições.',
      'tournament':  'Torneio com chaves reais — derrote todos para ser campeão e ganhar Zeni!',
      'zparallel':   'Missões especiais ao estilo Xenoverse — condições ocultas e recompensas em Zeni.',
      'shop':        'Gaste seu Zeni para desbloquear personagens e trajes exclusivos.',
      'settings':    'Configure música, veja seu progresso ou comece do zero.'
    };

    const infoPanel = document.getElementById('menuInfoPanel');
    const infoText  = document.getElementById('menuInfoText');

    document.querySelectorAll('#mainNav .nav-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        const desc = descMap[btn.dataset.mode] || '';
        if (infoText) infoText.textContent = desc;
        if (infoPanel) infoPanel.classList.add('visible');
      });
      btn.addEventListener('mouseleave', () => {
        if (infoPanel) infoPanel.classList.remove('visible');
      });
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        if (mode) ScreenManager.show(mode);
      });
    });

    // Zeni display no menu
    const zeniEl = document.getElementById('menuZeniDisplay');
    if (zeniEl) zeniEl.textContent = SaveManager.getZeni();

    // Girar personagem decorativo no menu (usando idle sprites)
    const chars = ['EarlyGoku','Piccolo','ScouterVegeta','NamekSSJGoku','Frieza4'];
    let charIdx = 0;
    const art = document.getElementById('menuCharArt');
    const fallback = document.getElementById('menuCharArtFallback');
    if (art) {
      // Set first char immediately using idle sprite
      const firstChar = CHARACTERS[chars[0]];
      if (firstChar) {
        art.src = firstChar.spritePath + (firstChar.sprites.Idle || 'Idle.png');
        art.style.display = '';
        if (fallback) fallback.style.display = 'none';
      }
      setInterval(() => {
        charIdx = (charIdx + 1) % chars.length;
        const id = chars[charIdx];
        if (CHARACTERS[id]) {
          const c = CHARACTERS[id];
          art.onerror = () => {
            art.onerror = null;
            art.style.display = 'none';
            if (fallback) fallback.style.display = 'block';
          };
          art.onload = () => { art.style.display = ''; if (fallback) fallback.style.display = 'none'; };
          art.src = c.spritePath + (c.sprites.Idle || 'Idle.png');
        }
      }, 4000);
    }

    // Aplicar mute salvo
    if (SaveManager.getSetting('musicMuted')) {
      MusicManager.toggleMute();
    }
  }

// ─── Entry point ──────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {

  // Back buttons global handler
  document.querySelectorAll('.back-btn[data-back]').forEach(btn => {
    btn.addEventListener('click', () => ScreenManager.show(btn.dataset.back || 'mainmenu'));
  });

  // Hook ScreenManager to also trigger music
  const _origShow = ScreenManager.show.bind(ScreenManager);
  ScreenManager.show = function(screenId, opts) {
    _origShow(screenId, opts);
    setTimeout(() => MusicManager.forScreen(screenId), 50);
    // Keep zeni display fresh
    if (screenId === 'mainmenu') {
      const el = document.getElementById('menuZeniDisplay');
      if (el) el.textContent = SaveManager.getZeni();
    }
  };

  // Main menu hover interactions
  initMainMenuInteractions();

  // Start on splash
  ScreenManager.show('splash');
  MusicManager.forScreen('splash');
});
