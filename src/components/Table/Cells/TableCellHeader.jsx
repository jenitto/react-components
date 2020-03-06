import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../Buttons/ButtonIcon';

const SORT = {
	ASC: 'asc',
	DESC: 'desc',
}

const TableCellHeader = ({ content, sort, sortable }) => {

	const [newSort, setSort] = useState(sort);
	const handleSort = () => {
		SORT.ASC === newSort
			? setSort(SORT.DESC)
			: setSort(SORT.ASC)
	};

	const doubleArrow = () => (
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="16" cy="16" r="16" fill="#4D4D4D" />
			<mask id="mask6" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="5" width="22" height="22">
				<path d="M26.9754 20.95L25.8254 19.825L22.4004 23.25V6.40005L20.8004 6.40005L20.8004 23.25L17.3754 19.825L16.2254 20.95L21.6004 26.325L26.9754 20.95ZM15.7754 11.05L10.4004 5.67505L5.02539 11.05L6.17539 12.175L9.60039 8.75005L9.60039 25.6H11.2004L11.2004 8.75005L14.6254 12.175L15.7754 11.05Z" fill="#858585" />
			</mask>
			<g mask="url(#mask6)">
				<path d="M4 4H28V28H4V4Z" fill="#FDEBB3" />
			</g>
		</svg>
	);

	const arrowDown = () => (
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="8" y="6" width="16" height="20">
				<path d="M15.2 6.3999V22.4499L9.775 17.0249L8.625 18.1749L15.425 24.9749L16 25.5249L16.575 24.9749L23.375 18.1749L22.225 17.0249L16.8 22.4499V6.3999H15.2Z" fill="#858585" />
			</mask>
			<g mask="url(#mask0)">
				<path d="M4 4H28V28H4V4Z" fill="#FCDD82" />
			</g>
		</svg>
	);

	return (
		<th className={`sftk-table__cell sftk-table-cell-header ${newSort ? 'visible' : ''} ${!sortable ? 'disabled' : ''}`}>
			{content}
			<span className={`sftk-table-cell-header-icon ${SORT.ASC === newSort ? 'sftk-table-cell-header-icon--reverse' : ''}`}>
				<ButtonIcon
					icon={newSort ? arrowDown() : doubleArrow()}
					onClick={handleSort} />
			</span>
		</th>
	)
};

TableCellHeader.propTypes = {
	content: PropTypes.any.isRequired,
	sort: PropTypes.oneOf([SORT.ASC, SORT.DESC]),
	sortable: PropTypes.bool,
};

export default TableCellHeader;