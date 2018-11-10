import React from 'react';
import ReactDOM from 'react-dom';

// To use CSS in a create-react-app project, you must import the file as shown below.
// The CSS will be added to our index.html's HEAD tag by Webpack using JavaScript. Only CSS files that have been imported will be added to the HTML.
import './index.css';

import * as serviceWorker from './serviceWorker';

import App from "./components/App"










ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
