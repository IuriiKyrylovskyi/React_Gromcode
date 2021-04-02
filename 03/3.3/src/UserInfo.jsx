import React from 'react'
import './user-info.scss'
import Avatar from './Avatar'

const user = {
	name: 'Me',
	avatarUrl: 'https://avatars1.githubusercontent.com/'
}


const UserInfo = props => {
	return (
		<div className="user-info">
			<Avatar
				// user={props.user}
				avatarUrl={props.user.avatarUrl}
				name={props.user.name}
			/>
			<div className="user-info__name">{props.user.name}</div>
		</div>
	)
}

export default UserInfo 