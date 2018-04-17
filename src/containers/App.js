import React from 'react';

import beers from '../data/2015-guidelines-beer.json';
import AppBar from '../components/appBar/AppBar';
import BeerCategories from '../components/BeerCategories';
import './App.css';

const App = () => (
	<div className="App">
		<AppBar />
		<div className="content">
			<BeerCategories beers={beers.categories} />
		</div>
	</div>
);

export default App;
