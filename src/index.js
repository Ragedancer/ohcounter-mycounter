import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';

//App.js component is rendered on the webpage, which is referenced in the public index.html root id
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
