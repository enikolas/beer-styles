import React from 'react';

import navIcon from './navIcon.svg'
import searchIcon from './searchIcon.svg'
import './AppBar.css'

const AppBar = () => (
	<div className="AppBar">
		<div className="navIcon">
			<img src={navIcon} />
		</div>
		<div className="title">
			<h1>Beer Styles</h1>
		</div>
		<div className="actionIcons">
			<div className="searchIcon">
				<img src={searchIcon} />
			</div>
		</div>
	</div>
);

export default AppBar;
