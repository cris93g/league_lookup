import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import champion from "../../champion";
import "./inGame.css";
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
		console.log(champs);
		console.log(game);
		return (
			<div>
				{game.mapId === 11 ? "Map : Summoners Rift" : ""}
				<div key={game.gameId}>
					{this.state.game.participants ? (
						this.state.game.participants.map(team => (
							<div key={team.summonerName}>
								<img
									className="iconpic"
									src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/profileicon/${
										team.profileIconId
									}.png`}
								/>

								{
									<Link to={`/account/${team.summonerName}`}>
										<p>{`summoner name: ${team.summonerName}`}</p>
									</Link>
								}

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
								<hr />
							</div>
						))
					) : (
						<h1>Not in a match</h1>
					)}
				</div>
			</div>
		);
	}
}

export default InGame;
