const {
	getSummonerAccount,
	getCurrentMatch,
	getMatchHistory,
	getLeagueStatus,
	getSummonerInfo
} = require("../controller/leagueAccountApiCtrl");

module.exports = app => {
	app.post(`/api/account`, getSummonerAccount);
	app.post(`/api/currentmatch`, getCurrentMatch);
	app.post(`/api/matchHistory`, getMatchHistory);
	app.get(`/api/leagueserver`, getLeagueStatus);
	app.post(`/api/account-info`, getSummonerInfo);
};
