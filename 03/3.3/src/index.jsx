import React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import Comment from './Comment'

const rootElem = document.querySelector('#root')

const author = {
	name: 'IuriiKyrylovskyi',
	avatarUrl: 'https://avatars.githubusercontent.com/u/65412895?s=60&v=4'
}

ReactDOM.render(
	<Comment
		author={author}
		text='Not bad'
		date={Date.now()}
	/>,
	rootElem)