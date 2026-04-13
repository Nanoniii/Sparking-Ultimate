// versus.js — v6: Tag Team customizável + 1v1 vs CPU
// ─── TAG TEAM vs CPU ────────────────────────────────────────
const Versus = (() => {
  let vsP1Size = 2;
  let vsP2Size = 2;
  let vsTimer = 60;
  let vsRounds = 2;
  let vsDiff = 'medium';

  function clamp(v) { return Math.max(1, Math.min(6, v)); }

  function init() {
    document.querySelector('#screen-versus .back-btn').onclick = () => ScreenManager.show('mainmenu');

    // Custom tag size inputs for P1 and P2 independently
    const p1Input = document.getElementById('vsP1SizeInput');
    const p2Input = document.getElementById('vsP2SizeInput');
    if (p1Input) {
      p1Input.value = vsP1Size;
      p1Input.oninput = () => { vsP1Size = clamp(parseInt(p1Input.value) || 1); p1Input.value = vsP1Size; updateTagLabel(); };
    }
    if (p2Input) {
      p2Input.value = vsP2Size;
      p2Input.oninput = () => { vsP2Size = clamp(parseInt(p2Input.value) || 1); p2Input.value = vsP2Size; updateTagLabel(); };
    }

    // Increment/decrement buttons P1
    const btnP1Plus = document.getElementById('vsP1SizePlus');
    const btnP1Minus = document.getElementById('vsP1SizeMinus');
    if (btnP1Plus) btnP1Plus.onclick = () => { vsP1Size = clamp(vsP1Size + 1); if (p1Input) p1Input.value = vsP1Size; updateTagLabel(); };
    if (btnP1Minus) btnP1Minus.onclick = () => { vsP1Size = clamp(vsP1Size - 1); if (p1Input) p1Input.value = vsP1Size; updateTagLabel(); };

    // Increment/decrement buttons P2
    const btnP2Plus = document.getElementById('vsP2SizePlus');
    const btnP2Minus = document.getElementById('vsP2SizeMinus');
    if (btnP2Plus) btnP2Plus.onclick = () => { vsP2Size = clamp(vsP2Size + 1); if (p2Input) p2Input.value = vsP2Size; updateTagLabel(); };
    if (btnP2Minus) btnP2Minus.onclick = () => { vsP2Size = clamp(vsP2Size - 1); if (p2Input) p2Input.value = vsP2Size; updateTagLabel(); };

    updateTagLabel();

    // Difficulty
    document.querySelectorAll('.vs-diff-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.vs-diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        vsDiff = btn.dataset.diff;
      };
    });

    // Timer
    document.querySelectorAll('#screen-versus .vs-timer-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('#screen-versus .vs-timer-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        vsTimer = parseInt(btn.dataset.timer);
      };
    });

    // Rounds
    document.querySelectorAll('#screen-versus .vs-rounds-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('#screen-versus .vs-rounds-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        vsRounds = parseInt(btn.dataset.rounds);
      };
    });

    document.getElementById('btnVersusGo').onclick = () => {
      ScreenManager.show('charselect', {
        mode: 'tag',
        tagSizeP1: vsP1Size,
        tagSizeP2: vsP2Size,
        tagSize: Math.max(vsP1Size, vsP2Size),
        tagVsCpu: true,
        aiDifficulty: vsDiff,
        backTo: 'versus',
        timer: vsTimer,
        roundsToWin: vsRounds
      });
    };
  }

  function updateTagLabel() {
    const lbl = document.getElementById('vsTagLabel');
    if (lbl) lbl.textContent = `${vsP1Size}v${vsP2Size}`;
  }

  return { init };
})();
ScreenManager.register('versus', Versus.init);

