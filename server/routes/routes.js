const {
  getSummonerAccount,
  getCurrentMatch,
  getMatchHistory,
  getLeagueStatus
} = require("../controller/leagueAccountApiCtrl");

module.exports = app => {
  app.get(`/api/account`, getSummonerAccount);
  app.post(`/api/currentmatch`, getCurrentMatch);
  app.post(`/api/matchHistory`, getMatchHistory);
  app.get(`/api/leagueserver`, getLeagueStatus);
};
