import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import config from './config';
import Amplify from 'aws-amplify';


//This incorporates Amplify in order to connect to cognito
Amplify.configure({
	Auth: {
		mandatorySignIn: true,
		region: config.cognito.REGION,
		userPoolId: config.cognito.USER_POOL_ID,
		identityPoolId: config.cognito.IDENTITY_POOL_ID,
		userPoolWebClientId: config.cognito.APP_CLIENT_ID
	},
	//Here's the API we connect to. It is currently set to a test api GW
	API: {
		endpoints: [
			{
				name: 'events',
				endpoint: config.apiGateway.URL,
				region: config.apiGateway.REGION
			}
		]
	}
});

// redux store
// applyMiddleware takes a list of middleware and turns it into a store enhancer
// thunk is middleware which enhances the store allowing us to create a function in
// the action creater, eventActions.js

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(

	<Router>
		<Provider store={store}>
			<App />
		</Provider>

	</Router>

	

, document.getElementById('root'));


serviceWorker.unregister();
