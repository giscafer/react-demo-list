import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Perf  from 'react-addons-perf';

// import App from './components/Main';
// import App from './components/product/Main';
import App from './components/test/Main';

// Render the main component into the dom
Perf.start();
ReactDOM.render(<App />, document.getElementById('app'));
Perf.stop();
window.Perf=Perf;