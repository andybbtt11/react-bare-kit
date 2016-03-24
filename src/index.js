import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App';
import configureStore from './stores/Store'
import { Provider } from 'react-redux'

let initialState = {
	listItems: [
		{
			name: "No items found, enter one above to begin",
			id: 0,
			completed: false
		}
	]
};

let store = configureStore(initialState);

render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	appMountId
);