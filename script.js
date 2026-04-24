const TEAM_CODES = {
  'Mexico': 'mx', 'Canada': 'ca', 'USA': 'us',
  'Argentina': 'ar', 'Brazil': 'br', 'Uruguay': 'uy',
  'Colombia': 'co', 'Ecuador': 'ec', 'Chile': 'cl',
  'Peru': 'pe', 'Venezuela': 've', 'Bolivia': 'bo',
  'Paraguay': 'py',
  'Germany': 'de', 'Spain': 'es', 'France': 'fr',
  'England': 'gb-eng', 'Portugal': 'pt', 'Netherlands': 'nl',
  'Belgium': 'be', 'Italy': 'it', 'Croatia': 'hr',
  'Switzerland': 'ch', 'Austria': 'at', 'Denmark': 'dk',
  'Sweden': 'se', 'Norway': 'no', 'Poland': 'pl',
  'Serbia': 'rs', 'Hungary': 'hu', 'Romania': 'ro',
  'Turkey': 'tr', 'Greece': 'gr', 'Czech Republic': 'cz',
  'Czechia': 'cz', 'Slovakia': 'sk', 'Albania': 'al',
  'Scotland': 'gb-sct', 'Wales': 'gb-wls', 'Ukraine': 'ua',
  'Slovenia': 'si', 'Kosovo': 'xk', 'Georgia': 'ge',
  'Bosnia and Herzegovina': 'ba',
  'Bosnia & Herzegovina': 'ba',
  'Japan': 'jp', 'South Korea': 'kr', 'Korea Republic': 'kr',
  'Australia': 'au', 'Iran': 'ir', 'Saudi Arabia': 'sa',
  'Jordan': 'jo', 'Iraq': 'iq', 'Uzbekistan': 'uz',
  'China': 'cn', 'Indonesia': 'id', 'Oman': 'om',
  'UAE': 'ae', 'Bahrain': 'bh', 'Qatar': 'qa',
  'Syria': 'sy', 'Kuwait': 'kw',
  'Morocco': 'ma', 'Senegal': 'sn', 'Nigeria': 'ng',
  'Egypt': 'eg', 'Cameroon': 'cm', 'Ghana': 'gh',
  'Tunisia': 'tn', 'Algeria': 'dz', 'Mali': 'ml',
  'South Africa': 'za', 'Cape Verde': 'cv', 'Cabo Verde': 'cv',
  'DR Congo': 'cd', 'Congo DR': 'cd',
  "Côte d'Ivoire": 'ci', 'Ivory Coast': 'ci',
  'Costa Rica': 'cr', 'Panama': 'pa', 'Honduras': 'hn',
  'Jamaica': 'jm', 'El Salvador': 'sv', 'Guatemala': 'gt',
  'Cuba': 'cu', 'Trinidad and Tobago': 'tt',
  'Haiti': 'ht', 'Curaçao': 'cw', 'Curacao': 'cw',
  'New Zealand': 'nz', 'Fiji': 'fj',
};

function setTeamName(el, name) {
  el.textContent = '';
  const code = TEAM_CODES[name];
  if (code) {
    const img = document.createElement('img');
    img.src = `https://flagcdn.com/w20/${code}.png`;
    img.srcset = `https://flagcdn.com/w40/${code}.png 2x`;
    img.alt = name;
    img.className = 'team-flag';
    el.appendChild(img);
  }
  el.appendChild(document.createTextNode(code ? ` ${name}` : name));
}

