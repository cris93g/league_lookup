import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import champion from "../../champion";
import "./inGame.css";
import spells from "../../spells";
import styled from "styled-components";
import perks from "../../perks";

class InGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			game: [],
			account: []
		};
	}
	componentDidMount() {
		axios
			.post(`/api/currentmatch`, {
				id: this.props.match.params.id
			})
			.then(response => {
				this.setState({ game: response.data });
			});

		axios
			.post(`/api/account`, {
				name: this.props.match.params.name
			})
			.then(response => {
				this.setState({ account: response.data });
			});
	}

	render() {
		const { game } = this.state;

		let champs = Object.values(champion.data);
		let spell = Object.values(spells.data);
		let group1 = [];
		let group2 = [];

		function firstGroup() {
			if (game.participants) {
				group1 = game.participants.filter(function(entry) {
					return entry.teamId === 100;
				});
			}
		}
		function secondGroup() {
			if (game.participants) {
				group2 = game.participants.filter(function(entry) {
					return entry.teamId === 200;
				});
			}
		}

		firstGroup();
		secondGroup();
		console.log(group1);
		console.log(group2);

		return (
			<div className="specific">
				<Teams>
					<BlueTeam>
						<div key={group1.summonerName}>
							<PlayerWrapper>
								{group1 ? (
									group1.map(team => (
										<div className="content" key={team.summonerName}>
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
											<div>
												{perks.map(perk => {
													if (perk.id == team.perks.perkStyle) {
														return (
															<img
																className="perkpic"
																src={`http://ddragonexplorer.com/cdn/img/${
																	perk.icon
																}`}
															/>
														);
													}
												})}
												<br />
												{perks.map(perk => {
													if (perk.id === team.perks.perkSubStyle) {
														return (
															<div>
																<img
																	className="perkpic"
																	src={`http://ddragonexplorer.com/cdn/img/${
																		perk.icon
																	}`}
																/>
															</div>
														);
													}
												})}
											</div>
											{
												<Link to={`/account/${team.summonerName}`}>
													<p>{`${team.summonerName}`}</p>
												</Link>
											}
											<hr />
										</div>
									))
								) : (
									<h1>Not in a match</h1>
								)}
							</PlayerWrapper>
						</div>
					</BlueTeam>
					<hr />
					<RedTeam>
						<div key={group2.summonerName}>
							<PlayerWrapper>
								{group2 ? (
									group2.map(team => (
										<div className="content" key={team.summonerName}>
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
											<div>
												{perks.map(perk => {
													if (perk.id == team.perks.perkStyle) {
														return (
															<img
																className="perkpic"
																src={`http://ddragonexplorer.com/cdn/img/${
																	perk.icon
																}`}
															/>
														);
													}
												})}
												<br />
												{perks.map(perk => {
													if (perk.id === team.perks.perkSubStyle) {
														return (
															<div>
																<img
																	className="perkpic"
																	src={`http://ddragonexplorer.com/cdn/img/${
																		perk.icon
																	}`}
																/>
															</div>
														);
													}
												})}
											</div>
											{
												<Link to={`/account/${team.summonerName}`}>
													<p>{`${team.summonerName}`}</p>
												</Link>
											}
											<hr />
										</div>
									))
								) : (
									<h1>Not in a match</h1>
								)}
							</PlayerWrapper>
						</div>
					</RedTeam>
				</Teams>
			</div>
		);
	}
}

export default InGame;
const Teams = styled.section`
	display: flex;
	margin: auto;
	width: 80vw;
	height: 75vh;
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
	height: 20%;
	width: 100%;
`;
const Info = styled.div`
	display: flex;
	justify-content: space-around;
`;
