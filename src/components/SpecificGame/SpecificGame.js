import React, { Component } from "react";
import axios from "axios";

class SpecificGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			game: []
		};
	}
	componentDidMount() {
		axios
			.post(`/api/match`, {
				matchId: this.props.match.params.gameId
			})
			.then(response => {
				this.setState({ game: response.data });
			});
	}
	render() {
		let { game } = this.state;
		console.log(game);
		return (
			<div>
				{/* {
                game ?(
                    <p>{game.gameMode}</p>
                )
            } */}
			</div>
		);
	}
}
export default SpecificGame;
