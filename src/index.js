import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import {CookiesProvider} from "react-cookie";
import {BrowserRouter as Router} from "react-router-dom";

//App.js component is rendered on the webpage, which is referenced in the public index.html root id
ReactDOM.render(
    <CookiesProvider>
       <Router>
           <App/>
       </Router>
    </CookiesProvider>,
    document.getElementById('root'));

serviceWorker.unregister();
