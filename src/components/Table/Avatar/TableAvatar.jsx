import React from 'react';
import PropTypes from 'prop-types';

const TableAvatar = ({ name, image }) => {
	const getAbbr = (str) => str.match(/\b(\w)/g).join('').slice(0, 2);

	return (
		<div className="sftk-table-avatar">
			{image
				? <img className="sftk-table-avatar__image" src={image} alt={name} />
				: <div className="sftk-table-avatar__abbr">{getAbbr(name)}</div>
			}
			{name}
		</div >
	)
};

TableAvatar.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string,
};

export default TableAvatar;