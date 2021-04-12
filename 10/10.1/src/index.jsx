import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const rootElem = document.querySelector('#root');

const userName = 'github';

ReactDOM.render(<App userName={ userName } />, rootElem);