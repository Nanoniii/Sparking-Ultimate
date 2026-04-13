// saveManager.js — v5: Zeni, costumes, reset, transformações
const SaveManager = (() => {
  const KEY = 'dbsu_save_v5';

  const DEFAULT = {
    completedChapters: [],
    unlockedChars: ['EarlyGoku', 'Piccolo'],
    unlockedCostumes: {},   // { charId: [costumeId, ...] }
    unlockedWhatifs: [],
    completedMissions: [],
    storyFlags: {},
    scores: {},
    zeni: 0,
    shopPurchases: [],
    dragonBalls: 0,  // 0–7; ao atingir 7 pode invocar Shenlong
    settings: { musicMuted: false, timerEnabled: true, timerDuration: 60 }
  };

  let data = JSON.parse(JSON.stringify(DEFAULT));

  function load() {
    try {
      const s = localStorage.getItem(KEY);
      if (s) {
        const parsed = JSON.parse(s);
        data = Object.assign(JSON.parse(JSON.stringify(DEFAULT)), parsed);
      }
    } catch(e) {}
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch(e) {}
  }

  // ─── Reset ───────────────────────────────────────────────
  function resetGame() {
    data = JSON.parse(JSON.stringify(DEFAULT));
    save();
  }

  // ─── Zeni ────────────────────────────────────────────────
  function getZeni() { return data.zeni || 0; }

  function addZeni(amount) {
    data.zeni = (data.zeni || 0) + amount;
    save();
    return data.zeni;
  }

  function spendZeni(amount) {
    if ((data.zeni || 0) < amount) return false;
    data.zeni -= amount;
    save();
    return true;
  }

  // ─── Chapters ────────────────────────────────────────────
  function completeChapter(id, unlocks) {
    if (!data.completedChapters.includes(id)) {
      data.completedChapters.push(id);
      // Recompensa de zeni pelo capítulo (usa zeniReward do próprio capítulo se disponível)
      const chapter = (typeof STORY_CHAPTERS !== 'undefined')
        ? STORY_CHAPTERS.find(c => c.id === id)
        : null;
      const zeniReward = (chapter && chapter.zeniReward) ? chapter.zeniReward
        : id.startsWith('ch_namek') ? 300
        : id.startsWith('android_') ? 400
        : id.startsWith('cell_') ? 500
        : 200;
      addZeni(zeniReward);
    }
    if (unlocks) unlocks.forEach(u => unlockChapter(u));
    save();
  }

  // Registra capítulos desbloqueados por conclusão de outros
  function unlockChapter(id) {
    if (!data.unlockedByCompletion) data.unlockedByCompletion = [];
    if (!data.unlockedByCompletion.includes(id)) {
      data.unlockedByCompletion.push(id);
      save();
    }
  }

  function isChapterUnlocked(chapter) {
    // Capítulo não tem trava — sempre disponível
    if (!chapter.locked) return true;
    // Capítulo inicial da saga Saiyajin
    if (chapter.id === 'ch1') return true;

    // Desbloqueado explicitamente via unlocks[] de outro capítulo?
    if (data.unlockedByCompletion && data.unlockedByCompletion.includes(chapter.id)) return true;

    // Fallback sequencial por saga para saves antigos sem unlockedByCompletion
    // Saga Saiyajin (ch1–ch7)
    const saiyajinChapters = ['ch1','ch2','ch3','ch4','ch5','ch6','ch7'];
    const siIdx = saiyajinChapters.indexOf(chapter.id);
    if (siIdx > 0) return data.completedChapters.includes(saiyajinChapters[siIdx - 1]);

    // Saga Freeza (ch_namek1–ch_namek18)
    const namekMatch = chapter.id.match(/^ch_namek(\d+)$/);
    if (namekMatch) {
      const num = parseInt(namekMatch[1]);
      if (num === 1) return data.completedChapters.includes('ch7');
      return data.completedChapters.includes(`ch_namek${num - 1}`);
    }

    // Saga Androide (android_ch0–android_ch9)
    const androidMatch = chapter.id.match(/^android_ch(\d+)$/);
    if (androidMatch) {
      const num = parseInt(androidMatch[1]);
      if (num === 0) return data.completedChapters.includes('ch_namek18');
      return data.completedChapters.includes(`android_ch${num - 1}`);
    }

    // Saga Cell (cell_ch1–cell_ch15)
    const cellMatch = chapter.id.match(/^cell_ch(\d+)$/);
    if (cellMatch) {
      const num = parseInt(cellMatch[1]);
      if (num === 1) return data.completedChapters.includes('android_ch9');
      return data.completedChapters.includes(`cell_ch${num - 1}`);
    }

    return false;
  }

  function isCompleted(id) { return data.completedChapters.includes(id); }

  // ─── Chars ───────────────────────────────────────────────
  function unlockChar(id) {
    if (!data.unlockedChars.includes(id)) {
      data.unlockedChars.push(id);
      save();
      return true;
    }
    return false;
  }

  function isCharUnlocked(id) { return data.unlockedChars.includes(id); }

  // ─── Shop ────────────────────────────────────────────────
  function buyChar(id) {
    const c = CHARACTERS[id];
    if (!c || !c.price) return false;
    if (data.unlockedChars.includes(id)) return false;
    if (!spendZeni(c.price)) return false;
    unlockChar(id);
    data.shopPurchases.push(id);
    save();
    return true;
  }

  // ─── Costumes ────────────────────────────────────────────
  function unlockCostume(charId, costumeId) {
    if (!data.unlockedCostumes[charId]) data.unlockedCostumes[charId] = [];
    if (!data.unlockedCostumes[charId].includes(costumeId)) {
      data.unlockedCostumes[charId].push(costumeId);
      save();
      return true;
    }
    return false;
  }

  function isCostumeUnlocked(charId, costumeId) {
    return data.unlockedCostumes[charId] && data.unlockedCostumes[charId].includes(costumeId);
  }

  // ─── What-Ifs ────────────────────────────────────────────
  function unlockWhatif(id) {
    if (!data.unlockedWhatifs.includes(id)) {
      data.unlockedWhatifs.push(id);
      save();
      return true;
    }
    return false;
  }

  function isWhatifUnlocked(id) {
    if (data.unlockedWhatifs.includes(id)) return true;
    // Check if the whatif has unlockRequires (char-based unlock)
    const wi = (typeof WHATIFS !== 'undefined') ? WHATIFS.find(w => w.id === id) : null;
    if (wi && wi.unlockRequires && Array.isArray(wi.unlockRequires)) {
      return wi.unlockRequires.every(charId => data.unlockedChars.includes(charId));
    }
    return false;
  }

  // ─── Missions ────────────────────────────────────────────
  function completeMission(id, zeniReward) {
    const isNew = !data.completedMissions.includes(id);
    if (isNew) {
      data.completedMissions.push(id);
      if (zeniReward) addZeni(zeniReward);
    }
    save();
    return isNew;
  }

  function isMissionCompleted(id) { return data.completedMissions.includes(id); }

  // ─── Dragon Balls ─────────────────────────────────────────
  function getDragonBalls() { return data.dragonBalls || 0; }

  function addDragonBall() {
    if ((data.dragonBalls || 0) >= 7) return false; // já tem 7
    data.dragonBalls = (data.dragonBalls || 0) + 1;
    save();
    return true;
  }

  function useDragonBalls() {
    if ((data.dragonBalls || 0) < 7) return false;
    data.dragonBalls = 0;
    save();
    return true;
  }

  // ─── Flags ───────────────────────────────────────────────
  function setFlag(key, val) { data.storyFlags[key] = val; save(); }
  function getFlag(key) { return data.storyFlags[key]; }

  // ─── Settings ────────────────────────────────────────────
  function getSetting(key) { return data.settings ? data.settings[key] : undefined; }
  function setSetting(key, val) {
    if (!data.settings) data.settings = {};
    data.settings[key] = val;
    save();
  }

  load();
  // Garantir que os personagens iniciais estejam sempre desbloqueados
  DEFAULT_UNLOCKED.forEach(id => {
    if (!data.unlockedChars.includes(id)) data.unlockedChars.push(id);
  });
  save();
  return {
    resetGame, getZeni, addZeni, spendZeni,
    completeChapter, isChapterUnlocked, isCompleted,
    unlockChar, isCharUnlocked, buyChar,
    unlockCostume, isCostumeUnlocked,
    unlockWhatif, isWhatifUnlocked,
    completeMission, isMissionCompleted,
    setFlag, getFlag, getSetting, setSetting,
    getDragonBalls, addDragonBall, useDragonBalls,
    get data() { return data; }
  };
})();
