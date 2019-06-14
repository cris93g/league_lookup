import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Search.css";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		};
		this.onNameHandler = this.onNameHandler.bind(this);
	}

	componentDidMount() {}

	onNameHandler(e) {
		this.setState({ name: e.target.value });
	}
	render() {
		const { name } = this.state;

		return (
			<div className="background">
				<input className="inputName" onChange={e => this.onNameHandler(e)} />
				<Link to={`/account/${name}`}>
					<button className="inp">input</button>
				</Link>
			</div>
		);
	}
}

export default Search;
