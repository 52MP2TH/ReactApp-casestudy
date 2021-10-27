import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/stylesheet.css'
import Main from './Components/Main';

ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'));

