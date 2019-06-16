import React from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
import NavBar from "./components/NavBar/NavBar";
function App() {
	return (
		<Router>
			<div className="App">{routes}</div>
		</Router>
	);
}

export default App;
