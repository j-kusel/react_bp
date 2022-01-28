require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './App.scss';

const appElement = document.getElementById('app');
//console.log(appElement);
//appElement.innerHTML = 'hello';

ReactDOM.render(<App />, appElement);

