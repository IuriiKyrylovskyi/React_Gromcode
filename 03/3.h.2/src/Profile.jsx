import React from 'react'
import moment from 'moment'

const userData = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
};

const bithDateFormatter = date => moment(date).format("D MMM YY")

const Profile = () => {
	return (
		<div className='info'>
			<p>
				{`${userData.firstName} ${userData.lastName}`}
			</p>
			<p>
				{`Was born ${bithDateFormatter(userData.birthDate)} in ${userData.birthPlace}`}
			</p>
		</div>
	)
};

export default Profile