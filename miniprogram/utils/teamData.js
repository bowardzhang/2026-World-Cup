var TEAM_CODES = {
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

var TEAM_TRANSLATIONS = {
  'Mexico':                   { zh: '墨西哥',         fr: 'Mexique',              de: 'Mexiko',                   es: 'México' },
  'Canada':                   { zh: '加拿大',          fr: 'Canada',               de: 'Kanada',                   es: 'Canadá' },
  'USA':                      { zh: '美国',            fr: 'États-Unis',           de: 'USA',                      es: 'EE. UU.' },
  'Argentina':                { zh: '阿根廷',          fr: 'Argentine',            de: 'Argentinien',              es: 'Argentina' },
  'Brazil':                   { zh: '巴西',            fr: 'Brésil',               de: 'Brasilien',                es: 'Brasil' },
  'Uruguay':                  { zh: '乌拉圭',          fr: 'Uruguay',              de: 'Uruguay',                  es: 'Uruguay' },
  'Colombia':                 { zh: '哥伦比亚',        fr: 'Colombie',             de: 'Kolumbien',                es: 'Colombia' },
  'Ecuador':                  { zh: '厄瓜多尔',        fr: 'Équateur',             de: 'Ecuador',                  es: 'Ecuador' },
  'Chile':                    { zh: '智利',            fr: 'Chili',                de: 'Chile',                    es: 'Chile' },
  'Peru':                     { zh: '秘鲁',            fr: 'Pérou',                de: 'Peru',                     es: 'Perú' },
  'Venezuela':                { zh: '委内瑞拉',        fr: 'Venezuela',            de: 'Venezuela',                es: 'Venezuela' },
  'Bolivia':                  { zh: '玻利维亚',        fr: 'Bolivie',              de: 'Bolivien',                 es: 'Bolivia' },
  'Paraguay':                 { zh: '巴拉圭',          fr: 'Paraguay',             de: 'Paraguay',                 es: 'Paraguay' },
  'Germany':                  { zh: '德国',            fr: 'Allemagne',            de: 'Deutschland',              es: 'Alemania' },
  'Spain':                    { zh: '西班牙',          fr: 'Espagne',              de: 'Spanien',                  es: 'España' },
  'France':                   { zh: '法国',            fr: 'France',               de: 'Frankreich',               es: 'Francia' },
  'England':                  { zh: '英格兰',          fr: 'Angleterre',           de: 'England',                  es: 'Inglaterra' },
  'Portugal':                 { zh: '葡萄牙',          fr: 'Portugal',             de: 'Portugal',                 es: 'Portugal' },
  'Netherlands':              { zh: '荷兰',            fr: 'Pays-Bas',             de: 'Niederlande',              es: 'Países Bajos' },
  'Belgium':                  { zh: '比利时',          fr: 'Belgique',             de: 'Belgien',                  es: 'Bélgica' },
  'Italy':                    { zh: '意大利',          fr: 'Italie',               de: 'Italien',                  es: 'Italia' },
  'Croatia':                  { zh: '克罗地亚',        fr: 'Croatie',              de: 'Kroatien',                 es: 'Croacia' },
  'Switzerland':              { zh: '瑞士',            fr: 'Suisse',               de: 'Schweiz',                  es: 'Suiza' },
  'Austria':                  { zh: '奥地利',          fr: 'Autriche',             de: 'Österreich',               es: 'Austria' },
  'Denmark':                  { zh: '丹麦',            fr: 'Danemark',             de: 'Dänemark',                 es: 'Dinamarca' },
  'Sweden':                   { zh: '瑞典',            fr: 'Suède',                de: 'Schweden',                 es: 'Suecia' },
  'Norway':                   { zh: '挪威',            fr: 'Norvège',              de: 'Norwegen',                 es: 'Noruega' },
  'Poland':                   { zh: '波兰',            fr: 'Pologne',              de: 'Polen',                    es: 'Polonia' },
  'Serbia':                   { zh: '塞尔维亚',        fr: 'Serbie',               de: 'Serbien',                  es: 'Serbia' },
  'Hungary':                  { zh: '匈牙利',          fr: 'Hongrie',              de: 'Ungarn',                   es: 'Hungría' },
  'Romania':                  { zh: '罗马尼亚',        fr: 'Roumanie',             de: 'Rumänien',                 es: 'Rumanía' },
  'Turkey':                   { zh: '土耳其',          fr: 'Turquie',              de: 'Türkei',                   es: 'Turquía' },
  'Greece':                   { zh: '希腊',            fr: 'Grèce',                de: 'Griechenland',             es: 'Grecia' },
  'Czech Republic':           { zh: '捷克',            fr: 'Tchéquie',             de: 'Tschechien',               es: 'República Checa' },
  'Czechia':                  { zh: '捷克',            fr: 'Tchéquie',             de: 'Tschechien',               es: 'República Checa' },
  'Slovakia':                 { zh: '斯洛伐克',        fr: 'Slovaquie',            de: 'Slowakei',                 es: 'Eslovaquia' },
  'Albania':                  { zh: '阿尔巴尼亚',      fr: 'Albanie',              de: 'Albanien',                 es: 'Albania' },
  'Scotland':                 { zh: '苏格兰',          fr: 'Écosse',               de: 'Schottland',               es: 'Escocia' },
  'Wales':                    { zh: '威尔士',          fr: 'Pays de Galles',       de: 'Wales',                    es: 'Gales' },
  'Ukraine':                  { zh: '乌克兰',          fr: 'Ukraine',              de: 'Ukraine',                  es: 'Ucrania' },
  'Slovenia':                 { zh: '斯洛文尼亚',      fr: 'Slovénie',             de: 'Slowenien',                es: 'Eslovenia' },
  'Kosovo':                   { zh: '科索沃',          fr: 'Kosovo',               de: 'Kosovo',                   es: 'Kosovo' },
  'Georgia':                  { zh: '格鲁吉亚',        fr: 'Géorgie',              de: 'Georgien',                 es: 'Georgia' },
  'Bosnia and Herzegovina':   { zh: '波黑',            fr: 'Bosnie-Herzégovine',   de: 'Bosnien-Herzegowina',      es: 'Bosnia y Herzegovina' },
  'Bosnia & Herzegovina':     { zh: '波黑',            fr: 'Bosnie-Herzégovine',   de: 'Bosnien-Herzegowina',      es: 'Bosnia y Herzegovina' },
  'Japan':                    { zh: '日本',            fr: 'Japon',                de: 'Japan',                    es: 'Japón' },
  'South Korea':              { zh: '韩国',            fr: 'Corée du Sud',         de: 'Südkorea',                 es: 'Corea del Sur' },
  'Korea Republic':           { zh: '韩国',            fr: 'Corée du Sud',         de: 'Südkorea',                 es: 'Corea del Sur' },
  'Australia':                { zh: '澳大利亚',        fr: 'Australie',            de: 'Australien',               es: 'Australia' },
  'Iran':                     { zh: '伊朗',            fr: 'Iran',                 de: 'Iran',                     es: 'Irán' },
  'Saudi Arabia':             { zh: '沙特阿拉伯',      fr: 'Arabie saoudite',      de: 'Saudi-Arabien',            es: 'Arabia Saudita' },
  'Jordan':                   { zh: '约旦',            fr: 'Jordanie',             de: 'Jordanien',                es: 'Jordania' },
  'Iraq':                     { zh: '伊拉克',          fr: 'Irak',                 de: 'Irak',                     es: 'Irak' },
  'Uzbekistan':               { zh: '乌兹别克斯坦',    fr: 'Ouzbékistan',          de: 'Usbekistan',               es: 'Uzbekistán' },
  'China':                    { zh: '中国',            fr: 'Chine',                de: 'China',                    es: 'China' },
  'Indonesia':                { zh: '印度尼西亚',      fr: 'Indonésie',            de: 'Indonesien',               es: 'Indonesia' },
  'Oman':                     { zh: '阿曼',            fr: 'Oman',                 de: 'Oman',                     es: 'Omán' },
  'UAE':                      { zh: '阿联酋',          fr: 'Émirats arabes unis',  de: 'Vereinigte Arab. Emirate', es: 'Emiratos Árabes Unidos' },
  'Bahrain':                  { zh: '巴林',            fr: 'Bahreïn',              de: 'Bahrain',                  es: 'Baréin' },
  'Qatar':                    { zh: '卡塔尔',          fr: 'Qatar',                de: 'Katar',                    es: 'Catar' },
  'Syria':                    { zh: '叙利亚',          fr: 'Syrie',                de: 'Syrien',                   es: 'Siria' },
  'Kuwait':                   { zh: '科威特',          fr: 'Koweït',               de: 'Kuwait',                   es: 'Kuwait' },
  'Morocco':                  { zh: '摩洛哥',          fr: 'Maroc',                de: 'Marokko',                  es: 'Marruecos' },
  'Senegal':                  { zh: '塞内加尔',        fr: 'Sénégal',              de: 'Senegal',                  es: 'Senegal' },
  'Nigeria':                  { zh: '尼日利亚',        fr: 'Nigeria',              de: 'Nigeria',                  es: 'Nigeria' },
  'Egypt':                    { zh: '埃及',            fr: 'Égypte',               de: 'Ägypten',                  es: 'Egipto' },
  'Cameroon':                 { zh: '喀麦隆',          fr: 'Cameroun',             de: 'Kamerun',                  es: 'Camerún' },
  'Ghana':                    { zh: '加纳',            fr: 'Ghana',                de: 'Ghana',                    es: 'Ghana' },
  'Tunisia':                  { zh: '突尼斯',          fr: 'Tunisie',              de: 'Tunesien',                 es: 'Túnez' },
  'Algeria':                  { zh: '阿尔及利亚',      fr: 'Algérie',              de: 'Algerien',                 es: 'Argelia' },
  'Mali':                     { zh: '马里',            fr: 'Mali',                 de: 'Mali',                     es: 'Malí' },
  'South Africa':             { zh: '南非',            fr: 'Afrique du Sud',       de: 'Südafrika',                es: 'Sudáfrica' },
  'Cape Verde':               { zh: '佛得角',          fr: 'Cap-Vert',             de: 'Kap Verde',                es: 'Cabo Verde' },
  'Cabo Verde':               { zh: '佛得角',          fr: 'Cap-Vert',             de: 'Kap Verde',                es: 'Cabo Verde' },
  'DR Congo':                 { zh: '刚果民主共和国',  fr: 'RD Congo',             de: 'DR Kongo',                 es: 'RD Congo' },
  'Congo DR':                 { zh: '刚果民主共和国',  fr: 'RD Congo',             de: 'DR Kongo',                 es: 'RD Congo' },
  "Côte d'Ivoire":            { zh: '科特迪瓦',        fr: "Côte d'Ivoire",        de: 'Elfenbeinküste',           es: 'Costa de Marfil' },
  'Ivory Coast':              { zh: '科特迪瓦',        fr: "Côte d'Ivoire",        de: 'Elfenbeinküste',           es: 'Costa de Marfil' },
  'Costa Rica':               { zh: '哥斯达黎加',      fr: 'Costa Rica',           de: 'Costa Rica',               es: 'Costa Rica' },
  'Panama':                   { zh: '巴拿马',          fr: 'Panama',               de: 'Panama',                   es: 'Panamá' },
  'Honduras':                 { zh: '洪都拉斯',        fr: 'Honduras',             de: 'Honduras',                 es: 'Honduras' },
  'Jamaica':                  { zh: '牙买加',          fr: 'Jamaïque',             de: 'Jamaika',                  es: 'Jamaica' },
  'El Salvador':              { zh: '萨尔瓦多',        fr: 'Salvador',             de: 'El Salvador',              es: 'El Salvador' },
  'Guatemala':                { zh: '危地马拉',        fr: 'Guatemala',            de: 'Guatemala',                es: 'Guatemala' },
  'Cuba':                     { zh: '古巴',            fr: 'Cuba',                 de: 'Kuba',                     es: 'Cuba' },
  'Trinidad and Tobago':      { zh: '特立尼达和多巴哥',fr: 'Trinité-et-Tobago',    de: 'Trinidad und Tobago',      es: 'Trinidad y Tobago' },
  'Haiti':                    { zh: '海地',            fr: 'Haïti',                de: 'Haiti',                    es: 'Haití' },
  'Curaçao':                  { zh: '库拉索',          fr: 'Curaçao',              de: 'Curaçao',                  es: 'Curazao' },
  'Curacao':                  { zh: '库拉索',          fr: 'Curaçao',              de: 'Curaçao',                  es: 'Curazao' },
  'New Zealand':              { zh: '新西兰',          fr: 'Nouvelle-Zélande',     de: 'Neuseeland',               es: 'Nueva Zelanda' },
  'Fiji':                     { zh: '斐济',            fr: 'Fidji',                de: 'Fidschi',                  es: 'Fiyi' },
};

var ROUND_TRANSLATIONS = {
  zh: {
    'Round of 32': '32强赛', 'Round of 16': '16强赛',
    'Quarter-final': '四分之一决赛', 'Quarter-finals': '四分之一决赛',
    'Semi-final': '半决赛', 'Semi-finals': '半决赛',
    'Third place': '季军赛', 'Third Place': '季军赛', 'Third-place play-off': '季军赛',
    'Final': '决赛',
  },
  fr: {
    'Round of 32': '32e de finale', 'Round of 16': '16e de finale',
    'Quarter-final': 'Quart de finale', 'Quarter-finals': 'Quarts de finale',
    'Semi-final': 'Demi-finale', 'Semi-finals': 'Demi-finales',
    'Third place': 'Match pour la 3e place', 'Third Place': 'Match pour la 3e place', 'Third-place play-off': 'Match pour la 3e place',
    'Final': 'Finale',
  },
  de: {
    'Round of 32': 'Runde der 32', 'Round of 16': 'Achtelfinale',
    'Quarter-final': 'Viertelfinale', 'Quarter-finals': 'Viertelfinale',
    'Semi-final': 'Halbfinale', 'Semi-finals': 'Halbfinale',
    'Third place': 'Spiel um Platz 3', 'Third Place': 'Spiel um Platz 3', 'Third-place play-off': 'Spiel um Platz 3',
    'Final': 'Finale',
  },
  es: {
    'Round of 32': 'Ronda de 32', 'Round of 16': 'Octavos de final',
    'Quarter-final': 'Cuartos de final', 'Quarter-finals': 'Cuartos de final',
    'Semi-final': 'Semifinal', 'Semi-finals': 'Semifinales',
    'Third place': 'Tercer puesto', 'Third Place': 'Tercer puesto', 'Third-place play-off': 'Tercer puesto',
    'Final': 'Final',
  },
};

function getTeamName(name, lang) {
  return (lang !== 'en' && TEAM_TRANSLATIONS[name] && TEAM_TRANSLATIONS[name][lang]) || name;
}

function getFlagUrl(name) {
  var code = TEAM_CODES[name];
  return code ? 'https://flagcdn.com/w40/' + code + '.png' : '';
}

function getRoundName(roundName, lang) {
  return (lang !== 'en' && ROUND_TRANSLATIONS[lang] && ROUND_TRANSLATIONS[lang][roundName]) || roundName;
}

function parseMatchDateTime(date, time) {
  if (!date) return null;
  if (!time) return date + 'T00:00:00Z';
  var parts = time.split(' ');
  var timeStr = parts[0];
  var utcPart = parts[1] || 'UTC';
  var timeParts = timeStr.split(':');
  var hours = parseInt(timeParts[0], 10);
  var minutes = parseInt(timeParts[1], 10);
  var offsetMatch = utcPart.match(/UTC([+-]\d+)/);
  var offsetHours = offsetMatch ? parseInt(offsetMatch[1], 10) : 0;
  var dateParts = date.split('-');
  var year = parseInt(dateParts[0], 10);
  var month = parseInt(dateParts[1], 10);
  var day = parseInt(dateParts[2], 10);
  return new Date(Date.UTC(year, month - 1, day, hours - offsetHours, minutes)).toISOString();
}

function transformMatch(m) {
  var ft = m.score && m.score.ft;
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
  var matches = raw.matches || [];
  var groupMatches = matches.filter(function(m) { return m.group; });
  var knockoutMatches = matches.filter(function(m) { return !m.group; });

  var groupMap = {};
  groupMatches.forEach(function(m) {
    if (!groupMap[m.group]) groupMap[m.group] = [];
    groupMap[m.group].push(transformMatch(m));
  });
  var groupStage = Object.keys(groupMap).sort().map(function(g) {
    return { group: g, matches: groupMap[g] };
  });

  var roundOrder = [];
  var roundMap = {};
  knockoutMatches.forEach(function(m) {
    if (!roundMap[m.round]) { roundMap[m.round] = []; roundOrder.push(m.round); }
    roundMap[m.round].push(transformMatch(m));
  });
  var knockoutStage = roundOrder.map(function(r) {
    return { round: r, matches: roundMap[r] };
  });

  return { groupStage: groupStage, knockoutStage: knockoutStage };
}

module.exports = { TEAM_CODES: TEAM_CODES, TEAM_TRANSLATIONS: TEAM_TRANSLATIONS, ROUND_TRANSLATIONS: ROUND_TRANSLATIONS, getTeamName: getTeamName, getFlagUrl: getFlagUrl, getRoundName: getRoundName, transformOpenFootballData: transformOpenFootballData };
