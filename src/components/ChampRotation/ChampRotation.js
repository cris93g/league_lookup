import React, { Component } from "react";
import axios from "axios";
import champion from "../../champion";
import styled from "styled-components";
import "./ChampionRotation.css";
class ChampRotation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rotation: []
		};
	}

	componentDidMount() {
		axios.get(`/api/champrotation`).then(response => {
			this.setState({ rotation: response.data });
		});
	}
	render() {
		const { rotation } = this.state;
		let champs = Object.values(champion.data);
		console.log(rotation);

		return (
			<div className="master">
				<h1 className="rotationHeaders">Champ Rotation</h1>
				<div className="rotationContainer1">
					<Normal>
						{rotation.freeChampionIds
							? rotation.freeChampionIds.map(champion => {
									return (
										<div>
											{champs.map(champ => {
												if (champ.key == champion) {
													return (
														<div>
															<img
																className="rot"
																src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${
																	champ.id
																}.png`}
															/>
															<p>{champ.name}</p>
														</div>
													);
												}
											})}
										</div>
									);
							  })
							: ""}
					</Normal>{" "}
				</div>

				<div className="rotationContainer1">
					<h1 className="rotationHeaders2">Champ Rotation for new players</h1>
					<NewPlayer>
						{rotation.freeChampionIdsForNewPlayers
							? rotation.freeChampionIdsForNewPlayers.map(champion => {
									return (
										<div>
											{champs.map(champ => {
												if (champ.key == champion) {
													return (
														<div>
															<img
																className="rot"
																src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/${
																	champ.id
																}.png`}
															/>
															<p>{champ.name}</p>
														</div>
													);
												}
											})}
										</div>
									);
							  })
							: ""}
					</NewPlayer>
				</div>
			</div>
		);
	}
}
export default ChampRotation;

const Normal = styled.section`
	margin: auto;
	width: 40vw;
	height: 100%;
	display: flex;
	border-radius: 10px;

	align-items: center;
	align-content: center;
	flex-wrap: wrap;
`;

const NewPlayer = styled.section`
	margin: auto;
	width: 40vw;
	height: 100%;
	display: flex;
	border-radius: 10px;
	flex-wrap: wrap;
	align-items: center;
	align-content: center;
`;
