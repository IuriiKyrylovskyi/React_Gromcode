import React from 'react'
import moment from "moment";

const age = date => moment().diff(date, 'years')

const Greeting = props => {
	return (
		<div className="greeting">
				{`My name is ${props.firstName} ${props.lastName}. I'm ${age(props.birthDate)} years old`}
		</div>
	)
}

export default Greeting