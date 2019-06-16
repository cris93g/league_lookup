const {
	getSummonerAccount,
	getCurrentMatch,
	getMatchHistory,
	getLeagueStatus,
	getSummonerInfo,
	getSummonerPicture,
	getSpecificMatch,
	getAllHistory
} = require("../controller/leagueAccountApiCtrl");

module.exports = app => {
	app.post(`/api/account`, getSummonerAccount);
	app.post(`/api/currentmatch`, getCurrentMatch);
	app.post(`/api/matchHistory`, getMatchHistory);
	app.get(`/api/leagueserver`, getLeagueStatus);
	app.post(`/api/account-info`, getSummonerInfo);
	app.post(`/api/picture`, getSummonerPicture);
	app.post(`/api/match`, getSpecificMatch);
	app.get(`/api/matches`, getAllHistory);
};
