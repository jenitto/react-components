import React, { Fragment } from 'react';
import Table from '../components/Table/Table';

const TableContainer = () => {

	return (
		<Fragment>
			<h1>Table</h1>
			<div className="container">
				<div className="title">Table</div>
				<Table columns={['name', 'label']}></Table>
			</div>
		</Fragment>
	);
};

export default TableContainer;