// ─── 1v1 vs CPU ─────────────────────────────────────────────
const VsCpu1v1 = (() => {
  let cpuTimer = 60;
  let cpuRounds = 2;
  let cpuDiff = 'medium';

  function init() {
    const screen = document.getElementById('screen-vscpu1v1');
    if (!screen) return;
    document.querySelector('#screen-vscpu1v1 .back-btn').onclick = () => ScreenManager.show('mainmenu');

    document.querySelectorAll('.cpu1v1-diff-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.cpu1v1-diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        cpuDiff = btn.dataset.diff;
      };
    });

    document.querySelectorAll('.cpu1v1-timer-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.cpu1v1-timer-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        cpuTimer = parseInt(btn.dataset.timer);
      };
    });

    document.querySelectorAll('.cpu1v1-rounds-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.cpu1v1-rounds-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        cpuRounds = parseInt(btn.dataset.rounds);
      };
    });

    document.getElementById('btnVsCpu1v1Go').onclick = () => {
      ScreenManager.show('charselect', {
        mode: '1v1vscpu',
        vsMode: 'cpu',
        aiDifficulty: cpuDiff,
        backTo: 'vscpu1v1',
        timer: cpuTimer,
        roundsToWin: cpuRounds
      });
    };
  }

  return { init };
})();
ScreenManager.register('vscpu1v1', VsCpu1v1.init);


// ─── PVP LOCAL ───────────────────────────────────────────────
const PvpLocal = (() => {
  let pvpTimer = 60;
  let pvpRounds = 2;

  function init() {
    document.querySelector('#screen-pvplocal .back-btn').onclick = () => ScreenManager.show('mainmenu');

    document.querySelectorAll('.pvp-timer-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.pvp-timer-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        pvpTimer = parseInt(btn.dataset.timer);
      };
    });

    document.querySelectorAll('.pvp-rounds-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.pvp-rounds-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        pvpRounds = parseInt(btn.dataset.rounds);
      };
    });

    document.getElementById('btnPvpGo').onclick = () => {
      ScreenManager.show('charselect', {
        mode: '1v1',
        backTo: 'pvplocal',
        timer: pvpTimer,
        roundsToWin: pvpRounds
      });
    };
  }

  return { init };
})();
ScreenManager.register('pvplocal', PvpLocal.init);

// ─── Z-Time Break ───────────────────────────────────────────
const ZTimeBreak = (() => {
  let activeTab = 'all';

  function init() {
    const backBtn = document.querySelector('#screen-ztimebreak .back-btn');
    if (backBtn) backBtn.onclick = () => ScreenManager.show('mainmenu');

    // Wire up saga filter tabs
    document.querySelectorAll('#ztbTabs .zp-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#ztbTabs .zp-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeTab = btn.dataset.tab;
        renderList();
      });
    });

    renderList();
  }

  function renderList() {
    const list = document.getElementById('whatifList');
    if (!list) return;
    list.innerHTML = '';

    const filtered = activeTab === 'all'
      ? WHATIFS
      : WHATIFS.filter(wi => (wi.saga || 'freeza') === activeTab);

    filtered.forEach(wi => {
      const unlocked = SaveManager.isWhatifUnlocked(wi.id);
      const card = document.createElement('div');
      card.className = 'whatif-card' + (!unlocked ? ' locked' : '');

      card.innerHTML = `
        <div class="whatif-title">${unlocked ? '' : '🔒 '}${wi.title}</div>
        <div class="whatif-subtitle">${wi.subtitle}</div>
        <div class="whatif-req">${unlocked ? '✅ Desbloqueado · 💰 ' + (wi.zeniReward || 0) + ' Zeni' : '🔒 ' + (wi.unlockHint || 'Complete condições específicas')}</div>
      `;

      if (unlocked) card.onclick = () => startWhatIf(wi, 0);
      list.appendChild(card);
    });
  }

  function startWhatIf(wi, chapterIndex) {
    if (!wi.chapters || !wi.chapters.length) return;
    const ch = wi.chapters[chapterIndex];
    const isLast = chapterIndex >= wi.chapters.length - 1;

    ScreenManager.show('charselect', {
      mode: 'story',
      backTo: 'ztimebreak',
      storyConfig: {
        id: ch.id, title: ch.title,
        player: ch.player, opponent: ch.opponent,
        stage: ch.stage, roundsToWin: ch.roundsToWin || 2,
        preDialogue: ch.preDialogue || [],
        postDialogue: ch.postDialogue || [],
        opponentAI: ch.opponentAI || 'hard',
        zeniReward: isLast ? (wi.zeniReward || 0) : 0,
        unlocks: ch.unlocks || []
      },
      onBattleEnd: (winnerSide) => {
        if (winnerSide === 'p1') {
          if (!isLast) {
            startWhatIf(wi, chapterIndex + 1);
          } else {
            // ── Desbloquear personagem ao completar o what-if ──
            const WHATIF_CHAR_REWARDS = {
              'whatif_cooler_arrives': ['Cooler', 'FinalCooler'],
              'whatif_turles_namek':   ['Turles'],
            };
            const reward = WHATIF_CHAR_REWARDS[wi.id];
            if (reward) {
              reward.forEach(charId => {
                if (SaveManager.unlockChar(charId)) {
                  const name = CHARACTERS[charId]?.displayName || charId;
                  setTimeout(() => {
                    const msg = document.createElement('div');
                    msg.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:linear-gradient(135deg,#1a1a2e,#2a0a4a);border:2px solid #aa44ff;color:#fff;padding:24px 40px;border-radius:12px;font-size:1.4rem;font-weight:bold;z-index:9999;text-align:center;box-shadow:0 0 40px #aa44ff88;';
                    msg.innerHTML = `🔓 Personagem Desbloqueado!<br><span style="color:#cc88ff;font-size:1.1rem">${name}</span>`;
                    document.body.appendChild(msg);
                    setTimeout(() => msg.remove(), 3000);
                  }, 500);
                }
              });
            }
            ScreenManager.show('ztimebreak');
          }
        } else {
          ScreenManager.show('ztimebreak');
        }
      }
    });
  }

  return { init };
})();
ScreenManager.register('ztimebreak', ZTimeBreak.init);