const translations = {
  en: {
    htmlLang: 'en',
    pageTitle: '2026 FIFA World Cup Schedule',
    subtitle: 'Group stage fixtures and knockout bracket',
    languageLabel: 'Language',
    groupStageTitle: 'Group Stage',
    knockoutTitle: 'Knockout Stage',
    dragTip: 'Drag left/right to explore the full bracket',
    groupLabel: 'Group',
    scorePending: '-',
    datePending: 'TBD',
    dataStatusLive: 'Live data',
    dataStatusCached: 'Offline data',
  },
  zh: {
    htmlLang: 'zh-CN',
    pageTitle: '2026年世界杯赛程',
    subtitle: '小组赛列表与淘汰赛树形图',
    languageLabel: '语言',
    groupStageTitle: '小组赛',
    knockoutTitle: '淘汰赛',
    dragTip: '左右拖动查看完整淘汰赛对阵图',
    groupLabel: '小组',
    scorePending: '-',
    datePending: '待定',
    dataStatusLive: '实时数据',
    dataStatusCached: '本地数据',
  },
  fr: {
    htmlLang: 'fr',
    pageTitle: 'Calendrier Coupe du Monde 2026',
    subtitle: 'Phase de groupes et tableau à élimination directe',
    languageLabel: 'Langue',
    groupStageTitle: 'Phase de groupes',
    knockoutTitle: 'Élimination directe',
    dragTip: 'Faites glisser à gauche/droite pour voir tout le tableau',
    groupLabel: 'Groupe',
    scorePending: '-',
    datePending: 'À définir',
    dataStatusLive: 'Données en direct',
    dataStatusCached: 'Données locales',
  },
  de: {
    htmlLang: 'de',
    pageTitle: 'Spielplan WM 2026',
    subtitle: 'Gruppenphase und K.-o.-Baum',
    languageLabel: 'Sprache',
    groupStageTitle: 'Gruppenphase',
    knockoutTitle: 'K.-o.-Runde',
    dragTip: 'Zum Erkunden des Turnierbaums nach links/rechts ziehen',
    groupLabel: 'Gruppe',
    scorePending: '-',
    datePending: 'Offen',
    dataStatusLive: 'Live-Daten',
    dataStatusCached: 'Lokale Daten',
  },
  es: {
    htmlLang: 'es',
    pageTitle: 'Calendario Mundial 2026',
    subtitle: 'Fase de grupos y cuadro eliminatorio',
    languageLabel: 'Idioma',
    groupStageTitle: 'Fase de grupos',
    knockoutTitle: 'Eliminatorias',
    dragTip: 'Arrastra izquierda/derecha para ver el cuadro completo',
    groupLabel: 'Grupo',
    scorePending: '-',
    datePending: 'Por definir',
    dataStatusLive: 'Datos en vivo',
    dataStatusCached: 'Datos locales',
  }
};

let scheduleData;
let currentLanguage = 'en';
let dataSource = 'cached';

const languageSelect = document.getElementById('language-select');
const groupStageContainer = document.getElementById('group-stage');
const knockoutStageContainer = document.getElementById('knockout-stage');
const matchTemplate = document.getElementById('match-template');
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  localStorage.setItem('theme', theme);
}

applyTheme(document.documentElement.dataset.theme || 'light');
themeToggle.addEventListener('click', () => {
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

function text(key) {
  return translations[currentLanguage][key] || translations.en[key] || '';
}

function formatDate(isoLike) {
  if (!isoLike) return text('datePending');
  const date = new Date(isoLike);
  if (Number.isNaN(date.getTime())) return isoLike;
  return new Intl.DateTimeFormat(translations[currentLanguage].htmlLang, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
}

function createMatchCard(match) {
  const card = matchTemplate.content.firstElementChild.cloneNode(true);
  card.querySelector('.match-date').textContent = formatDate(match.date);
  card.querySelector('.match-venue').textContent = match.venue || '';
  setTeamName(card.querySelector('.team-home'), match.homeTeam);
  setTeamName(card.querySelector('.team-away'), match.awayTeam);
  card.querySelector('.score-home').textContent = match.homeScore ?? text('scorePending');
  card.querySelector('.score-away').textContent = match.awayScore ?? text('scorePending');
  return card;
}

function renderGroupStage() {
  groupStageContainer.innerHTML = '';
  scheduleData.groupStage.forEach((group) => {
    const section = document.createElement('section');
    section.className = 'group';

    const title = document.createElement('h3');
    title.textContent = `${text('groupLabel')} ${group.group}`;

    const matchesWrapper = document.createElement('div');
    matchesWrapper.className = 'group-matches';
    group.matches.forEach((match) => {
      matchesWrapper.append(createMatchCard(match));
    });

    section.append(title, matchesWrapper);
    groupStageContainer.append(section);
  });
}

function renderKnockoutStage() {
  knockoutStageContainer.innerHTML = '';
  scheduleData.knockoutStage.forEach((round) => {
    const column = document.createElement('div');
    column.className = 'round';

    const title = document.createElement('h3');
    title.textContent = round.round;

    const slots = document.createElement('div');
    slots.className = 'bracket-slots';
    round.matches.forEach((match) => {
      const slot = document.createElement('div');
      slot.className = 'bracket-slot';
      slot.appendChild(createMatchCard(match));
      slots.appendChild(slot);
    });

    column.append(title, slots);
    knockoutStageContainer.appendChild(column);
  });
}

function applyTranslations() {
  document.documentElement.lang = translations[currentLanguage].htmlLang;
  document.getElementById('page-title').textContent = text('pageTitle');
  document.getElementById('page-subtitle').textContent = text('subtitle');
  document.getElementById('language-label').textContent = text('languageLabel');
  document.getElementById('group-stage-title').textContent = text('groupStageTitle');
  document.getElementById('knockout-title').textContent = text('knockoutTitle');
  document.getElementById('drag-tip').textContent = text('dragTip');
  const statusEl = document.getElementById('data-status');
  if (statusEl) {
    statusEl.textContent = text(dataSource === 'live' ? 'dataStatusLive' : 'dataStatusCached');
    statusEl.dataset.live = dataSource === 'live';
  }
}

function setupHorizontalDrag() {
  const scroller = document.getElementById('knockout-scroll');
  let startX = 0;
  let scrollLeft = 0;
  let dragging = false;

  scroller.addEventListener('pointerdown', (event) => {
    dragging = true;
    scroller.classList.add('dragging');
    startX = event.clientX;
    scrollLeft = scroller.scrollLeft;
    scroller.setPointerCapture(event.pointerId);
  });

  scroller.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    const delta = event.clientX - startX;
    scroller.scrollLeft = scrollLeft - delta;
  });

  const stopDrag = (event) => {
    dragging = false;
    scroller.classList.remove('dragging');
    if (event?.pointerId !== undefined && scroller.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }
  };

  scroller.addEventListener('pointerup', stopDrag);
  scroller.addEventListener('pointercancel', stopDrag);
  scroller.addEventListener('mouseleave', () => {
    dragging = false;
    scroller.classList.remove('dragging');
  });
}

function parseMatchDateTime(date, time) {
  if (!date) return null;
  if (!time) return `${date}T00:00:00Z`;
  const [timeStr, utcPart = 'UTC'] = time.split(' ');
  const [hours, minutes] = timeStr.split(':').map(Number);
  const offsetMatch = utcPart.match(/UTC([+-]\d+)/);
  const offsetHours = offsetMatch ? parseInt(offsetMatch[1], 10) : 0;
  const [year, month, day] = date.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day, hours - offsetHours, minutes)).toISOString();
}

