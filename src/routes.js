import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Account from "./components/Account/Account";
import InGame from "./components/InGame/InGame";
export default (
	<Switch>
		<Route component={Search} path="/search" />
		<Route component={Account} path="/account/:name" />
		<Route component={InGame} path="/ingame/:id" />
	</Switch>
);
