import React, { Component } from "react";
import axios from "axios";

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
							return <div>{people.summonerName}</div>;
					  })
					: "no entries"}
			</div>
		);
	}
}

export default LeaderBoard;
