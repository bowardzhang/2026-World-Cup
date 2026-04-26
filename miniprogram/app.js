const teamData = require('./utils/teamData');

function detectSystemLang() {
  try {
    var sysLang = (wx.getSystemInfoSync().language || '').toLowerCase();
    if (sysLang.indexOf('zh') === 0) return 'zh';
    if (sysLang.indexOf('fr') === 0) return 'fr';
    if (sysLang.indexOf('de') === 0) return 'de';
    if (sysLang.indexOf('es') === 0) return 'es';
    return 'en';
  } catch(e) {
    return 'en';
  }
}

App({
  globalData: {
    scheduleData: null,
    language: '',
    dataSource: 'loading',
    _readyCallbacks: [],
  },

  onLaunch() {
    var savedLang = wx.getStorageSync('language');
    this.globalData.language = savedLang || detectSystemLang();
    this._fetchLiveData();
  },

  onDataReady(cb) {
    if (this.globalData.scheduleData) {
      cb();
    } else {
      this.globalData._readyCallbacks.push(cb);
    }
  },

  _notifyReady() {
    this.globalData._readyCallbacks.forEach(cb => cb());
    this.globalData._readyCallbacks = [];
  },

  _fetchLiveData() {
    wx.request({
      url: 'https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json',
      success: (res) => {
        if (res.statusCode === 200 && res.data) {
          this.globalData.scheduleData = teamData.transformOpenFootballData(res.data);
          this.globalData.dataSource = 'live';
        } else {
          this._loadLocalData();
        }
        this._notifyReady();
      },
      fail: () => {
        this._loadLocalData();
        this._notifyReady();
      },
    });
  },

  _loadLocalData() {
    try {
      this.globalData.scheduleData = require('./data/schedule.json');
    } catch (e) {
      this.globalData.scheduleData = { groupStage: [], knockoutStage: [] };
    }
    this.globalData.dataSource = 'cached';
  },
});
