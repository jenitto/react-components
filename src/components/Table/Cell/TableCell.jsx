import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ content }) => {
	return (
		<td className="sftk-table__cell sftk-table__cell--normal">{content}</td>
	)
};

TableCell.propTypes = {
	content: PropTypes.any.isRequired
};

export default TableCell;