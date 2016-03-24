import React from 'react';
import {render} from 'react-dom';
import List from './components/List/List';
import configureStore from './stores/Store'
import { Provider } from 'react-redux'

let initialState = {
	listItems: [
		{
			name: "No items found, enter one above to begin",
			id: 0
		}
	]
};

let store = configureStore(initialState);

render(
	<Provider store={store}>
		<List/>
	</Provider>, 
	appMountId
);