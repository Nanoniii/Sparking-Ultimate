// stages.js — v5: Arenas Saiyajin + Namek/Freeza

const STAGES = [
  // ── SAGA SAIYAJIN ───────────────────────────────────────
  {
    id: 'kame_house',
    name: 'Kame House',
    bgColor: ['#5bb8f5', '#b0dff7'],
    groundColor: '#5a9e3a', groundY: 0.75,
    elements: [
      { type: 'sun', x: 0.82, y: 0.12, r: 38, color: '#ffe066' },
      { type: 'cloud', x: 0.15, y: 0.18, w: 100, h: 30 },
      { type: 'cloud', x: 0.55, y: 0.10, w: 80, h: 22 },
      { type: 'building', x: 0.44, y: 0.50, w: 90, h: 110, color: '#e8d5a0', roof: '#cc3333', roofH: 22 },
      { type: 'water', color: '#3a8fc4' },
      { type: 'palm', x: 0.28, y: 0.74 },
      { type: 'palm', x: 0.68, y: 0.74 }
    ]
  },
  {
    id: 'wasteland',
    name: 'Wasteland',
    bgColor: ['#c4813a', '#7a3d1a'],
    groundColor: '#b06840', groundY: 0.76,
    elements: [
      { type: 'sun', x: 0.15, y: 0.10, r: 32, color: '#ff9900' },
      { type: 'rock', x: 0.10, y: 0.74, w: 60, h: 40, color: '#7a5033' },
      { type: 'rock', x: 0.78, y: 0.72, w: 80, h: 55, color: '#7a5033' },
      { type: 'crack', x1: 0.3, y1: 0.76, x2: 0.5, y2: 0.80 },
      { type: 'dust', color: 'rgba(180,100,40,0.18)' }
    ]
  },
  {
    id: 'kami_lookout',
    name: "Mirante de Kami",
    bgColor: ['#07001a', '#1a0a3a'],
    groundColor: '#4a3080', groundY: 0.78,
    elements: [
      { type: 'stars' },
      { type: 'moon', x: 0.80, y: 0.14, r: 28, color: '#fffbe0' },
      { type: 'pillar', x: 0.08, color: '#3d2270', h: 0.35 },
      { type: 'pillar', x: 0.88, color: '#3d2270', h: 0.28 },
      { type: 'cloud_dark', x: 0.30, y: 0.55, w: 120, h: 28 },
      { type: 'glow', x: 0.5, y: 0.78, color: 'rgba(120,60,255,0.22)', r: 200 }
    ]
  },
  {
    id: 'hyperbolic_chamber',
    name: 'Sala do Espírito e Tempo',
    bgColor: ['#f0f0f0', '#ffffff'],
    groundColor: '#e0e0e0', groundY: 0.75,
    elements: [
      { type: 'grid' },
      { type: 'void_mist', color: 'rgba(220,220,255,0.35)' },
      { type: 'pillar_white', x: 0.05, h: 0.5 },
      { type: 'pillar_white', x: 0.92, h: 0.5 },
      { type: 'glow', x: 0.5, y: 0.4, color: 'rgba(180,180,255,0.15)', r: 300 }
    ]
  },
  {
    id: 'planet_earth',
    name: 'Planícies Rochosas',
    bgColor: ['#6aaec8', '#a0cde0'],
    groundColor: '#7a6a50', groundY: 0.76,
    elements: [
      { type: 'sun', x: 0.72, y: 0.09, r: 34, color: '#fff176' },
      { type: 'cloud', x: 0.20, y: 0.14, w: 110, h: 32 },
      { type: 'mountain', x: 0.05, color: '#5a4a35', peaks: [[0,0.76],[0.12,0.52],[0.22,0.76]] },
      { type: 'mountain', x: 0.72, color: '#4a3a28', peaks: [[0,0.76],[0.14,0.48],[0.28,0.76]] },
      { type: 'rock', x: 0.35, y: 0.75, w: 45, h: 28, color: '#6a5840' },
      { type: 'grass', color: '#6a8a40' }
    ]
  },
  {
    id: 'tournament_arena',
    name: 'Arena do Torneio',
    bgColor: ['#87ceeb', '#c8e8ff'],
    groundColor: '#f5f0e0', groundY: 0.77,
    elements: [
      { type: 'sun', x: 0.5, y: 0.08, r: 36, color: '#fff066' },
      { type: 'cloud', x: 0.08, y: 0.15, w: 90, h: 26 },
      { type: 'cloud', x: 0.70, y: 0.18, w: 70, h: 20 },
      { type: 'arena_ring', lineColor: 'rgba(160,140,80,0.7)' },
      { type: 'crowd_blur', color: 'rgba(100,80,60,0.3)' }
    ]
  },

  // ── SAGA FREEZA / NAMEK ──────────────────────────────────
  {
    id: 'namek_surface',
    name: 'Planeta Namek',
    bgColor: ['#004488', '#002255'],
    groundColor: '#115533', groundY: 0.76,
    elements: [
      { type: 'planet', x: 0.12, y: 0.18, r: 55, color: '#4488bb', color2: '#224466' },
      { type: 'planet', x: 0.85, y: 0.10, r: 30, color: '#66aacc', color2: '#335577' },
      { type: 'stars' },
      { type: 'namek_grass', color: '#22aa55' },
      { type: 'glow', x: 0.5, y: 0.76, color: 'rgba(0,200,80,0.12)', r: 250 },
      { type: 'rock', x: 0.15, y: 0.75, w: 50, h: 35, color: '#1a6640' },
      { type: 'rock', x: 0.80, y: 0.74, w: 65, h: 42, color: '#1a5535' }
    ]
  },
  {
    id: 'namek_village',
    name: 'Vila Namekuseijin',
    bgColor: ['#003377', '#001a44'],
    groundColor: '#0d4422', groundY: 0.75,
    elements: [
      { type: 'stars' },
      { type: 'planet', x: 0.78, y: 0.16, r: 42, color: '#4499bb', color2: '#226688' },
      { type: 'namek_grass', color: '#33bb66' },
      { type: 'building', x: 0.18, y: 0.5, w: 70, h: 90, color: '#228844', roof: '#116633', roofH: 18 },
      { type: 'building', x: 0.72, y: 0.5, w: 55, h: 75, color: '#1e7a3c', roof: '#0f5528', roofH: 15 },
      { type: 'glow', x: 0.5, y: 0.76, color: 'rgba(30,180,80,0.10)', r: 200 }
    ]
  },
  {
    id: 'namek_freeza_ship',
    name: 'Nave de Freeza',
    bgColor: ['#050510', '#0a0a20'],
    groundColor: '#222244', groundY: 0.77,
    elements: [
      { type: 'stars' },
      { type: 'grid_dark' },
      { type: 'pillar_blue', x: 0.10, h: 0.50 },
      { type: 'pillar_blue', x: 0.88, h: 0.50 },
      { type: 'pillar_blue', x: 0.35, h: 0.30 },
      { type: 'pillar_blue', x: 0.65, h: 0.30 },
      { type: 'glow', x: 0.5, y: 0.40, color: 'rgba(0,80,200,0.18)', r: 260 },
      { type: 'energy_lines' }
    ]
  },
  {
    id: 'namek_crater',
    name: 'Cratera de Namek',
    bgColor: ['#220011', '#0a0005'],
    groundColor: '#331100', groundY: 0.76,
    elements: [
      { type: 'stars' },
      { type: 'planet', x: 0.80, y: 0.12, r: 38, color: '#4488bb', color2: '#224466' },
      { type: 'fire_bg', color: 'rgba(255,80,0,0.12)' },
      { type: 'crater', x: 0.25, rx: 80, ry: 20, color: 'rgba(100,30,0,0.6)' },
      { type: 'crater', x: 0.72, rx: 55, ry: 14, color: 'rgba(120,40,0,0.5)' },
      { type: 'glow', x: 0.5, y: 0.76, color: 'rgba(255,80,0,0.20)', r: 180 },
      { type: 'rock', x: 0.10, y: 0.74, w: 55, h: 38, color: '#442200' },
      { type: 'rock', x: 0.82, y: 0.73, w: 70, h: 44, color: '#3a1a00' }
    ]
  },
  {
    id: 'namek_dying',
    name: 'Namek em Chamas',
    bgColor: ['#440000', '#110000'],
    groundColor: '#550a00', groundY: 0.75,
    elements: [
      { type: 'fire_bg', color: 'rgba(255,60,0,0.25)' },
      { type: 'glow', x: 0.5, y: 0.0, color: 'rgba(255,100,0,0.30)', r: 300 },
      { type: 'glow', x: 0.5, y: 0.76, color: 'rgba(255,50,0,0.25)', r: 200 },
      { type: 'crater', x: 0.3, rx: 100, ry: 25, color: 'rgba(180,40,0,0.7)' },
      { type: 'crater', x: 0.7, rx: 70, ry: 18, color: 'rgba(150,30,0,0.6)' },
      { type: 'dust', color: 'rgba(255,50,0,0.08)' }
    ]
  },
  {
    id: 'space',
    name: 'O Vazio do Espaço',
    bgColor: ['#000005', '#000010'],
    groundColor: '#111122', groundY: 0.80,
    elements: [
      { type: 'stars' },
      { type: 'planet', x: 0.15, y: 0.25, r: 70, color: '#4488bb', color2: '#224466' },
      { type: 'planet', x: 0.85, y: 0.60, r: 45, color: '#aa4422', color2: '#662211' },
      { type: 'glow', x: 0.15, y: 0.25, color: 'rgba(50,120,220,0.15)', r: 150 },
      { type: 'grid_dark' }
    ]
  },

  // ── EXTRAS ──────────────────────────────────────────────
  {
    id: 'saiyan_crater',
    name: 'Campo de Batalha Saiyajin',
    bgColor: ['#5a4030', '#2a1a0a'],
    groundColor: '#8b5a30', groundY: 0.76,
    elements: [
      { type: 'sun', x: 0.65, y: 0.08, r: 30, color: '#ff8800' },
      { type: 'dust', color: 'rgba(180,90,30,0.20)' },
      { type: 'crater', x: 0.20, rx: 90, ry: 22, color: 'rgba(80,30,0,0.55)' },
      { type: 'crater', x: 0.65, rx: 60, ry: 15, color: 'rgba(70,25,0,0.45)' },
      { type: 'rock', x: 0.08, y: 0.74, w: 50, h: 32, color: '#6a4020' },
      { type: 'rock', x: 0.88, y: 0.73, w: 65, h: 40, color: '#5a3518' }
    ]
  }
];

