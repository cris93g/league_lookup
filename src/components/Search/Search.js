import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import styled from "styled-components";
import Banner from "./BANNER.jpg";
import history from "./history.PNG";
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
			<div>
				<Wrapper>
					<TopSide>
						<img className="ban" src={require("./BANNER.jpg")} />
					</TopSide>
					<div>
						<BottomSide>
							<div>
								<input
									className="searchb"
									className="inputName"
									onChange={e => this.onNameHandler(e)}
								/>
								<Link to={`/account/${name}`}>
									<button className="inp">Search</button>
								</Link>
							</div>
						</BottomSide>
					</div>
				</Wrapper>
				<CardWrapper>
					<Cards className="overlay">
						<img className="secondPic" src={require("./ranks.PNG")} />
					</Cards>
					<Cards>
						<img className="firstPic" src={require("./history.PNG")} />
					</Cards>
					<Cards>
						<img className="thirdPic" src={require("./ROTATION.PNG")} />
					</Cards>
				</CardWrapper>
			</div>
		);
	}
}

export default Search;

const Wrapper = styled.section`
	/* display: flex; */
	margin: auto;
	width: 100vw;
	height: 60vh;
	background-color: #3895d3;
`;

const TopSide = styled.section`
	width: 100%;
	height: 40%;
`;

const BottomSide = styled.section`
	width: 100%;
	height: 60%;
	margin: auto;
	display: flex;
`;

const CardWrapper = styled.section`
	width: 100vw;
	height: 35vh;
	display: flex;
`;

const Cards = styled.section`
	width: 500px;
	height: 185px;
	border: 0.5px solid black;
	/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5); */
	border-radius: 8px;
	margin: auto;
	justify-content: space-around;
	align-items: center;
	align-content: center;
`;
