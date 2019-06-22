import React, { Component } from "react";
import "./NavBar.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
class NavBar extends Component {
	render() {
		return (
			<div>
				<Wrapper>
					<div>
						<Nav>
							<Link to="/">
								{" "}
								<div>Home</div>
							</Link>
							<div>LeaderBoard</div>
							<div>Champ rotation</div>
						</Nav>
					</div>
				</Wrapper>
			</div>
		);
	}
}

export default NavBar;
const Wrapper = styled.section`
	display: flex;
	margin: auto;
	width: 100vw;
	height: 5vh;
	background-color: #3895d3;
	border-bottom: 0.25px solid rgb(168, 155, 155);
`;

const Nav = styled.section`
	display: flex;
	margin: auto;
	justify-content: space-around;
	width: 50vw;
	color: lightgrey;
	align-items: center;
	align-content: center;
	height: 100%;
	text-decoration: none;
`;