function transformMatch(m) {
  const ft = m.score?.ft;
  return {
    date: parseMatchDateTime(m.date, m.time),
    venue: m.ground || '',
    homeTeam: m.team1 || '',
    awayTeam: m.team2 || '',
    homeScore: ft != null ? ft[0] : null,
    awayScore: ft != null ? ft[1] : null,
  };
}

function transformOpenFootballData(raw) {
  const matches = raw.matches || [];
  const groupMatches = matches.filter((m) => m.group);
  const knockoutMatches = matches.filter((m) => !m.group);

  const groupMap = {};
  groupMatches.forEach((m) => {
    if (!groupMap[m.group]) groupMap[m.group] = [];
    groupMap[m.group].push(transformMatch(m));
  });
  const groupStage = Object.keys(groupMap).sort().map((g) => ({ group: g, matches: groupMap[g] }));

  const roundOrder = [];
  const roundMap = {};
  knockoutMatches.forEach((m) => {
    if (!roundMap[m.round]) { roundMap[m.round] = []; roundOrder.push(m.round); }
    roundMap[m.round].push(transformMatch(m));
  });
  const knockoutStage = roundOrder.map((r) => ({ round: r, matches: roundMap[r] }));

  return { groupStage, knockoutStage };
}

async function loadSchedule() {
  try {
    const res = await fetch(
      'https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json',
      { cache: 'no-store' }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const raw = await res.json();
    scheduleData = transformOpenFootballData(raw);
    dataSource = 'live';
    return;
  } catch (err) {
    console.warn('Live data unavailable, using local data:', err.message);
  }

  const response = await fetch('data/schedule.json', { cache: 'no-store' });
  if (!response.ok) throw new Error(`Failed to load schedule: ${response.status}`);
  scheduleData = await response.json();
  dataSource = 'cached';
}

function renderPage() {
  applyTranslations();
  renderGroupStage();
  renderKnockoutStage();
}

async function init() {
  await loadSchedule();
  setupHorizontalDrag();
  renderPage();

  languageSelect.addEventListener('change', () => {
    currentLanguage = languageSelect.value;
    renderPage();
  });
}

init().catch((error) => {
  console.error(error);
  groupStageContainer.innerHTML = `<p>${error.message}</p>`;
});
