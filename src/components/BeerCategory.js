import React from 'react';

import SingleLineList from './singleLineList/SingleLineList';
import './BeerCategory.css';

const BeerCategory = ({ name, beers }) => {
	const items = beers.map(beer => beer.name);

	return (
		<div className='BeerCategory'>
			<h2>{ name }</h2>
			<SingleLineList items={ items } />
		</div>
	)	
};

export default BeerCategory;
