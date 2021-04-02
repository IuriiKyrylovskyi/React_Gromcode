import React from 'react'
import moment from 'moment'

const bithDateFormatter = date => moment(date).format("D MMM YY")

const Profile = props => {
	return (
		<div className='profile'>
			<div className='profile__name'>
				{`${props.userData.firstName} ${props.userData.lastName}`}
			</div>
			<div className='profile__birth'>
				{`Was born ${bithDateFormatter(props.userData.birthDate)} in ${props.userData.birthPlace}`}
			</div>
		</div>
	)
};

export default Profile