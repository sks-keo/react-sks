import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/bootstrap-custom.css'
import './styles/styles.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
