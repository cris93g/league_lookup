import React, { Component } from "react";
import axios from "axios";

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
		// const { game } = this.state;
		console.log(this.state);

		return <div>{/* {DisplayMatch} */}</div>;
	}
}

export default InGame;
