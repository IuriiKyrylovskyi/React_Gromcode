import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumberList from './NumberList';

const rootElem = document.querySelector('#root');

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

ReactDOM.render(<NumberList numbers={numbersArr} />, rootElem);