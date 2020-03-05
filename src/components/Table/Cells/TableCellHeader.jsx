import React from 'react';
import PropTypes from 'prop-types';

const TableCellHeader = ({ content }) => {
	return (
		<th className="sftk-table__cell sftk-table__cell--strong">{content}</th>
	)
};

TableCellHeader.propTypes = {
	content: PropTypes.any.isRequired
};

export default TableCellHeader;