import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const rootElem = document.querySelector('#root');

const user = 'github';

ReactDOM.render(<App user={ user } />, rootElem);