import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElem = document.querySelector('#root');

const usersArr = [
  {
    id: 'id-0',
    name: 'Bob',
    age: 21,
  },
  {
    id: 'id-1',
    name: 'Tom',
    age: 17,
  },
  {
    id: 'id-2',
    name: 'Tad',
    age: 18,
  },
  {
    id: 'id-22',
    name: 'Tarr',
    age: 58,
  },
  {
    id: 'id-3',
    name: 'Sam',
    age: 45,
  },
  {
    id: 'id-10',
    name: 'Bob',
    age: 21,
  },
  {
    id: 'id-11',
    name: 'Tom',
    age: 17,
  },
  {
    id: 'id-21',
    name: 'Tad',
    age: 18,
  },
  {
    id: 'id-31',
    name: 'Sam',
    age: 45,
  },
]

ReactDOM.render(<UsersList users={usersArr} />, rootElem);