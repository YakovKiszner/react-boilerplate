import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => (
	<div
		style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
			color: '#FF0000'
		}}
	>
		<h1>Welcome, to react boilerplate!</h1>
	</div>
);

export default hot(module)(App);