import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import spells from "../../spells";
import champion from "../../champion";
import styled from "styled-components";
import "./specific.css";
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
					return entry.teamId === 100;
				});
			}
		}
		function secondGroup() {
			if (arr3) {
				group2 = arr3.filter(function(entry) {
					return entry.teamId === 200;
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
			<div className="specific">
				<Teams>
					<BlueTeam>
						<div>
							<PlayerWrapper>
								{groupOne
									? groupOne.map(team => (
											<div className="content">
												{champs.map(champ => {
													if (champ.key == team.championId) {
														return (
															<img
																className="profilepic"
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
																className="spellpic"
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
																className="spellpic"
																src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${
																	spel.id
																}.png`}
															/>
														);
													}
												})}
												<Info>
													<Link to={`/account/${team.player.summonerName}`}>
														<p>{team.player.summonerName}</p>
													</Link>
													<p>{`KDA:${team.stats.kills}/${team.stats.deaths}/${
														team.stats.assists
													}`}</p>
													<p>{`cs:${team.stats.totalMinionsKilled}`}</p>
													<p>{`lv:${team.stats.champLevel}`}</p>
												</Info>
												<p>{team.stats.win == true ? "WIN" : "LOOSE"}</p>
												<hr />
											</div>
									  ))
									: ""}
							</PlayerWrapper>
						</div>
					</BlueTeam>
					<hr />
					<RedTeam>
						<div>
							<PlayerWrapper>
								{groupOne
									? groupTwo.map(team => (
											<div className="content">
												{champs.map(champ => {
													if (champ.key == team.championId) {
														return (
															<img
																className="profilepic"
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
																className="spellpic"
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
																className="spellpic"
																src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${
																	spel.id
																}.png`}
															/>
														);
													}
												})}
												<Info>
													<Link to={`/account/${team.player.summonerName}`}>
														<p>{team.player.summonerName}</p>
													</Link>

													<p>{`KDA:${team.stats.kills}/${team.stats.deaths}/${
														team.stats.assists
													}`}</p>
													<p>{`cs:${team.stats.totalMinionsKilled}`}</p>
													<p>{`lv:${team.stats.champLevel}`}</p>
												</Info>
												<p>{team.stats.win == true ? "WIN" : "LOOSE"}</p>
												<hr />
											</div>
									  ))
									: ""}
							</PlayerWrapper>
						</div>
					</RedTeam>
				</Teams>
			</div>
		);
	}
}
export default SpecificGame;
const Teams = styled.section`
	display: flex;
	margin: auto;
	width: 80vw;
	height: 60vh;
	/* margin-top: 10px; */
	border-radius: 10px;
	box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.2);
	align-items: center;
	align-content: center;
`;

const BlueTeam = styled.section`
	height: 100%;
	width: 50%;
	background-color: #3895d3;
`;
const RedTeam = styled.section`
	height: 100%;
	width: 50%;
	border-left: 1px solid black;
	background-color: red;
`;

const PlayerWrapper = styled.div`
	height: 30%;
	width: 100%;
`;
const Info = styled.div`
	display: flex;
	justify-content: space-around;
`;
