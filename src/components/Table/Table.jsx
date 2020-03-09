import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './Cells/TableCell';
import TableCellHeader from './Cells/TableCellHeader';
import Checkbox from '../Checkboxes/Checkbox/Checkbox';
import TableFooter from './Footer/TableFooter';
import { SORT } from '../../enums/sort';

const Table = ({ columns, data, selected, check = false, sort, search, size, sizes, page, total, changeSelected, changeSelectedAll, changeSort, changeSize, changePage, changeSearchValue }) => {
	const handleRowClick = (item) => {
		if (check) {
			changeSelected(item);
		}
	}

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
										checked={selected.length > 0 && selected.length === data.length}
										indeterminate={selected.length > 0 && selected.length < data.length}
										setChecked={() => changeSelectedAll()}>
									</Checkbox>
								</th>
								: null}
							{columns.map((column) => (
								<TableCellHeader
									key={column.id}
									content={column.label}
									value={column.id}
									sort={sort}
									sortable={column.sortable}
									searchable={column.searchable}
									search={search}
									changeSort={changeSort}
									changeSearchValue={changeSearchValue} />
							))}
						</tr>
					</thead>
					<tbody className="sftk-table__body">
						{data.map((row) => (
							<tr
								key={row.id}
								className={`sftk-table__row sftk-table__row--normal ${check ? 'checkable' : ''}`}
								onClick={() => handleRowClick(row)}>
								{check ?
									<td className="sftk-table__cell">
										<Checkbox
											value={row.id}
											checked={!!selected.find((item) => row.id === item.id)}
											setChecked={() => changeSelected(row)}>
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
				size={size}
				sizes={sizes}
				page={page}
				total={total}
				changePage={changePage}
				changeSize={changeSize}></TableFooter>
		</div>
	)
};

Table.propTypes = {
	columns: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
	selected: PropTypes.array,
	check: PropTypes.bool,
	sort: PropTypes.shape({
		active: PropTypes.string,
		direction: PropTypes.oneOf([SORT.ASC, SORT.DESC])
	}),
	search: PropTypes.shape({
		active: PropTypes.string,
		term: PropTypes.string,
	}),
	size: PropTypes.number.isRequired,
	sizes: PropTypes.array.isRequired,
	page: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	changeSelected: PropTypes.func,
	changeSelectedAll: PropTypes.func,
	changeSort: PropTypes.func,
	changeSize: PropTypes.func,
	changePage: PropTypes.func,
	changeSearchValue: PropTypes.func,
};

export default Table;