// story.js — v5: Saga Saiyajin + Saga Freeza completa (19 capítulos Freeza)

// ══════════════════════════════════════════════════════════
//  SAGA SAIYAJIN
// ══════════════════════════════════════════════════════════
const STORY_CHAPTERS = [
  {
    id: 'ch1', num: 1,
    title: 'O Rapto de Gohan',
    subtitle: 'Goku vs Raditz — Casa do Mestre Kame',
    player: 'EarlyGoku', opponent: 'Raditz',
    stage: 'kame_house', opponentAI: 'medium', roundsToWin: 1,
    locked: false, unlocks: ['ch2'],
    specialUnlock: { condition: 'timer_end_raditz_alive', whatif: 'whatif_raditz_good' },
    preDialogue: [
      { char: 'narrator', text: 'Era uma tarde tranquila na Casa do Mestre Kame... até que uma nave alienígena pousou do outro lado da ilha.' },
      { char: 'EarlyGoku', text: 'Você... você é igual a mim! O que está acontecendo?!' },
      { char: 'Raditz', text: 'Kakarot. Finalmente te encontrei. Sou seu irmão mais velho, Raditz. Você deveria estar dominando este planeta miserável!' },
      { char: 'EarlyGoku', text: 'Irmão...? Isso é impossível! Eu não tenho irmão!' },
      { char: 'Raditz', text: 'Você foi enviado aqui para limpar a Terra. Mas tomou uma pancada na cabeça e esqueceu sua missão.' },
      { char: 'KidGohan', text: 'Papai! Quem é esse homem assustador?!' },
      { char: 'Raditz', text: '...Interessante. Um filhote Saiyajin. Venha comigo, garoto.' },
      { char: 'EarlyGoku', text: 'NÃO! Larga meu filho! Você vai se arrepender disso!' }
    ],
    midDialogue: { triggerHp: 0.3, lines: [
      { char: 'Raditz', text: 'Impressionante, Kakarot... mas não é suficiente!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Goku conseguiu ferir Raditz, mas o Saiyajin sobreviveu com Gohan...' },
      { char: 'Raditz', text: 'Mais forte do que esperava. Mas seu filho pertence a mim agora.' },
      { char: 'EarlyGoku', text: 'Gohan... eu vou te salvar. Eu prometo.' }
    ],
    zeniReward: 200
  },
  {
    id: 'ch2', num: 2,
    title: 'Aliança Improvável',
    subtitle: 'Goku e Piccolo vs Raditz',
    player: 'EarlyGoku', opponent: 'Raditz',
    playerTag: ['EarlyGoku', 'Piccolo'],
    stage: 'kame_house', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['ch3'],
    preDialogue: [
      { char: 'narrator', text: 'Para salvar seu filho, Goku tomou uma decisão desesperada: unir forças com seu maior inimigo.' },
      { char: 'Piccolo', text: 'Não se engane, Kakarot. Faço isso apenas porque quero ser EU a te matar.' },
      { char: 'EarlyGoku', text: 'Não importa o motivo, Piccolo. Juntos, vamos trazer Gohan de volta!' },
      { char: 'Raditz', text: 'Ha! Dois guerreiros de segunda categoria. Mesmo unidos, não são páreo para mim!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Goku sacrificou-se, segurando Raditz enquanto o Makankōsappō de Piccolo os atravessava a ambos...' },
      { char: 'EarlyGoku', text: 'Piccolo... cuide de Gohan. Por favor.' },
      { char: 'Piccolo', text: '...Tch. Você é um idiota, Kakarot.' },
      { char: 'Raditz', text: 'Meus companheiros... Vegeta e Nappa... eles virão...' },
      { char: 'narrator', text: 'Em um ano, dois guerreiros muito mais poderosos estariam a caminho da Terra...' }
    ],
    zeniReward: 200
  },
  {
    id: 'ch3', num: 3,
    title: 'O Treinamento',
    subtitle: 'Gohan vs Piccolo — Mirante de Kami',
    player: 'KidGohan', opponent: 'Piccolo',
    stage: 'kami_lookout', opponentAI: 'medium', roundsToWin: 1,
    locked: true, unlocks: ['ch4'],
    preDialogue: [
      { char: 'narrator', text: 'Com Goku morto, Piccolo tomou Gohan sob sua tutela. O treinamento começou imediatamente.' },
      { char: 'Piccolo', text: 'Pare de chorar! Seu pai morreu como um herói. Fique forte para não ser um fardo.' },
      { char: 'KidGohan', text: 'Mas... mas eu tenho medo, Piccolo-san...' },
      { char: 'Piccolo', text: 'O medo é irrelevante. Só o poder importa. Agora LUTE!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Meses de treinamento brutal transformaram o tímido Gohan em um guerreiro.' },
      { char: 'Piccolo', text: '...Não é mau. Você tem o potencial do seu pai, garoto.' },
      { char: 'KidGohan', text: 'Piccolo-san... obrigado. Eu luto pelo meu pai!' }
    ],
    zeniReward: 200
  },
  {
    id: 'ch4', num: 4,
    title: 'Os Saibamans',
    subtitle: 'Guerreiros Z vs Saibamans',
    player: 'Yamcha', opponent: 'Saibaman',
    stage: 'saiyan_crater', opponentAI: 'medium', roundsToWin: 1,
    locked: true, unlocks: ['ch5'],
    specialUnlock: { condition: 'yamcha_only_all_saibamans', whatif: 'whatif_yamcha_plan' },
    preDialogue: [
      { char: 'narrator', text: 'Os Saiyajins chegaram. Nappa lançou seus Saibamans no campo de batalha para se divertirem.' },
      { char: 'Yamcha', text: 'Deixem comigo! Esses monstros de jardim não têm chance!' },
      { char: 'Nappa', text: 'Haha! O humano quer brigar com meus filhotes? Isso vai ser engraçado.' }
    ],
    midDialogue: { triggerHp: 0.5, lines: [
      { char: 'narrator', text: 'De repente, o Saibaman agarrou Yamcha em um abraço mortal...' },
      { char: 'Yamcha', text: 'LARGUE-ME! Não... não consigo me mover...!' },
      { char: 'Krillin', text: 'YAMCHAAA!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Um dos Saibamans se autodestruiu junto com Yamcha, matando-o. Um fim trágico e inesperado.' },
      { char: 'Krillin', text: 'YAMCHA! Você vai pagar por isso, seus monstros!' },
      { char: 'narrator', text: 'A batalha havia começado, e os Guerreiros Z já sofriam baixas...' }
    ],
    zeniReward: 250
  },
  {
    id: 'ch5', num: 5,
    title: 'A Fúria de Piccolo',
    subtitle: 'Piccolo vs Nappa — Round 1',
    player: 'Piccolo', opponent: 'Nappa',
    stage: 'saiyan_crater', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['ch6'],
    preDialogue: [
      { char: 'Piccolo', text: 'Vou lidar com o grandão. Gohan, fique atrás de mim!' },
      { char: 'KidGohan', text: 'Piccolo-san, cuidado!' },
      { char: 'Nappa', text: 'Um Namekuseijin? Ha! Você não é páreo para mim, verdinha.' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Piccolo foi gravemente ferido, mas manteve-se firme. Então Nappa voltou sua atenção para Gohan...' },
      { char: 'Piccolo', text: 'GOHAN! SAIA DAQUI!' },
      { char: 'narrator', text: 'Piccolo colocou-se na frente do raio de Nappa, salvando Gohan com sua própria vida...' }
    ],
    zeniReward: 250
  },
  {
    id: 'ch6', num: 6,
    title: 'Retorno de Goku',
    subtitle: 'Goku vs Nappa',
    player: 'EarlyGoku', opponent: 'Nappa',
    stage: 'saiyan_crater', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['ch7'],
    preDialogue: [
      { char: 'narrator', text: 'Goku ressuscitou e voou até o campo de batalha em tempo recorde, usando o Shunkanidō.' },
      { char: 'EarlyGoku', text: 'Piccolo... Gohan... lamento não ter chegado mais cedo.' },
      { char: 'Nappa', text: 'O último Saiyajin chega! Vegeta, ele é forte!' },
      { char: 'ScouterVegeta', text: '...Kakarot. 8.000 de nível de poder. Interessante.' },
      { char: 'EarlyGoku', text: 'Você vai pagar pelo que fez com meus amigos, Nappa!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Goku destruiu Nappa com uma facilidade aterrorizante, revelando um poder muito além do esperado.' },
      { char: 'Nappa', text: 'Im... impossível! Quando ele ficou tão forte?!' },
      { char: 'EarlyGoku', text: 'Agora é com você, Vegeta.' }
    ],
    zeniReward: 300
  },
  {
    id: 'ch7', num: 7,
    title: 'Príncipe vs Guerreiro Z',
    subtitle: 'Goku vs Vegeta',
    player: 'EarlyGoku', opponent: 'ScouterVegeta',
    stage: 'saiyan_crater', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'ScouterVegeta', text: 'Impressionante, Kakarot. Você realmente me surpreendeu.' },
      { char: 'EarlyGoku', text: 'Sua ambição de destruição vai acabar aqui, Vegeta!' },
      { char: 'ScouterVegeta', text: 'Hah! Você é apenas um Saiyajin de baixo nível. Sou o PRÍNCIPE DOS SAIYAJINS. Você não tem chance!' }
    ],
    midDialogue: { triggerHp: 0.4, lines: [
      { char: 'ScouterVegeta', text: 'Chega de brincar! Vou mostrar o poder de um Saiyajin de elite!' },
      { char: 'narrator', text: 'Vegeta transformou-se em Oozaru ao criar uma lua artificial...!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Após uma batalha épica, Vegeta foi derrotado mas sobreviveu. Krillin ia matar Vegeta quando Goku pediu para poupá-lo...' },
      { char: 'EarlyGoku', text: 'Deixe ele ir, Krillin. Tive um pressentimento... que vamos nos cruzar novamente.' },
      { char: 'ScouterVegeta', text: '...Você é louco, Kakarot. Mas... não se esqueça desse dia. Da próxima vez, não vou ser tão gentil.' },
      { char: 'narrator', text: 'A Saga Saiyajin chegou ao fim. Mas uma nova ameaça aguardava em um planeta distante: NAMEK.' }
    ],
    zeniReward: 500
  },

  // ══════════════════════════════════════════════════════════
  //  SAGA FREEZA — 19 CAPÍTULOS
  // ══════════════════════════════════════════════════════════

  {
    id: 'ch_namek1', num: 8,
    title: 'Primeiro Massacre',
    subtitle: 'Vegeta vs Cui — Planeta Namek',
    player: 'ScouterVegeta', opponent: 'Cui',
    p1Costume: 'NamekVegeta',
    stage: 'namek_surface', opponentAI: 'easy', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Vegeta chegou a Namek com um plano simples: roubar as Esferas do Dragão e superar Freeza. Mas alguém o esperava.' },
      { char: 'Cui', text: 'Vegeta! Freeza me mandou te eliminar. Você traiu o senhor Freeza!' },
      { char: 'ScouterVegeta', text: 'Cui... você é um idiota. Olha para mim — você acha mesmo que consegue me parar?' },
      { char: 'Cui', text: 'Estamos no mesmo nível de poder! Não vou perder!' },
      { char: 'ScouterVegeta', text: 'No mesmo nível? Que piada. Deixa eu mostrar o quanto eu cresci.' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Vegeta destruiu Cui sem esforço, demonstrando o quanto cresceu após a batalha na Terra.' },
      { char: 'ScouterVegeta', text: 'Hah. Isso era só o começo. Agora... as Esferas do Dragão de Namek são MINHAS.' }
    ],
    zeniReward: 300
  },
  {
    id: 'ch_namek2', num: 9,
    title: 'Contra os Lacaios de Freeza',
    subtitle: 'Gohan e Kuririn vs Appule — Vila Namekuseijin',
    player: 'KidGohan', opponent: 'Appule',
    playerTag: ['KidGohan', 'Krillin'],
    p1Costume: 'NamekGohan',
    stage: 'namek_village', opponentAI: 'easy', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Enquanto Krillin buscava ajuda, Gohan defendeu uma vila Namekuseijin dos soldados de Freeza.' },
      { char: 'Appule', text: 'Heh, um menininho humano. Vai me entregar aquela Esfera do Dragão ou vai se machucar!' },
      { char: 'KidGohan', text: 'Eu não vou deixar vocês machucarem essas pessoas! Não tenho medo de você!' }
    ],
    postDialogue: [
      { char: 'KidGohan', text: 'Papai... eu estou ficando mais forte. Por favor, cuide-se.' },
      { char: 'narrator', text: 'Gohan protegeu os Namekuseijins. Mas a chegada de Freeza em pessoa deixou todos apavorados...' }
    ],
    zeniReward: 280,
    costumeUnlock: { charId: 'KidGohan', costumeId: 'NamekGohan' }
  },
  {
    id: 'ch_namek3', num: 10,
    title: 'Perseguição Implacável',
    subtitle: 'Vegeta vs Dodoria — Planeta Namek',
    player: 'ScouterVegeta', opponent: 'Dodoria',
    p1Costume: 'NamekVegeta',
    stage: 'namek_surface', opponentAI: 'medium', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Enquanto Freeza destruía vilas Namekuseijin, Vegeta aproveitou o caos para enfrentar Dodoria.' },
      { char: 'Dodoria', text: 'VEGETA! Você traidor! O senhor Freeza vai te matar por isso!' },
      { char: 'ScouterVegeta', text: 'Dodoria... antes de morrer, me diga: como realmente morreram meus pais e o Planeta Vegeta?' },
      { char: 'Dodoria', text: 'Heh... foi o próprio Freeza quem destruiu Planeta Vegeta! Com medo do lendário Super Saiyajin!' },
      { char: 'ScouterVegeta', text: '...Como eu imaginei. Obrigado, Dodoria. Agora pode ir.' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Vegeta destruiu Dodoria. A raiva em seu coração queimava com mais intensidade do que nunca.' },
      { char: 'ScouterVegeta', text: 'Freeza... você destruiu meu planeta, minha raça, meu pai. Vou matar você com minhas próprias mãos.' }
    ],
    zeniReward: 320,
    costumeUnlock: { charId: 'ScouterVegeta', costumeId: 'NamekVegeta' }
  },
  {
    id: 'ch_namek4', num: 11,
    title: 'Beleza Imparável',
    subtitle: 'Vegeta vs Zarbon — Planeta Namek',
    player: 'ScouterVegeta', opponent: 'Zarbon',
    p1Costume: 'NamekVegeta',
    stage: 'namek_surface', opponentAI: 'medium', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Zarbon foi enviado para capturar Vegeta, após o Príncipe dos Saiyajins causar estragos demais.' },
      { char: 'Zarbon', text: 'Vegeta, você realmente é irritante. Não posso deixar você danificar mais o plano do senhor Freeza.' },
      { char: 'ScouterVegeta', text: 'Zarbon, você sempre foi arrogante demais. Tente me pegar, se conseguir.' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Vegeta foi derrotado pela forma transformada de Zarbon e capturado. Mas sua luta estava longe de acabar...' },
      { char: 'Zarbon', text: 'Impressionante... mas ainda não é suficiente, Vegeta. Durma bem.' }
    ],
    zeniReward: 340
  },
  {
    id: 'ch_namek5', num: 12,
    title: 'Beleza Monstruosa',
    subtitle: 'Vegeta vs Zarbon Transformado — Planeta Namek',
    player: 'ScouterVegeta', opponent: 'MonsterZarbon',
    p1Costume: 'NamekVegeta',
    stage: 'namek_surface', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Recuperado e mais forte após quase morrer, Vegeta escapou e confrontou Zarbon uma segunda vez.' },
      { char: 'Zarbon', text: 'Você se recuperou? Não importa. Desta vez, vou usar minha forma real.' },
      { char: 'ScouterVegeta', text: 'Perfeito. Porque desta vez... EU estou diferente também!' },
      { char: 'narrator', text: 'Gozando de uma cura Saiyajin, Vegeta voltou mais forte do que nunca!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Vegeta derrotou e matou Zarbon, roubando as Esferas do Dragão de Namek acumuladas por Freeza.' },
      { char: 'ScouterVegeta', text: 'As esferas são minhas, Zarbon. Descanse em paz... sua "beleza" não vai salvar a sua alma.' }
    ],
    zeniReward: 360
  },
  {
    id: 'ch_namek6', num: 13,
    title: 'O Jogo Sujo de Guldo',
    subtitle: 'Krillin vs Guldo — Planeta Namek',
    player: 'Krillin', opponent: 'Guldo',
    stage: 'namek_surface', opponentAI: 'medium', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'A Força Especial Ginyu chegou a Namek. Vegeta, Krillin e Gohan enfrentaram-nos juntos.' },
      { char: 'Guldo', text: 'Hehe... vou lidar com esses dois humanos. Podem me deixar com eles.' },
      { char: 'Krillin', text: 'Esse carinha parece fraco demais... Espera, por que não consigo me mover?!' },
      { char: 'Guldo', text: 'PARALISIA TEMPORAL! Agora estão à minha mercê!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Quando Guldo estava prestes a matar Krillin, Vegeta decapitou o ser com um Ki Blast.' },
      { char: 'ScouterVegeta', text: 'Que inútil. Um da Força Ginyu morrendo para um humano... que vergonha.' },
      { char: 'Krillin', text: 'Obrigado, Vegeta! Mas... por que você nos ajudou?' },
      { char: 'ScouterVegeta', text: 'Não me agradeça. Apenas precisava que você sobrevivesse um pouco mais.' }
    ],
    zeniReward: 350
  },
  {
    id: 'ch_namek7', num: 14,
    title: 'O Massacre de Rikum',
    subtitle: 'Vegeta Namek vs Rikum — Planeta Namek',
    player: 'ScouterVegeta', opponent: 'Rikum',
    p1Costume: 'NamekVegeta',
    stage: 'namek_surface', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Rikum, o gigante da Força Ginyu, desafiou Vegeta em combate pessoal.' },
      { char: 'Rikum', text: 'RIKUM POSE! É a minha vez! Vou acabar com você, Vegeta!' },
      { char: 'ScouterVegeta', text: 'Um monstro como você não tem chance contra o Príncipe dos Saiyajins!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Vegeta foi espancado por Rikum. Quando tudo parecia perdido, Goku chegou de nave a Namek...' },
      { char: 'EarlyGoku', text: 'Desculpem a demora! Eu fiz alguns treinos no caminho.' },
      { char: 'Rikum', text: 'Outro humano fraco?! RIKUM ERASER GU—' },
      { char: 'narrator', text: 'Goku derrotou Rikum com um único soco.' }
    ],
    zeniReward: 380
  },
  {
    id: 'ch_namek8', num: 15,
    title: 'Velocidade Supersônica',
    subtitle: 'Goku Early vs Burter — Planeta Namek',
    player: 'EarlyGoku', opponent: 'Burter',
    stage: 'namek_surface', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'Burter', text: 'Eu sou o SER MAIS RÁPIDO DO UNIVERSO! Você nem vai me ver, humano!' },
      { char: 'EarlyGoku', text: 'Hmm... não é bem assim. Acho que consigo acompanhar sua velocidade.' },
      { char: 'Burter', text: 'IMPOSSÍVEL! Ninguém é mais rápido que eu!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Goku derrotou Burter e Jeice, deixando-os inconscientes. Vegeta... foi menos gentil com eles.' },
      { char: 'EarlyGoku', text: 'VEGETA! Não mate eles! Já estão fora de combate!' },
      { char: 'ScouterVegeta', text: 'Você é sentimental demais, Kakarot. Inimigos vencidos são inimigos que voltam.' }
    ],
    zeniReward: 370
  },
  {
    id: 'ch_namek9', num: 16,
    title: 'Magma Vermelho',
    subtitle: 'Goku Early vs Jeice — Planeta Namek',
    player: 'EarlyGoku', opponent: 'Jeice',
    stage: 'namek_surface', opponentAI: 'medium', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'Jeice', text: 'Você... você é um monstro! Como venceu Burter tão facilmente?!' },
      { char: 'EarlyGoku', text: 'Não quer parar com isso? Não precisa se machucar.' },
      { char: 'Jeice', text: 'Vou chamar o Capitão Ginyu! CRUSHER BALL!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Jeice fugiu para buscar reforços. O Capitão Ginyu logo apareceria...' },
      { char: 'EarlyGoku', text: 'Não era minha intenção deixar alguém escapar. Mau pressentimento...' }
    ],
    zeniReward: 350
  },
  {
    id: 'ch_namek10', num: 17,
    title: 'Trocar de Corpo',
    subtitle: 'Goku vs Ginyu — Nave de Freeza',
    player: 'EarlyGoku', opponent: 'Ginyu',
    stage: 'namek_freeza_ship', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'Ginyu', text: 'GINYU FORCE! Pose número 5!' },
      { char: 'Jeice', text: 'Capitão Ginyu! Esse guerreiro tem mais de 180.000 de nível de poder!' },
      { char: 'Ginyu', text: 'Interessante. Que tal trocarmos de corpo, amigo?' },
      { char: 'EarlyGoku', text: 'O quê?! O que é esse poder estranho que ele está coletando?!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Ginyu usou seu ataque especial e trocou de corpo com Goku! Agora ele controla o corpo mais poderoso do universo...' },
      { char: 'Ginyu', text: 'HAHA! Com este corpo... sou invencível! Mas não sei usar esse poder ainda...' },
      { char: 'EarlyGoku', text: 'Meu corpo... eu estou dentro do corpo de Ginyu. Isso é horrível!' }
    ],
    zeniReward: 420
  },
  {
    id: 'ch_namek11', num: 18,
    title: 'O Fim das Forças Especiais',
    subtitle: 'Vegeta Namek vs Jeice — Planeta Namek',
    player: 'ScouterVegeta', opponent: 'Jeice',
    p1Costume: 'NamekVegeta',
    stage: 'namek_surface', opponentAI: 'medium', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Com Ginyu neutralizado, era hora de finalizar a Força Especial.' },
      { char: 'Jeice', text: 'Você... Vegeta! Vou vingar o Capitão Ginyu e o resto da Força!' },
      { char: 'ScouterVegeta', text: 'Você? Vingar alguém? Não me faça rir, Jeice. Você é o mais fraco que sobrou.' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Vegeta eliminou Jeice sem dificuldade. A Força Especial Ginyu havia sido completamente destruída.' },
      { char: 'ScouterVegeta', text: 'Cinco guerreiros de elite... e todos eliminados. Agora só resta... FREEZA.' }
    ],
    zeniReward: 380
  },
  {
    id: 'ch_namek12', num: 19,
    title: 'Um poder de luta de 500 mil?!',
    subtitle: 'Gohan e Kuririn vs Freeza 1ª Forma — Nave de Freeza',
    player: 'KidGohan', opponent: 'Frieza1',
    playerTag: ['KidGohan', 'Krillin'],
    p1Costume: 'NamekGohan',
    stage: 'namek_freeza_ship', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Freeza, de posse das Esferas do Dragão, confrontou nossos heróis pessoalmente pela primeira vez.' },
      { char: 'Frieza1', text: 'Que crianças impertinentes. Não esperava que guerreiros tão jovens chegassem até aqui.' },
      { char: 'KidGohan', text: 'Você destruiu aldeias inteiras e matou Namekuseijins inocentes! Você vai pagar!' },
      { char: 'Frieza1', text: 'Oh? Um filhote querendo me desafiar? Que adorável... e que patético.' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Mesmo na sua primeira forma, Freeza era imensamente mais poderoso. Mas algo nos guerreiros Z os mantinha lutando...' },
      { char: 'Frieza1', text: 'Impressionante. Vocês são mais fortes do que esperava. Mas isso... não vai mudar nada.' },
      { char: 'narrator', text: 'Freeza começou sua transformação para a segunda forma...' }
    ],
    zeniReward: 450
  },
  {
    id: 'ch_namek13', num: 20,
    title: 'Um milhão de força',
    subtitle: 'Krillin vs Freeza 2ª Forma — Planeta Namek',
    player: 'Krillin', opponent: 'Frieza2',
    stage: 'namek_surface', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Na sua segunda forma, Freeza revelou poder acima de 1 milhão — ultrapassando qualquer um dos guerreiros.' },
      { char: 'Frieza2', text: 'Agora sou ainda mais magnífico. Quem ousa me desafiar primeiro?' },
      { char: 'Krillin', text: 'Essa coisa ficou ainda maior... mas não vou recuar! Temos que ganhar tempo!' },
      { char: 'Piccolo', text: 'Krillin, cuidado! Essa energia é absurda...' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Freeza espetou Krillin com seu corno. Piccolo, unido com Nail, interveio para salvar os companheiros.' },
      { char: 'Krillin', text: 'Ugh... não posso... perder aqui...' },
      { char: 'Piccolo', text: 'CHEGA! Agora é comigo, Freeza!' }
    ],
    zeniReward: 460
  },
  {
    id: 'ch_namek14', num: 21,
    title: 'Terror Alienígena',
    subtitle: 'Piccolo vs Freeza 3ª Forma — Planeta Namek',
    player: 'Piccolo', opponent: 'Frieza3',
    stage: 'namek_surface', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Piccolo, fundido com Nail, chegou ao nível do Freeza transformado — mas o vilão guardava mais surpresas.' },
      { char: 'Piccolo', text: 'Agora estou no mesmo nível que você, Freeza. Venha!' },
      { char: 'Frieza3', text: 'Que mudança fascinante... mas você ainda é um inseto para mim.' },
      { char: 'narrator', text: 'Freeza revelou sua terceira transformação monstruosa...' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'A terceira forma de Freeza era aterrorizante. Piccolo foi dominado, e todos aguardavam com terror o que viria a seguir...' },
      { char: 'Frieza3', text: 'Esta... ainda não é minha forma final. Permitam-me mostrar minha forma VERDADEIRA.' },
      { char: 'KidGohan', text: 'A forma final... o que será que está por vir?!' }
    ],
    zeniReward: 480
  },
  {
    id: 'ch_namek15', num: 22,
    title: 'Orgulho Saiyajin',
    subtitle: 'Vegeta Namek vs Freeza 4ª Forma — Cratera de Namek',
    player: 'ScouterVegeta', opponent: 'Frieza4',
    p1Costume: 'NamekVegeta',
    stage: 'namek_crater', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Vegeta pediu para ser morto e ressuscitado por Krillin e o Dragão de Namek, esperando emergir como Super Saiyajin. O plano funcionou parcialmente...' },
      { char: 'ScouterVegeta', text: 'Freeza... você destruiu meu planeta, matou meu pai, escravizou minha raça! EU VOU TE MATAR!' },
      { char: 'Frieza4', text: 'Oh, Vegeta. Tão patético. Você sempre tentou superar o impossível.' },
      { char: 'ScouterVegeta', text: 'Sou o PRÍNCIPE DOS SAIYAJINS! Meu orgulho não vai me deixar perder para VOCÊ!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Mesmo com todo o orgulho e raiva, Vegeta foi brutalmente derrotado por Freeza. Moribundo, ele disse suas últimas palavras...' },
      { char: 'ScouterVegeta', text: '...Kakarot... você é o único Saiyajin que resta. Somos escravos de Freeza desde o nascimento... apenas você... pode vencê-lo...' },
      { char: 'EarlyGoku', text: 'Vegeta... vou te vingar. Prometo.' },
      { char: 'narrator', text: 'Vegeta fechou os olhos. E pela primeira vez, as lágrimas do Príncipe dos Saiyajins caíram no solo de Namek.' }
    ],
    zeniReward: 520
  },
  {
    id: 'ch_namek16', num: 23,
    title: 'Duelo Destinado',
    subtitle: 'Goku Namek vs Freeza 4ª Forma — Cratera de Namek',
    player: 'NamekGoku', opponent: 'Frieza4',
    stage: 'namek_crater', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Goku, recuperado na câmara de regeneração da nave de Freeza, chegou ao campo de batalha. Finalmente, o confronto destinado.' },
      { char: 'EarlyGoku', text: 'Freeza. Você vai responder por tudo que fez. Pela raça Saiyajin, por Piccolo, por Vegeta, pelos Namekuseijins.' },
      { char: 'Frieza4', text: 'Oh? Outro Saiyajin? Que fascinante. Que tédio.' },
      { char: 'EarlyGoku', text: 'Eu sou Goku. Um guerreiro da Terra. E estou aqui para te parar.' }
    ],
    midDialogue: { triggerHp: 0.5, lines: [
      { char: 'Frieza4', text: 'Impressionante... você realmente pode me machucar. Que ser extraordinário.' },
      { char: 'EarlyGoku', text: 'Ainda não acabou, Freeza!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Goku e Freeza lutaram em um nível jamais visto. Mas Freeza guardava seu poder máximo...' },
      { char: 'Frieza4', text: 'Você é de fato o lutador mais formidável que já encontrei. Mas ainda não vi meu poder real.' },
      { char: 'EarlyGoku', text: 'Eu também ainda não estou no meu limite, Freeza.' }
    ],
    zeniReward: 560
  },
  {
    id: 'ch_namek17', num: 24,
    title: 'O Lendário Super Saiyajin',
    subtitle: 'Goku SSJ vs Freeza 4ª Forma — Cratera de Namek',
    player: 'NamekSSJGoku', opponent: 'Frieza4',
    stage: 'namek_crater', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Freeza matou Krillin com seus poderes. Algo dentro de Goku... quebrou. Uma energia nunca vista antes começou a emergir.' },
      { char: 'EarlyGoku', text: 'Krillin... meu amigo desde a infância... você vai pagar por isso, FREEZA!' },
      { char: 'narrator', text: 'O cabelo de Goku tornou-se dourado. Seus olhos, verdes. O aura ao redor dele iluminou o planeta inteiro.' },
      { char: 'Frieza4', text: 'O que... o que está acontecendo?! Que poder é esse?!' },
      { char: 'EarlyGoku', text: 'EU SOU GOKU... O SUPER SAIYAJIN!!!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'O Super Saiyajin dominou completamente Freeza em sua forma final. Pela primeira vez na história, Freeza sentia medo.' },
      { char: 'Frieza4', text: 'Impossível... um Super Saiyajin... realmente existia... o lendário...' },
      { char: 'EarlyGoku', text: 'Desista, Freeza. Você está completamente superado. Isso acabou.' }
    ],
    zeniReward: 650
  },
  {
    id: 'ch_namek18', num: 25,
    title: '5 Minutos',
    subtitle: 'Goku SSJ vs Freeza Poder Total — Namek em Chamas',
    player: 'NamekSSJGoku', opponent: 'Frieza5',
    stage: 'namek_dying', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: ['android_ch0'],
    timer: 300, // 5 minutos!
    preDialogue: [
      { char: 'narrator', text: 'Desesperado, Freeza liberou 100% de seu poder — e destruiu o núcleo do Planeta Namek. Restam 5 minutos antes da explosão.' },
      { char: 'Frieza5', text: 'A 100% do meu poder... sou o ser mais poderoso do UNIVERSO! Você vai morrer aqui junto com esse planeta!' },
      { char: 'EarlyGoku', text: 'Namek vai explodir... mas antes disso, EU VOU TE DERROTAR!' },
      { char: 'narrator', text: 'O planeta está se despedaçando. Cinco minutos. É agora ou nunca.' }
    ],
    midDialogue: { triggerHp: 0.3, lines: [
      { char: 'Frieza5', text: 'POR QUE... POR QUE UM SAIYAJIN DE BAIXO NÍVEL É MAIS FORTE QUE EU?!' },
      { char: 'EarlyGoku', text: 'Porque eu luto por algo que você nunca vai entender, Freeza: pelos meus amigos!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'O Super Saiyajin venceu. Freeza foi destruído sobre o solo do Planeta Namek em chamas.' },
      { char: 'EarlyGoku', text: 'Acabou... Freeza...' },
      { char: 'narrator', text: 'Namek explodiu. Goku estava desaparecido. Os guerreiros Z rezaram por um milagre...' },
      { char: 'narrator', text: 'Mas as Esferas do Dragão de Namek trouxeram de volta todos que Freeza havia matado. E Goku... conseguiu escapar numa nave e pousar em um planeta alienígena.' },
      { char: 'narrator', text: 'A Saga de Freeza havia chegado ao fim. O lendário Super Saiyajin havia surgido. O universo jamais seria o mesmo.' }
    ],
    zeniReward: 800
  }
];

// Freeza Namek chapters array (para referência)
const FREEZA_CHAPTERS = STORY_CHAPTERS.filter(c => c.id.startsWith('ch_namek'));

// ══════════════════════════════════════════════════════════
//  SAGA ANDROIDE
// ══════════════════════════════════════════════════════════
const ANDROID_CHAPTERS = [
  {
    id: 'android_ch0', num: 0,
    title: 'Prólogo',
    subtitle: 'Gohan do Futuro vs Androide 17 e 18',
    player: 'FGohan', opponent: 'A17',
    opponentTag: ['A17','A18'],
    isTagOpponent: true,
    stage: 'namek_dying', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['android_ch1'],
    preDialogue: [
      { char: 'narrator', text: 'Num futuro sombrio, os Androides 17 e 18 devastaram o mundo há anos. Gohan — o último guerreiro Z — ainda resiste.' },
      { char: 'FGohan', text: 'Androides... por quanto tempo vou ter que continuar? Não importa. Enquanto eu puder lutar, luto.' },
      { char: 'A17', text: 'Olha quem apareceu. O cachorrinho de Goku. Ainda vivo? Que decepção.' },
      { char: 'A18', text: 'Vamos acabar logo com isso, 17. Já perdi o interesse nesse humano.' },
      { char: 'FGohan', text: 'EU NÃO SOU UM HUMANO QUALQUER! Sou o filho de Goku!' }
    ],
    midDialogue: { triggerHp: 0.4, lines: [
      { char: 'A17', text: 'Ele está transformado... não importa. Mesmo assim não é suficiente.' },
      { char: 'FGohan', text: 'Vou lutar até o fim... não posso desistir agora!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Mesmo transformado, Gohan não pôde vencer os dois androides sozinho. Ele caiu.' },
      { char: 'A18', text: 'Acabou. Que desperdício de poder.' },
      { char: 'narrator', text: 'Gohan do Futuro morreu naquele dia. Mas seu discípulo — Trunks — logo partiria para o passado para mudar o destino...' }
    ],
    zeniReward: 300
  },
  {
    id: 'android_ch1', num: 1,
    title: 'O Assassino dos Imperadores',
    subtitle: 'Trunks do Futuro vs Rei Cold e Mecha Freeza',
    player: 'FTrunks', opponent: 'KingCold',
    opponentTag: ['KingCold','MechaFreeza'],
    isTagOpponent: true,
    stage: 'planet_earth', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['android_ch2'],
    preDialogue: [
      { char: 'narrator', text: 'Uma nave alienigena pousa na Terra. Freeza, reconstruído como máquina, veio para se vingar de Goku. Seu pai, Rei Cold, acompanha.' },
      { char: 'MechaFreeza', text: 'Onde está Goku?! Venho destruir esse planeta miserável e matar o Saiyajin que me humilhou!' },
      { char: 'KingCold', text: 'Paciência, filho. Primeiro eliminamos qualquer resistência.' },
      { char: 'FTrunks', text: 'Goku não vai chegar a tempo. Então serei eu a lidar com vocês.' },
      { char: 'MechaFreeza', text: 'Um garoto?! HAHAHAHA! Mate-o, pai. Que diversão!' },
      { char: 'FTrunks', text: 'Essa espada foi forjada para acabar com vocês dois.' }
    ],
    midDialogue: { triggerHp: 0.4, lines: [
      { char: 'MechaFreeza', text: 'Impossível! Esse nível de poder...!' },
      { char: 'FTrunks', text: 'Surpreso? Sou Super Saiyajin. E vim especialmente para isso.' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Trunks do Futuro eliminou Freeza e Rei Cold com facilidade impressionante. O mundo estava chocado.' },
      { char: 'FTrunks', text: 'Está feito. Mas os verdadeiros perigos ainda estão por vir...' },
      { char: 'narrator', text: 'Trunks esperou para entregar uma mensagem urgente a Goku: em três anos, os Androides surgiriam.' }
    ],
    zeniReward: 400
  },
  {
    id: 'android_ch2', num: 2,
    title: 'O Criador dos Androides',
    subtitle: 'Yamcha vs Dr. Gero / Androide 20',
    player: 'Yamcha', opponent: 'A20',
    stage: 'wasteland', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['android_ch3'],
    preDialogue: [
      { char: 'narrator', text: 'Três anos se passaram. Os Androides aparecem na cidade. Os Guerreiros Z correm para enfrentá-los — mas Dr. Gero tem uma surpresa.' },
      { char: 'A20', text: 'Há, há... vejam só. Os guerreiros Z vieram para sua própria extinção. Que conveniente.' },
      { char: 'Yamcha', text: 'Você deve ser o Dr. Gero! Não vai escapar!' },
      { char: 'A20', text: 'Androide 20... esse é meu nome agora. E você será a primeira vítima.' }
    ],
    midDialogue: { triggerHp: 0.5, lines: [
      { char: 'A20', text: 'Idiota! Estou absorvendo sua energia!' },
      { char: 'Yamcha', text: 'LARGUE-ME! Não consigo me mover...!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Dr. Gero absorveu a energia de Yamcha e o deixou para morrer. Os guerreiros Z chegaram a tempo de salvá-lo, mas o cientista fugiu para seu laboratório.' },
      { char: 'Krillin', text: 'YAMCHA! Aguenta! Eu vou te ajudar!' },
      { char: 'narrator', text: 'O perigo real ainda estava por vir.' }
    ],
    zeniReward: 350
  },
  {
    id: 'android_ch3', num: 3,
    title: 'Falha no Coração',
    subtitle: 'Goku SSJ vs Androide 19',
    player: 'MidGokuSSJ', opponent: 'A19',
    stage: 'wasteland', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['android_ch4'],
    preDialogue: [
      { char: 'narrator', text: 'Goku enfrenta o Androide 19. A batalha começa bem — até que o vírus cardíaco previsto por Trunks começa a agir.' },
      { char: 'MidGokuSSJ', text: 'Venha então, Androide! Sou Super Saiyajin — estou no auge do meu poder!' },
      { char: 'A19', text: 'Processando... nível de ameaça elevado. Iniciando absorção de energia.' },
      { char: 'MidGokuSSJ', text: 'Não... meu coração... esse calor...!' }
    ],
    midDialogue: { triggerHp: 0.4, lines: [
      { char: 'MidGokuSSJ', text: 'Não consigo... o vírus... está me consumindo por dentro...!' },
      { char: 'A19', text: 'Seu ki está enfraquecendo. Perfeito. Absorverei tudo.' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'O vírus cardíaco derrubou Goku no meio da batalha. Vegeta precisou intervir.' },
      { char: 'Vegeta', text: 'Kakarot, você é um idiota. Afaste-se. Deixe um Saiyajin REAL lidar com essa lata-velha.' },
      { char: 'narrator', text: 'Goku foi levado de volta para casa para receber o antídoto. Vegeta tomou seu lugar.' }
    ],
    zeniReward: 400
  },
  {
    id: 'android_ch4', num: 4,
    title: 'O Príncipe dos Saiyajins',
    subtitle: 'Vegeta SSJ vs Androide 19',
    player: 'SSJVegeta', opponent: 'A19',
    stage: 'wasteland', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: ['android_ch5'],
    preDialogue: [
      { char: 'ScouterVegeta', text: 'Você derrotou Kakarot? Então... eu vou te mostrar o que um verdadeiro Saiyajin pode fazer!' },
      { char: 'A19', text: 'Mais um Saiyajin. Dados insuficientes. Iniciando análise de combate.' },
      { char: 'SSJVegeta', text: 'ANALISAR?! Você vai me ANALISAR?!' }
    ],
    midDialogue: { triggerHp: 0.3, lines: [
      { char: 'A19', text: 'Impossível... esse poder...!' },
      { char: 'SSJVegeta', text: 'Agora você vai conhecer o ataque final do Príncipe dos Saiyajins. BIG BANG ATTACK!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Vegeta destruiu o Androide 19 com brutalidade calculada. A multidão assistiu em choque.' },
      { char: 'SSJVegeta', text: 'Isso é tudo? Onde está o 20? Quero destruir todos eles.' },
      { char: 'narrator', text: 'Dr. Gero observou escondido e fugiu — a caminho de seu laboratório secreto para ativar os verdadeiros androides.' }
    ],
    zeniReward: 450
  },
  {
    id: 'android_ch5', num: 5,
    title: 'Perseguição',
    subtitle: 'Piccolo vs Androide 20',
    player: 'Piccolo', opponent: 'A20',
    stage: 'kami_lookout', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['android_ch6'],
    preDialogue: [
      { char: 'narrator', text: 'Dr. Gero fugiu pela floresta em direção ao laboratório. Piccolo foi o mais rápido a persegui-lo.' },
      { char: 'Piccolo', text: 'Não adianta correr, criatura. Conheço cada centímetro desta floresta.' },
      { char: 'A20', text: 'Namekuseijin... você é irrelevante. Meu objetivo é Goku.' },
      { char: 'Piccolo', text: 'Então você vai ter que me matar primeiro. E duvido que consiga.' }
    ],
    midDialogue: { triggerHp: 0.4, lines: [
      { char: 'A20', text: 'Sua energia é considerável... absorverei mais!' },
      { char: 'Piccolo', text: 'Quer absorver meu ki? ENTÃO TOME TUDO DE UMA VEZ!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Piccolo encurralou Dr. Gero, mas não chegou a tempo de evitar o que aconteceu a seguir.' },
      { char: 'Piccolo', text: 'Onde você acha que vai?! O laboratório... precisamos chegar lá antes que...' },
      { char: 'narrator', text: 'Era tarde demais.' }
    ],
    zeniReward: 380
  },
  {
    id: 'android_ch6', num: 6,
    title: 'Morte do Criador',
    subtitle: 'Androide 17 vs Androide 20',
    player: 'A17', opponent: 'A20',
    stage: 'namek_freeza_ship', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['android_ch7'],
    preDialogue: [
      { char: 'narrator', text: 'No laboratório secreto, Dr. Gero ativou os Androides 17 e 18 — mas perdeu o controle imediatamente.' },
      { char: 'A20', text: 'Androides! Obedecerão ao seu criador! Combatam os guerreiros Z!' },
      { char: 'A17', text: '...Criador? Hm. Acho que não.' },
      { char: 'A18', text: 'Liberdade é tão mais interessante, não é, 17?' },
      { char: 'A20', text: 'O QUÊ?! Vocês foram programados para obedecer!' },
      { char: 'A17', text: 'Obrigado por nos criar, doutor. Agora... adeus.' }
    ],
    midDialogue: { triggerHp: 0.3, lines: [
      { char: 'A20', text: 'Você... você não pode me destruir! SOU SEU CRIADOR!' },
      { char: 'A17', text: 'Exatamente. E todo criador tem que morrer um dia.' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Androide 17 destruiu Dr. Gero sem hesitação. A criação matou o criador.' },
      { char: 'A18', text: 'Acabou. E agora, 17? O quê fazemos?' },
      { char: 'A17', text: 'O quê acha? Vamos nos divertir. Os guerreiros Z primeiro.' }
    ],
    zeniReward: 400
  },
  {
    id: 'android_ch7', num: 7,
    title: 'Tentativa de Matar',
    subtitle: 'Trunks do Futuro vs Androide 17 e 18',
    player: 'FTrunksSSJ', opponent: 'A17',
    opponentTag: ['A17','A18'],
    isTagOpponent: true,
    stage: 'namek_freeza_ship', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: ['android_ch8'],
    preDialogue: [
      { char: 'narrator', text: 'Trunks do Futuro, vendo os androides liberados, tentou destruí-los imediatamente — esses não eram os mesmos androides do seu futuro, mas o perigo era real.' },
      { char: 'FTrunksSSJ', text: 'Preciso acabar com eles agora! Não posso deixar isso se repetir!' },
      { char: 'A17', text: 'Ah? Um Super Saiyajin loiro. Interessante. Deixa eu testar.' },
      { char: 'A18', text: 'Cuidado, 17. Esse emite uma leitura de poder considerável.' },
      { char: 'FTrunksSSJ', text: 'Vocês não sabem o que vão causar! Terei que vos destruir!' }
    ],
    midDialogue: { triggerHp: 0.4, lines: [
      { char: 'A17', text: 'Hm... esse menino é forte mesmo. Mas ainda assim...' },
      { char: 'FTrunksSSJ', text: 'Por que...! Por que não consigo vencer?!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Mesmo transformado, Trunks não pôde enfrentar os dois androides simultaneamente. Vegeta o puxou para longe.' },
      { char: 'SSJVegeta', text: 'Idiota. Você vai morrer assim. Recue.' },
      { char: 'FTrunksSSJ', text: 'Mas... temos que destruí-los!' },
      { char: 'SSJVegeta', text: 'Vou lutar com eles do meu jeito. Afaste-se.' }
    ],
    zeniReward: 450
  },
  {
    id: 'android_ch8', num: 8,
    title: 'Quebra de Braço',
    subtitle: 'Vegeta SSJ vs Androide 18',
    player: 'SSJVegeta', opponent: 'A18',
    stage: 'wasteland', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: ['android_ch9'],
    preDialogue: [
      { char: 'narrator', text: 'Vegeta enfrenta a Androide 18 sozinho — seu orgulho não admite ajuda.' },
      { char: 'SSJVegeta', text: 'Uma mulher androide. Interessante. Vou destruí-la rapidamente.' },
      { char: 'A18', text: 'Que arrogância. Vai custar caro, príncipe.' },
      { char: 'SSJVegeta', text: 'Sou o Príncipe dos Saiyajins! Nenhuma máquina vai me derrotar!' }
    ],
    midDialogue: { triggerHp: 0.4, lines: [
      { char: 'SSJVegeta', text: 'Como... como ela é tão forte?!' },
      { char: 'A18', text: 'Surpreendido? Fomos projetados para superar qualquer Super Saiyajin.' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Androide 18 quebrou o braço de Vegeta. Pela primeira vez, o príncipe havia encontrado um adversário além de sua compreensão.' },
      { char: 'A18', text: 'Príncipe dos Saiyajins... hm. Não tão impressionante quanto o esperado.' },
      { char: 'SSJVegeta', text: 'Meu... meu braço... não... AINDA NÃO ACABOU!' },
      { char: 'narrator', text: 'Os androides partiram. Os guerreiros Z, derrotados, precisavam de um novo plano.' }
    ],
    zeniReward: 500
  },
  {
    id: 'android_ch9', num: 9,
    title: 'Massacre dos Guerreiros Z',
    subtitle: 'Piccolo e Kuririn vs Androide 17',
    player: 'Piccolo', opponent: 'A17',
    playerTag: ['Piccolo', 'Krillin'],
    stage: 'wasteland', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch1'],
    ultraDifficult: true,
    preDialogue: [
      { char: 'narrator', text: 'Com Goku doente e Vegeta derrotado, coube aos guerreiros restantes enfrentar o Androide 17. Piccolo, Kuririn e Tenshinhan entraram juntos na batalha mais difícil de suas vidas.' },
      { char: 'Piccolo', text: 'Escutem. Nossas chances são mínimas. Mas lutamos juntos. Não recuamos.' },
      { char: 'Krillin', text: 'P-Piccolo... esse androide... a leitura de poder é absurda.' },
      { char: 'Tien', text: 'Não importa. Somos guerreiros Z. Lutamos.' },
      { char: 'A17', text: 'Três de uma vez? Que gentileza. Fica mais eficiente assim.' }
    ],
    midDialogue: { triggerHp: 0.5, lines: [
      { char: 'A17', text: 'Estão ficando cansados? Eu não. Energia ilimitada é uma vantagem conveniente.' },
      { char: 'Piccolo', text: 'Segurem! PRECISAMOS SEGURAR!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Os três guerreiros foram derrotados. O Androide 17 mal havia se esforçado.' },
      { char: 'A17', text: 'Decepcionante. Esperava mais diversão.' },
      { char: 'narrator', text: 'Os guerreiros Z precisavam de uma solução desesperada. A Câmara do Tempo e do Espírito tornou-se a última esperança.' }
    ],
    zeniReward: 600
  }
];

// Adicionar capítulos androide ao array principal com prefixo de identificação
ANDROID_CHAPTERS.forEach(ch => { ch.saga = 'android'; STORY_CHAPTERS.push(ch); });


// ══════════════════════════════════════════════════════════
//  SAGA CELL
// ══════════════════════════════════════════════════════════
const CELL_CHAPTERS = [
  {
    id: 'cell_ch1', num: 1,
    title: 'O Mistério',
    subtitle: 'Piccolo vs Cell Imperfeito',
    player: 'Piccolo', opponent: 'Cell1',
    stage: 'wasteland', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch2'],
    preDialogue: [
      { char: 'narrator', text: 'Uma criatura desconhecida surgiu absorvendo humanos e deixando cascas de pele pelo interior. Piccolo foi o primeiro a encontrá-la.' },
      { char: 'Piccolo', text: 'Que monstro é esse? Ele tem o ki de Goku... de Freeza... de todos!' },
      { char: 'Cell1', text: 'Namekuseijin. Você é desnecessário para minha evolução. Mas seu ki será absorvido de qualquer forma.' },
      { char: 'Piccolo', text: 'Você não vai a lugar nenhum! Vou te destruir antes que absorva mais ninguém!' }
    ],
    midDialogue: { triggerHp: 0.4, lines: [
      { char: 'Cell1', text: 'Interessante... você é mais forte do que imaginei. Mas ainda assim, insuficiente.' },
      { char: 'Piccolo', text: 'Monstro... de onde você veio?!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Cell revelou sua origem: um ser criado pelo Dr. Gero com o DNA de todos os guerreiros Z — e de Freeza.' },
      { char: 'Cell1', text: 'Meu nome é Cell. Fui criado para atingir a perfeição. E nada vai me parar.' },
      { char: 'Piccolo', text: 'Perfeição... os guerreiros Z precisam saber disso. Imediatamente.' }
    ],
    zeniReward: 350
  },
  {
    id: 'cell_ch2', num: 2,
    title: 'A Aliança Improvável',
    subtitle: 'Piccolo e Androide 17 vs Cell Imperfeito',
    player: 'Piccolo', opponent: 'Cell1',
    playerTag: ['Piccolo', 'A17'],
    stage: 'wasteland', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch3'],
    preDialogue: [
      { char: 'narrator', text: 'Cell perseguiu os Androides 17 e 18 para absorvê-los. Piccolo forçou uma aliança com o Androide 17.' },
      { char: 'A17', text: 'Parceria com um Namekuseijin? Que situação estranha.' },
      { char: 'Piccolo', text: 'Não gosto disso mais que você. Mas Cell vai te absorver se não agirmos juntos.' },
      { char: 'Cell1', text: 'Androide 17... finalmente. Venha para mim. A perfeição te aguarda.' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'A aliança segurou Cell por um tempo, mas o monstro era ágil demais para ser eliminado.' },
      { char: 'A17', text: 'Esse bicho é sério. Mais forte do que parece.' },
      { char: 'Piccolo', text: 'Precisamos de mais força. Precisamos de Goku.' }
    ],
    zeniReward: 380
  },
  {
    id: 'cell_ch3', num: 3,
    title: 'O Massacre contra Piccolo',
    subtitle: 'Cell Imperfeito vs Piccolo',
    player: 'Cell1', opponent: 'Piccolo',
    stage: 'namek_freeza_ship', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch4'],
    ultraDifficult: true,
    preDialogue: [
      { char: 'narrator', text: 'Cell voltou a atacar Piccolo diretamente — desta vez com força ainda maior. O Namekuseijin tentou tudo.' },
      { char: 'Piccolo', text: 'Você não vai passar por mim, Cell! Não enquanto eu ainda estiver de pé!' },
      { char: 'Cell1', text: 'Sua resistência é admirável. Mas o resultado é inevitável.' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Cell arrancou o braço de Piccolo e o deixou quase morto. Apenas a chegada do Androide 16 impediu o pior.' },
      { char: 'Cell1', text: 'Pena. Você foi um obstáculo interessante, Namekuseijin.' },
      { char: 'Piccolo', text: '...ainda... ainda estou... vivo...' }
    ],
    zeniReward: 400
  },
  {
    id: 'cell_ch4', num: 4,
    title: 'Número 16',
    subtitle: 'Androide 16 vs Cell Imperfeito',
    player: 'A16', opponent: 'Cell1',
    stage: 'wasteland', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch5'],
    preDialogue: [
      { char: 'narrator', text: 'O Androide 16, o gigante gentil criado para matar Goku, interveio para proteger o 17 e o 18.' },
      { char: 'A16', text: 'Você não vai tocar no 17 ou no 18. Sou o Androide 16. E fui criado para lutar.' },
      { char: 'Cell1', text: 'Androide 16? Você não estava nos dados do Dr. Gero. Mas não importa. Não é o 17 ou 18.' },
      { char: 'A16', text: 'Recue agora, Cell. Ou eu vou te destruir.' }
    ],
    midDialogue: { triggerHp: 0.4, lines: [
      { char: 'Cell1', text: 'Impressionante! Você é realmente poderoso, Androide 16. Pena que não posso absorver máquinas.' },
      { char: 'A16', text: 'Certo... mas posso destruir você.' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Mesmo com toda sua força, o Androide 16 não pôde conter Cell para sempre. O monstro escapou em direção ao 17.' },
      { char: 'A16', text: 'Fugi... a batalha acabou. Preciso protegê-los de outra forma.' }
    ],
    zeniReward: 420
  },
  {
    id: 'cell_ch5', num: 5,
    title: 'O Desespero de Tenshinhan',
    subtitle: 'Tenshinhan vs Cell Semiperfeito',
    player: 'Tien', opponent: 'Cell2',
    stage: 'saiyan_crater', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch6'],
    ultraDifficult: true,
    preDialogue: [
      { char: 'narrator', text: 'Cell absorveu o Androide 17 e se tornou Semiperfeito. Mais forte, buscava agora o 18. Tenshinhan foi o único a se interpor.' },
      { char: 'Tien', text: 'Não posso vencer isso. Mas posso comprar tempo para o 18 escapar. Kikōhō!' },
      { char: 'Cell2', text: 'Tenshinhan... você vai se matar antes de me parar. Que desperdício de esforço.' },
      { char: 'Tien', text: 'Não me importo. KIKŌHŌŌŌ!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Tenshinhan usou o Kikōhō repetidamente até desmaiar. Comprou o tempo necessário para o 18 escapar.' },
      { char: 'Tien', text: '...consegui... o 18 está a salvo...' },
      { char: 'narrator', text: 'Foi então que Goku apareceu e os teletransportou para longe. Cell ficou furioso.' }
    ],
    zeniReward: 400
  },
  {
    id: 'cell_ch6', num: 6,
    title: 'O Treino',
    subtitle: 'Goku SSJ vs Gohan Jovem — Câmara do Tempo e do Espírito',
    player: 'MidGokuSSJ', opponent: 'TeenGohan',
    stage: 'kami_lookout', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch7'],
    preDialogue: [
      { char: 'narrator', text: 'Goku levou Gohan para a Câmara do Tempo e do Espírito — um ano de treino em apenas um dia.' },
      { char: 'MidGokuSSJ', text: 'Gohan, aqui vamos treinar além dos limites. Vou te ensinar tudo que sei.' },
      { char: 'TeenGohan', text: 'Papai... eu estou pronto. Quero proteger todos!' },
      { char: 'MidGokuSSJ', text: 'Ótimo. Então vamos ver o que você é capaz. Não vou segurar nada!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'O treino foi brutal. Mas Gohan cresceu imensamente. Goku percebeu algo especial em seu filho.' },
      { char: 'MidGokuSSJ', text: 'Gohan... você superou minhas expectativas. Há algo em você que é diferente de mim.' },
      { char: 'TeenGohan', text: 'Papai? O quê você quer dizer?' },
      { char: 'MidGokuSSJ', text: 'Você pode ir além de mim, Gohan. Muito além.' }
    ],
    zeniReward: 450
  },
  {
    id: 'cell_ch7', num: 7,
    title: 'O Retorno do Príncipe dos Saiyajins',
    subtitle: 'Super Vegeta vs Cell Semiperfeito',
    player: 'SSJVegeta', opponent: 'Cell2',
    stage: 'wasteland', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch8'],
    preDialogue: [
      { char: 'narrator', text: 'Vegeta saiu da Câmara do Tempo. Transformou-se além do Super Saiyajin — Super Vegeta — e foi direto ao encontro de Cell.' },
      { char: 'SSJVegeta', text: 'Cell. Ouvi dizer que você está buscando o Androide 18. Que pena. Vai ter que me enfrentar primeiro.' },
      { char: 'Cell2', text: 'Super Vegeta... você realmente aumentou seu poder. Mas ainda não é suficiente.' },
      { char: 'SSJVegeta', text: 'Ha! Então venha e prove isso, monstro de laboratório!' }
    ],
    midDialogue: { triggerHp: 0.35, lines: [
      { char: 'Cell2', text: 'Impressionante, Vegeta... você realmente superou minha estimativa.' },
      { char: 'SSJVegeta', text: 'Claro que sim. Sou o Príncipe dos Saiyajins. Não existe limite para meu poder!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Vegeta dominou Cell completamente — mas então cometeu um erro fatal de orgulho.' },
      { char: 'SSJVegeta', text: 'Você está destruído, Cell. Aceite sua derrota.' },
      { char: 'Cell2', text: 'Você venceu, Vegeta. Mas... e se eu me tornasse perfeito? Não seria mais interessante?' },
      { char: 'SSJVegeta', text: '...Perfeito? Então deixarei você absorver o 18. Quero lutar com sua forma perfeita!' }
    ],
    zeniReward: 480
  },
  {
    id: 'cell_ch8', num: 8,
    title: 'Pai contra Filho pela Perfeição',
    subtitle: 'Trunks de Armadura SSJ vs Super Vegeta',
    player: 'ArmorTrunksSSJ', opponent: 'SSJVegeta',
    stage: 'wasteland', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch9'],
    preDialogue: [
      { char: 'narrator', text: 'Trunks viu Vegeta cometer o erro. Tentou atacar Cell para impedir a absorção — mas Vegeta bloqueou o caminho do próprio filho.' },
      { char: 'ArmorTrunksSSJ', text: 'Pai! Está louco?! Não pode deixar Cell absorver o 18!' },
      { char: 'SSJVegeta', text: 'Afaste-se, Trunks. Isso não é da sua conta.' },
      { char: 'ArmorTrunksSSJ', text: 'Se você não vai parar Cell, então vou te parar! Sinto muito, pai.' }
    ],
    midDialogue: { triggerHp: 0.4, lines: [
      { char: 'SSJVegeta', text: 'Você cresceu, Trunks. Mas ainda não é meu igual.' },
      { char: 'ArmorTrunksSSJ', text: 'Eu sei que posso te superar... mas essa não é a luta certa!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Trunks estava prestes a vencer — mas hesitou. E Cell aproveitou o momento para absorver o 18.' },
      { char: 'ArmorTrunksSSJ', text: 'NÃO! Cell... ele absorveu o 18! Falhei...' },
      { char: 'SSJVegeta', text: '...Era inevitável, Trunks. Agora vamos ver o que a perfeição realmente vale.' }
    ],
    zeniReward: 500
  },
  {
    id: 'cell_ch9', num: 9,
    title: 'A Perfeição',
    subtitle: 'Cell Perfeito vs Super Vegeta, Kuririn e Ultra Trunks',
    player: 'Cell3', opponent: 'SSJVegeta',
    opponentTag: ['SSJVegeta', 'Krillin', 'ArmorTrunksUltraSSJ'],
    isTagOpponent: true,
    stage: 'planet_earth', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch10'],
    preDialogue: [
      { char: 'narrator', text: 'Cell atingiu a perfeição. Um ser absolutamente belo e poderoso. Vegeta, Kuririn e Trunks tentaram parar o inevitável.' },
      { char: 'Cell3', text: 'Que sensação... sou perfeito. Absolutamente perfeito. Nada no universo pode me igualar.' },
      { char: 'SSJVegeta', text: 'Perfeição... então vamos testar isso!' },
      { char: 'Cell3', text: 'Sejam bem-vindos ao fim de suas existências.' }
    ],
    midDialogue: { triggerHp: 0.5, lines: [
      { char: 'ArmorTrunksUltraSSJ', text: 'Impossível... ele é tão forte assim?!' },
      { char: 'Cell3', text: 'Ultra Super Saiyajin... força bruta sem velocidade. Que ironia.' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Cell massacrou todos os três sem esforço. Então anunciou algo que chocou o mundo.' },
      { char: 'Cell3', text: 'Chega de brincadeira. Daqui a dez dias, realizarei um torneio. O Jogo de Cell. Convido todos os guerreiros da Terra.' },
      { char: 'SSJVegeta', text: '...Um torneio?!' },
      { char: 'Cell3', text: 'Sim. Se ninguém puder me derrotar... destruirei o planeta Terra.' }
    ],
    zeniReward: 550
  },
  {
    id: 'cell_ch10', num: 10,
    title: 'Os Jogos Começam',
    subtitle: 'Cell Perfeito vs Mr. Satan',
    player: 'Cell3', opponent: 'MrSatan',
    stage: 'planet_earth', opponentAI: 'easy', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch11'],
    preDialogue: [
      { char: 'narrator', text: 'O Jogo de Cell começou. O primeiro a se apresentar foi o autoproclamado Campeão Mundial, Mr. Satan.' },
      { char: 'MrSatan', text: 'HA HA HA! Pode me chamar de Herói da Humanidade! Eu, Mr. Satan, vou destruir esse monstro esverdeado!' },
      { char: 'Cell3', text: 'Um humano comum... que entretenimento inesperado.' },
      { char: 'MrSatan', text: 'COMUM?! Sou o maior lutador do mundo! DINAAAAAAMITE KICK!' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Cell derrubou Mr. Satan com um toque. O "Campeão" voou para longe sem nem ter sofrido um golpe de verdade.' },
      { char: 'MrSatan', text: 'Ow... eu... eu... propositalmente me joguei para aquecer o público!' },
      { char: 'Cell3', text: 'Humanos... que seres frágeis e inúteis. Que venham os verdadeiros guerreiros.' }
    ],
    zeniReward: 300
  },
  {
    id: 'cell_ch11', num: 11,
    title: 'Goku Entra em Cena',
    subtitle: 'Goku SSJ vs Cell Perfeito',
    player: 'MidGokuSSJ', opponent: 'Cell3',
    stage: 'planet_earth', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch12'],
    preDialogue: [
      { char: 'narrator', text: 'Chegou a vez de Goku. O guerreiro Z mais forte enfrentou Cell em frente ao mundo inteiro.' },
      { char: 'Cell3', text: 'Kakarot. Finalmente. Tenho seu DNA em mim — é como lutar comigo mesmo.' },
      { char: 'MidGokuSSJ', text: 'Cell... você vai entender o que é lutar de verdade. Vamos lá!' },
      { char: 'Cell3', text: 'Mostre-me o que um Super Saiyajin pode fazer.' }
    ],
    midDialogue: { triggerHp: 0.4, lines: [
      { char: 'Cell3', text: 'Incrível! Você realmente corresponde à minha expectativa, Goku!' },
      { char: 'MidGokuSSJ', text: 'Você também, Cell. Mas ainda não acabou!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'A luta foi épica e equilibrada. Então Goku fez algo que ninguém esperava.' },
      { char: 'MidGokuSSJ', text: 'Cell... você é poderoso. Mais poderoso do que eu posso vencer. Por isso...' },
      { char: 'Cell3', text: '...O quê você está fazendo?!' },
      { char: 'MidGokuSSJ', text: 'Eu desisto. E coloco meu filho no meu lugar.' }
    ],
    zeniReward: 600
  },
  {
    id: 'cell_ch12', num: 12,
    title: 'A Escolha',
    subtitle: 'Gohan Jovem SSJ vs Cell Perfeito',
    player: 'TeenGohanSSJ', opponent: 'Cell3',
    stage: 'planet_earth', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch13'],
    preDialogue: [
      { char: 'narrator', text: 'Goku escolheu Gohan. O garoto tinha medo — não da luta, mas de sua própria raiva.' },
      { char: 'TeenGohanSSJ', text: 'Papai... eu tenho medo. Quando fico com raiva... não sei o que acontece comigo.' },
      { char: 'MidGokuSSJ', text: 'Gohan. Confio em você. Você pode fazer o que eu não pude. Proteja todos.' },
      { char: 'Cell3', text: 'Um garoto? Goku, você perdeu o juízo.' },
      { char: 'TeenGohanSSJ', text: 'Não vou decepcionar meu pai. Vou lutar, Cell!' }
    ],
    midDialogue: { triggerHp: 0.5, lines: [
      { char: 'Cell3', text: 'Esse garoto... tem mais potencial do que parece. Interessante.' },
      { char: 'TeenGohanSSJ', text: 'Não vou ceder, Cell. Não enquanto houver pessoas que precisam de mim!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Cell decidiu liberar seus Cell Jrs. para torturar os amigos de Gohan e provocar sua raiva.' },
      { char: 'Cell3', text: 'Você tem potencial, garoto. Mas ainda está preso pelo seu coração. Vamos mudar isso.' },
      { char: 'TeenGohanSSJ', text: 'O quê... o quê você está fazendo?!' },
      { char: 'Cell3', text: 'Libertando meus filhos. Eles vão... brincar com seus amigos.' }
    ],
    zeniReward: 550
  },
  {
    id: 'cell_ch13', num: 13,
    title: 'Os Cell Jrs.',
    subtitle: 'Vegeta, Piccolo, Trunks, Kuririn, Yamcha e Tenshinhan vs 6 Cell Jrs.',
    player: 'SSJVegeta', opponent: 'CellJr',
    playerTag: ['SSJVegeta','Piccolo','ArmorTrunksSSJ','Krillin','Yamcha','Tien'],
    opponentTag: ['CellJr','CellJr','CellJr','CellJr','CellJr','CellJr'],
    isTagOpponent: true,
    stage: 'planet_earth', opponentAI: 'hard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch14'],
    preDialogue: [
      { char: 'narrator', text: 'Cell criou sete Cell Jrs. — cada um com o poder de um Super Saiyajin — e os soltou sobre os amigos de Gohan.' },
      { char: 'SSJVegeta', text: 'Esses seres... têm um poder absurdo para esse tamanho!' },
      { char: 'CellJr', text: '...' },
      { char: 'Piccolo', text: 'Não importa. Lutamos. Precisamos comprar tempo para Gohan!' },
      { char: 'Krillin', text: 'Juntos! Não vamos ceder!' }
    ],
    midDialogue: { triggerHp: 0.5, lines: [
      { char: 'Tien', text: 'São fortes demais! Estamos sendo dominados!' },
      { char: 'SSJVegeta', text: 'AGUENTA FIRME! Gohan precisa de tempo!' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Os guerreiros foram superados pelos Cell Jrs. Mas algo havia mudado com Gohan...' },
      { char: 'Piccolo', text: 'Gohan... por que você não age?! Olha o que estão fazendo conosco!' },
      { char: 'TeenGohanSSJ', text: 'Eu... eu não consigo controlar... algo em mim está...' }
    ],
    zeniReward: 500
  },
  {
    id: 'cell_ch14', num: 14,
    title: 'Fúria de Gohan',
    subtitle: 'SSJ2 Gohan vs 4 Cell Jrs.',
    player: 'TeenGohanSSJ2', opponent: 'CellJr',
    opponentTag: ['CellJr','CellJr','CellJr','CellJr'],
    isTagOpponent: true,
    stage: 'planet_earth', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: ['cell_ch15'],
    preDialogue: [
      { char: 'narrator', text: 'O Androide 16 tentou um último sacrifício para despertar Gohan — e seu pedido final acendeu a chama.' },
      { char: 'A16', text: 'Gohan... não é errado lutar para proteger. Proteja essa bela vida que existe neste mundo.' },
      { char: 'Cell3', text: 'Belas palavras de uma máquina.' },
      { char: 'narrator', text: 'Cell destruiu a cabeça do Androide 16. E Gohan sentiu algo romper dentro de si.' },
      { char: 'TeenGohanSSJ2', text: '...Isso... basta.' }
    ],
    postDialogue: [
      { char: 'narrator', text: 'Super Saiyajin Nível 2. Gohan destruiu os Cell Jrs. um a um sem nenhum esforço.' },
      { char: 'Cell3', text: 'Im... impossível. Que poder é esse?!' },
      { char: 'TeenGohanSSJ2', text: 'Você vai pagar por tudo que fez, Cell. Por todos eles.' }
    ],
    zeniReward: 650
  },
  {
    id: 'cell_ch15', num: 15,
    title: 'O Castigo de Cell',
    subtitle: 'SSJ2 Gohan vs Cell Perfeito',
    player: 'TeenGohanSSJ2', opponent: 'Cell3',
    stage: 'planet_earth', opponentAI: 'veryhard', roundsToWin: 1,
    locked: true, unlocks: [],
    preDialogue: [
      { char: 'narrator', text: 'Gohan SSJ2 contra Cell Perfeito. A batalha final pela Terra começou.' },
      { char: 'Cell3', text: 'Que poder incrível... você realmente o possui. O poder que estava procurando!' },
      { char: 'TeenGohanSSJ2', text: 'Não mereço elogios de você. Vou acabar com isso agora.' },
      { char: 'Cell3', text: 'Então mostra-me! Mostra-me teu poder ao máximo, Gohan!' }
    ],
    midDialogue: { triggerHp: 0.3, lines: [
      { char: 'Cell3', text: 'IMPOSSÍVEL! Eu sou perfeito! Como pode ser mais forte que eu?!' },
      { char: 'TeenGohanSSJ2', text: 'Porque eu luto por todos que amo. Não pela perfeição.' }
    ]},
    postDialogue: [
      { char: 'narrator', text: 'Cell tentou se autodestruir. Goku se teletransportou para longe da Terra com ele — e morreu na explosão. Mas Cell voltou, mais forte. E então...' },
      { char: 'MidGokuSSJ', text: 'Gohan! Agora! Kamehameha!' },
      { char: 'TeenGohanSSJ2', text: 'PAPAI! KAAAAAAAMEHAMEHAAAAAA!' },
      { char: 'narrator', text: 'O raio de Gohan superou o de Cell. E a ameaça do ser perfeito chegou ao fim.' }
    ],
    zeniReward: 1000
  }
];

CELL_CHAPTERS.forEach(ch => { ch.saga = 'cell'; STORY_CHAPTERS.push(ch); });
