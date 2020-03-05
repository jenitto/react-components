import React from 'react';
import PropTypes from 'prop-types';

const TableAvatar = ({ name, image }) => {
	return (
		<div className="sftk-table-avatar">
			<img className="sftk-table-avatar__image" src={image} alt={name} />
			{name}
		</div >
	)
};

TableAvatar.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default TableAvatar;