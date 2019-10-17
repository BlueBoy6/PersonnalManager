import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

function Menu(props) {
	return (
		<div className="menu">
			<Link className="link" to="/">Dashboard</Link>
			<Link className="link" to="/connect">Connexion</Link>
		</div>
	);
}

Menu.propTypes = {};

export default Menu;
