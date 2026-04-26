var app = getApp();
var td = require('../../utils/teamData');
var i18n = require('../../utils/i18n');

var LANG_LIST = [
  { label: 'English', value: 'en' },
  { label: '中文', value: 'zh' },
  { label: 'Français', value: 'fr' },
  { label: 'Deutsch', value: 'de' },
  { label: 'Español', value: 'es' },
];

Page({
  data: {
    loading: true,
    activeTab: 'group',
    groupStage: [],
    knockoutStage: [],
    t: i18n.translations.zh,
    languages: LANG_LIST,
    langIndex: 1,
    dataStatusText: '',
    dataStatusLive: false,
  },

  onLoad: function() {
    var lang = app.globalData.language;
    var idx = LANG_LIST.findIndex(function(l) { return l.value === lang; });
    this.setData({
      t: i18n.translations[lang] || i18n.translations.zh,
      langIndex: idx >= 0 ? idx : 1,
    });
    var self = this;
    app.onDataReady(function() { self._render(); });
  },

  _render: function() {
    var globalData = app.globalData;
    if (!globalData.scheduleData) return;
    var lang = globalData.language;
    var t = i18n.translations[lang] || i18n.translations.zh;
    var self = this;

    var groupStage = globalData.scheduleData.groupStage.map(function(g) {
      return {
        group: g.group,
        matches: g.matches.map(function(m) { return self._enrichMatch(m, lang, t); }),
      };
    });

    var knockoutStage = globalData.scheduleData.knockoutStage.map(function(r) {
      return {
        round: r.round,
        roundDisplay: td.getRoundName(r.round, lang),
        matches: r.matches.map(function(m, i, arr) {
          var enriched = self._enrichMatch(m, lang, t);
          enriched.slotClass = arr.length === 1 ? 'only' : (i % 2 === 0 ? 'odd' : 'even');
          return enriched;
        }),
      };
    });

    this.setData({
      loading: false,
      t: t,
      groupStage: groupStage,
      knockoutStage: knockoutStage,
      dataStatusText: globalData.dataSource === 'live' ? t.dataStatusLive : t.dataStatusCached,
      dataStatusLive: globalData.dataSource === 'live',
    });
  },

  _enrichMatch: function(m, lang, t) {
    var htmlLang = (i18n.translations[lang] && i18n.translations[lang].htmlLang) || 'en';
    var fmt = function(iso) {
      if (!iso) return t.datePending || 'TBD';
      var d = new Date(iso);
      if (isNaN(d.getTime())) return iso;
      try {
        return d.toLocaleString(htmlLang, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      } catch(e) { return d.toLocaleString(); }
    };
    var scoreVal = function(v) { return v !== null && v !== undefined ? String(v) : '-'; };
    return {
      dateFormatted: fmt(m.date),
      venue: m.venue || '',
      homeTeamDisplay: td.getTeamName(m.homeTeam, lang),
      awayTeamDisplay: td.getTeamName(m.awayTeam, lang),
      homeFlagUrl: td.getFlagUrl(m.homeTeam),
      awayFlagUrl: td.getFlagUrl(m.awayTeam),
      homeScore: scoreVal(m.homeScore),
      awayScore: scoreVal(m.awayScore),
    };
  },

  onTabSwitch: function(e) {
    this.setData({ activeTab: e.currentTarget.dataset.tab });
  },

  onLangChange: function(e) {
    var idx = e.detail.value;
    var lang = LANG_LIST[idx].value;
    app.globalData.language = lang;
    wx.setStorageSync('language', lang);
    var t = i18n.translations[lang] || i18n.translations.zh;
    this.setData({ langIndex: idx, t: t });
    this._render();
  },
});
