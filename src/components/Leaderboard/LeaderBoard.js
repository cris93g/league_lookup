import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

class LeaderBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			leaderboards: []
		};
	}
	componentDidMount() {
		axios.get(`/api/leaderboards`).then(response => {
			this.setState({ leaderboards: response.data.entries });
		});
	}

	render() {
		const { leaderboards } = this.state;
		console.log(leaderboards);

		return (
			<div>
				{leaderboards
					? leaderboards.map(people => {
							console.log(people);
							return (
								<div>
									<Cards>
										<Link to={`/account/${people.summonerName}`}>
											<p>{people.summonerName}</p>{" "}
										</Link>
										<p>{`wins ${people.wins}`}</p>
										<p>{`looses ${people.losses}`}</p>
										<p>{`lp ${people.leaguePoints}`}</p>
									</Cards>
								</div>
							);
					  })
					: "no entries"}
			</div>
		);
	}
}

export default LeaderBoard;

const Cards = styled.section`
	margin: auto;
	width: 1000px;
	height: 100px;
	border: 0.5px solid black;
	background-color: lightskyblue;
`;
