import React from "react";
import PropTypes from "prop-types";
import CardsListHor from "../../components/organism/cardsListHor/cardsListHor"

function Dashboard(props) {


	const sections = [{id: 0, title: 'To-do Manager', link:'to-do-manager', img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80'}]


	function sectionsComponent(sections){
		if(!sections) return null; 
		return <CardsListHor cardsList={sections} />
	}

	return (
		<div className="dashboard">
			<div className="sections">
				{sectionsComponent(sections)}
			</div>
		</div>
	);
}

Dashboard.propTypes = {};

export default Dashboard;
