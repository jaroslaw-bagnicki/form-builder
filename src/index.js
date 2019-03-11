import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { Provider } from 'react-redux';
import { store } from './store';
import { loadTemplate } from './store/actions';
import 'materialize-css/dist/css/materialize.min.css';
import './styles.css';

store.dispatch(loadTemplate());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
