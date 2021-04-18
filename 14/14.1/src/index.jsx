import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Counter from './Counter';

const rootElem = document.querySelector('#root');

ReactDOM.render(<Counter />, rootElem);