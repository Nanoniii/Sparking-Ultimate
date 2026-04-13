// missions.js — v6: Z-Parallel Quests reimaginadas
// 10 Z-PQs temáticas com condições ocultas e recompensas

const MISSIONS = [

  // ══════════════════════════════════════════════════════
  //  Z-PQ1: Aliança de Sangue Real
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq1_blood_alliance',
    title: 'Z-PQ1: Aliança de Sangue Real',
    desc: 'Goku enfrenta Vegeta e Rei Cold em aliança improvável. Dois reis contra um guerreiro.',
    reward: '500 Zeni',
    hiddenObjective: 'Vença sem ser derrubado nenhuma vez',
    hiddenReward: '+250 Zeni bônus',
    type: 'tagduel',
    locked: false,
    saga: 'saiyan',
    zeniReward: 500,
    config: {
      player: 'EarlyGoku',
      opponentTeam: ['ScouterVegeta', 'KingCold'],
      stage: 'saiyan_crater',
      aiDifficulty: 'hard',
      timer: 99,
      roundsToWin: 2
    }
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ2: A Vingança de Tullece
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq2_turles_revenge',
    title: 'Z-PQ2: A Vingança de Tullece',
    desc: 'Goku enfrenta seu sósia sombrio e o Príncipe dos Saiyajins. Quem é o verdadeiro Saiyajin?',
    reward: '480 Zeni',
    hiddenObjective: 'Derrote Turles antes de Vegeta',
    hiddenReward: '+200 Zeni bônus + Tullece desbloqueado',
    type: 'tagduel',
    locked: false,
    saga: 'movies',
    zeniReward: 480,
    config: {
      player: 'EarlyGoku',
      opponentTeam: ['ScouterVegeta', 'Turles'],
      stage: 'wasteland',
      aiDifficulty: 'hard',
      timer: 99,
      roundsToWin: 2
    },
    completionUnlocks: [{ type: 'char', id: 'Turles' }]
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ3: Irmãos de Sangue e Ódio
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq3_brothers_hatred',
    title: 'Z-PQ3: Irmãos de Sangue e Ódio',
    desc: 'Goku e Vegeta de Namek unem forças contra Freeza e Cooler em suas formas finais. Batalha épica.',
    reward: '700 Zeni',
    hiddenObjective: 'Vença sem usar fire2 nenhuma vez',
    hiddenReward: '+300 Zeni bônus',
    type: 'tag2v2',
    locked: false,
    saga: 'freeza',
    zeniReward: 700,
    config: {
      playerTeam: ['NamekSSJGoku', 'ScouterVegeta'],
      opponentTeam: ['Frieza5', 'FinalCooler'],
      stage: 'namek_dying',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 2
    }
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ4: Traição de Irmão
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq4_brother_betrayal',
    title: 'Z-PQ4: Traição de Irmão',
    desc: 'Cooler desafia seu irmão Freeza. Controle Cooler e mostre quem é o verdadeiro senhor do universo.',
    reward: '550 Zeni',
    hiddenObjective: 'Vença apenas com ataques físicos (sem ki)',
    hiddenReward: '+220 Zeni bônus + Cooler desbloqueado',
    type: 'duel',
    locked: false,
    saga: 'movies',
    zeniReward: 550,
    config: {
      player: 'Cooler',
      opponent: 'Frieza1',
      stage: 'namek_surface',
      aiDifficulty: 'hard',
      timer: 99,
      roundsToWin: 2
    },
    completionUnlocks: [{ type: 'char', id: 'Cooler' }]
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ5: O Trio Androide Mais Cedo
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq5_early_android_trio',
    title: 'Z-PQ5: O Trio Androide Mais Cedo',
    desc: 'Vegeta, Nappa e Raditz contra os Androides 16, 17 e 18. Controle o lado Saiyajin!',
    reward: '650 Zeni',
    hiddenObjective: 'Não deixe Nappa ou Raditz serem derrotados',
    hiddenReward: '+280 Zeni bônus',
    type: 'tag3v3',
    locked: false,
    saga: 'android',
    zeniReward: 650,
    config: {
      playerTeam: ['ScouterVegeta', 'Nappa', 'Raditz'],
      opponentTeam: ['A16', 'A17', 'A18'],
      stage: 'wasteland',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 2
    }
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ6: O Presente em Chamas
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq6_present_in_flames',
    title: 'Z-PQ6: O Presente em Chamas',
    desc: 'Gohan e Trunks do Futuro contra os cinco androides. Sobrevivam ao pesadelo do futuro!',
    reward: '800 Zeni',
    hiddenObjective: 'Vença com os dois personagens ainda vivos',
    hiddenReward: '+350 Zeni bônus + FGohan desbloqueado',
    type: 'tag2v5',
    locked: false,
    saga: 'android',
    zeniReward: 800,
    config: {
      playerTeam: ['FGohanSSJ', 'FTrunksSSJ'],
      opponentTeam: ['A16', 'A17', 'A18', 'A19', 'A20'],
      stage: 'namek_dying',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 1
    },
    completionUnlocks: [{ type: 'char', id: 'FGohan' }, { type: 'char', id: 'FGohanSSJ' }]
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ7: Mecha
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq7_mecha',
    title: 'Z-PQ7: Mecha',
    desc: 'Trunks do Futuro e Goku SSJ contra Mecha Freeza e Meta Cooler. Metal contra carne!',
    reward: '700 Zeni',
    hiddenObjective: 'Derrote MechaFreeza com Trunks e MechaCooler com Goku',
    hiddenReward: '+300 Zeni bônus + Meta Cooler desbloqueado',
    type: 'tag2v2',
    locked: false,
    saga: 'movies',
    zeniReward: 700,
    config: {
      playerTeam: ['FTrunksSSJ', 'MidGokuSSJ'],
      opponentTeam: ['MechaFreeza', 'MechaCooler'],
      stage: 'planet_earth',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 2
    },
    completionUnlocks: [{ type: 'char', id: 'MechaCooler' }]
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ8: Família Freeza
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq8_freeza_family',
    title: 'Z-PQ8: Família Freeza',
    desc: 'Goku SSJ e Gohan Criança de Namek contra Freeza 100%, Rei Cold e Cooler Final. A família inteira!',
    reward: '900 Zeni',
    hiddenObjective: 'Vença sem usar Kamehameha nenhuma vez',
    hiddenReward: '+400 Zeni bônus',
    type: 'tag2v3',
    locked: false,
    saga: 'freeza',
    zeniReward: 900,
    config: {
      playerTeam: ['NamekSSJGoku', 'KidGohan'],
      opponentTeam: ['Frieza5', 'KingCold', 'FinalCooler'],
      stage: 'namek_surface',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 1
    }
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ9: Kakaroto
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq9_kakarot',
    title: 'Z-PQ9: Kakaroto',
    desc: 'Piccolo enfrenta Goku Early e Tullece! Dois Goku para um Piccolo.',
    reward: '580 Zeni',
    hiddenObjective: 'Vença usando apenas Makankōsappō (fire2)',
    hiddenReward: '+240 Zeni bônus',
    type: 'tagduel',
    locked: false,
    saga: 'movies',
    zeniReward: 580,
    config: {
      player: 'Piccolo',
      opponentTeam: ['EarlyGoku', 'Turles'],
      stage: 'kami_lookout',
      aiDifficulty: 'hard',
      timer: 99,
      roundsToWin: 2
    }
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ10: Redenção
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq10_redemption',
    title: 'Z-PQ10: Redenção',
    desc: 'Raditz e Goku de Namek contra Freeza 100%, Vegeta de Namek e Ginyu. Irmãos unidos!',
    reward: '750 Zeni',
    hiddenObjective: 'Derrote Freeza com Raditz',
    hiddenReward: '+320 Zeni bônus + Raditz desbloqueado',
    type: 'tag2v3',
    locked: false,
    saga: 'freeza',
    zeniReward: 750,
    config: {
      playerTeam: ['Raditz', 'NamekGoku'],
      opponentTeam: ['Frieza5', 'ScouterVegeta', 'Ginyu'],
      stage: 'namek_surface',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 2
    },
    completionUnlocks: [{ type: 'char', id: 'Raditz' }]
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ11: Força Bruta
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq11_brute_force',
    title: 'Z-PQ11: Força Bruta',
    desc: 'Goku SSJ da Saga Cell e Super Vegeta enfrentam Super Androide 13 e Broly Super Saiyajin. Puro poder contra puro poder!',
    reward: '900 Zeni',
    hiddenObjective: 'Derrote Broly com Vegeta e o Androide 13 com Goku',
    hiddenReward: '+400 Zeni bônus + Broly desbloqueado',
    type: 'tag2v2',
    locked: false,
    saga: 'movies',
    zeniReward: 900,
    config: {
      playerTeam: ['MidGokuSSJ', 'SSJVegeta'],
      opponentTeam: ['A13Super', 'Broly2'],
      stage: 'planet_earth',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 2
    },
    completionUnlocks: [{ type: 'char', id: 'Broly1' }, { type: 'char', id: 'Broly2' }]
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ12: Pirataria vs Tirania
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq12_piracy',
    title: 'Z-PQ12: Pirataria vs Tirania',
    desc: 'Os Piratas Espaciais de Bojack contra os imperadores do universo. Controle Bojack e Zangya e destrua Freeza e Cooler!',
    reward: '850 Zeni',
    hiddenObjective: 'Vença sem deixar Zangya ser nocauteada',
    hiddenReward: '+350 Zeni bônus + Zangya desbloqueada',
    type: 'tag2v2',
    locked: false,
    saga: 'movies',
    zeniReward: 850,
    config: {
      playerTeam: ['Bojack', 'Zangya'],
      opponentTeam: ['Frieza5', 'FinalCooler'],
      stage: 'namek_dying',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 2
    },
    completionUnlocks: [{ type: 'char', id: 'Bojack' }, { type: 'char', id: 'Zangya' }]
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ13: O Plano para Erradicar os Saiyajins
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq13_eradicate_saiyans',
    title: 'Z-PQ13: O Plano para Erradicar os Saiyajins',
    desc: 'Cell Perfeito, Freeza e Bojack formam uma aliança sombria. Enfrente Broly LSSJ, Paragus, Gohan SSJ2, Goku SSJ e Super Vegeta!',
    reward: '1100 Zeni',
    hiddenObjective: 'Derrote Broly LSSJ com Cell Perfeito',
    hiddenReward: '+500 Zeni bônus',
    type: 'tag3v5',
    locked: false,
    saga: 'movies',
    zeniReward: 1100,
    config: {
      playerTeam: ['Cell3', 'Frieza5', 'Bojack'],
      opponentTeam: ['Broly3', 'Paragus', 'TeenGohanSSJ2', 'MidGokuSSJ', 'SSJVegeta'],
      stage: 'planet_earth',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 1
    }
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ14: Absorção Total
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq14_total_absorption',
    title: 'Z-PQ14: Absorção Total',
    desc: 'Yamcha sozinho contra Cell Perfeito, Androide 19 e 20. Pior missão possível — ou oportunidade de se provar?',
    reward: '600 Zeni',
    hiddenObjective: 'Vença usando apenas socos e chutes — sem ki',
    hiddenReward: '+500 Zeni bônus',
    type: 'tagduel',
    locked: false,
    saga: 'cell',
    zeniReward: 600,
    config: {
      player: 'Yamcha',
      opponentTeam: ['Cell3', 'A19', 'A20'],
      stage: 'saiyan_crater',
      aiDifficulty: 'hard',
      timer: 99,
      roundsToWin: 2
    }
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ15: O Torneio de Artes Marciais
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq15_martial_arts_tournament',
    title: 'Z-PQ15: O Torneio de Artes Marciais',
    desc: 'Kuririn e Tenshinhan contra Yamcha e Mr. Satan. Uma batalha entre guerreiros comuns pela honra dos terráqueos!',
    reward: '500 Zeni',
    hiddenObjective: 'Vença com ambos os personagens ainda de pé',
    hiddenReward: '+250 Zeni bônus + Mr. Satan desbloqueado',
    type: 'tag2v2',
    locked: false,
    saga: 'cell',
    zeniReward: 500,
    config: {
      playerTeam: ['Krillin', 'Tien'],
      opponentTeam: ['Yamcha', 'MrSatan'],
      stage: 'planet_earth',
      aiDifficulty: 'medium',
      timer: 99,
      roundsToWin: 2
    },
    completionUnlocks: [{ type: 'char', id: 'MrSatan' }]
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ16: O Presente em Chamas 2
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq16_burning_present2',
    title: 'Z-PQ16: O Presente em Chamas 2',
    desc: 'Gohan do Futuro SSJ, Ultra Trunks e Goku SSJ contra Freeza 100%, Cell Perfeito, Androide 20 e Bojack. O futuro alternativo em chamas!',
    reward: '1000 Zeni',
    hiddenObjective: 'Derrote todos os inimigos sem usar fire2',
    hiddenReward: '+450 Zeni bônus',
    type: 'tag3v4',
    locked: false,
    saga: 'cell',
    zeniReward: 1000,
    config: {
      playerTeam: ['FGohanSSJ', 'ArmorTrunksUltraSSJ', 'MidGokuSSJ'],
      opponentTeam: ['Frieza5', 'Cell3', 'A20', 'Bojack'],
      stage: 'wasteland',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 2
    }
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ17: Androides vs Piratas
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq17_androids_pirates',
    title: 'Z-PQ17: Androides vs Piratas',
    desc: 'Controle os Androides 13, 14 e 16 contra Bojack, Zangya e Bujin. Máquinas de guerra contra piratas do espaço!',
    reward: '780 Zeni',
    hiddenObjective: 'Derrote Bojack com o Androide 16',
    hiddenReward: '+320 Zeni bônus + Bujin desbloqueado',
    type: 'tag3v3',
    locked: false,
    saga: 'movies',
    zeniReward: 780,
    config: {
      playerTeam: ['A13', 'A14', 'A16'],
      opponentTeam: ['Bojack', 'Zangya', 'Bujin'],
      stage: 'planet_earth',
      aiDifficulty: 'hard',
      timer: 99,
      roundsToWin: 2
    },
    completionUnlocks: [{ type: 'char', id: 'Bujin' }]
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ18: Família
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq18_family',
    title: 'Z-PQ18: Família',
    desc: 'Freeza 4ª Forma e Rei Cold contra Broly Super Saiyajin e Paragus. Dois duos de pai e filho num choque explosivo!',
    reward: '750 Zeni',
    hiddenObjective: 'Derrote Paragus com Freeza e Broly com Rei Cold',
    hiddenReward: '+300 Zeni bônus + Paragus desbloqueado',
    type: 'tag2v2',
    locked: false,
    saga: 'movies',
    zeniReward: 750,
    config: {
      playerTeam: ['Frieza4', 'KingCold'],
      opponentTeam: ['Broly2', 'Paragus'],
      stage: 'namek_surface',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 2
    },
    completionUnlocks: [{ type: 'char', id: 'Paragus' }]
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ19: Terráqueos Salvam a Humanidade
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq19_earthlings_save',
    title: 'Z-PQ19: Terráqueos Salvam a Humanidade',
    desc: 'Kuririn, Tenshinhan, Yamcha e Yajirobe contra Vegeta Scouter, Freeza 1ª Forma, Cell Imperfeito e Broly Base. Os terráqueos contra o universo!',
    reward: '850 Zeni',
    hiddenObjective: 'Não deixe nenhum dos 4 personagens ser nocauteado',
    hiddenReward: '+400 Zeni bônus',
    type: 'tag4v4',
    locked: false,
    saga: 'saiyan',
    zeniReward: 850,
    config: {
      playerTeam: ['Krillin', 'Tien', 'Yamcha', 'Yajirobe'],
      opponentTeam: ['ScouterVegeta', 'Frieza1', 'Cell1', 'Broly1'],
      stage: 'saiyan_crater',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 2
    }
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ20: Lendário Super Saiyajin
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq20_legendary',
    title: 'Z-PQ20: Lendário Super Saiyajin',
    desc: 'Goku SSJ de Namek sozinho contra Broly Lendário Super Saiyajin. A lenda da raça contra o guardião da galáxia!',
    reward: '1000 Zeni',
    hiddenObjective: 'Vença sem ser atingido mais de 10 vezes',
    hiddenReward: '+500 Zeni bônus + Broly LSSJ desbloqueado',
    type: 'duel',
    locked: false,
    saga: 'movies',
    zeniReward: 1000,
    config: {
      player: 'NamekSSJGoku',
      opponent: 'Broly3',
      stage: 'namek_dying',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 2
    },
    completionUnlocks: [{ type: 'char', id: 'Broly3' }]
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ21: Inferno na Arena do Cell
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq21_cell_arena_hell',
    title: 'Z-PQ21: Inferno na Arena do Cell',
    desc: 'Goku SSJ Cell, Ultra Trunks e Vegeta SSJ contra 2 Cell Jrs, 2 Saibamans e 4 Meta-Cooler. O caos na arena!',
    reward: '950 Zeni',
    hiddenObjective: 'Derrote todos os Cell Jrs. primeiro',
    hiddenReward: '+400 Zeni bônus',
    type: 'tag3v8',
    locked: false,
    saga: 'cell',
    zeniReward: 950,
    config: {
      playerTeam: ['MidGokuSSJ', 'ArmorTrunksUltraSSJ', 'SSJVegeta'],
      opponentTeam: ['CellJr', 'CellJr', 'Saibaman', 'Saibaman', 'MechaCooler', 'MechaCooler', 'MechaCooler', 'MechaCooler'],
      stage: 'planet_earth',
      aiDifficulty: 'hard',
      timer: 99,
      roundsToWin: 2
    }
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ22: Vingança dos Rejeitados
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq22_rejected_revenge',
    title: 'Z-PQ22: Vingança dos Rejeitados',
    desc: 'Androide 19 e 20 contra os Androides 13, 14 e 16. Os androides do Dr. Gero brigam entre si!',
    reward: '680 Zeni',
    hiddenObjective: 'Derrote o Androide 16 com o Androide 20',
    hiddenReward: '+280 Zeni bônus',
    type: 'tag2v3',
    locked: false,
    saga: 'android',
    zeniReward: 680,
    config: {
      playerTeam: ['A19', 'A20'],
      opponentTeam: ['A13', 'A14', 'A16'],
      stage: 'wasteland',
      aiDifficulty: 'hard',
      timer: 99,
      roundsToWin: 2
    }
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ23: Futuro em Namek
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq23_future_namek',
    title: 'Z-PQ23: Futuro em Namek',
    desc: 'Goku SSJ de Namek, Gohan do Futuro SSJ e Trunks do Futuro SSJ contra Freeza 4ª Forma, Capitão Ginyu e Jeice. O futuro alternativo em Namek!',
    reward: '820 Zeni',
    hiddenObjective: 'Derrote Ginyu com Gohan do Futuro',
    hiddenReward: '+350 Zeni bônus',
    type: 'tag3v3',
    locked: false,
    saga: 'freeza',
    zeniReward: 820,
    config: {
      playerTeam: ['NamekSSJGoku', 'FGohanSSJ', 'FTrunksSSJ'],
      opponentTeam: ['Frieza4', 'Ginyu', 'Jeice'],
      stage: 'namek_surface',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 2
    }
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ24: Instinto de Sobrevivência
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq24_survival_instinct',
    title: 'Z-PQ24: Instinto de Sobrevivência',
    desc: 'Gohan Criança e Piccolo contra Paragus e Broly Base. O mestre e o aluno contra pai e filho lendário!',
    reward: '700 Zeni',
    hiddenObjective: 'Não deixe Gohan Criança ser nocauteado',
    hiddenReward: '+300 Zeni bônus',
    type: 'tag2v2',
    locked: false,
    saga: 'movies',
    zeniReward: 700,
    config: {
      playerTeam: ['KidGohan', 'Piccolo'],
      opponentTeam: ['Paragus', 'Broly1'],
      stage: 'planet_earth',
      aiDifficulty: 'veryhard',
      timer: 99,
      roundsToWin: 2
    }
  },

  // ══════════════════════════════════════════════════════
  //  Z-PQ25: Rebelião dos Saiyajins Excluídos
  // ══════════════════════════════════════════════════════
  {
    id: 'zpq25_saiyan_rebellion',
    title: 'Z-PQ25: Rebelião dos Saiyajins Excluídos',
    desc: 'Paragus e Tullece contra Vegeta Scouter e Nappa. Os Saiyajins rejeitados e esquecidos se levantam contra a elite!',
    reward: '720 Zeni',
    hiddenObjective: 'Derrote Nappa com Paragus e Vegeta com Tullece',
    hiddenReward: '+300 Zeni bônus + Paragus desbloqueado',
    type: 'tag2v2',
    locked: false,
    saga: 'saiyan',
    zeniReward: 720,
    config: {
      playerTeam: ['Paragus', 'Turles'],
      opponentTeam: ['ScouterVegeta', 'Nappa'],
      stage: 'saiyan_crater',
      aiDifficulty: 'hard',
      timer: 99,
      roundsToWin: 2
    },
    completionUnlocks: [{ type: 'char', id: 'Paragus' }]
  }

];
