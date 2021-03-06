import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../Buttons/ButtonIcon';
import { SORT } from '../../../enums/sort';

const TableCellHeader = ({ content, value, sort, sortable, searchable, search, changeSort, changeSearchValue }) => {

	const [focus, setFocus] = useState(false);

	const handleSort = () => {
		let direction;
		if (sort.active === value && sort.direction === SORT.ASC) {
			direction = SORT.DESC;
		} else {
			direction = SORT.ASC;
		}
		changeSort({ active: value, direction: direction });
	};

	const handleInputValue = (term) => {
		changeSearchValue({ active: term ? value : '', term: term });
	}

	const iconDoubleArrow = () => (
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

	const iconArrowDown = () => (
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="8" y="6" width="16" height="20">
				<path d="M15.2 6.3999V22.4499L9.775 17.0249L8.625 18.1749L15.425 24.9749L16 25.5249L16.575 24.9749L23.375 18.1749L22.225 17.0249L16.8 22.4499V6.3999H15.2Z" fill="#858585" />
			</mask>
			<g mask="url(#mask0)">
				<path d="M4 4H28V28H4V4Z" fill="#FCDD82" />
			</g>
		</svg>
	);

	const iconCross = () => (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<mask id="mask7" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="6" width="11" height="12">
				<path d="M7.71875 6.99976L7 7.71851L11.3906 12.1091L7 16.4998L7.71875 17.2185L12.1094 12.8279L16.5 17.2185L17.2188 16.4998L12.8281 12.1091L17.2188 7.71851L16.5 6.99976L12.1094 11.3904L7.71875 6.99976Z" fill="#858585" />
			</mask>
			<g mask="url(#mask7)">
				<path d="M4 4H20V20H4V4Z" fill="#FCDD82" />
			</g>
		</svg>
	);

	return (
		<th className={`sftk-table__cell sftk-table-cell-header ${sort.active === value ? 'visible' : ''} ${!sortable ? 'disabled' : ''} ${focus ? 'focus' : ''}`}>
			<input className="sftk-table-cell-header__input"
				type="text"
				required
				disabled={!searchable}
				value={search.active === value ? search.term : ''}
				onChange={(e) => handleInputValue(e.target.value)}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)} />
			<span className="sftk-table-cell-header__input-icon"
				onClick={() => handleInputValue('')}>
				{iconCross()}
			</span>
			<span className="sftk-table-cell-header__label sftk-table-cell-header__placeholder">
				{content}
			</span>
			{sortable
				?
				<div className="sftk-table-cell-header__button-container">
					<span className="sftk-table-cell-header__label">
						{content}
					</span>
					<span className={`sftk-table-cell-header__button ${(SORT.DESC === sort.direction) ? 'sftk-table-cell-header__button--reverse' : ''}`}>
						<ButtonIcon
							icon={sort.active === value ? iconArrowDown() : iconDoubleArrow()}
							onClick={handleSort} />
					</span>
				</div>
				: null}
		</th>
	)
};

TableCellHeader.propTypes = {
	content: PropTypes.any.isRequired,
	sort: PropTypes.shape({
		active: PropTypes.string,
		direction: PropTypes.oneOf([SORT.ASC, SORT.DESC])
	}),
	search: PropTypes.shape({
		active: PropTypes.string,
		term: PropTypes.string,
	}),
	sortable: PropTypes.bool,
	changeSort: PropTypes.func,
	changeSearchValue: PropTypes.func,
};

export default TableCellHeader;