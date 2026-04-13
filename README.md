# Dragon Ball: Sparking! Ultimate — v5.0

Uma homenagem de fã a Akira Toriyama. Jogo de luta 2D com Saga Saiyajin + Saga Freeza completa.

## Como abrir

```bash
cd dbsu_v5
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

Não abre direto por `file://` por causa do CORS nas imagens.

## O que há de novo na v5

- **Saga Freeza completa** — 19 capítulos com diálogos detalhados
- **33 personagens** — Toda a Saga Freeza: Cui, Dodoria, Zarbon/MonsterZarbon, Força Ginyu completa (Guldo, Rikum, Burter, Jeice, Ginyu), NamekGoku, Super Saiyajin Goku, 5 formas de Freeza, Cooler, FinalCooler, Turles
- **Só Goku e Piccolo desbloqueados** — O resto se desbloqueia por história, loja ou missões
- **Sistema de Zeni e Loja** — Ganhe Zeni completando capítulos e missões; gaste na loja para desbloquear personagens
- **Sistema de Trajes** — NamekGohan (traje de KidGohan), NamekVegeta (traje de ScouterVegeta), Gokinyu (traje de Ginyu)
- **Transformações** — Pressione **T** (P1) ou **Num8** (P2) com Ki cheio; animação de 3s antes da transformação. Zarbon→MonsterZarbon, NamekGoku→SSJ, Frieza 1→2→3→4→5, Cooler→FinalCooler
- **3 barras de HP** — Verde (100–66%), Amarelo (66–33%), Vermelho (33–0%), como no Xenoverse
- **Especiais únicos** — Guldo paralisa o tempo, Ginyu troca de corpo com o oponente
- **Nerf anti-spam** — Ki Blast tem cooldown de 1.2s, Ultimate de 2.0s
- **12 arenas** — 6 de Namek novas: Superfície, Vila, Nave de Freeza, Cratera, Namek em Chamas, Espaço
- **16 missões Z-Parallel** — Ao estilo Xenoverse: objetivos ocultos, recompensas em Zeni
- **7 What-Ifs** — Saga Saiyajin + Saga Freeza, incluindo Vegeta SSJ, Cooler em Namek, Turles
- **Modo Torneio** — Chaves reais com 4 ou 8 lutadores, CPU vs CPU simulado, prêmio em Zeni
- **Versus configurável** — Escolha timer (60s/99s/∞) e número de rounds (1/3/5)
- **Configurações** — Mutar música, ver progresso, zerar jogo
- **Diálogos em batalha** — Mid-dialogues ativados por HP do oponente
- **Sound effects** — Coloque arquivos em `assets/sounds/` (ver README da pasta)
- **Filtro de saga** na seleção de personagens

## Controles

| Ação        | Jogador 1 | Jogador 2  |
|-------------|-----------|------------|
| Mover       | A / D     | ← / →      |
| Bloquear    | W         | ↑          |
| Carregar Ki | S         | ↓          |
| Soco        | J         | Numpad 4   |
| Chute       | K         | Numpad 5   |
| Ki Blast    | L         | Numpad 6   |
| Especial    | U         | Numpad 7   |
| Transformar | **T**     | **Num 8**  |
| Pausar      | ESC       | —          |

## Como desbloquear personagens

| Personagem          | Como desbloquear                        |
|---------------------|-----------------------------------------|
| Raditz              | Complete o Cap. 2                       |
| Saibaman            | Complete o Cap. 4                       |
| Nappa               | Complete o Cap. 7                       |
| ScouterVegeta       | Complete o Cap. 7                       |
| KidGohan, Krillin…  | Loja (300–600 Zeni)                     |
| Cui, Appule…        | Complete caps da Saga Freeza            |
| Ginyu, Guldo…       | Complete caps 6–10 da Saga Freeza       |
| Freeza 1–5          | Complete caps 13–19 da Saga Freeza      |
| Cooler, FinalCooler | Missão Z-Parallel: "O Irmão do Mal"     |
| Turles              | Missão Z-Parallel: "O Saiyajin das Trevas" |

## Sprites necessários por personagem

Cada personagem em `assets/sprites/<Nome>/`:
- `Idle.png`, `Punch.png`, `Kick.png`, `Block.png`
- `Damage.png`, `Dead.png`, `WalkLeft.png`, `WalkRight.png`
- `Charge.png` (se hasCharge)
- `Fire.png` ou `Fire1.png` + `Fire2.png` (se hasFire1/hasFire2)

## Estrutura

```
dbsu_v5/
├── index.html
├── main.js
├── css/
│   ├── main.css, hud.css, menus.css, battle.css, dialogue.css
├── js/
│   ├── data/
│   │   ├── characters.js   ← 33 personagens
│   │   ├── stages.js       ← 12 arenas
│   │   ├── story.js        ← 26 capítulos (7 Saiyajin + 19 Freeza)
│   │   ├── whatifs.js      ← 7 What-Ifs
│   │   └── missions.js     ← 16 missões Z-Parallel
│   ├── managers/
│   │   ├── saveManager.js  ← Zeni, trajes, reset, settings
│   │   └── screenManager.js
│   ├── battle/
│   │   └── battleEngine.js ← Motor de batalha + transformações + especiais
│   ├── modes/
│   │   ├── charSelect.js   ← Seleção com filtro de saga
│   │   ├── zcanon.js       ← Modo história (2 sagas)
│   │   └── versus.js       ← Versus + Torneio + Loja + Config + Z-Parallel
│   └── ui/
│       └── splash.js
└── assets/
    ├── sprites/  ← Sprites de batalha
    ├── renders/  ← Arte dos personagens (tela de seleção)
    ├── songs/    ← Músicas
    └── sounds/   ← Sound effects (adicionar manualmente — ver README)
```
