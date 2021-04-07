import React from 'react';
import Ttansaction from './Transaction';

const TransactionsList = ({ transactions }) => {
	return (
		<ul className="transactions">
			{
				transactions
					.map(transaction => <Ttansaction key={transaction.id} {...transaction} />)
			}
		</ul>
	)
}

export default TransactionsList;