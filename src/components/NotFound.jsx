import React from 'react';
import '../../style/NotFound.css';

export const NotFound = () => {
	return (
		<div className="notFound">
			<img
				src="http://dafontspro.com/wp-content/uploads/Error-404-Font-01.webp"
				alt=""
			/>
			<div className="description">
				<h2>404</h2>
				<p>Oops, it seems something went wrong</p>
			</div>
		</div>
	);
};
