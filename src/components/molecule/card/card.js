import React from 'react'
import PropTypes from 'prop-types'
import Title from '../../atom/title/title';


function Card(props) {
	const {id, title, img} = props
	return (
		<div className="card" style={{backgroundImage: `url(${img})`}}>
			<Title level={3} label={title} />
		</div>
	)
}

Card.propTypes = {

}

export default Card

