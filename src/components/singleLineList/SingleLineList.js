import React from 'react';

import './SingleLineList.css';

const SingleLineList = ({ items }) => {
	const rows = items.map(item => (
		<li key={ item }>{ item }</li>
	));

	return (
		<ul className='SingleLineList'>
			{ rows }
		</ul>
	);
};

export default SingleLineList;
