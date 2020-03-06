import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './Cells/TableCell';
import TableCellHeader from './Cells/TableCellHeader';
import Checkbox from '../Checkboxes/Checkbox/Checkbox';
import TableFooter from './Footer/TableFooter';

const Table = ({ columns, data, check = false }) => {
	return (
		<div className="sftk-table">
			<div className="sftk-table__table-wrapper">
				<table className="sftk-table__table">
					<thead className="sftk-table__head">
						<tr className="sftk-table__row sftk-table__row--head">
							{check ?
								<th className="sftk-table__cell">
									<Checkbox
										value={'all'}
										checked={true}
										setChecked={(e) => console.log(e)}>
									</Checkbox>
								</th>
								: null}
							{columns.map((column) => (
								<TableCellHeader
									key={column.id}
									content={column.label}
									sortable={column.sortable}
									searchable={column.searchable} />
							))}
						</tr>
					</thead>
					<tbody className="sftk-table__body">
						{data.map((row) => (
							<tr
								key={row.id}
								className="sftk-table__row sftk-table__row--normal">
								{check ?
									<td className="sftk-table__cell">
										<Checkbox
											value={row.id}
											checked={true}
											setChecked={(e) => console.log(e)}>
										</Checkbox>
									</td>
									: null}
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
			<TableFooter
				size={20}
				page={1}
				total={200}></TableFooter>
		</div>
	)
};

Table.propTypes = {
	columns: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired
};

export default Table;