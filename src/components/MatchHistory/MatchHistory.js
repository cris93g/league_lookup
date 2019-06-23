import React, { Component } from "react";
import axios from "axios";
import champion from "../../champion";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
			</div>
		);
		// return <div>
		// {displayMatches}
		// </div>;
	}
}
export default MatchHistory;
const Wrapper = styled.section`
	/* display: flex; */
	margin: auto;
	width: 300px;
	height: 280px;
	/* margin-top: 10px; */
	border-radius: 10px;
	box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.2);
	align-items: center;
	align-content: center;
`;