// ─── Training ───────────────────────────────────────────────
const Training = (() => {
  function init() {
    document.querySelector('#screen-training .back-btn').onclick = () => ScreenManager.show('mainmenu');
    const tutContent = document.getElementById('tutorialContent');
    const trainOptions = document.querySelector('.train-options');

    document.getElementById('btnTutorial').onclick = () => {
      trainOptions.style.display = 'none';
      tutContent.style.display = 'flex';
    };
    document.getElementById('btnFreeTraining').onclick = () => {
      ScreenManager.show('charselect', { mode: '1v1', backTo: 'training', timer: 0, roundsToWin: 2 });
    };
    document.getElementById('btnCloseTutorial').onclick = () => {
      tutContent.style.display = 'none';
      trainOptions.style.display = 'flex';
    };
  }
  return { init };
})();
ScreenManager.register('training', Training.init);

// ─── Tournament ─────────────────────────────────────────────
const Tournament = (() => {
  let tourneySize = 4;
  let bracket = [];
  let currentMatch = 0;
  let playerChar = null;

  function init() {
    document.querySelector('#screen-tournament .back-btn').onclick = () => {
      reset();
      ScreenManager.show('mainmenu');
    };

    document.querySelectorAll('.tourney-size-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.tourney-size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        tourneySize = parseInt(btn.dataset.size);
      };
    });

    document.getElementById('btnStartTourney').onclick = () => {
      ScreenManager.show('charselect', {
        mode: 'cpu', backTo: 'tournament', timer: 60, roundsToWin: 2,
        onDone: (p1Id) => startTournament(p1Id)
      });
    };

    // Restore bracket if exists
    if (bracket.length > 0) renderBracket();
  }

  function reset() {
    bracket = [];
    currentMatch = 0;
    playerChar = null;
    const setup = document.getElementById('tourneySetup');
    const bracketEl = document.getElementById('tourneyBracket');
    if (setup) setup.style.display = '';
    if (bracketEl) bracketEl.style.display = 'none';
  }

  function startTournament(p1Id) {
    playerChar = p1Id;
    const unlocked = SaveManager.data.unlockedChars;
    const cpuPool = unlocked.filter(id => id !== p1Id && CHARACTERS[id]);

    // Shuffle CPU pool
    const shuffled = cpuPool.sort(() => Math.random() - 0.5);
    const opponents = shuffled.slice(0, tourneySize - 1);
    const allFighters = [p1Id, ...opponents];

    // Build bracket rounds
    // Semifinais (ou quartas se 8)
    bracket = [];
    for (let i = 0; i < allFighters.length; i += 2) {
      bracket.push({
        p1: allFighters[i],
        p2: allFighters[i + 1] || shuffled[0],
        winner: null,
        round: Math.floor(i / 2) === 0 && tourneySize === 4 ? 'semi' : 'quarter'
      });
    }

    currentMatch = 0;
    document.getElementById('tourneySetup').style.display = 'none';
    document.getElementById('tourneyBracket').style.display = 'block';
    renderBracket();
    playNextMatch();
  }

  function renderBracket() {
    const el = document.getElementById('tourneyBracket');
    if (!el) return;

    const rounds = groupByRound();
    el.innerHTML = '<div class="bracket-title">🏆 CHAVE DO TORNEIO</div>';

    rounds.forEach((roundMatches, rIdx) => {
      const roundDiv = document.createElement('div');
      roundDiv.className = 'bracket-round';
      const label = rIdx === rounds.length - 1 ? 'FINAL' :
                    rIdx === rounds.length - 2 ? 'SEMIFINAL' : 'QUARTAS';
      roundDiv.innerHTML = `<div class="bracket-round-label">${label}</div>`;

      roundMatches.forEach((m, mIdx) => {
        const matchDiv = document.createElement('div');
        matchDiv.className = 'bracket-match' + (m.winner ? ' done' : '');
        const p1c = CHARACTERS[m.p1];
        const p2c = CHARACTERS[m.p2];
        const w = m.winner;
        matchDiv.innerHTML = `
          <div class="bracket-fighter ${w === m.p1 ? 'winner' : w ? 'loser' : ''}">
            ${p1c ? p1c.displayName : '?'} ${w === m.p1 ? '🏆' : ''}
          </div>
          <div class="bracket-vs">VS</div>
          <div class="bracket-fighter ${w === m.p2 ? 'winner' : w ? 'loser' : ''}">
            ${p2c ? p2c.displayName : '?'} ${w === m.p2 ? '🏆' : ''}
          </div>
        `;
        roundDiv.appendChild(matchDiv);
      });
      el.appendChild(roundDiv);
    });

    // Status
    const status = document.createElement('div');
    status.className = 'bracket-status';
    const allDone = bracket.every(m => m.winner);
    if (allDone) {
      const champion = bracket[bracket.length - 1].winner;
      const c = CHARACTERS[champion];
      const zeniPrize = tourneySize === 8 ? 800 : 500;
      if (champion === playerChar) {
        SaveManager.addZeni(zeniPrize);
        status.innerHTML = `🏆 CAMPEÃO: ${c?.displayName || champion}! +${zeniPrize} Zeni!`;
      } else {
        status.innerHTML = `Campeão: ${c?.displayName || champion}`;
      }
      const btnReset = document.createElement('button');
      btnReset.className = 'btn-big';
      btnReset.style.marginTop = '16px';
      btnReset.textContent = 'NOVO TORNEIO';
      btnReset.onclick = reset;
      el.appendChild(status);
      el.appendChild(btnReset);
    } else {
      status.textContent = 'Próxima batalha...';
      el.appendChild(status);
    }
  }

  function groupByRound() {
    // Simple: all bracket matches are in one or two rounds for now
    if (bracket.length <= 2) return [bracket];
    const semis = bracket.slice(0, bracket.length / 2);
    const finals = bracket.slice(bracket.length / 2);
    return [semis, finals];
  }

  function playNextMatch() {
    if (currentMatch >= bracket.length) return;
    const match = bracket[currentMatch];
    if (match.winner) { currentMatch++; playNextMatch(); return; }

    const isPlayerMatch = match.p1 === playerChar || match.p2 === playerChar;
    const vsMode = isPlayerMatch ? 'cpu' : 'cpu_vs_cpu';

    if (!isPlayerMatch) {
      // CPU vs CPU — simulate result
      simulateCPUMatch(match);
      currentMatch++;
      renderBracket();
      if (!allMatchesDone()) setTimeout(playNextMatch, 500);
      return;
    }

    // Player match
    const p1 = match.p1 === playerChar ? match.p1 : match.p2;
    const p2 = match.p1 === playerChar ? match.p2 : match.p1;

    setTimeout(() => {
      ScreenManager.show('charselect', {
        mode: 'cpu', backTo: 'tournament', timer: 60, roundsToWin: 2,
        forcedP1: p1, forcedP2: p2,
        onBattleEnd: (winnerSide, winP1, winP2) => {
          match.winner = winnerSide === 'p1' ? winP1 : winP2;
          // Advance winner in bracket if needed
          advanceWinner(match.winner);
          currentMatch++;
          renderBracket();
          if (!allMatchesDone()) setTimeout(playNextMatch, 800);
          else ScreenManager.show('tournament');
        }
      });
    }, 400);
  }

  function simulateCPUMatch(match) {
    const p1c = CHARACTERS[match.p1];
    const p2c = CHARACTERS[match.p2];
    if (!p1c || !p2c) { match.winner = match.p1; return; }
    const p1power = p1c.stats.hp + p1c.stats.power * 2;
    const p2power = p2c.stats.hp + p2c.stats.power * 2;
    const rng = Math.random() * (p1power + p2power);
    match.winner = rng < p1power ? match.p1 : match.p2;
    advanceWinner(match.winner);
  }

  function advanceWinner(winnerId) {
    // If there's a final match slot, fill it with winner
    const pendingFinal = bracket.find(m => !m.p1 || !m.p2);
    if (pendingFinal) {
      if (!pendingFinal.p1) pendingFinal.p1 = winnerId;
      else if (!pendingFinal.p2) pendingFinal.p2 = winnerId;
    }
  }

  function allMatchesDone() { return bracket.every(m => m.winner); }

  return { init };
})();
ScreenManager.register('tournament', Tournament.init);

