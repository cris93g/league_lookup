const axios = require("axios");
const { API } = process.env;

/* look up the person's account you want to find */
let getSummonerAccount = async (req, res) => {
	let { name } = req.body;
	let results = await axios.get(
		`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API}`
	);
	let accid = results.data.id;

	let res2 = await axios.get(
		`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${accid}?api_key=${API}`
	);

	let info = res2.data;
	if (info) {
		res.status(200).json(info);
	}
};

let getSummonerPicture = async (req, res) => {
	let { name } = req.body;
	let results = await axios.get(
		`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API}`
	);
	const info = results.data;
	if (info) {
		res.status(200).json(info);
	}
};
/* view account info */
let getSummonerInfo = async (req, res) => {
	const { id } = req.body;
	const results = await axios.get(
		`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${API}`
	);
	const info = results.data;
	if (info) {
		res.status(200).json(info);
	}
};

/* view person's current match team info */
let getCurrentMatch = async (req, res) => {
	const { id } = req.body;
	const results = await axios.get(
		`https://na1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${id}?api_key=${API}`
	);

	const info = results.data;
	if (info) {
		res.status(200).json(info);
	}
};
/* view person's match history */
let getMatchHistory = async (req, res) => {
	const { accountId } = req.body;
	const results = await axios.get(
		`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${API}&endIndex=25`
	);
	const info = results.data;
	if (info) {
		res.status(200).json(info);
	}
};

let getAll = async (req, res) => {
	const results = await axios.get(
		`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/mqTho7oMTYtM70XO0Rb6uvTRvIL-zf9-IKcN75BWck9MS1k?api_key=RGAPI-7ff92558-f751-4af6-8a0f-d805c684d778&endIndex=3`
	);
	const info = results.data;
	console.log(info);
};

let getSpecificMatch = async (req, res) => {
	const { matchId } = req.body;
	const results = await axios.get(
		`https://na1.api.riotgames.com/lol/match/v4/matches/${matchId}?api_key=${API}`
	);
	const info = results.data;
	if (info) {
		res.status(200).json(info);
	}
};

let getChampionMastery = async (req, res) => {
	const { id } = req.body;
	const results = await axios.get(
		`https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${API}`
	);
	const info = results.data;
	if (info) {
		res.status(200).json(info);
	}
};

/* view league server status and issues */
let getLeagueStatus = async (req, res) => {
	const results = await axios.get(
		`https://na1.api.riotgames.com/lol/status/v3/shard-data?api_key=${API}`
	);
	const info = results.data;
	if (info) {
		res.status(200).json(info);
	}
};

let getChampionRotation = async (req, res) => {
	const results = await axios.get(
		`https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API}`
	);
	const info = results.data;
	if (info) {
		res.status(200).json(info);
	}
};

let getTopOfLeague = async (req, res) => {
	const results = await axios.get(
		`https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${API}`
	);
	const info = results.data;
	if (info) {
		res.status(200).json(info);
	}
};

module.exports = {
	getSummonerAccount,
	getCurrentMatch,
	getMatchHistory,
	getLeagueStatus,
	getSummonerInfo,
	getSummonerPicture,
	getSpecificMatch,
	getChampionMastery,
	getChampionRotation,
	getTopOfLeague,
	getAll
};
