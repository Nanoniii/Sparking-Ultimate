// whatifs.js — v5: Z-Time Break What-Ifs expandidos (Saiyajin + Freeza)

const WHATIFS = [

  // ══════════════════════════════════════════════════════
  //  SAGA SAIYAJIN — WHAT-IFS
  // ══════════════════════════════════════════════════════

  {
    id: 'whatif_raditz_good',
    title: 'E se Raditz fosse do bem?',
    subtitle: 'O irmão de Goku toma uma decisão diferente...',
    unlockHint: 'Deixe o tempo acabar no Cap. 1 com Raditz ainda vivo',
    zeniReward: 400,
    chapters: [
      {
        id: 'whatif_raditz_good_ch1',
        title: 'O Irmão Redimido',
        player: 'EarlyGoku', opponent: 'Raditz',
        stage: 'kame_house', roundsToWin: 2, opponentAI: 'medium',
        preDialogue: [
          { char: 'narrator', text: 'E SE... Raditz, vendo o amor de Goku por seu filho, questionasse os valores dos Saiyajins?' },
          { char: 'Raditz', text: 'Kakarot... você realmente luta por esses seres fracos? Por que se importa com eles?' },
          { char: 'EarlyGoku', text: 'Porque eles são minha família! Minha vida! Simples assim.' },
          { char: 'Raditz', text: '...Família. Uma palavra que eu esqueci há muito tempo. Talvez eu precise lembrar.' }
        ],
        postDialogue: [
          { char: 'narrator', text: 'Neste universo alternativo, Raditz escolheu um caminho diferente.' },
          { char: 'Raditz', text: 'Kakarot... eu devo muito a você. Me ensine como lutar por algo que importa.' },
          { char: 'EarlyGoku', text: 'Heh! Bem-vindo à família, irmão!' }
        ],
        unlocks: []
      },
      {
        id: 'whatif_raditz_good_ch2',
        title: 'Raditz vs Vegeta',
        player: 'Raditz', opponent: 'ScouterVegeta',
        stage: 'saiyan_crater', roundsToWin: 2, opponentAI: 'hard',
        preDialogue: [
          { char: 'narrator', text: 'Vegeta e Nappa chegam, mas encontram algo que não esperavam: Raditz lutando ao lado dos guerreiros Z!' },
          { char: 'ScouterVegeta', text: 'Raditz... você traiu os Saiyajins? Que VERGONHA para nossa raça!' },
          { char: 'Raditz', text: 'Minha raça não precisa de um rei que serve a Freeza! Você vai passar por mim!' }
        ],
        postDialogue: [
          { char: 'narrator', text: 'Com Raditz ao lado, os guerreiros Z tiveram uma vantagem inesperada contra os invasores.' },
          { char: 'Raditz', text: 'Kakarot... eu entendo agora o que você quis dizer. Lutar por algo... é diferente.' }
        ],
        unlocks: []
      }
    ]
  },

  {
    id: 'whatif_yamcha_plan',
    title: 'O Plano de Yamcha',
    subtitle: 'E se Yamcha tivesse derrotado todos os Saibamans sozinho?',
    unlockHint: 'Complete a Missão Z-Parallel: A Honra de Yamcha',
    zeniReward: 350,
    chapters: [
      {
        id: 'whatif_yamcha_ch1',
        title: 'O Guerreiro do Deserto',
        player: 'Yamcha', opponent: 'Nappa',
        stage: 'wasteland', roundsToWin: 2, opponentAI: 'hard',
        preDialogue: [
          { char: 'narrator', text: 'E SE... Yamcha tivesse mostrado seu verdadeiro poder e desafiado Nappa?' },
          { char: 'Yamcha', text: 'Derrubei todos os Saibamans sozinho. Agora vou provar que não sou o fraco que todos pensam!' },
          { char: 'Nappa', text: 'Hahaha! O humano mais fraco desafiando Nappa? Hilário!' }
        ],
        postDialogue: [
          { char: 'narrator', text: 'Yamcha provou seu valor para todos...' },
          { char: 'Yamcha', text: 'Sempre fui subestimado. Hoje... Yamcha do Deserto não é piada!' },
          { char: 'ScouterVegeta', text: '...Interessante. Um humano derrotando Nappa. A Terra é mais interessante do que pensei.' }
        ],
        unlocks: []
      }
    ]
  },

  {
    id: 'whatif_tien_honor',
    title: 'A Honra de Tien',
    subtitle: 'E se Tenshinhan tivesse derrotado Nappa sozinho?',
    unlockHint: 'Complete o Capítulo 5 (A Fúria de Piccolo)',
    zeniReward: 400,
    locked: true,
    chapters: [
      {
        id: 'whatif_tien_ch1',
        title: 'Kikōhō Total',
        player: 'Tien', opponent: 'Nappa',
        stage: 'saiyan_crater', roundsToWin: 2, opponentAI: 'hard',
        preDialogue: [
          { char: 'narrator', text: 'E SE... Tenshinhan, em vez de exaurir suas energias em vão, tivesse encontrado uma abertura decisiva?' },
          { char: 'Tien', text: 'Vou parar esse monstro com tudo que tenho. Mesmo que me custe a vida — os outros precisam de tempo!' },
          { char: 'Nappa', text: 'Ha! Outro humano fraco querendo ser herói. Vou te esmagar como aos outros!' },
          { char: 'Tien', text: 'Nappa... KIKŌHŌ!' }
        ],
        postDialogue: [
          { char: 'narrator', text: 'Com precisão e determinação, Tien encontrou o ponto fraco de Nappa e venceu.' },
          { char: 'Tien', text: 'Goku... Yamcha... lutei pela honra de todos nós. Espero que seja suficiente.' },
          { char: 'KidGohan', text: 'Tenshinhan-san... você é incrível!' }
        ],
        unlocks: ['Tien']
      }
    ]
  },

  {
    id: 'whatif_piccolo_wins',
    title: 'O Guardião Supremo',
    subtitle: 'E se Piccolo tivesse derrotado Vegeta sozinho?',
    unlockHint: 'Vença o Capítulo 5 sem tomar dano com Piccolo',
    zeniReward: 380,
    locked: true,
    chapters: [
      {
        id: 'whatif_piccolo_ch1',
        title: 'A Ira do Namekuseijin',
        player: 'Piccolo', opponent: 'ScouterVegeta',
        stage: 'saiyan_crater', roundsToWin: 2, opponentAI: 'veryhard',
        preDialogue: [
          { char: 'narrator', text: 'E SE... Piccolo, em vez de ser morto por Nappa, tivesse canalizando todo seu ódio e superado seus próprios limites?' },
          { char: 'Piccolo', text: 'Vegeta. Você e Nappa destruíram tudo que eu conhecia. Agora vou devolver isso em dobro!' },
          { char: 'ScouterVegeta', text: 'Um Namekuseijin presumindo de me enfrentar? Que piada.' }
        ],
        postDialogue: [
          { char: 'Piccolo', text: 'A Terra... é minha para proteger. Não de destruir. Esse é o meu destino.' },
          { char: 'KidGohan', text: 'Piccolo-san... você é incrível!' }
        ],
        unlocks: []
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  SAGA FREEZA — WHAT-IFS
  // ══════════════════════════════════════════════════════

  {
    id: 'whatif_vegeta_ssj',
    title: 'O Príncipe Lendário',
    subtitle: 'E se Vegeta tivesse se transformado em Super Saiyajin antes de Goku?',
    unlockHint: 'Vença o Cap. 16 da Saga Freeza com Vegeta sem perder HP',
    zeniReward: 600,
    locked: true,
    chapters: [
      {
        id: 'whatif_vegeta_ssj_ch1',
        title: 'O Príncipe Ascende',
        player: 'ScouterVegeta', opponent: 'Frieza4',
        stage: 'namek_crater', roundsToWin: 2, opponentAI: 'veryhard',
        preDialogue: [
          { char: 'narrator', text: 'E SE... a raiva e o orgulho de Vegeta fossem suficientes para despertar o lendário poder Saiyajin?' },
          { char: 'ScouterVegeta', text: 'FREEZA! Você destruiu tudo que eu amava! Essa RAIVA... esse ORGULHO... EU SOU O SUPER SAIYAJIN!' },
          { char: 'Frieza4', text: 'Im... impossível! O Príncipe dos Saiyajins... conseguiu?!' }
        ],
        postDialogue: [
          { char: 'narrator', text: 'Em um universo onde o orgulho superou tudo, Vegeta tornou-se o Super Saiyajin.' },
          { char: 'ScouterVegeta', text: 'Freeza... você está olhando para o PRÍNCIPE LENDÁRIO DOS SAIYAJINS. Agora... DESAPAREÇA!' }
        ],
        unlocks: []
      }
    ]
  },

  {
    id: 'whatif_krillin_survives',
    title: 'A Sobrevivência de Krillin',
    subtitle: 'E se Krillin não tivesse morrido — Goku nunca teria virado SSJ?',
    unlockHint: 'Complete o Cap. 17 da Saga Freeza',
    zeniReward: 420,
    locked: true,
    chapters: [
      {
        id: 'whatif_krillin_ch1',
        title: 'O Humano Mais Forte',
        player: 'Krillin', opponent: 'Frieza4',
        stage: 'namek_crater', roundsToWin: 2, opponentAI: 'veryhard',
        preDialogue: [
          { char: 'narrator', text: 'E SE... Krillin sobrevivesse ao ataque de Freeza? O Super Saiyajin não nasceria... mas Krillin teria que dar tudo de si.' },
          { char: 'Krillin', text: 'Não... não vou morrer aqui! Tenho que sobreviver — pelos meus amigos!' },
          { char: 'Frieza4', text: 'O humano ainda vivo? Que surpresa irritante. Vou corrigir esse erro.' }
        ],
        postDialogue: [
          { char: 'narrator', text: 'Krillin sobreviveu — mas sem o Super Saiyajin, a batalha seria muito mais longa...' },
          { char: 'Krillin', text: 'Consegui... sobrevivi! Goku, vamos vencer juntos!' }
        ],
        unlocks: []
      }
    ]
  }, 
  
  {
    id: 'whatif_turles_namek',
    title: 'Tullece em Namek',
    subtitle: 'E se o Saiyajin renegado tivesse chegado a Namek?',
    unlockHint: 'Complete toda a Saga Saiyajin (Cap. 1–7)',
    zeniReward: 550,
    locked: true,
    saga: 'movies',
    chapters: [
      {
        id: 'whatif_turles_ch1',
        title: 'O Saiyajin das Sombras',
        player: 'EarlyGoku', opponent: 'Turles',
        stage: 'namek_surface', roundsToWin: 2, opponentAI: 'hard',
        preDialogue: [
          { char: 'narrator', text: 'E SE... Tullece, com faro para poder, tivesse seguido a trilha dos guerreiros Z até Namek?' },
          { char: 'Turles', text: 'Kakarot. Namek, Freeza, Esferas do Dragão... muita oportunidade aqui. Mas primeiro: você.' },
          { char: 'EarlyGoku', text: 'Por que você se parece comigo?! Quem é você?!' },
          { char: 'Turles', text: 'Sou o que você poderia ter sido, Kakarot. Se não fosse tão sentimental.' }
        ],
        postDialogue: [
          { char: 'narrator', text: 'Goku venceu seu sósia sombrio, mas a luta drenara suas energias para o confronto principal...' }
        ],
        unlocks: []
      }
    ]
  },

  // ══════════════════════════════════════════════════════
  //  SAGA ANDROIDE — WHAT-IF ÚNICO
  // ══════════════════════════════════════════════════════
  {
    id: 'whatif_android_super13',
    title: 'A Ameaça das Sombras',
    subtitle: 'E se os Androides 13 e 14 tivessem atacado antes dos 17 e 18?',
    unlockHint: 'Desbloqueie e vença os capítulos com Androide 14 e 13 disponíveis na Saga Androide',
    unlockRequires: ['A14', 'A13'],
    saga: 'android',
    zeniReward: 700,
    chapters: [
      {
        id: 'whatif_android_super13_ch1',
        title: 'Androides Desconhecidos',
        player: 'MidGokuSSJ', opponent: 'A14',
        stage: 'wasteland', roundsToWin: 2, opponentAI: 'hard',
        preDialogue: [
          { char: 'narrator', text: 'E SE... antes dos Androides 17 e 18 aparecerem, os Androides 13 e 14 — versões mais antigas, ativadas por acidente — atacassem os guerreiros Z?' },
          { char: 'A14', text: '...' },
          { char: 'MidGokuSSJ', text: 'Outro androide? Mas esses não parecem os mesmos que enfrentamos. Quem ativou vocês?' },
          { char: 'A13', text: 'Nossa missão... é matar... Goku.' }
        ],
        postDialogue: [
          { char: 'narrator', text: 'Os androides desconhecidos provaram ser adversários sérios. E o pior ainda estava por vir.' }
        ],
        unlocks: []
      },
      {
        id: 'whatif_android_super13_ch2',
        title: 'O 13 Absorve Tudo',
        player: 'FTrunksSSJ', opponent: 'A13',
        stage: 'wasteland', roundsToWin: 2, opponentAI: 'veryhard',
        preDialogue: [
          { char: 'narrator', text: 'Androide 13 absorveu os componentes dos 14 e 15 destruídos. Nasceu o Super Androide 13 — um monstro quase invencível.' },
          { char: 'A13Super', text: 'Poder... poder absoluto. Kakarot... agora posso matar você com um dedo.' },
          { char: 'FTrunksSSJ', text: 'Esse poder... é imenso. Mas não vou recuar!' }
        ],
        postDialogue: [
          { char: 'narrator', text: 'Com esforço conjunto, os guerreiros Z conseguiram destruir o Super Androide 13. A ameaça das sombras havia sido eliminada.' },
          { char: 'MidGokuSSJ', text: 'Temos que ficar atentos... quem mais pode ter sido criado por Gero?' },
          { char: 'narrator', text: 'A vitória foi custosa, mas os guerreiros Z saíram mais fortes para enfrentar o que viria a seguir.' }
        ],
        unlocks: ['A13', 'A14', 'A13Super']
      }
    ]
  }
];