// ─── Z-Parallel ─────────────────────────────────────────────
const ZParallel = (() => {
  let activeTab = 'all';

  function isMissionUnlocked(m) {
    // Missões desbloqueadas por completar outra
    if (m.unlockAfter) return SaveManager.isMissionCompleted(m.unlockAfter);
    return true;
  }

  function init() {
    document.querySelector('#screen-zparallel .back-btn').onclick = () => ScreenManager.show('mainmenu');

    // Zeni display
    const zeniEl = document.getElementById('zpZeniCount');
    if (zeniEl) zeniEl.textContent = SaveManager.getZeni();

    // Tabs
    document.querySelectorAll('.zp-tab').forEach(tab => {
      tab.onclick = () => {
        document.querySelectorAll('.zp-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeTab = tab.dataset.tab;
        renderMissions();
      };
    });

    renderMissions();
  }

  function renderMissions() {
    const container = document.getElementById('zpMissions');
    if (!container) return;
    container.innerHTML = '';

    const filtered = activeTab === 'all' ? MISSIONS : MISSIONS.filter(m => m.saga === activeTab);

    filtered.forEach(m => {
      const unlocked = !m.locked || isMissionUnlocked(m);
      const completed = SaveManager.isMissionCompleted(m.id);

      const card = document.createElement('div');
      card.className = 'mission-card' +
        (completed ? ' completed' : '') +
        (!unlocked ? ' locked' : '') +
        (m.nonCanon ? ' non-canon' : '');

      const badge = m.nonCanon ? '<span class="mission-badge noncanon">NON-CANON</span>' : '';
      const typeBadge = `<span class="mission-badge type-${m.type}">${m.type.toUpperCase()}</span>`;

      card.innerHTML = `
        <div class="mission-header">
          <div class="mission-title">${unlocked ? '' : '🔒 '}${m.title} ${badge} ${typeBadge}</div>
          <div class="mission-status">${completed ? '✅ COMPLETA' : unlocked ? '▶ DISPONÍVEL' : '🔒'}</div>
        </div>
        <div class="mission-desc">${m.desc}</div>
        <div class="mission-footer">
          <span class="mission-reward">🏆 ${m.reward}</span>
          <span class="mission-hidden">🎯 Objetivo oculto: ${completed ? m.hiddenObjective || '?' : '???'}</span>
        </div>
        ${!unlocked && m.unlockHint ? `<div class="mission-unlock-hint">🔓 ${m.unlockHint}</div>` : ''}
      `;

      if (unlocked) card.onclick = () => startMission(m);
      container.appendChild(card);
    });

    if (filtered.length === 0) {
      container.innerHTML = '<div style="text-align:center;padding:40px;opacity:0.5">Nenhuma missão encontrada nesta saga.</div>';
    }
  }

  function startMission(mission) {
    const cfg = mission.config;
    if (!cfg) return;

    function onWin(winnerSide) {
      if (winnerSide === 'p1') {
        const isNew = SaveManager.completeMission(mission.id, mission.zeniReward);
        if (isNew && mission.completionUnlocks) {
          mission.completionUnlocks.forEach(u => {
            if (u.type === 'char') SaveManager.unlockChar(u.id);
            if (u.type === 'whatif') SaveManager.unlockWhatif(u.id);
          });
        }
      }
      ScreenManager.show('zparallel');
    }

    const stageId = cfg.stage || 'kame_house';
    setStageById(stageId);

    // tag2v2, tag2v3, tag2v5, tag3v3 — ambos os times são tag
    if (cfg.playerTeam && cfg.playerTeam.length > 0) {
      const battleCfg = {
        p1: cfg.playerTeam[0],
        p2: cfg.opponentTeam[0],
        p1Team: cfg.playerTeam,
        p2Team: cfg.opponentTeam,
        vsMode: 'cpu',
        aiDifficulty: cfg.aiDifficulty || 'hard',
        roundsToWin: cfg.roundsToWin || 2,
        timer: cfg.timer || 99,
        preDialogue: [], postDialogue: []
      };
      ScreenManager.show('battle');
      BattleEngine.init(battleCfg, (result, winnerSide) => onWin(winnerSide));
      return;
    }

    // tagduel — 1 jogador vs time CPU (1 vs N)
    if (cfg.opponentTeam && cfg.opponentTeam.length > 0) {
      const battleCfg = {
        p1: cfg.player,
        p2: cfg.opponentTeam[0],
        p1Team: [cfg.player],
        p2Team: cfg.opponentTeam,
        vsMode: 'cpu',
        aiDifficulty: cfg.aiDifficulty || 'hard',
        roundsToWin: cfg.roundsToWin || 2,
        timer: cfg.timer || 99,
        preDialogue: [], postDialogue: []
      };
      ScreenManager.show('battle');
      BattleEngine.init(battleCfg, (result, winnerSide) => onWin(winnerSide));
      return;
    }

    // duel simples 1v1
    const battleCfg = {
      p1: cfg.player,
      p2: cfg.opponent,
      vsMode: 'cpu',
      aiDifficulty: cfg.aiDifficulty || 'hard',
      roundsToWin: cfg.roundsToWin || 2,
      timer: cfg.timer || 99,
      preDialogue: [], postDialogue: []
    };
    ScreenManager.show('battle');
    BattleEngine.init(battleCfg, (result, winnerSide) => onWin(winnerSide));
  }

  return { init };
})();
ScreenManager.register('zparallel', ZParallel.init);

// ─── Loja ───────────────────────────────────────────────────
const Shop = (() => {
  let activeTab = 'chars';

  function init() {
    activeTab = 'chars';

    const backBtn = document.querySelector('#screen-shop .back-btn');
    if (backBtn) backBtn.onclick = () => ScreenManager.show('mainmenu');

    const zeniEl = document.getElementById('shopZeniCount');
    if (zeniEl) zeniEl.textContent = SaveManager.getZeni();

    // Reset tab visual state
    document.querySelectorAll('.shop-tab').forEach(t => t.classList.remove('active'));
    const firstTab = document.querySelector('.shop-tab[data-tab="chars"]');
    if (firstTab) firstTab.classList.add('active');

    document.querySelectorAll('.shop-tab').forEach(tab => {
      tab.onclick = () => {
        document.querySelectorAll('.shop-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeTab = tab.dataset.tab;
        render();
      };
    });

    render();
  }

  function render() {
    const grid = document.getElementById('shopGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const zeniEl = document.getElementById('shopZeniCount');
    if (zeniEl) zeniEl.textContent = SaveManager.getZeni();

    if (activeTab === 'chars') renderChars(grid);
    else renderCostumes(grid);
  }

  function renderChars(grid) {
    let hasAny = false;
    ROSTER_ORDER.forEach(id => {
      const c = CHARACTERS[id];
      // Mostra na loja qualquer personagem que tenha preço E ainda não foi desbloqueado
      // (ou já desbloqueado, para mostrar como "possuído")
      if (!c || !c.price) return;
      hasAny = true;
      const owned = SaveManager.isCharUnlocked(id);
      const canAfford = SaveManager.getZeni() >= (c.price || 999);

      const card = document.createElement('div');
      card.className = 'shop-card' + (owned ? ' owned' : '') + (!canAfford && !owned ? ' cant-afford' : '');
      card.innerHTML = `
        <div class="shop-char-art">
          <img src="${c.spritePath}${c.sprites?.Idle || 'Idle.png'}" onerror="this.style.display='none'" style="max-height:80px;image-rendering:pixelated">
        </div>
        <div class="shop-char-name">${c.displayName}</div>
        <div class="shop-char-saga">${c.saga === 'freeza' ? '🌌 Saga Freeza' : '⚡ Saga Saiyajin'}</div>
        <div class="shop-char-price">${owned ? '✅ POSSUÍDO' : '💰 ' + (c.price || '?') + ' Zeni'}</div>
        ${!owned ? `<button class="shop-buy-btn ${!canAfford ? 'disabled' : ''}" data-id="${id}">COMPRAR</button>` : ''}
      `;

      if (!owned) {
        const btn = card.querySelector('.shop-buy-btn');
        if (btn && canAfford) {
          btn.onclick = () => {
            if (SaveManager.buyChar(id)) {
              render();
              // Flash de confirmação
              btn.textContent = '✅ COMPRADO!';
            }
          };
        }
      }
      grid.appendChild(card);
    });
    if (!hasAny) {
      grid.innerHTML = '<div style="text-align:center;padding:40px;opacity:0.6">Todos os personagens disponíveis já foram desbloqueados!</div>';
    }
  }

  function renderCostumes(grid) {
    ROSTER_ORDER.forEach(charId => {
      const c = CHARACTERS[charId];
      if (!c || !c.costumes) return;
      Object.entries(c.costumes).forEach(([costumeId, costume]) => {
        const owned = SaveManager.isCostumeUnlocked(charId, costumeId);
        const card = document.createElement('div');
        card.className = 'shop-card costume-card' + (owned ? ' owned' : '');
        card.innerHTML = `
          <div class="shop-char-art">
            <img src="${costume.spritePath}Idle.png" onerror="this.style.display='none'" style="max-height:80px">
          </div>
          <div class="shop-char-name">${costume.displayName}</div>
          <div class="shop-char-saga">Traje de: ${c.displayName}</div>
          <div class="shop-char-price">${owned ? '✅ DESBLOQUEADO' : '🔒 ' + (costume.unlockHint || 'Jogue o modo história')}</div>
        `;
        grid.appendChild(card);
      });
    });

    if (grid.children.length === 0) {
      grid.innerHTML = '<div style="text-align:center;padding:40px;opacity:0.6">Trajes são desbloqueados jogando o Modo História!</div>';
    }
  }

  return { init };
})();
ScreenManager.register('shop', Shop.init);

// ─── Settings ───────────────────────────────────────────────
const Settings = (() => {
  function init() {
    const backBtn = document.querySelector('#screen-settings .back-btn');
    if (backBtn) backBtn.onclick = () => ScreenManager.show('mainmenu');
    refresh();

    document.getElementById('btnToggleMusic').onclick = () => {
      const muted = MusicManager.toggleMute();
      SaveManager.setSetting('musicMuted', muted);
      document.getElementById('btnToggleMusic').textContent = muted ? 'MUDA' : 'LIGADA';
      refresh();
    };

    document.getElementById('btnResetGame').onclick = () => {
      const confirmed = confirm('Tem certeza? Isso vai apagar TODO o progresso: Zeni, personagens, capítulos, missões.');
      if (confirmed) {
        SaveManager.resetGame();
        refresh();
        alert('Jogo zerado! Reinicie para começar do zero.');
        ScreenManager.show('mainmenu');
      }
    };
  }

  function refresh() {
    const d = SaveManager.data;
    const zeniEl = document.getElementById('settingsZeni');
    const chapEl = document.getElementById('settingsChapters');
    const charEl = document.getElementById('settingsChars');
    const musicBtn = document.getElementById('btnToggleMusic');
    if (zeniEl) zeniEl.textContent = SaveManager.getZeni() + ' Zeni';
    if (chapEl) chapEl.textContent = (d.completedChapters || []).length + ' / ' + STORY_CHAPTERS.length;
    if (charEl) charEl.textContent = (d.unlockedChars || []).length + ' / ' + ROSTER_ORDER.length;
    if (musicBtn) musicBtn.textContent = SaveManager.getSetting('musicMuted') ? 'MUDA' : 'LIGADA';
  }

  return { init };
})();
ScreenManager.register('settings', Settings.init);
