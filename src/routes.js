import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Account from "./components/Account/Account";
import InGame from "./components/InGame/InGame";
import MatchHistory from "./components/MatchHistory/MatchHistory";
import SpecificGame from "./components/SpecificGame/SpecificGame";
import LeaderBoard from "./components/Leaderboard/LeaderBoard";
import ChampRotation from "./components/ChampRotation/ChampRotation";
export default (
	<Switch>
		<Route component={Search} exact path="/" />
		<Route component={Account} path="/account/:name" />
		<Route component={InGame} path="/ingame/:id" />
		<Route component={MatchHistory} path="/matchHistory/:acountId" />
		<Route component={SpecificGame} path="/match/:gameId" />
		<Route component={LeaderBoard} path="/leaderboards" />
		<Route component={ChampRotation} path="/rotation" />
	</Switch>
);
