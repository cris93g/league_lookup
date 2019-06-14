import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import champion from "../../champion";
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
		console.log(Object.values(champion.data));
		console.log(this.state.game);

		const { game } = this.state;
		return (
			<div>
				{game.mapId === 11 ? "Map : Summoners Rift" : ""}
				<div key={game.gameId}>
					{this.state.game.participants ? (
						this.state.game.participants.map(team => (
							<div key={team.summonerName}>
								{/* <img src={team.championId==champion.data.id } */}
								{
									<Link to={`/account/${team.summonerName}`}>
										<p>{`summoner name: ${team.summonerName}`}</p>
									</Link>
								}
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
