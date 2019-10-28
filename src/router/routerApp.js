import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Dashboard from "../pages/dashboard/dashboard";
import Connexion from "../pages/connexion/connexion";
import Todomanager from "../pages/todomanager/todomanager";
import Menu from "../components/organism/menu/menu";
import '../style/globalStyle.scss';

export default function routerApp() {
	return (
		<Router>
			<Menu />
			<Route exact path="/">
				<Dashboard />
			</Route>
			<Route exact path="/connect">
				<Connexion />
			</Route>
			<Route exact path="/to-do-manager">
				<Todomanager />
			</Route>
		</Router>
	);
}
