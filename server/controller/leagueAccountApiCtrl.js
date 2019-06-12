const axios = require("axios");
const { API } = process.env;

/* look up the person's account you want to find */
let getSummonerAccount = async (req, res) => {
  const results = await axios.get(
    `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/bloodstrive?api_key=${API}`
  );
  const info = results.data;
  if (info) {
    res.status(200).json(info);
  }
};
/* view person's current match team info */
let getCurrentMatch = async (req, res) => {
  const results = await axios.get(
    `https://na1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/vcFVWmx8n5couNoehhT712-nczaZ1w0qTe21Tf-_Id4RhDs?api_key=${API}`
  );

  const info = results.data;
  if (info) {
    res.status(200).json(info);
  }
};
/* view person's match history */
let getMatchHistory = async (req, res) => {
  const results = await axios.get(
    `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/mqTho7oMTYtM70XO0Rb6uvTRvIL-zf9-IKcN75BWck9MS1k?api_key=${API}`
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
module.exports = {
  getSummonerAccount,
  getCurrentMatch,
  getMatchHistory,
  getLeagueStatus
};
