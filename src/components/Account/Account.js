import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Account extends Component {
	constructor(props) {
		super(props);
		this.state = {
			account: []
		};
	}
	componentDidMount() {
		axios
			.post(`/api/account`, {
				name: this.props.match.params.name
			})
			.then(response => {
				this.setState({ account: response.data });
			});
	}
	render() {
		const { account } = this.state;

		let displayAccount = account.map(info => {
			console.log(info);
			return (
				<div key={info.summonerId}>
					<Link to={`/ingame/${info.summonerId}`}>
						<p>{`Summoner Name: ${info.summonerName}`}</p>
					</Link>
					<p>{`queue type: ${info.queueType}`}</p>
					<p>{`tier: ${info.tier}`}</p>
					<p>{`wins: ${info.wins}`}</p>
					<p>{`losess: ${info.losses}`}</p>
				</div>
			);
		});
		return <div>{displayAccount}</div>;
	}
}
export default Account;
