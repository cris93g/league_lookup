import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
		console.log(this.state.game);
		return (
			<div>
				{this.state.game.participants ? (
					this.state.game.participants.map(team => (
						<div>
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
		);
	}
}

export default InGame;
