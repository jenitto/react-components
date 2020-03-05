import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './Cell/TableCell';

const Table = ({ columns, data }) => {
	return (
		<div className="sftk-table">
			<div className="sftk-table__table-wrapper">
				<table className="sftk-table__table">
					<thead className="sftk-table__head">
						<tr className="sftk-table__row sftk-table__row--head">
							{columns.map((column) => (
								<th
									key={column.id}
									className="sftk-table__cell sftk-table__cell--strong">
									{column.label}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="sftk-table__body">
						{data.map((row) => (
							<tr
								key={row.id}
								className="sftk-table__row sftk-table__row--normal">
								{columns.map((column) => (
									<TableCell
										key={`${column.id}-${row.id}`}
										content={row[column.id]} />
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="sftk-table__footer"></div>
		</div>
	)
};

Table.propTypes = {
	columns: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired
};

export default Table;