// Mapeamento de capítulos para arenas (história bloqueia escolha)
const STORY_STAGE_MAP = {
  ch1: 'kame_house', ch2: 'kame_house', ch3: 'kami_lookout',
  ch4: 'saiyan_crater', ch5: 'saiyan_crater', ch6: 'saiyan_crater',
  ch7: 'saiyan_crater',
  ch_namek1: 'namek_surface', ch_namek2: 'namek_village',
  ch_namek3: 'namek_surface', ch_namek4: 'namek_surface',
  ch_namek5: 'namek_surface', ch_namek6: 'namek_village',
  ch_namek7: 'namek_surface', ch_namek8: 'namek_surface',
  ch_namek9: 'namek_surface', ch_namek10: 'namek_surface',
  ch_namek11: 'namek_freeza_ship', ch_namek12: 'namek_surface',
  ch_namek13: 'namek_freeza_ship', ch_namek14: 'namek_surface',
  ch_namek15: 'namek_surface', ch_namek16: 'namek_crater',
  ch_namek17: 'namek_crater', ch_namek18: 'namek_crater',
  ch_namek19: 'namek_dying',
  // Saga Androide
  android_ch0: 'planet_earth',
  android_ch1: 'wasteland',
  android_ch2: 'saiyan_crater',
  android_ch3: 'wasteland',
  android_ch4: 'wasteland',
  android_ch5: 'kami_lookout',
  android_ch6: 'hyperbolic_chamber',
  android_ch7: 'hyperbolic_chamber',
  android_ch8: 'saiyan_crater',
  android_ch9: 'saiyan_crater',
};

let currentStageIndex = 0;

function getCurrentStage() { return STAGES[currentStageIndex]; }

function setStageById(id) {
  const idx = STAGES.findIndex(s => s.id === id);
  if (idx >= 0) currentStageIndex = idx;
}
