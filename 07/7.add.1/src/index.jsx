import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElem = document.querySelector('#root');

const usersArr = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-10',
    age: 29,
    name: 'Bobik',
  },
  {
    id: 'id-11',
    age: 37,
    name: 'Tomas',
  },
  {
    id: 'id-12',
    age: 28,
    name: 'Taddy',
  },
  {
    id: 'id-13',
    age: 55,
    name: 'Samon',
  },
];


ReactDOM.render(<UsersList users={usersArr} />, rootElem);