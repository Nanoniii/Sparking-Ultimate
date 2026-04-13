// shenlong.js — Sistema de Esferas do Dragão + Shenlong
// 10% de chance por vitória de ganhar uma esfera; 7 esferas = invocar Shenlong
const DragonBallHUD = (() => {

  // Bônus de chance extra (desejo "dragonball")
  let bonusChance = 0;

  function getBonusChance() { return bonusChance; }

  function init() {
    const bar = document.getElementById('dbHudBar');
    if (!bar) return;

    // Mostra o HUD sempre (começa com 0 esferas)
    bar.style.display = 'flex';
    update();

    // Clique no HUD abre Shenlong se tiver 7 esferas
    bar.addEventListener('click', () => {
      if (SaveManager.getDragonBalls() >= 7) {
        openModal();
      } else {
        showToast(`⭐ ${SaveManager.getDragonBalls()}/7 Esferas do Dragão — continue lutando!`);
      }
    });

    // Botão fechar modal
    const closeBtn = document.getElementById('shenlongClose');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Clique fora do container fecha
    const modal = document.getElementById('shenlong-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    // Botões de desejo
    document.querySelectorAll('.shenlong-wish-btn').forEach(btn => {
      btn.addEventListener('click', () => grantWish(btn.dataset.wish));
    });
  }

  function update() {
    const count = SaveManager.getDragonBalls();
    const label = document.getElementById('dbHudLabel');
    if (label) label.textContent = count + '/7';

    for (let i = 1; i <= 7; i++) {
      const ball = document.getElementById('dbBall' + i);
      if (!ball) continue;
      if (i <= count) {
        ball.classList.remove('empty');
      } else {
        ball.classList.add('empty');
      }
    }

    // Pulsa o HUD quando todas as 7 estão reunidas
    const bar = document.getElementById('dbHudBar');
    if (bar) {
      if (count >= 7) {
        bar.style.borderColor = 'rgba(255,200,0,0.9)';
        bar.style.boxShadow = '0 0 20px rgba(255,150,0,0.6), 0 0 40px rgba(255,80,0,0.3)';
        bar.title = '🐉 CLIQUE PARA INVOCAR SHENLONG!';
      } else {
        bar.style.borderColor = '';
        bar.style.boxShadow = '';
        bar.title = `Esferas do Dragão: ${count}/7 — Ganhe em batalhas!`;
      }
    }
  }

  function showReadyNotice() {
    showToast('🐉 AS 7 ESFERAS FORAM REUNIDAS! Clique nas esferas para invocar Shenlong!', 4000);
  }

  function openModal() {
    const modal = document.getElementById('shenlong-modal');
    if (!modal) return;

    // Resetar estado
    const result = document.getElementById('shenlongResult');
    const wishes = document.getElementById('shenlongWishes');
    const closeBtn = document.getElementById('shenlongClose');
    if (result) { result.style.display = 'none'; result.textContent = ''; }
    if (wishes) wishes.style.display = 'flex';
    if (closeBtn) closeBtn.textContent = 'Dispensar o Dragão';

    // Renderizar bolas no modal
    const ballsDisplay = document.getElementById('shenlongBallsDisplay');
    if (ballsDisplay) {
      ballsDisplay.innerHTML = '';
      for (let i = 1; i <= 7; i++) {
        const b = document.createElement('div');
        b.className = 'shenlong-ball';
        b.textContent = '★'.repeat(i > 4 ? 1 : i); // simplificado
        ballsDisplay.appendChild(b);
      }
    }

    modal.classList.add('active');
  }

  function closeModal() {
    const modal = document.getElementById('shenlong-modal');
    if (modal) modal.classList.remove('active');
    update();
  }

  function grantWish(wish) {
    if (SaveManager.getDragonBalls() < 7) return;

    // Usa as esferas
    SaveManager.useDragonBalls();

    const wishes = document.getElementById('shenlongWishes');
    const result = document.getElementById('shenlongResult');
    const closeBtn = document.getElementById('shenlongClose');
    if (wishes) wishes.style.display = 'none';

    let msg = '';

    switch (wish) {
      case 'zeni': {
        SaveManager.addZeni(5000);
        msg = '💰 Desejo concedido! +5.000 Zeni adicionados!';
        break;
      }
      case 'bigzeni': {
        SaveManager.addZeni(15000);
        msg = '💎 Desejo concedido! +15.000 Zeni adicionados! Você é rico!';
        break;
      }
      case 'character': {
        // Pega todos os personagens não desbloqueados
        const locked = Object.keys(CHARACTERS).filter(id =>
          !SaveManager.isCharUnlocked(id) &&
          !CHARACTERS[id].isTransformationOf // não desbloqueia formas transformadas diretamente
        );
        if (locked.length > 0) {
          const picked = locked[Math.floor(Math.random() * locked.length)];
          SaveManager.unlockChar(picked);
          const name = CHARACTERS[picked]?.displayName || picked;
          msg = `👤 Desejo concedido! ${name} foi desbloqueado!`;
        } else {
          // Todos desbloqueados — dá zeni como consolação
          SaveManager.addZeni(8000);
          msg = '👤 Todos os guerreiros já estão com você! Receba 8.000 Zeni como compensação!';
        }
        break;
      }
      case 'dragonball': {
        bonusChance = 0.20; // +20% por 10 batalhas
        SaveManager.setFlag('db_bonus_chance', bonusChance);
        SaveManager.setFlag('db_bonus_battles', 10);
        msg = '⭐ Desejo concedido! Por 10 batalhas, você terá +20% de chance de encontrar esferas!';
        break;
      }
      case 'chapter': {
        // Desbloqueia um capítulo/missão aleatória ainda não completada
        const allChapters = typeof STORY_CHAPTERS !== 'undefined' ? STORY_CHAPTERS : [];
        const incomplete = allChapters.filter(ch => !SaveManager.isCompleted(ch.id));
        if (incomplete.length > 0) {
          const picked = incomplete[Math.floor(Math.random() * incomplete.length)];
          SaveManager.completeChapter(picked.id, []);
          msg = `📖 Desejo concedido! O capítulo "${picked.title || picked.id}" foi revelado e concluído!`;
        } else {
          SaveManager.addZeni(10000);
          msg = '📖 Todos os segredos já foram revelados! Receba 10.000 Zeni!';
        }
        break;
      }
      default:
        msg = 'Desejo misterioso concedido...';
    }

    if (result) {
      result.textContent = msg;
      result.style.display = 'block';
    }
    if (closeBtn) closeBtn.textContent = 'Agradecer e Fechar';

    // Refresh zeni displays
    refreshZeniDisplays();
    update();

    // Animação nas bolas do modal — viram cinza
    const ballsDisplay = document.getElementById('shenlongBallsDisplay');
    if (ballsDisplay) {
      ballsDisplay.querySelectorAll('.shenlong-ball').forEach(b => {
        b.style.background = 'radial-gradient(circle at 35% 35%, rgba(80,80,80,0.4), rgba(30,30,30,0.6))';
        b.style.borderColor = 'rgba(255,255,255,0.08)';
        b.style.boxShadow = 'none';
      });
    }
  }

  function refreshZeniDisplays() {
    const z = SaveManager.getZeni();
    ['menuZeniDisplay','shopZeniCount','zpZeniCount'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = z;
    });
  }

  function showToast(msg, duration = 3000) {
    // Remove toast anterior se existir
    const old = document.getElementById('dbToast');
    if (old) old.remove();

    const toast = document.createElement('div');
    toast.id = 'dbToast';
    toast.className = 'db-collect-toast';
    toast.innerHTML = msg;
    document.body.appendChild(toast);
    setTimeout(() => { if (toast.parentNode) toast.remove(); }, duration);
  }

  // Exposto globalmente para o battleEngine chamar
  window.DragonBallHUD = { update, showReadyNotice, showToast, getBonusChance };

  // Inicializa assim que o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOMContentLoaded já disparou — aguarda scripts carregarem
    setTimeout(init, 100);
  }

  return { update, showReadyNotice, showToast, getBonusChance };
})();
