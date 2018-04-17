import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import registerServiceWorker, { unregister } from './registerServiceWorker';
import './style.css';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

registerServiceWorker();
