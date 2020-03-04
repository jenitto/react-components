import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ columns }) => (
	<table className="sftk-table">
		<thead>
			<tr>
				<td>
					{columns.toString()}
				</td>
			</tr>
		</thead>
	</table>
);

Table.propTypes = {
	columns: PropTypes.array.isRequired,
};

export default Table;