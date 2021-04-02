import React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import Comment from './Comment'

const rootElem = document.querySelector('#root')

ReactDOM.render(
	<Comment
		author=''
		text='Not bad'
		date={Date.now()}
	/>,
	rootElem)