import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import champion from "../../champion";
import "./inGame.css";
import spells from "../../spells";
import styled from "styled-components";
class InGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			game: []
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
	}

	render() {
		const { game } = this.state;

		let champs = Object.values(champion.data);
		let spell = Object.values(spells.data);
		console.log(champs);
		console.log(game);
		let group1 = [];
		let group2 = [];

		function firstGroup() {
			if (game.participants) {
				group1 = game.participants.filter(function(entry) {
					return entry.teamId == 100;
				});
			}
		}
		function secondGroup() {
			if (game.participants) {
				group2 = game.participants.filter(function(entry) {
					return entry.teamId == 200;
				});
			}
		}

		firstGroup();
		secondGroup();
		console.log(group1);
		console.log(group2);
		return (
			<div>
				{/* <Wrapper> */}
				{/* {game.mapId === 11 ? "Map : Summoners Rift" : ""} */}
				<div key={group1.summonerName}>
					<h2>BLUE TEAM</h2>
					{group1 ? (
						group1.map(team => (
							<div key={team.summonerName}>
								{
									<Link to={`/account/${team.summonerName}`}>
										<p>{`summoner name: ${team.summonerName}`}</p>
									</Link>
								}
								<img
									className="iconpic"
									src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/profileicon/${
										team.profileIconId
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
							</div>
						))
					) : (
						<h1>Not in a match</h1>
					)}
				</div>
				<hr />
				<h2>RED TEAM</h2>
				<div key={group2.summonerName}>
					{group2 ? (
						group2.map(team => (
							<div key={team.summonerName}>
								{
									<Link to={`/account/${team.summonerName}`}>
										<p>{`summoner name: ${team.summonerName}`}</p>
									</Link>
								}
								<img
									className="iconpic"
									src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/profileicon/${
										team.profileIconId
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
							</div>
						))
					) : (
						<h1>Not in a match</h1>
					)}
				</div>
				{/* </Wrapper> */}
			</div>
		);
	}
}

export default InGame;
// const Wrapper = styled.section`
// 	display: flex;
// 	margin: auto;
// 	width: 1200px;
// 	height: 400px;
// 	border-radius: 10px;
// 	box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.2);
// `;
