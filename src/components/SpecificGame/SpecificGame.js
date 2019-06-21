import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import spells from "../../spells";
import champion from "../../champion";
class SpecificGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			game: [],
			welp: []
		};
	}
	componentDidMount() {
		axios
			.post(`/api/match`, {
				matchId: this.props.match.params.gameId
			})
			.then(response => {
				this.setState({ game: response.data });
			});
	}

	render() {
		let { game } = this.state;
		let spell = Object.values(spells.data);
		let champs = Object.values(champion.data);
		console.log(game);
		let arr3 = [];
		let group1 = [];
		let group2 = [];
		let groupOne = [];
		let groupTwo = [];
		function firstGroup() {
			if (arr3) {
				group1 = arr3.filter(function(entry) {
					return entry.teamId == 100;
				});
			}
		}
		function secondGroup() {
			if (arr3) {
				group2 = arr3.filter(function(entry) {
					return entry.teamId == 200;
				});
			}
		}

		function combineArr() {
			if (game.participantIdentities) {
				game.participantIdentities.forEach((itm, i) => {
					arr3.push(Object.assign({}, itm, game.participants[i]));
				});
			}
		}
		function combineGroupOne() {
			if (group1) {
				group1.forEach((itm, i) => {
					groupOne.push(Object.assign({}, itm, game.teams[i]));
				});
			}
		}

		function combineGroupTwo() {
			if (group2) {
				group2.forEach((itm, i) => {
					groupTwo.push(Object.assign({}, itm, game.teams[i]));
				});
			}
		}

		combineArr();
		firstGroup();
		secondGroup();
		combineGroupOne();
		combineGroupTwo();
		console.log(game);
		console.log(arr3);
		console.log(group1);
		console.log(group2);
		console.log(groupOne);
		console.log(groupTwo);
		return (
			<div>
				<div>
					{groupOne
						? groupOne.map(team => (
								<div>
									<Link to={`/account/${team.player.summonerName}`}>
									<p>{team.player.summonerName}</p></Link>
									<img
										className="iconpic"
										src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/profileicon/${
											team.player.profileIcon
										}.png`}
									/>
									{champs.map(champ => {
										if (champ.key == team.championId) {
											return (
												<img
													className="iconpic"
													src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${
														champ.id
													}.png`}
												/>
											);
										}
									})}
									{spell.map(spel => {
										if (spel.key == team.spell1Id) {
											return (
												<img
													className="iconpic"
													src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${
														spel.id
													}.png`}
												/>
											);
										}
									})}
									{spell.map(spel => {
										if (spel.key == team.spell2Id) {
											return (
												<img
													className="iconpic"
													src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${
														spel.id
													}.png`}
												/>
											);
										}
									})}

									<p>{`assist :${team.stats.assists}`}</p>
									<p>{`champ level :${team.stats.champLevel}`}</p>
									<p>{`damage dealt to obj :${
										team.stats.damageDealtToObjectives
									}`}</p>
									<p>{`damage dealt to turrents :${
										team.stats.damageDealtToTurrets
									}`}</p>
									<p>{`damage self mitigated :${
										team.stats.damageSelfMitigated
									}`}</p>
									<p>{`deaths :${team.stats.deaths}`}</p>
									<p>{`double kills :${team.stats.doubleKills}`}</p>
									<p>{`first blood assist :${team.stats.firstBloodAssist}`}</p>
									<p>{`first blood kills :${team.stats.firstBloodKill}`}</p>
									<p>{`first inhibitor kill :${
										team.stats.firstInhibitorKill
									}`}</p>
									<p>{`first tower kills :${team.stats.firstTowerKill}`}</p>
									<p>{`gold earned :${team.stats.goldEarned}`}</p>
									<p>{`gold spent :${team.stats.goldSpent}`}</p>
									<p>{`inhibitor kills :${team.stats.inhibitorKills}`}</p>
								</div>
						  ))
						: ""}
				</div>
				<hr />
				<div>
					{groupOne
						? groupTwo.map(team => (
								<div>
									<Link to={`/account/${team.player.summonerName}`}>
									<p>{team.player.summonerName}</p></Link>
									<img
										className="iconpic"
										src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/profileicon/${
											team.player.profileIcon
										}.png`}
									/>
									{champs.map(champ => {
										if (champ.key == team.championId) {
											return (
												<img
													className="iconpic"
													src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${
														champ.id
													}.png`}
												/>
											);
										}
									})}
									{spell.map(spel => {
										if (spel.key == team.spell1Id) {
											return (
												<img
													className="iconpic"
													src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${
														spel.id
													}.png`}
												/>
											);
										}
									})}
									{spell.map(spel => {
										if (spel.key == team.spell2Id) {
											return (
												<img
													className="iconpic"
													src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${
														spel.id
													}.png`}
												/>
											);
										}
									})}
									<p>{`assist :${team.stats.assists}`}</p>
									<p>{`champ level :${team.stats.champLevel}`}</p>
									<p>{`damage dealt to obj :${
										team.stats.damageDealtToObjectives
									}`}</p>
									<p>{`damage dealt to turrents :${
										team.stats.damageDealtToTurrets
									}`}</p>
									<p>{`damage self mitigated :${
										team.stats.damageSelfMitigated
									}`}</p>
									<p>{`deaths :${team.stats.deaths}`}</p>
									<p>{`double kills :${team.stats.doubleKills}`}</p>
									<p>{`first blood assist :${team.stats.firstBloodAssist}`}</p>
									<p>{`first blood kills :${team.stats.firstBloodKill}`}</p>
									<p>{`first inhibitor kill :${
										team.stats.firstInhibitorKill
									}`}</p>
									<p>{`first tower kills :${team.stats.firstTowerKill}`}</p>
									<p>{`gold earned :${team.stats.goldEarned}`}</p>
									<p>{`gold spent :${team.stats.goldSpent}`}</p>
									<p>{`inhibitor kills :${team.stats.inhibitorKills}`}</p>
								</div>
						  ))
						: ""}
				</div>
			</div>
		);
	}
}
export default SpecificGame;
