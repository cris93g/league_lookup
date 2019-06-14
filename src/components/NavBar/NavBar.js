import React, { Component } from "react";
import "./NavBar.css";
import Search from "../Search/Search";
import Logo from "../Search/Logo.png";
class NavBar extends Component {
	render() {
		return (
			<div className="nav">
				<img src={Logo} alt="icon" className="leftlogo" />
				<Search />
			</div>
		);
	}
}

export default NavBar;
