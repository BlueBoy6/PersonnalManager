import React from 'react'
import Card from '../../molecule/card/card'
import PropTypes from 'prop-types'

export default function List_squared_cards(props) {
	
	const {list} = props;

	return (
		<div className="grid_list">
			{props.list.map(item => (
				<Card {...item}/>
			))}
		</div>
	)
}

List_squared_cards.propTypes = {

}

