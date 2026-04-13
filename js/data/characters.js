// characters.js — Dragon Ball: Sparking! Ultimate v5
// Saga Saiyajin + Saga Freeza completa

const CHARACTERS = {

  EarlyGoku: {
    displayName: 'Goku',
    description: 'O Guerreiro Z mais forte da Terra. Coração puro e poder ilimitado.',
    spritePath: 'assets/sprites/EarlyGoku/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ff9c00',
    charClass: 'all-rounder', auraColor: '#00cfff',
    stats: { hp: 1000, power: 90, speed: 88, defense: 75 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 20, kiCostFire2: 60, kiPerCharge: 18,
    moves: {
      punch: { damage: 90, stun: 280, range: 80 },
      kick:  { damage: 110, stun: 320, range: 90 },
      fire1: { name: 'Ki Blast', damage: 100, speed: 7, size: 18, color: '#00cfff', type: 'orb' },
      fire2: { name: 'Kamehameha', damage: 280, speed: 10, size: 22, color: '#00cfff', type: 'beam' }
    },
    unlockCondition: 'start', unlockHint: 'Desbloqueado desde o início', saga: 'saiyan'
  },

  KidGohan: {
    displayName: 'Gohan (Criança)',
    description: 'Filho de Goku. Poder oculto imenso que emerge em momentos de crise.',
    spritePath: 'assets/sprites/KidGohan/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ffcc00',
    charClass: 'all-rounder', auraColor: '#ffdd00',
    stats: { hp: 850, power: 75, speed: 82, defense: 65 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 20, kiCostFire2: 55, kiPerCharge: 15,
    moves: {
      punch: { damage: 75, stun: 260, range: 72 },
      kick:  { damage: 95, stun: 300, range: 82 },
      fire1: { name: 'Ki Blast', damage: 85, speed: 7, size: 16, color: '#ffdd00', type: 'orb' },
      fire2: { name: 'Masenko', damage: 240, speed: 9, size: 20, color: '#ffdd00', type: 'beam' }
    },
    costumes: {
      NamekGohan: { id:'NamekGohan', displayName:'Gohan (Namek)', spritePath:'assets/sprites/NamekGohan/', description:'Gohan durante a saga de Namek.', unlockCondition:'story_ch_namek2', unlockHint:'Complete o Cap. 2 da Saga Freeza' }
    },
    unlockCondition: 'story_ch3', unlockHint: 'Complete o Capítulo 3 (O Treinamento)', price: 9000, saga: 'saiyan'
  },

  Krillin: {
    displayName: 'Kuririn',
    description: 'O humano mais forte do mundo. Mestre do Kienzan e do Kamehameha.',
    spritePath: 'assets/sprites/Krillin/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ff6600',
    charClass: 'all-rounder', auraColor: '#ff8800',
    stats: { hp: 820, power: 72, speed: 85, defense: 70 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 22, kiCostFire2: 55, kiPerCharge: 16,
    moves: {
      punch: { damage: 72, stun: 250, range: 70 },
      kick:  { damage: 92, stun: 290, range: 80 },
      fire1: { name: 'Ki Blast', damage: 88, speed: 8, size: 16, color: '#ff8800', type: 'orb' },
      fire2: { name: 'Kienzan', damage: 260, speed: 9, size: 20, color: '#ffee00', type: 'beam' }
    },
    unlockCondition: 'story_ch6', unlockHint: 'Complete o Capítulo 6 (Retorno de Goku)', saga: 'saiyan', price: 17000,
  },

  Piccolo: {
    displayName: 'Piccolo',
    description: 'O Namekuseijin feroz. Mestre e rival de Goku, protetor de Gohan.',
    spritePath: 'assets/sprites/Piccolo/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#00aa44',
    charClass: 'all-rounder', auraColor: '#44ff44',
    stats: { hp: 960, power: 88, speed: 78, defense: 82 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 22, kiCostFire2: 58, kiPerCharge: 17,
    moves: {
      punch: { damage: 88, stun: 270, range: 95 },
      kick:  { damage: 108, stun: 310, range: 105 },
      fire1: { name: 'Ki Blast', damage: 95, speed: 7, size: 18, color: '#44ff44', type: 'orb' },
      fire2: { name: 'Makankōsappō', damage: 270, speed: 11, size: 18, color: '#44ff44', type: 'beam' }
    },
    unlockCondition: 'start', unlockHint: 'Desbloqueado desde o início', saga: 'saiyan'
  },

  Tien: {
    displayName: 'Tenshinhan',
    description: 'Ex-rival de Goku. Guerreiro disciplinado com habilidades únicas.',
    spritePath: 'assets/sprites/Tien/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#4466cc',
    charClass: 'all-rounder', auraColor: '#88aaff',
    stats: { hp: 880, power: 80, speed: 80, defense: 78 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 22, kiCostFire2: 55, kiPerCharge: 16,
    moves: {
      punch: { damage: 80, stun: 260, range: 78 },
      kick:  { damage: 100, stun: 300, range: 88 },
      fire1: { name: 'Ki Blast', damage: 90, speed: 7, size: 17, color: '#88aaff', type: 'orb' },
      fire2: { name: 'Kikōhō', damage: 260, speed: 10, size: 22, color: '#88aaff', type: 'beam' }
    },
    unlockCondition: 'whatif_tien_honor', unlockHint: 'Desbloqueie o What-If "A Honra de Tien" e complete-o', saga: 'saiyan', price: 4000,
  },

  Yamcha: {
    displayName: 'Yamcha',
    description: 'O bandido do deserto. Lutador determinado com o Rōgafūfūken.',
    spritePath: 'assets/sprites/Yamcha/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#cc4400',
    charClass: 'rusher', auraColor: '#ff8844',
    stats: { hp: 800, power: 68, speed: 90, defense: 60 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 20, kiCostFire2: 50, kiPerCharge: 16,
    moves: {
      punch: { damage: 68, stun: 240, range: 78 },
      kick:  { damage: 88, stun: 280, range: 88 },
      fire1: { name: 'Ki Blast', damage: 82, speed: 8, size: 15, color: '#ff8844', type: 'orb' },
      fire2: { name: 'Kamehameha', damage: 230, speed: 9, size: 18, color: '#ff8844', type: 'beam' }
    },
    unlockCondition: 'story_ch4', unlockHint: 'Complete o Capítulo 4 (Os Saibamans)', saga: 'saiyan', price: 400,
  },

  Yajirobe: {
    displayName: 'Yajirobe',
    description: 'Guerreiro gordo e covarde, mas mestre da espada. Sem controle de Ki.',
    spritePath: 'assets/sprites/Yajirobe/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Damage:'Damage.png', Dead:'Dead.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#997700',
    charClass: 'grappler', auraColor: '#bb9900',
    stats: { hp: 900, power: 78, speed: 55, defense: 85 },
    hasCharge: false, hasFire1: false, hasFire2: false,
    kiCostFire1: 999, kiCostFire2: 999, kiPerCharge: 0,
    moves: { punch: { damage: 100, stun: 290, range: 85 }, kick: { damage: 120, stun: 340, range: 90 }, fire1: null, fire2: null },
    unlockCondition: 'mission_yajirobe', unlockHint: 'Complete a Missão Z-Parallel: O Solitário do Monte Paozu', saga: 'saiyan', price: 14000,
  },

  Raditz: {
    displayName: 'Raditz',
    description: 'Irmão de Goku. Saiyajin de nível médio enviado para eliminar a Terra.',
    spritePath: 'assets/sprites/Raditz/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#884400',
    charClass: 'rusher', auraColor: '#dd6600',
    stats: { hp: 1100, power: 85, speed: 82, defense: 75 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 25, kiCostFire2: 999, kiPerCharge: 17,
    moves: {
      punch: { damage: 85, stun: 270, range: 85 },
      kick:  { damage: 108, stun: 315, range: 95 },
      fire1: { name: 'Double Sunday', damage: 130, speed: 7, size: 20, color: '#dd6600', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'story_ch2', unlockHint: 'Complete o Capítulo 2', saga: 'saiyan', price: 11000,
  },

  Nappa: {
    displayName: 'Nappa',
    description: 'General Saiyajin brutal e implacável. Força devastadora.',
    spritePath: 'assets/sprites/Nappa/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#cc0000',
    charClass: 'grappler', auraColor: '#ff2200',
    stats: { hp: 1400, power: 95, speed: 55, defense: 92 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 28, kiCostFire2: 999, kiPerCharge: 14,
    moves: {
      punch: { damage: 115, stun: 350, range: 88 },
      kick:  { damage: 135, stun: 400, range: 98 },
      fire1: { name: 'Exploding Wave', damage: 160, speed: 6, size: 24, color: '#ff2200', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'story_ch7', unlockHint: 'Complete o Capítulo 7', saga: 'saiyan', price: 4500,
  },

  ScouterVegeta: {
    displayName: 'Vegeta',
    description: 'Príncipe dos Saiyajins. Orgulhoso e imbatível. O antagonista supremo.',
    spritePath: 'assets/sprites/ScouterVegeta/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#7700cc',
    charClass: 'all-rounder', auraColor: '#aa44ff',
    stats: { hp: 1200, power: 98, speed: 85, defense: 88 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 22, kiCostFire2: 65, kiPerCharge: 18,
    moves: {
      punch: { damage: 98, stun: 290, range: 86 },
      kick:  { damage: 118, stun: 330, range: 96 },
      fire1: { name: 'Ki Blast', damage: 110, speed: 8, size: 20, color: '#aa44ff', type: 'orb' },
      fire2: { name: 'Galick Ho', damage: 300, speed: 10, size: 24, color: '#aa00ff', type: 'beam' }
    },
    costumes: {
      NamekVegeta: { id:'NamekVegeta', displayName:'Vegeta (Namek)', spritePath:'assets/sprites/NamekVegeta/', description:'Vegeta durante a saga de Namek.', unlockCondition:'story_ch_namek1', unlockHint:'Complete o Cap. 1 da Saga Freeza' }
    },
    unlockCondition: 'story_ch7', unlockHint: 'Complete o Capítulo 7', saga: 'saiyan', price: 5000,
  },

  Saibaman: {
    displayName: 'Saibaman',
    description: 'Criaturas cultivadas pelos Saiyajins. Poder equivalente a Raditz.',
    spritePath: 'assets/sprites/Saibaman/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#336600',
    charClass: 'rusher', auraColor: '#88ff00',
    stats: { hp: 900, power: 70, speed: 88, defense: 60 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 20, kiCostFire2: 999, kiPerCharge: 15,
    moves: {
      punch: { damage: 70, stun: 240, range: 70 },
      kick:  { damage: 88, stun: 270, range: 80 },
      fire1: { name: 'Saiba Blast', damage: 95, speed: 8, size: 15, color: '#88ff00', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'story_ch4', unlockHint: 'Complete o Capítulo 4', saga: 'saiyan'
  },

  // ─── SAGA FREEZA ─────────────────────────────────────────

  Cui: {
    displayName: 'Cui',
    description: 'Guerreiro a serviço de Freeza. Rival antigo de Vegeta.',
    spritePath: 'assets/sprites/Cui/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#886699',
    charClass: 'all-rounder', auraColor: '#cc88ff',
    stats: { hp: 950, power: 72, speed: 76, defense: 68 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 22, kiCostFire2: 999, kiPerCharge: 15,
    moves: {
      punch: { damage: 72, stun: 250, range: 74 },
      kick:  { damage: 90, stun: 290, range: 84 },
      fire1: { name: 'Ki Blast', damage: 100, speed: 7, size: 16, color: '#cc88ff', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'story_ch_namek1', unlockHint: 'Complete o Cap. 1 da Saga Freeza', saga: 'freeza'
  },

  Appule: {
    displayName: 'Appule',
    description: 'Soldado menor do Exército de Freeza em Namek.',
    spritePath: 'assets/sprites/Appule/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#cc5566',
    charClass: 'rusher', auraColor: '#ff6688',
    stats: { hp: 780, power: 60, speed: 70, defense: 55 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 20, kiCostFire2: 999, kiPerCharge: 14,
    moves: {
      punch: { damage: 60, stun: 230, range: 68 },
      kick:  { damage: 78, stun: 270, range: 78 },
      fire1: { name: 'Ki Blast', damage: 80, speed: 7, size: 14, color: '#ff6688', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'story_ch_namek2', unlockHint: 'Complete o Cap. 2 da Saga Freeza', saga: 'freeza'
  },

  Dodoria: {
    displayName: 'Dodoria',
    description: 'Oficial brutal de Freeza. Força bruta e sem piedade.',
    spritePath: 'assets/sprites/Dodoria/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ff6699',
    charClass: 'grappler', auraColor: '#ff44aa',
    stats: { hp: 1150, power: 88, speed: 55, defense: 85 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 25, kiCostFire2: 999, kiPerCharge: 14,
    moves: {
      punch: { damage: 105, stun: 330, range: 88 },
      kick:  { damage: 125, stun: 370, range: 95 },
      fire1: { name: 'Mouth Blast', damage: 140, speed: 6, size: 22, color: '#ff44aa', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'story_ch_namek3', unlockHint: 'Complete o Cap. 3 da Saga Freeza', saga: 'freeza'
  },

  Zarbon: {
    displayName: 'Zarbon',
    description: 'Oficial elegante de Freeza. Esconde uma forma monstruosa.',
    spritePath: 'assets/sprites/Zarbon/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#44aacc',
    charClass: 'all-rounder', auraColor: '#44ccee',
    stats: { hp: 1100, power: 85, speed: 82, defense: 80 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 22, kiCostFire2: 999, kiPerCharge: 17,
    moves: {
      punch: { damage: 88, stun: 270, range: 82 },
      kick:  { damage: 108, stun: 310, range: 92 },
      fire1: { name: 'Ki Blast', damage: 115, speed: 8, size: 18, color: '#44ccee', type: 'orb' },
      fire2: null
    },
    transformation: { targetId: 'MonsterZarbon', kiRequired: 100, animDuration: 3000 },
    unlockCondition: 'story_ch_namek4', unlockHint: 'Complete o Cap. 4 da Saga Freeza', saga: 'freeza'
  },

  MonsterZarbon: {
    displayName: 'Zarbon Transformado',
    description: 'A forma monstruosa de Zarbon. Força bruta sem igual.',
    spritePath: 'assets/sprites/MonsterZarbon/',
    sprites: { Idle:'ZarbonIdle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#228866',
    charClass: 'grappler', auraColor: '#00aa55',
    stats: { hp: 1350, power: 110, speed: 65, defense: 95 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 28, kiCostFire2: 999, kiPerCharge: 14,
    moves: {
      punch: { damage: 130, stun: 370, range: 90 },
      kick:  { damage: 155, stun: 420, range: 100 },
      fire1: { name: 'Monster Blast', damage: 170, speed: 6, size: 24, color: '#00aa55', type: 'orb' },
      fire2: null
    },
    isTransformationOf: 'Zarbon',
    unlockCondition: 'story_ch_namek5', unlockHint: 'Complete o Cap. 5 da Saga Freeza', saga: 'freeza'
  },

  Guldo: {
    displayName: 'Guldo',
    description: 'O mais fraco da Força Ginyu, mas pode parar o tempo!',
    spritePath: 'assets/sprites/Guldo/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#4488aa',
    charClass: 'zuner', auraColor: '#aaddff',
    stats: { hp: 820, power: 58, speed: 50, defense: 72 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 35, kiCostFire2: 999, kiPerCharge: 12,
    moves: {
      punch: { damage: 58, stun: 220, range: 65 },
      kick:  { damage: 72, stun: 260, range: 75 },
      fire1: { name: 'Paralisia Temporal', damage: 0, speed: 0, size: 0, color: '#aaddff', type: 'timestop', stunDuration: 2000 },
      fire2: null
    },
    specialType: 'timestop',
    unlockCondition: 'story_ch_namek6', unlockHint: 'Complete o Cap. 6 da Saga Freeza', saga: 'freeza'
  },

  Rikum: {
    displayName: 'Rikum',
    description: 'O gigante da Força Ginyu. Poder físico monstruoso.',
    spritePath: 'assets/sprites/Rikum/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ee8800',
    charClass: 'grappler', auraColor: '#ff9900',
    stats: { hp: 1600, power: 105, speed: 45, defense: 100 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 30, kiCostFire2: 999, kiPerCharge: 12,
    moves: {
      punch: { damage: 140, stun: 420, range: 95 },
      kick:  { damage: 165, stun: 480, range: 105 },
      fire1: { name: 'Rikum Eraser Gun', damage: 180, speed: 5, size: 28, color: '#ff9900', type: 'beam' },
      fire2: null
    },
    unlockCondition: 'story_ch_namek7', unlockHint: 'Complete o Cap. 7 da Saga Freeza', saga: 'freeza'
  },

  Jeice: {
    displayName: 'Jeice',
    description: 'Membro veloz da Força Ginyu. Especialista em ki.',
    spritePath: 'assets/sprites/Jeice/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ff2222',
    charClass: 'rusher', auraColor: '#ff4400',
    stats: { hp: 980, power: 88, speed: 92, defense: 72 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 22, kiCostFire2: 999, kiPerCharge: 18,
    moves: {
      punch: { damage: 82, stun: 255, range: 80 },
      kick:  { damage: 102, stun: 295, range: 90 },
      fire1: { name: 'Crusher Ball', damage: 140, speed: 9, size: 20, color: '#ff4400', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'story_ch_namek12', unlockHint: 'Complete o Cap. 12 da Saga Freeza', saga: 'freeza'
  },

  Burter: {
    displayName: 'Burter',
    description: 'O mais rápido do universo (segundo ele mesmo). Membro da Força Ginyu.',
    spritePath: 'assets/sprites/Burter/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#0055cc',
    charClass: 'rusher', auraColor: '#0088ff',
    stats: { hp: 1050, power: 90, speed: 98, defense: 75 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 20, kiCostFire2: 999, kiPerCharge: 20,
    moves: {
      punch: { damage: 88, stun: 260, range: 82 },
      kick:  { damage: 108, stun: 300, range: 92 },
      fire1: { name: 'Blue Hurricane', damage: 130, speed: 12, size: 18, color: '#0088ff', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'story_ch_namek8', unlockHint: 'Complete o Cap. 8 da Saga Freeza', saga: 'freeza'
  },

  Ginyu: {
    displayName: 'Capitão Ginyu',
    description: 'Líder da Força Especial Ginyu. Pode trocar de corpo!',
    spritePath: 'assets/sprites/Ginyu/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#882255',
    charClass: 'zuner', auraColor: '#ff44aa',
    stats: { hp: 1200, power: 100, speed: 85, defense: 85 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 60, kiCostFire2: 999, kiPerCharge: 16,
    moves: {
      punch: { damage: 100, stun: 300, range: 86 },
      kick:  { damage: 120, stun: 340, range: 96 },
      fire1: { name: 'Troca de Corpo!', damage: 0, speed: 10, size: 16, color: '#ff44aa', type: 'bodyswap' },
      fire2: null
    },
    specialType: 'bodyswap',
    costumes: {
      Gokinyu: { id:'Gokinyu', displayName:'Goku (Ginyu)', spritePath:'assets/sprites/Gokinyu/', description:'Ginyu no corpo de Goku.', unlockCondition:'story_ch_namek10', unlockHint:'Complete o Cap. 10 da Saga Freeza' }
    },
    unlockCondition: 'story_ch_namek10', unlockHint: 'Complete o Cap. 10 da Saga Freeza', saga: 'freeza', price: 6500,
  },

  NamekGoku: {
    displayName: 'Goku (Namek)',
    description: 'Goku recuperado no Planeta Freeza. Mais forte do que nunca.',
    spritePath: 'assets/sprites/NamekGoku/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ff9c00',
    charClass: 'all-rounder', auraColor: '#00cfff',
    stats: { hp: 1400, power: 120, speed: 95, defense: 88 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 22, kiCostFire2: 65, kiPerCharge: 20,
    moves: {
      punch: { damage: 120, stun: 300, range: 85 },
      kick:  { damage: 145, stun: 345, range: 95 },
      fire1: { name: 'Ki Blast', damage: 130, speed: 8, size: 20, color: '#00cfff', type: 'orb' },
      fire2: { name: 'Kamehameha', damage: 350, speed: 11, size: 24, color: '#00cfff', type: 'beam' }
    },
    transformation: { targetId: 'NamekSSJGoku', kiRequired: 100, animDuration: 3000 },
    unlockCondition: 'story_ch_namek17', unlockHint: 'Complete o Cap. 17 da Saga Freeza', saga: 'freeza', price: 8000,
  },

  NamekSSJGoku: {
    displayName: 'Super Saiyajin Goku',
    description: 'O LENDÁRIO SUPER SAIYAJIN. Poder que assustou até Freeza.',
    spritePath: 'assets/sprites/NamekSSJGoku/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ffee00',
    charClass: 'all-rounder', auraColor: '#ffee00',
    stats: { hp: 2000, power: 180, speed: 110, defense: 110 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 30, kiCostFire2: 999, kiPerCharge: 25,
    moves: {
      punch: { damage: 200, stun: 380, range: 88 },
      kick:  { damage: 240, stun: 430, range: 98 },
      fire1: { name: 'Kamehameha SSJ', damage: 450, speed: 12, size: 28, color: '#ffff00', type: 'beam' },
      fire2: null
    },
    isTransformationOf: 'NamekGoku',
    unlockCondition: 'story_ch_namek18', unlockHint: 'Complete o Cap. 18 da Saga Freeza', saga: 'freeza', price: 11000,
  },

  Frieza1: {
    displayName: 'Freeza (1ª Forma)',
    description: 'A primeira e mais elegante forma de Freeza. Inteligente e cruel.',
    spritePath: 'assets/sprites/Frieza1/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#cc44aa',
    charClass: 'zuner', auraColor: '#ff44aa',
    stats: { hp: 1500, power: 120, speed: 90, defense: 95 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 25, kiCostFire2: 999, kiPerCharge: 20,
    moves: {
      punch: { damage: 120, stun: 320, range: 88 },
      kick:  { damage: 145, stun: 365, range: 98 },
      fire1: { name: 'Death Beam', damage: 180, speed: 14, size: 14, color: '#ff44aa', type: 'orb' },
      fire2: null
    },
    transformation: { targetId: 'Frieza2', kiRequired: 100, animDuration: 3000 },
    unlockCondition: 'story_ch_namek13', unlockHint: 'Complete o Cap. 13 da Saga Freeza', saga: 'freeza', price: 5000,
  },

  Frieza2: {
    displayName: 'Freeza (2ª Forma)',
    description: 'Segunda forma de Freeza. Maior e mais ameaçador.',
    spritePath: 'assets/sprites/Frieza2/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#aa2288',
    charClass: 'grappler', auraColor: '#ee22aa',
    stats: { hp: 1800, power: 150, speed: 80, defense: 108 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 28, kiCostFire2: 999, kiPerCharge: 18,
    moves: {
      punch: { damage: 160, stun: 360, range: 92 },
      kick:  { damage: 190, stun: 410, range: 102 },
      fire1: { name: 'Death Beam', damage: 200, speed: 13, size: 16, color: '#ee22aa', type: 'orb' },
      fire2: null
    },
    transformation: { targetId: 'Frieza3', kiRequired: 100, animDuration: 3000 },
    isTransformationOf: 'Frieza1',
    unlockCondition: 'story_ch_namek14', unlockHint: 'Complete o Cap. 14 da Saga Freeza', saga: 'freeza', price: 6500,
  },

  Frieza3: {
    displayName: 'Freeza (3ª Forma)',
    description: 'Terceira forma de Freeza. Monstruosa e aterrorizante.',
    spritePath: 'assets/sprites/Frieza3/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#881166',
    charClass: 'grappler', auraColor: '#cc1177',
    stats: { hp: 2000, power: 170, speed: 75, defense: 115 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 30, kiCostFire2: 999, kiPerCharge: 16,
    moves: {
      punch: { damage: 185, stun: 390, range: 95 },
      kick:  { damage: 220, stun: 445, range: 105 },
      fire1: { name: 'Death Ball', damage: 240, speed: 8, size: 22, color: '#cc1177', type: 'orb' },
      fire2: null
    },
    transformation: { targetId: 'Frieza4', kiRequired: 100, animDuration: 3000 },
    isTransformationOf: 'Frieza2',
    unlockCondition: 'story_ch_namek15', unlockHint: 'Complete o Cap. 15 da Saga Freeza', saga: 'freeza', price: 8000,
  },

  Frieza4: {
    displayName: 'Freeza (4ª Forma)',
    description: 'A forma final de Freeza. Elegante e devastadoramente poderosa.',
    spritePath: 'assets/sprites/Frieza4/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ffffff',
    charClass: 'zuner', auraColor: '#ff88ff',
    stats: { hp: 2200, power: 200, speed: 95, defense: 120 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 25, kiCostFire2: 80, kiPerCharge: 22,
    moves: {
      punch: { damage: 210, stun: 400, range: 90 },
      kick:  { damage: 250, stun: 455, range: 100 },
      fire1: { name: 'Death Beam', damage: 260, speed: 15, size: 14, color: '#ff44aa', type: 'orb' },
      fire2: { name: 'Supernova', damage: 600, speed: 7, size: 32, color: '#ff8800', type: 'beam' }
    },
    transformation: { targetId: 'Frieza5', kiRequired: 100, animDuration: 3000 },
    isTransformationOf: 'Frieza3',
    unlockCondition: 'story_ch_namek16', unlockHint: 'Complete o Cap. 16 da Saga Freeza', saga: 'freeza', price: 10000,
  },

  Frieza5: {
    displayName: 'Freeza (Poder Total)',
    description: 'Freeza a 100% de seu poder. O maior vilão do universo.',
    spritePath: 'assets/sprites/Frieza5/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ffccff',
    charClass: 'zuner', auraColor: '#aa00ff',
    stats: { hp: 2800, power: 260, speed: 88, defense: 135 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 28, kiCostFire2: 85, kiPerCharge: 20,
    moves: {
      punch: { damage: 280, stun: 430, range: 92 },
      kick:  { damage: 330, stun: 490, range: 102 },
      fire1: { name: 'Death Beam', damage: 340, speed: 16, size: 14, color: '#ff88ff', type: 'orb' },
      fire2: { name: 'Death Ball Suprema', damage: 700, speed: 8, size: 36, color: '#aa00ff', type: 'beam' }
    },
    isTransformationOf: 'Frieza4',
    unlockCondition: 'story_ch_namek19', unlockHint: 'Complete o Cap. 19 da Saga Freeza', price: 17000, saga: 'freeza'
  },

  // ─── NON-CANON ───────────────────────────────────────────

  Cooler: {
    displayName: 'Cooler',
    description: 'Irmão de Freeza. Aparece apenas em What-Ifs e Missões Paralelas.',
    spritePath: 'assets/sprites/Cooler/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#663388',
    charClass: 'grappler', auraColor: '#aa44ff',
    stats: { hp: 2000, power: 190, speed: 90, defense: 115 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 30, kiCostFire2: 999, kiPerCharge: 20,
    moves: {
      punch: { damage: 200, stun: 380, range: 90 },
      kick:  { damage: 240, stun: 430, range: 100 },
      fire1: { name: 'Supernova Cooler', damage: 320, speed: 8, size: 26, color: '#aa44ff', type: 'orb' },
      fire2: null
    },
    transformation: { targetId: 'FinalCooler', kiRequired: 100, animDuration: 3000 },
    unlockCondition: 'mission_cooler', unlockHint: 'Complete a Missão Z-Parallel: O Irmão do Mal', price: 13000,
    nonCanon: true, saga: 'movies'
  },

  FinalCooler: {
    displayName: 'Cooler Final',
    description: 'A quinta forma de Cooler. Poder que supera Freeza.',
    spritePath: 'assets/sprites/FinalCooler/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#8800cc',
    charClass: 'grappler', auraColor: '#cc00ff',
    stats: { hp: 2500, power: 230, speed: 95, defense: 125 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 35, kiCostFire2: 999, kiPerCharge: 20,
    moves: {
      punch: { damage: 250, stun: 410, range: 92 },
      kick:  { damage: 295, stun: 460, range: 102 },
      fire1: { name: 'Death Flash', damage: 400, speed: 10, size: 28, color: '#cc00ff', type: 'beam' },
      fire2: null
    },
    isTransformationOf: 'Cooler',
    unlockCondition: 'mission_cooler', unlockHint: 'Complete a Missão Z-Parallel: O Irmão do Mal', price: 15000,
    nonCanon: true, saga: 'movies'
  },

  Turles: {
    displayName: 'Tullece',
    description: 'Saiyajin sombrio que se parece com Goku. Apenas em What-Ifs.',
    spritePath: 'assets/sprites/Turles/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#333300',
    charClass: 'rusher', auraColor: '#886600',
    stats: { hp: 1800, power: 165, speed: 90, defense: 100 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 28, kiCostFire2: 999, kiPerCharge: 18,
    moves: {
      punch: { damage: 175, stun: 350, range: 88 },
      kick:  { damage: 210, stun: 400, range: 98 },
      fire1: { name: 'Kill Driver', damage: 280, speed: 9, size: 22, color: '#886600', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'whatif_turles', unlockHint: 'Desbloqueado em What-If especial', price: 10000,
    nonCanon: true, saga: 'movies'
  },

  // ══════════════════════════════════════════════════════════
  //  SAGA ANDROIDE — PERSONAGENS
  // ══════════════════════════════════════════════════════════

  MidGoku: {
    displayName: 'Goku (Saga Cell)',
    description: 'Goku no auge da Saga dos Androides. Força aumentada após o treino na Terra.',
    spritePath: 'assets/sprites/MidGoku/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ff9c00',
    charClass: 'all-rounder', auraColor: '#00cfff',
    stats: { hp: 1600, power: 145, speed: 92, defense: 110 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 22, kiCostFire2: 65, kiPerCharge: 20,
    moves: {
      punch: { damage: 145, stun: 320, range: 85 },
      kick:  { damage: 170, stun: 360, range: 95 },
      fire1: { name: 'Ki Blast', damage: 160, speed: 8, size: 20, color: '#00cfff', type: 'orb' },
      fire2: { name: 'Kamehameha', damage: 400, speed: 11, size: 24, color: '#00cfff', type: 'beam' }
    },
    transformation: { targetId: 'MidGokuSSJ', kiRequired: 100, animDuration: 2500 },
    unlockCondition: 'story_android_ch3', unlockHint: 'Complete o Cap. 3 da Saga Androide', saga: 'android', price: 8000,
  },

  MidGokuSSJ: {
    displayName: 'Goku Super Saiyajin (Saga Cell)',
    description: 'Goku transformado em Super Saiyajin na Saga dos Androides. Poder imenso.',
    spritePath: 'assets/sprites/MidGokuSSJ/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ffee00',
    charClass: 'all-rounder', auraColor: '#ffee00',
    stats: { hp: 2100, power: 200, speed: 95, defense: 130 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 25, kiCostFire2: 70, kiPerCharge: 22,
    moves: {
      punch: { damage: 210, stun: 370, range: 87 },
      kick:  { damage: 245, stun: 420, range: 97 },
      fire1: { name: 'Ki Blast SSJ', damage: 230, speed: 9, size: 22, color: '#ffee00', type: 'orb' },
      fire2: { name: 'Kamehameha SSJ', damage: 560, speed: 12, size: 26, color: '#ffee00', type: 'beam' }
    },
    isTransformationOf: 'MidGoku',
    unlockCondition: 'story_android_ch3', unlockHint: 'Complete o Cap. 3 da Saga Androide', saga: 'android', price: 8000,
  },

  Vegeta: {
    displayName: 'Vegeta (Saga Cell)',
    description: 'O Príncipe dos Saiyajins. Orgulhoso e determinado a superar Goku.',
    spritePath: 'assets/sprites/Vegeta/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#3366cc',
    charClass: 'all-rounder', auraColor: '#6699ff',
    stats: { hp: 1700, power: 155, speed: 90, defense: 115 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 23, kiCostFire2: 65, kiPerCharge: 21,
    moves: {
      punch: { damage: 155, stun: 330, range: 83 },
      kick:  { damage: 180, stun: 375, range: 93 },
      fire1: { name: 'Ki Blast', damage: 165, speed: 8, size: 19, color: '#6699ff', type: 'orb' },
      fire2: { name: 'Galick Gun', damage: 430, speed: 11, size: 24, color: '#cc44ff', type: 'beam' }
    },
    transformation: { targetId: 'SSJVegeta', kiRequired: 100, animDuration: 2500 },
    unlockCondition: 'story_android_ch4', unlockHint: 'Complete o Cap. 4 da Saga Androide', saga: 'android', price: 9000,
  },

  SSJVegeta: {
    displayName: 'Vegeta Super Saiyajin (Saga Cell)',
    description: 'Vegeta como Super Saiyajin. Orgulho ferido, poder ilimitado.',
    spritePath: 'assets/sprites/SSJVegeta/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ffee44',
    charClass: 'all-rounder', auraColor: '#ffee44',
    stats: { hp: 2200, power: 210, speed: 93, defense: 135 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 26, kiCostFire2: 72, kiPerCharge: 23,
    moves: {
      punch: { damage: 220, stun: 380, range: 85 },
      kick:  { damage: 255, stun: 430, range: 95 },
      fire1: { name: 'Ki Blast SSJ', damage: 240, speed: 9, size: 21, color: '#ffee44', type: 'orb' },
      fire2: { name: 'Final Flash', damage: 590, speed: 12, size: 28, color: '#ffee44', type: 'beam' }
    },
    isTransformationOf: 'Vegeta',
    unlockCondition: 'story_android_ch4', unlockHint: 'Complete o Cap. 4 da Saga Androide', saga: 'android', price: 11000,
  },

  FTrunks: {
    displayName: 'Trunks do Futuro',
    description: 'Guerreiro do futuro. Veio ao passado para avisar sobre os Androides.',
    spritePath: 'assets/sprites/FTrunks/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#6644cc',
    charClass: 'rusher', auraColor: '#9966ff',
    stats: { hp: 1650, power: 148, speed: 93, defense: 108 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 22, kiCostFire2: 65, kiPerCharge: 20,
    moves: {
      punch: { damage: 148, stun: 325, range: 86 },
      kick:  { damage: 175, stun: 365, range: 96 },
      fire1: { name: 'Ki Blast', damage: 162, speed: 8, size: 19, color: '#9966ff', type: 'orb' },
      fire2: { name: 'Burning Attack', damage: 420, speed: 11, size: 24, color: '#9966ff', type: 'beam' }
    },
    transformation: { targetId: 'FTrunksSSJ', kiRequired: 100, animDuration: 2500 },
    unlockCondition: 'story_android_ch1', unlockHint: 'Complete o Cap. 1 da Saga Androide', saga: 'android', price: 5000,
  },

  FTrunksSSJ: {
    displayName: 'Trunks do Futuro Super Saiyajin',
    description: 'Trunks do Futuro transformado. Poder suficiente para enfrentar os Androides.',
    spritePath: 'assets/sprites/FTrunksSSJ/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ffcc44',
    charClass: 'rusher', auraColor: '#ffcc44',
    stats: { hp: 2050, power: 195, speed: 96, defense: 125 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 25, kiCostFire2: 70, kiPerCharge: 22,
    moves: {
      punch: { damage: 205, stun: 368, range: 88 },
      kick:  { damage: 238, stun: 415, range: 98 },
      fire1: { name: 'Ki Blast SSJ', damage: 228, speed: 9, size: 21, color: '#ffcc44', type: 'orb' },
      fire2: { name: 'Burning Attack SSJ', damage: 545, speed: 12, size: 26, color: '#ffcc44', type: 'beam' }
    },
    isTransformationOf: 'FTrunks',
    unlockCondition: 'story_android_ch1', unlockHint: 'Complete o Cap. 1 da Saga Androide', saga: 'android', price: 6500,
  },

  MechaFreeza: {
    displayName: 'Mecha Freeza',
    description: 'Freeza ressuscitado e reconstruído como máquina. Veio à Terra por vingança.',
    spritePath: 'assets/sprites/MechaFreeza/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#cc3344',
    charClass: 'grappler', auraColor: '#ff4466',
    stats: { hp: 2000, power: 185, speed: 80, defense: 145 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 28, kiCostFire2: 75, kiPerCharge: 18,
    moves: {
      punch: { damage: 195, stun: 360, range: 82 },
      kick:  { damage: 228, stun: 410, range: 92 },
      fire1: { name: 'Death Ball', damage: 300, speed: 7, size: 26, color: '#ff4466', type: 'orb' },
      fire2: { name: 'Death Beam', damage: 520, speed: 13, size: 20, color: '#ff4466', type: 'beam' }
    },
    unlockCondition: 'story_android_ch1', unlockHint: 'Complete o Cap. 1 da Saga Androide', saga: 'android', price: 5000,
  },

  KingCold: {
    displayName: 'Rei Cold',
    description: 'Pai de Freeza. Monarca da família mais poderosa do universo.',
    spritePath: 'assets/sprites/KingCold/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#8844aa',
    charClass: 'grappler', auraColor: '#cc66ff',
    stats: { hp: 2200, power: 198, speed: 72, defense: 158 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 30, kiCostFire2: 999, kiPerCharge: 18,
    moves: {
      punch: { damage: 215, stun: 380, range: 100 },
      kick:  { damage: 250, stun: 435, range: 110 },
      fire1: { name: 'Death Wave', damage: 330, speed: 8, size: 28, color: '#cc66ff', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'story_android_ch1', unlockHint: 'Complete o Cap. 1 da Saga Androide', saga: 'android', price: 5000,
  },

  A19: {
    displayName: 'Androide 19',
    description: 'Androide gordo e absorvedor de ki. Criado pelo Dr. Gero para eliminar Goku.',
    spritePath: 'assets/sprites/A19/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ffffff',
    charClass: 'grappler', auraColor: '#ccccff',
    stats: { hp: 1800, power: 168, speed: 65, defense: 150 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 25, kiCostFire2: 999, kiPerCharge: 15,
    moves: {
      punch: { damage: 180, stun: 355, range: 80 },
      kick:  { damage: 210, stun: 400, range: 90 },
      fire1: { name: 'Energy Drain Blast', damage: 240, speed: 7, size: 22, color: '#ccccff', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'story_android_ch3', unlockHint: 'Complete o Cap. 3 da Saga Androide', saga: 'android', price: 8000,
  },

  A20: {
    displayName: 'Dr. Gero (Androide 20)',
    description: 'O cientista criador dos Androides. Converteu-se em androide para a imortalidade.',
    spritePath: 'assets/sprites/A20/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#666699',
    charClass: 'all-rounder', auraColor: '#9999cc',
    stats: { hp: 1650, power: 155, speed: 70, defense: 135 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 25, kiCostFire2: 68, kiPerCharge: 16,
    moves: {
      punch: { damage: 165, stun: 335, range: 78 },
      kick:  { damage: 192, stun: 378, range: 88 },
      fire1: { name: 'Energy Absorb', damage: 220, speed: 7, size: 20, color: '#9999cc', type: 'orb' },
      fire2: { name: 'Eye Laser', damage: 480, speed: 13, size: 18, color: '#ff2222', type: 'beam' }
    },
    unlockCondition: 'story_android_ch2', unlockHint: 'Complete o Cap. 2 da Saga Androide', saga: 'android', price: 4500,
  },

  A18: {
    displayName: 'Androide 18',
    description: 'A androide feminina. Poder imenso, atitude fria e calculada.',
    spritePath: 'assets/sprites/A18/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ffaacc',
    charClass: 'rusher', auraColor: '#ffaacc',
    stats: { hp: 2100, power: 190, speed: 95, defense: 130 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 25, kiCostFire2: 68, kiPerCharge: 20,
    moves: {
      punch: { damage: 200, stun: 365, range: 84 },
      kick:  { damage: 232, stun: 415, range: 94 },
      fire1: { name: 'Energy Blast', damage: 218, speed: 9, size: 20, color: '#ffaacc', type: 'orb' },
      fire2: { name: 'Infinity Bullet', damage: 540, speed: 11, size: 24, color: '#ffaacc', type: 'beam' }
    },
    unlockCondition: 'story_android_ch8', unlockHint: 'Complete o Cap. 8 da Saga Androide', saga: 'android', price: 10000,
  },

  A17: {
    displayName: 'Androide 17',
    description: 'O androide rebelde. Poderoso, imprevisível e sem respeito por seu criador.',
    spritePath: 'assets/sprites/A17/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#44ccaa',
    charClass: 'rusher', auraColor: '#44ccaa',
    stats: { hp: 2150, power: 192, speed: 97, defense: 128 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 25, kiCostFire2: 68, kiPerCharge: 20,
    moves: {
      punch: { damage: 202, stun: 368, range: 86 },
      kick:  { damage: 235, stun: 418, range: 96 },
      fire1: { name: 'Energy Blast', damage: 222, speed: 9, size: 20, color: '#44ccaa', type: 'orb' },
      fire2: { name: 'Power Blitz', damage: 550, speed: 12, size: 24, color: '#44ccaa', type: 'beam' }
    },
    unlockCondition: 'story_android_ch6', unlockHint: 'Complete o Cap. 6 da Saga Androide', saga: 'android', price: 10000,
  },

  A16: {
    displayName: 'Androide 16',
    description: 'Androide gentil criado para matar Goku. Aprecia a natureza e os pássaros.',
    spritePath: 'assets/sprites/A16/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ff6600',
    charClass: 'grappler', auraColor: '#ff9933',
    stats: { hp: 2800, power: 210, speed: 68, defense: 170 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 30, kiCostFire2: 80, kiPerCharge: 18,
    moves: {
      punch: { damage: 225, stun: 395, range: 105 },
      kick:  { damage: 260, stun: 445, range: 115 },
      fire1: { name: 'Hell Flash', damage: 340, speed: 8, size: 28, color: '#ff9933', type: 'orb' },
      fire2: { name: 'Rocket Punch', damage: 580, speed: 10, size: 30, color: '#ff6600', type: 'beam' }
    },
    unlockCondition: 'story_android_ch9', unlockHint: 'Complete o Cap. 9 da Saga Androide', saga: 'android', price: 9000,
  },

  // EXTRA — Futuros
  FGohan: {
    displayName: 'Gohan do Futuro',
    description: 'Gohan do futuro alternativo. Lutou sozinho contra os androides por anos.',
    spritePath: 'assets/sprites/FGohan/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#cc6600',
    charClass: 'all-rounder', auraColor: '#ffaa44',
    stats: { hp: 1900, power: 172, speed: 88, defense: 120 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 23, kiCostFire2: 66, kiPerCharge: 20,
    moves: {
      punch: { damage: 182, stun: 348, range: 86 },
      kick:  { damage: 212, stun: 395, range: 96 },
      fire1: { name: 'Ki Blast', damage: 200, speed: 8, size: 20, color: '#ffaa44', type: 'orb' },
      fire2: { name: 'Masenko', damage: 510, speed: 11, size: 24, color: '#ffaa44', type: 'beam' }
    },
    transformation: { targetId: 'FGohanSSJ', kiRequired: 100, animDuration: 2500 },
    unlockCondition: 'story_android_ch0', unlockHint: 'Complete o Prólogo da Saga Androide', saga: 'extra', price: 8000,
  },

  FGohanSSJ: {
    displayName: 'Gohan do Futuro Super Saiyajin',
    description: 'Gohan do futuro transformado. O último guardião de um mundo destruído.',
    spritePath: 'assets/sprites/FGohanSSJ/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ffee00',
    charClass: 'all-rounder', auraColor: '#ffee00',
    stats: { hp: 2400, power: 225, speed: 91, defense: 140 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 26, kiCostFire2: 72, kiPerCharge: 22,
    moves: {
      punch: { damage: 238, stun: 390, range: 88 },
      kick:  { damage: 272, stun: 440, range: 98 },
      fire1: { name: 'Ki Blast SSJ', damage: 265, speed: 9, size: 22, color: '#ffee00', type: 'orb' },
      fire2: { name: 'Masenko SSJ', damage: 620, speed: 12, size: 26, color: '#ffee00', type: 'beam' }
    },
    isTransformationOf: 'FGohan',
    unlockCondition: 'story_android_ch0', unlockHint: 'Complete o Prólogo da Saga Androide', saga: 'extra', price: 10000,
  },

  // MOVIES — Androides das Trevas
  A14: {
    displayName: 'Androide 14',
    description: 'Androide criado pelo Dr. Gero para matar Goku. Parceiro silencioso do 13.',
    spritePath: 'assets/sprites/A14/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#336699',
    charClass: 'grappler', auraColor: '#5588bb',
    stats: { hp: 2000, power: 180, speed: 75, defense: 148 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 27, kiCostFire2: 999, kiPerCharge: 17,
    moves: {
      punch: { damage: 192, stun: 360, range: 100 },
      kick:  { damage: 225, stun: 410, range: 110 },
      fire1: { name: 'S.S. Deadly Bomber', damage: 290, speed: 8, size: 26, color: '#5588bb', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'whatif_android_super13', unlockHint: 'Desbloqueie e complete o What-If da Saga Androide', price: 9000,
    nonCanon: true, saga: 'movies'
  },

  A13: {
    displayName: 'Androide 13',
    description: 'O androide com alma de assassino. Programa de ódio a Goku no núcleo.',
    spritePath: 'assets/sprites/A13/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#cc4400',
    charClass: 'rusher', auraColor: '#ff6622',
    stats: { hp: 2050, power: 182, speed: 88, defense: 130 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 27, kiCostFire2: 72, kiPerCharge: 18,
    moves: {
      punch: { damage: 195, stun: 362, range: 88 },
      kick:  { damage: 228, stun: 412, range: 98 },
      fire1: { name: 'S.S. Deadly Bomber', damage: 270, speed: 9, size: 22, color: '#ff6622', type: 'orb' },
      fire2: { name: 'Ghosts', damage: 500, speed: 10, size: 24, color: '#ff6622', type: 'beam' }
    },
    transformation: { targetId: 'A13Super', kiRequired: 100, animDuration: 3000 },
    unlockCondition: 'whatif_android_super13', unlockHint: 'Desbloqueie e complete o What-If da Saga Androide', price: 11000,
    nonCanon: true, saga: 'movies'
  },

  A13Super: {
    displayName: 'Super Androide 13',
    description: 'Androide 13 absorveu as partes dos 14 e 15. Monstro quase indestrutível.',
    spritePath: 'assets/sprites/A13Super/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#004400',
    charClass: 'grappler', auraColor: '#00aa44',
    stats: { hp: 3500, power: 260, speed: 75, defense: 200 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 35, kiCostFire2: 90, kiPerCharge: 18,
    moves: {
      punch: { damage: 285, stun: 420, range: 108 },
      kick:  { damage: 325, stun: 475, range: 118 },
      fire1: { name: 'S.S. Deadly Bomber MAX', damage: 420, speed: 8, size: 34, color: '#00aa44', type: 'orb' },
      fire2: { name: 'Super Bomber DX', damage: 720, speed: 10, size: 32, color: '#00aa44', type: 'beam' }
    },
    isTransformationOf: 'A13',
    unlockCondition: 'whatif_android_super13', unlockHint: 'Desbloqueie e complete o What-If da Saga Androide', price: 14000,
    nonCanon: true, saga: 'movies'
  },

  // ══════════════════════════════════════════════════════
  // SAGA CELL — Personagens
  // ══════════════════════════════════════════════════════

  TeenGohan: {
    displayName: 'Gohan (Jovem)',
    description: 'Gohan adolescente na Saga Cell. Poder oculto imenso esperando para explodir.',
    spritePath: 'assets/sprites/TeenGohan/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ffcc00',
    charClass: 'all-rounder', auraColor: '#ffdd00',
    stats: { hp: 2000, power: 180, speed: 90, defense: 125 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 23, kiCostFire2: 65, kiPerCharge: 20,
    moves: {
      punch: { damage: 185, stun: 355, range: 84 },
      kick:  { damage: 215, stun: 400, range: 94 },
      fire1: { name: 'Ki Blast', damage: 195, speed: 8, size: 20, color: '#ffdd00', type: 'orb' },
      fire2: { name: 'Masenko', damage: 500, speed: 11, size: 24, color: '#ffdd00', type: 'beam' }
    },
    transformation: { targetId: 'TeenGohanSSJ', kiRequired: 100, animDuration: 2500 },
    unlockCondition: 'story_cell_ch6', unlockHint: 'Complete o Cap. 6 da Saga Cell', saga: 'cell', price: 8000,
  },

  TeenGohanSSJ: {
    displayName: 'Gohan (Jovem) Super Saiyajin',
    description: 'Gohan jovem transformado em Super Saiyajin. Herança do pai em chamas.',
    spritePath: 'assets/sprites/TeenGohanSSJ/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ffee44',
    charClass: 'all-rounder', auraColor: '#ffee44',
    stats: { hp: 2600, power: 240, speed: 93, defense: 148 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 26, kiCostFire2: 72, kiPerCharge: 22,
    moves: {
      punch: { damage: 252, stun: 400, range: 86 },
      kick:  { damage: 290, stun: 450, range: 96 },
      fire1: { name: 'Ki Blast SSJ', damage: 268, speed: 9, size: 22, color: '#ffee44', type: 'orb' },
      fire2: { name: 'Masenko SSJ', damage: 640, speed: 12, size: 26, color: '#ffee44', type: 'beam' }
    },
    transformation: { targetId: 'TeenGohanSSJ2', kiRequired: 100, animDuration: 3000 },
    isTransformationOf: 'TeenGohan',
    unlockCondition: 'story_cell_ch12', unlockHint: 'Complete o Cap. 12 da Saga Cell', saga: 'cell', price: 2400,
  },

  TeenGohanSSJ2: {
    displayName: 'Gohan (Jovem) Super Saiyajin 2',
    description: 'A raiva explodiu. Gohan SSJ2 é o guerreiro mais poderoso já visto na Terra.',
    spritePath: 'assets/sprites/TeenGohanSSJ2/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#ffffff',
    charClass: 'all-rounder', auraColor: '#ffffff',
    stats: { hp: 3500, power: 340, speed: 98, defense: 190 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 28, kiCostFire2: 80, kiPerCharge: 25,
    moves: {
      punch: { damage: 360, stun: 450, range: 88 },
      kick:  { damage: 415, stun: 510, range: 98 },
      fire1: { name: 'Ki Blast SSJ2', damage: 390, speed: 10, size: 24, color: '#ffffff', type: 'orb' },
      fire2: { name: 'Masenko Ha!', damage: 900, speed: 13, size: 30, color: '#ffffff', type: 'beam' }
    },
    isTransformationOf: 'TeenGohanSSJ',
    unlockCondition: 'story_cell_ch14', unlockHint: 'Complete o Cap. 14 da Saga Cell', saga: 'cell', price: 15000,
  },

  Cell1: {
    displayName: 'Cell Imperfeito',
    description: 'Cell em sua primeira forma. Absorve energia de seres vivos para evoluir.',
    spritePath: 'assets/sprites/Cell1/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#226622',
    charClass: 'grappler', auraColor: '#44bb44',
    stats: { hp: 2100, power: 195, speed: 82, defense: 140 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 25, kiCostFire2: 68, kiPerCharge: 19,
    moves: {
      punch: { damage: 205, stun: 368, range: 96 },
      kick:  { damage: 238, stun: 418, range: 106 },
      fire1: { name: 'Ki Blast', damage: 215, speed: 8, size: 21, color: '#44bb44', type: 'orb' },
      fire2: { name: 'Kamehameha', damage: 540, speed: 10, size: 25, color: '#44bb44', type: 'beam' }
    },
    transformation: { targetId: 'Cell2', kiRequired: 100, animDuration: 3000 },
    unlockCondition: 'story_cell_ch1', unlockHint: 'Complete o Cap. 1 da Saga Cell', saga: 'cell', price: 1900,
  },

  Cell2: {
    displayName: 'Cell Semiperfeito',
    description: 'Cell após absorver o Androide 17. Poder aumentado, mas ainda incompleto.',
    spritePath: 'assets/sprites/Cell2/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#118811',
    charClass: 'all-rounder', auraColor: '#44ff44',
    stats: { hp: 2700, power: 248, speed: 88, defense: 165 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 27, kiCostFire2: 72, kiPerCharge: 21,
    moves: {
      punch: { damage: 262, stun: 398, range: 98 },
      kick:  { damage: 300, stun: 450, range: 108 },
      fire1: { name: 'Ki Blast', damage: 278, speed: 9, size: 23, color: '#44ff44', type: 'orb' },
      fire2: { name: 'Kamehameha', damage: 680, speed: 11, size: 27, color: '#44ff44', type: 'beam' }
    },
    transformation: { targetId: 'Cell3', kiRequired: 100, animDuration: 3000 },
    isTransformationOf: 'Cell1',
    unlockCondition: 'story_cell_ch7', unlockHint: 'Complete o Cap. 7 da Saga Cell', saga: 'cell', price: 2600,
  },

  Cell3: {
    displayName: 'Cell Perfeito',
    description: 'A forma perfeita de Cell. Absorveu os Androides 17 e 18. Poder absoluto.',
    spritePath: 'assets/sprites/Cell3/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#00aa00',
    charClass: 'all-rounder', auraColor: '#00ff88',
    stats: { hp: 3400, power: 320, speed: 94, defense: 200 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 30, kiCostFire2: 82, kiPerCharge: 23,
    moves: {
      punch: { damage: 340, stun: 430, range: 100 },
      kick:  { damage: 388, stun: 485, range: 110 },
      fire1: { name: 'Ki Blast Perfeito', damage: 365, speed: 10, size: 26, color: '#00ff88', type: 'orb' },
      fire2: { name: 'Kamehameha Perfeito', damage: 860, speed: 13, size: 32, color: '#00ff88', type: 'beam' }
    },
    isTransformationOf: 'Cell2',
    unlockCondition: 'story_cell_ch9', unlockHint: 'Complete o Cap. 9 da Saga Cell', saga: 'cell', price: 14000,
  },

  CellJr: {
    displayName: 'Cell Jr.',
    description: 'Filhos de Cell. Pequenos mas com poder de Super Saiyajin. Atacam em bando.',
    spritePath: 'assets/sprites/CellJr/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#009933',
    charClass: 'rusher', auraColor: '#00ee55',
    stats: { hp: 1800, power: 200, speed: 105, defense: 110 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 22, kiCostFire2: 999, kiPerCharge: 20,
    moves: {
      punch: { damage: 210, stun: 355, range: 80 },
      kick:  { damage: 245, stun: 400, range: 90 },
      fire1: { name: 'Ki Blast', damage: 220, speed: 10, size: 18, color: '#00ee55', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'story_cell_ch13', unlockHint: 'Complete o Cap. 13 da Saga Cell', saga: 'cell', price: 1600,
  },

  ArmorTrunksSSJ: {
    displayName: 'Trunks de Armadura Super Saiyajin',
    description: 'Trunks do futuro com armadura Saiyajin. Voltou ao presente para treinar na Câmara do Tempo.',
    spritePath: 'assets/sprites/ArmorTrunksSSJ/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#4488cc',
    charClass: 'all-rounder', auraColor: '#ffee44',
    stats: { hp: 2500, power: 225, speed: 90, defense: 155 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 26, kiCostFire2: 72, kiPerCharge: 22,
    moves: {
      punch: { damage: 238, stun: 392, range: 88 },
      kick:  { damage: 275, stun: 442, range: 98 },
      fire1: { name: 'Ki Blast SSJ', damage: 252, speed: 9, size: 22, color: '#ffee44', type: 'orb' },
      fire2: { name: 'Burning Attack', damage: 620, speed: 11, size: 26, color: '#ffee44', type: 'beam' }
    },
    transformation: { targetId: 'ArmorTrunksUltraSSJ', kiRequired: 100, animDuration: 3000 },
    unlockCondition: 'story_cell_ch8', unlockHint: 'Complete o Cap. 8 da Saga Cell', saga: 'cell', price: 2300,
  },

  ArmorTrunksUltraSSJ: {
    displayName: 'Ultra Trunks',
    description: 'Trunks além do Super Saiyajin. Musculatura máxima — mas velocidade comprometida.',
    spritePath: 'assets/sprites/ArmorTrunksUltraSSJ/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#2266bb',
    charClass: 'grappler', auraColor: '#ffff88',
    stats: { hp: 3600, power: 370, speed: 58, defense: 220 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 32, kiCostFire2: 85, kiPerCharge: 22,
    moves: {
      punch: { damage: 400, stun: 470, range: 105 },
      kick:  { damage: 455, stun: 530, range: 115 },
      fire1: { name: 'Ki Blast Ultra', damage: 430, speed: 8, size: 30, color: '#ffff88', type: 'orb' },
      fire2: { name: 'Burning Attack MAX', damage: 950, speed: 10, size: 36, color: '#ffff88', type: 'beam' }
    },
    isTransformationOf: 'ArmorTrunksSSJ',
    unlockCondition: 'story_cell_ch8', unlockHint: 'Complete o Cap. 8 da Saga Cell', saga: 'cell', price: 13000,
  },

  MrSatan: {
    displayName: 'Mr. Satan',
    description: 'O Campeão Mundial de Artes Marciais. Toda a fama, nenhum ki. Mas o coração é de ouro.',
    spritePath: 'assets/sprites/MrSatan/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Damage:'Damage.png', Dead:'Dead.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#cc8800',
    charClass: 'grappler', auraColor: '#ffcc00',
    stats: { hp: 600, power: 45, speed: 70, defense: 55 },
    hasCharge: false, hasFire1: false, hasFire2: false,
    kiCostFire1: 999, kiCostFire2: 999, kiPerCharge: 0,
    moves: {
      punch: { damage: 55, stun: 200, range: 72 },
      kick:  { damage: 68, stun: 240, range: 80 },
      fire1: null, fire2: null
    },
    unlockCondition: 'story_cell_ch10', unlockHint: 'Complete o Cap. 10 da Saga Cell', saga: 'cell', price: 9000,
  },

  // ══════════════════════════════════════════════════════
  // FILMES — Gangue de Bojack / Broly
  // ══════════════════════════════════════════════════════

  Bojack: {
    displayName: 'Bojack',
    description: 'Líder dos Piratas Espaciais. Selado pelo Kai do Sul, liberado após a morte de Goku.',
    spritePath: 'assets/sprites/Bojack/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#226688',
    charClass: 'all-rounder', auraColor: '#44aacc',
    stats: { hp: 2800, power: 260, speed: 86, defense: 172 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 27, kiCostFire2: 74, kiPerCharge: 21,
    moves: {
      punch: { damage: 278, stun: 408, range: 100 },
      kick:  { damage: 318, stun: 460, range: 110 },
      fire1: { name: 'Galactic Buster', damage: 305, speed: 9, size: 25, color: '#44aacc', type: 'orb' },
      fire2: { name: 'Full Power Energy Wave', damage: 740, speed: 11, size: 29, color: '#44aacc', type: 'beam' }
    },
    transformation: { targetId: 'BojackFullPower', kiRequired: 100, animDuration: 3000 },
    unlockCondition: 'zpq12_piracy', unlockHint: 'Complete a Z-PQ12: Pirataria vs Tirania', saga: 'movies', price: 2700, nonCanon: true,
  },

  BojackFullPower: {
    displayName: 'Bojack Poder Total',
    description: 'Bojack liberou todo seu poder. Tamanho, força e brutalidade sem limites.',
    spritePath: 'assets/sprites/BojackFullPower/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#004466',
    charClass: 'grappler', auraColor: '#0088cc',
    stats: { hp: 3800, power: 360, speed: 74, defense: 235 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 33, kiCostFire2: 88, kiPerCharge: 22,
    moves: {
      punch: { damage: 388, stun: 462, range: 112 },
      kick:  { damage: 440, stun: 520, range: 122 },
      fire1: { name: 'Galactic Buster MAX', damage: 430, speed: 8, size: 32, color: '#0088cc', type: 'orb' },
      fire2: { name: 'Dirty Fireworks', damage: 980, speed: 10, size: 38, color: '#0088cc', type: 'beam' }
    },
    isTransformationOf: 'Bojack',
    unlockCondition: 'zpq12_piracy', unlockHint: 'Complete a Z-PQ12: Pirataria vs Tirania', saga: 'movies', price: 15000, nonCanon: true,
  },

  Zangya: {
    displayName: 'Zangya',
    description: 'Guerreira dos Piratas Espaciais. Bela e mortal, serve a Bojack com lealdade.',
    spritePath: 'assets/sprites/Zangya/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#cc4488',
    charClass: 'rusher', auraColor: '#ff66aa',
    stats: { hp: 2200, power: 205, speed: 100, defense: 130 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 24, kiCostFire2: 68, kiPerCharge: 21,
    moves: {
      punch: { damage: 215, stun: 368, range: 82 },
      kick:  { damage: 250, stun: 418, range: 92 },
      fire1: { name: 'Ki Blast', damage: 228, speed: 10, size: 20, color: '#ff66aa', type: 'orb' },
      fire2: { name: 'Energy Web', damage: 580, speed: 12, size: 24, color: '#ff66aa', type: 'beam' }
    },
    unlockCondition: 'zpq12_piracy', unlockHint: 'Complete a Z-PQ12: Pirataria vs Tirania', saga: 'movies', price: 2100, nonCanon: true,
  },

  Bujin: {
    displayName: 'Bujin',
    description: 'Pirata Espacial com poder de manipular energia. Lento, mas os fios de energia prendem o oponente.',
    spritePath: 'assets/sprites/Bujin/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#886600',
    charClass: 'grappler', auraColor: '#ccaa00',
    stats: { hp: 2000, power: 188, speed: 72, defense: 148 },
    hasCharge: true, hasFire1: true, hasFire2: false,
    kiCostFire1: 26, kiCostFire2: 999, kiPerCharge: 18,
    moves: {
      punch: { damage: 198, stun: 360, range: 98 },
      kick:  { damage: 232, stun: 410, range: 108 },
      fire1: { name: 'Energy Net', damage: 280, speed: 7, size: 24, color: '#ccaa00', type: 'orb' },
      fire2: null
    },
    unlockCondition: 'zpq17_androids_pirates', unlockHint: 'Complete a Z-PQ17: Androides vs Piratas', saga: 'movies', price: 1900, nonCanon: true,
  },

  Broly1: {
    displayName: 'Broly',
    description: 'O Lendário Super Saiyajin em forma base. Mesmo assim, poder aterrorizante.',
    spritePath: 'assets/sprites/Broly1/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#006600',
    charClass: 'grappler', auraColor: '#00cc44',
    stats: { hp: 2600, power: 240, speed: 78, defense: 175 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 27, kiCostFire2: 74, kiPerCharge: 20,
    moves: {
      punch: { damage: 255, stun: 400, range: 108 },
      kick:  { damage: 292, stun: 455, range: 118 },
      fire1: { name: 'Ki Blast', damage: 268, speed: 8, size: 24, color: '#00cc44', type: 'orb' },
      fire2: { name: 'Eraser Cannon', damage: 660, speed: 9, size: 30, color: '#00cc44', type: 'beam' }
    },
    transformation: { targetId: 'Broly2', kiRequired: 100, animDuration: 2500 },
    unlockCondition: 'zpq11_brute_force', unlockHint: 'Complete a Z-PQ11: Força Bruta', saga: 'movies', price: 2400, nonCanon: true,
  },

  Broly2: {
    displayName: 'Broly Super Saiyajin',
    description: 'Broly transformado. Energia verde destruidora vaza por cada poro.',
    spritePath: 'assets/sprites/Broly2/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#009900',
    charClass: 'grappler', auraColor: '#44ff44',
    stats: { hp: 3400, power: 320, speed: 80, defense: 210 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 30, kiCostFire2: 82, kiPerCharge: 22,
    moves: {
      punch: { damage: 342, stun: 448, range: 110 },
      kick:  { damage: 390, stun: 505, range: 120 },
      fire1: { name: 'Eraser Cannon', damage: 380, speed: 8, size: 30, color: '#44ff44', type: 'orb' },
      fire2: { name: 'Gigantic Meteor', damage: 860, speed: 9, size: 38, color: '#44ff44', type: 'beam' }
    },
    transformation: { targetId: 'Broly3', kiRequired: 100, animDuration: 3500 },
    isTransformationOf: 'Broly1',
    unlockCondition: 'zpq11_brute_force', unlockHint: 'Complete a Z-PQ11: Força Bruta', saga: 'movies', price: 14000, nonCanon: true,
  },

  Broly3: {
    displayName: 'Broly Lendário Super Saiyajin',
    description: 'A forma lendária. LSSJ — Poder que não para de crescer. A lenda que os Saiyajins temiam.',
    spritePath: 'assets/sprites/Broly3/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire1:'Fire1.png', Fire2:'Fire2.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#00ff00',
    charClass: 'grappler', auraColor: '#88ff88',
    stats: { hp: 5000, power: 480, speed: 76, defense: 290 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 35, kiCostFire2: 95, kiPerCharge: 25,
    moves: {
      punch: { damage: 520, stun: 510, range: 115 },
      kick:  { damage: 590, stun: 575, range: 125 },
      fire1: { name: 'Eraser Cannon LSSJ', damage: 580, speed: 8, size: 38, color: '#88ff88', type: 'orb' },
      fire2: { name: 'Gigantic Destruction', damage: 1400, speed: 9, size: 48, color: '#88ff88', type: 'beam' }
    },
    isTransformationOf: 'Broly2',
    unlockCondition: 'zpq20_legendary', unlockHint: 'Complete a Z-PQ20: Lendário Super Saiyajin', saga: 'movies', price: 22000, nonCanon: true,
  },

  Paragus: {
    displayName: 'Paragus',
    description: 'Pai de Broly. Controla o filho com um dispositivo. Ambicioso e manipulador.',
    spritePath: 'assets/sprites/Paragus/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#442200',
    charClass: 'all-rounder', auraColor: '#884400',
    stats: { hp: 1800, power: 168, speed: 78, defense: 120 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 23, kiCostFire2: 65, kiPerCharge: 18,
    moves: {
      punch: { damage: 175, stun: 342, range: 84 },
      kick:  { damage: 205, stun: 390, range: 94 },
      fire1: { name: 'Ki Blast', damage: 188, speed: 8, size: 20, color: '#884400', type: 'orb' },
      fire2: { name: 'Lasso', damage: 480, speed: 10, size: 22, color: '#884400', type: 'beam' }
    },
    unlockCondition: 'zpq25_saiyan_rebellion', unlockHint: 'Complete a Z-PQ25: Rebelião dos Saiyajins Excluídos', saga: 'movies', price: 1700, nonCanon: true,
  },

  MechaCooler: {
    displayName: 'Meta Cooler',
    description: 'Cooler transformado pela Big Gete Star. Reproduz-se infinitamente.',
    spritePath: 'assets/sprites/MechaCooler/',
    sprites: { Idle:'Idle.png', Punch:'Punch.png', Kick:'Kick.png', Block:'Block.png', Charge:'Charge.png', Damage:'Damage.png', Dead:'Dead.png', Fire:'Fire.png', WalkLeft:'WalkLeft.png', WalkRight:'WalkRight.png' },
    color: '#225500',
    charClass: 'grappler', auraColor: '#44bb00',
    stats: { hp: 3200, power: 248, speed: 82, defense: 185 },
    hasCharge: true, hasFire1: true, hasFire2: true,
    kiCostFire1: 33, kiCostFire2: 85, kiPerCharge: 18,
    moves: {
      punch: { damage: 265, stun: 408, range: 100 },
      kick:  { damage: 305, stun: 460, range: 110 },
      fire1: { name: 'Death Beam Meta', damage: 390, speed: 12, size: 22, color: '#44bb00', type: 'beam' },
      fire2: { name: 'Supernova', damage: 680, speed: 9, size: 36, color: '#44bb00', type: 'orb' }
    },
    unlockCondition: 'mission_android_mecha', unlockHint: 'Complete a Z-PQ7: Mecha', price: 13000,
    nonCanon: true, saga: 'movies'
  }
};

// ─── Ordem do Roster ─────────────────────────────────────────
const ROSTER_ORDER = [
  'EarlyGoku','Piccolo',
  'KidGohan','Krillin','Yamcha','Tien','Yajirobe',
  'Raditz','Nappa','ScouterVegeta','Saibaman',
  'Cui','Appule','Dodoria','Zarbon','MonsterZarbon',
  'Guldo','Rikum','Burter','Jeice','Ginyu',
  'NamekGoku','NamekSSJGoku',
  'Frieza1','Frieza2','Frieza3','Frieza4','Frieza5',
  'Cooler','FinalCooler','Turles',
  // Saga Androide
  'MidGoku','MidGokuSSJ','Vegeta','SSJVegeta',
  'FTrunks','FTrunksSSJ','MechaFreeza','KingCold',
  'A19','A20','A18','A17','A16',
  // Extra
  'FGohan','FGohanSSJ',
  // Movies (Android)
  'A14','A13','A13Super','MechaCooler',
  // Saga Cell
  'TeenGohan','TeenGohanSSJ','TeenGohanSSJ2',
  'Cell1','Cell2','Cell3','CellJr',
  'ArmorTrunksSSJ','ArmorTrunksUltraSSJ',
  'MrSatan',
  // Filmes (Cell / Broly)
  'Bojack','BojackFullPower','Zangya','Bujin',
  'Broly1','Broly2','Broly3','Paragus'
];

const DEFAULT_UNLOCKED = ['EarlyGoku', 'Piccolo'];
