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
    datePending: 'TBD'
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
    datePending: '待定'
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
    datePending: 'À définir'
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
    datePending: 'Offen'
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
    datePending: 'Por definir'
  }
};

let scheduleData;
let currentLanguage = 'en';

const languageSelect = document.getElementById('language-select');
const groupStageContainer = document.getElementById('group-stage');
const knockoutStageContainer = document.getElementById('knockout-stage');
const matchTemplate = document.getElementById('match-template');

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
  card.querySelector('.team-home').textContent = match.homeTeam;
  card.querySelector('.team-away').textContent = match.awayTeam;
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
    const column = document.createElement('section');
    column.className = 'round';

    const title = document.createElement('h3');
    title.textContent = round.round;

    column.append(title);
    round.matches.forEach((match) => {
      column.append(createMatchCard(match));
    });

    knockoutStageContainer.append(column);
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

async function loadSchedule() {
  const response = await fetch('data/schedule.json', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Failed to load schedule JSON: ${response.status}`);
  }
  scheduleData = await response.json();
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
