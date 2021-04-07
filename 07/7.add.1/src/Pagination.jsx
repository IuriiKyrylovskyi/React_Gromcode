import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage}) => {
	let isPrevPageAvailable = currentPage;
	let isNextPageAvailable = currentPage;

	return (
		<div className="pagination">
			{isPrevPageAvailable === 1
				? <button className="btn" disabled={true}></button>
				: <button className="btn" onClick={goPrev}>←</button>
			}

			<span className="pagination__page">{currentPage}</span>

			{isNextPageAvailable === Math.ceil(totalItems / itemsPerPage)
				? <button className="btn" disabled={true}></button>
				: <button className="btn" onClick={goNext}>→</button>
			}
		</div>
	)
};

export default Pagination;