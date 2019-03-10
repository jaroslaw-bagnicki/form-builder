import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { Provider } from 'react-redux';
import { store } from './store';
import 'materialize-css/dist/css/materialize.min.css';
import './styles.css';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
