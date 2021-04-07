import React from 'react';
import Ttansaction from './Transaction';

const TransactionsList = ({ transactions }) => {
	return (
		<ul class="transactions">
			{
				transactions
					.map(transaction => <Ttansaction key={transaction.id} {...transaction} />)
			}
		</ul>
	)
}

export default TransactionsList;