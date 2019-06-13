import React, { Component } from "react";
import { Link } from "react-router-dom";
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
		console.log(name);
		return (
			<div>
				<input onChange={e => this.onNameHandler(e)} />
				<Link to={`/account/${name}`}>
					<button>submit</button>
				</Link>
			</div>
		);
	}
}

export default Search;
