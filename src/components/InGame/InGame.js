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
		return (
			<div>
				{/* <Wrapper> */}
				{/* {game.mapId === 11 ? "Map : Summoners Rift" : ""} */}
				<div key={game.gameId}>
					{this.state.game.participants ? (
						this.state.game.participants.map(team => (
							<div key={team.summonerName}>
								{team.teamId == 100 ? "blue Team" : "red team"}
								{team.teamId == 200 &&
								this.state.game.participants.length === 4 ? (
									<hr />
								) : (
									""
								)}
								{console.log(this.state.game.participants.length)}
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
