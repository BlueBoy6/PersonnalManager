import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../molecule/card/card'

function cardsListHor(props) {

	function cardListRender(cardsList){
		if (!cardsList) return null;
		if (cardsList.length === 0) return null;
		return cardsList.map((card, idx) => <Card key={idx} {...card} />);
	}

	return (
		<div>
			{cardListRender(props.cardsList)}
		</div>
	)
}

cardsListHor.propTypes = {
	cardsList: PropTypes.array
}

export default cardsListHor

