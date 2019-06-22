import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Account.css";
class Account extends Component {
	constructor(props) {
		super(props);
		this.state = {
			account: [],
			picture: []
		};
		// this.getpic = this.getpic.bind(this);
	}
	componentDidMount() {
		axios
			.post(`/api/account`, {
				name: this.props.match.params.name
			})
			.then(response => {
				this.setState({ account: response.data });
			});

		axios
			.post(`/api/picture	`, {
				name: this.props.match.params.name
			})
			.then(response => {
				this.setState({ picture: response.data });
			});
	}

	render() {
		console.log(this.state.picture);
		const { account } = this.state;
		let displayAccount = account.map(info => {
			console.log(info);
			return (
				<div key={info.leagueId} className="account">
					<BodyWrapper>
						<Wrapper>
							<ImageWrapper>
								<img
									className="iconpic"
									src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/profileicon/${
										this.state.picture.profileIconId
									}.png`}
								/>
							</ImageWrapper>
							<TextWrapper>
								<br />
								<p>{`Summoner Name: ${info.summonerName}`}</p>
								<br />
								<p>{`queue type: ${info.queueType}`}</p>
								<br />
								<p>{`tier: ${info.tier} ${info.rank}`}</p>
								<br />
								<p>{`wins: ${info.wins}`}</p>
								<br />
								<p>{`losses: ${info.losses}`}</p>
								<br />{" "}
							</TextWrapper>
							<Link to={`/ingame/${info.summonerId}`}>
								<button className="accoutb">IN GAME</button>
							</Link>
							<Link to={`/matchHistory/${this.state.picture.accountId}`}>
								<button className="accoutb">Match History</button>
							</Link>
						</Wrapper>
					</BodyWrapper>
				</div>
			);
		});
		return <div>{displayAccount}</div>;
	}
}
export default Account;

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

const BodyWrapper = styled.section`
	display: flex;
	width: 100vw;
	height: 40vh;
`;
const TextWrapper = styled.section`
	align-items: center;
	align-content: center;
	margin-left: 50px;
`;
const ImageWrapper = styled.section`
	margin-left: 40%;
	margin-top: 5px;
`;
