import React from 'react';

import BeerCategory from './BeerCategory';

const BeerList = ({ beers }) => {
	const items = beers.map(beer => (
		<BeerCategory
			key={beer.id}
			name={beer.name}
			beers={beer.subcategories} />
	));

	return (
		<div className='BeerList'>
			{ items }
		</div>
	);
};

export default BeerList;
