import React from "react"
import {render} from 'react-dom';
import { Router } from "react-router";
import App from './App';

render(
    <Router>
        <App/>
    </Router>, 
    document.getElementById('root'));
