import React, {useState} from 'react';
import PropTypes from 'prop-types'
import Title from '../../atom/title/title';
import {Redirect, Link} from "react-router-dom";


function Card(props) {
	const {id, title, img, link} = props;

	function redirect_CB(){
		console.log('try to redirect : ', link)
	}

	return (
		<Link to={link} className="card" style={{backgroundImage: `url(${img})`}}>
			<Title level={3} label={title} />
		</Link>
	)
}

Card.propTypes = {

}

export default Card

