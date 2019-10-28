import React, { useReducer, createContext, useContext } from "react";
import { initial_state_todos } from "./todos_rs/todos_rs";


// ALLS TODOS STATES
const initialState = {
	initial_state_todos
}

const StoreContext = createContext(initialState);



function reducerActions(state, action) {
	switch(action.type){
		case 'example': return uneFakeFunc(); break;
		default: uneFakeFuncDefault()
	}
}



// Fournisseur de données de l'app
export const StoreProvider = ({ children }) => {
	// zone encore un peu sombre
	const [state, dispatch] = useReducer(reducerActions, initialState);
	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			{children}
		</StoreContext.Provider>
	);
};


// Utiliser les données
export const useStore = store => {
	// zone encore un peu sombre
	const { state, dispatch } = useContext(StoreContext);
	return { state, dispatch };
};