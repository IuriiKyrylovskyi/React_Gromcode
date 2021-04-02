import React from 'react'
import moment from 'moment'

const bithDateFormatter = date => moment(date).format("D MMM YY")

const Profile = props => {
	return (
		<div className='info'>
			<p>
				{`${props.userData.firstName} ${props.userData.lastName}`}
			</p>
			<p>
				{`Was born ${bithDateFormatter(props.userData.birthDate)} in ${props.userData.birthPlace}`}
			</p>
		</div>
	)
};

export default Profile