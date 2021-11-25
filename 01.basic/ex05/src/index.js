import ReactDom from 'react-dom';
import {App} from './App.js';

/* document
    .getElementById('root')
    .appendChild(App()); */
ReactDom.render(App(), document.getElementById('root'));