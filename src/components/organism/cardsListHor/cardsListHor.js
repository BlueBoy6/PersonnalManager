import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../molecule/card/card'

function CardsListHor(props) {

	function cardListRender(cardsList){
		if (!cardsList) return null;
		if (cardsList.length === 0) return null;
		return cardsList.map((card, idx) => <Card key={idx} {...card} />);
	}

	return (
		<div className="cards_list_horizontal">
			{cardListRender(props.cardsList)}
		</div>
	)
}

CardsListHor.propTypes = {
	cardsList: PropTypes.array
}

export default CardsListHor

