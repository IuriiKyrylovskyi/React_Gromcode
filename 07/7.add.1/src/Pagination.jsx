import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage}) => {
	let isPrevPageAvailable = currentPage;
	let isNextPageAvailable = currentPage;

	return (
		<div className="pagination">
			{console.log(Math.ceil(totalItems / itemsPerPage))}
			{isPrevPageAvailable === 1
				? <button className="btn" disable={'true'}></button>
				: <button className="btn" onClick={goPrev}>←</button>
			}

			<span className="pagination__page">{currentPage}</span>

			{isNextPageAvailable === Math.ceil(totalItems / itemsPerPage)
				? <button className="btn" disable={'true'}></button>
				: <button className="btn" onClick={goNext}>→</button>
			}
		</div>
	)
};

export default Pagination;