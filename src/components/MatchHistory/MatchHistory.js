import React, { Component } from "react";
import axios from "axios";
import champion from "../../champion";
import { Link } from "react-router-dom";
import styled from "styled-components";
class MatchHistory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [],
			game: []
			// specific: []
		};
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

	render() {
		// this.getSpecific();
		let specific = [];
		let { matches } = this.state.history;
		let champs = Object.values(champion.data);
		console.log(matches);
		console.log(this.state.game);
		function parse() {
			if (matches) {
				matches.map(match => {
					axios
						.post(`/api/match`, {
							matchId: match.gameId
						})
						.then(response => {
							console.log(response);
							// specific.push(response.data);
						});
				});
			}
		}
		parse();
		console.log(specific);
		return (
			<div className="specific">
				<Teams>
					{matches ? (
						matches.map(match => {
							return (
								<div>
									{champs.map(champ => {
										if (champ.key == match.champion) {
											return (
												<div>
													<Link to={`/match/${match.gameId}`}>
														<img
															className="iconpic"
															src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${
																champ.id
															}.png`}
														/>
													</Link>
													<p>{champ.name}</p>
												</div>
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
				</Teams>
			</div>
		);
		// return <div>
		// {displayMatches}
		// </div>;
	}
}
export default MatchHistory;
const Teams = styled.section`
	/* display: flex; */
	margin: auto;
	width: 40vw;
	height: 100%;
	/* margin-top: 10px; */
	border-radius: 10px;
	box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.2);
	align-items: center;
	align-content: center;
`;
const Info = styled.div`
	display: flex;
	justify-content: space-around;
`;
