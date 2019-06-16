import React, { Component } from "react";
import axios from "axios";
import champion from "../../champion";
class MatchHistory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			history: []
			// specific: []
		};
		// this.getSpecific = this.getSpecific.bind(this);
	}
	componentDidMount() {
		axios
			.post(`/api/matchHistory`, {
				accountId: this.props.match.params.acountId
			})
			.then(response => {
				this.setState({ history: response.data });
			});
	}
	// getSpecific() {
	// 	if (this.state.history.matches.gameId) {
	// 		axios
	// 			.post(`/api/match`, {
	// 				matchId: this.state.history.matches.gameId
	// 			})
	// 			.then(response => {
	// 				this.state({
	// 					specific: response.data
	// 				});
	// 			});
	// 	}
	// }
	render() {
		// this.getSpecific();
		let { matches } = this.state.history;
		let champs = Object.values(champion.data);
		console.log(matches);
		return (
			<div>
				{matches ? (
					matches.map(match => {
						return (
							<div>
								{champs.map(champ => {
									if (champ.key == match.champion) {
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
								<p>{match.lane}</p>
								<p>{match.role}</p>
								<hr />
							</div>
						);
					})
				) : (
					<h1>not any matches</h1>
				)}
			</div>
		);
		// return <div>
		// {displayMatches}
		// </div>;
	}
}
export default MatchHistory;
