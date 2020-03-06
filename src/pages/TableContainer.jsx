import React, { Fragment, useState, useEffect } from 'react';
import Table from '../components/Table/Table';
import { users } from '../database/users';
import Chip from '../components/Chip/Chip';
import TableAvatar from '../components/Table/Avatar/TableAvatar';

const TableContainer = () => {
	const columns = [
		{
			label: 'Nombre',
			id: 'name',
			sortable: true,
			searchable: true,
		},
		{
			label: 'Apellidos',
			id: 'surname',
			sortable: true,
			searchable: false,
		},
		{
			label: 'Edad',
			id: 'age',
			sortable: false,
			searchable: false,
			maxWidth: '12rem',
		},
		{
			label: 'Ciudad',
			id: 'city',
			sortable: false,
			searchable: true,
		},
		{
			label: 'Estado',
			id: 'status',
			sortable: true,
			searchable: true,
		},
		{
			label: 'Avatar',
			id: 'avatar',
			sortable: true,
			searchable: true,
		},
	];

	const [data, setData] = useState([]);

	useEffect(() => {
		const colors = { ok: '#73C480', error: '#E43E42', warning: '#FBD24F' };

		if (users.length) {
			setData(users.map((user) => {
				return {
					...user,
					status: renderChip(user.description, colors[user.status]),
					avatar: renderAvatar(`${user.name} ${user.surname}`, user.avatar)
				};
			}));
		}
	}, []);

	const renderChip = (label, color) => <Chip label={label} color={color} />;
	const renderAvatar = (label, image) => <TableAvatar name={label} image={image} />

	return (
		<Fragment>
			<h1>Table</h1>
			<div className="container">
				<div className="title">Table</div>
				<Table
					columns={columns}
					data={data}
					check={true}>
				</Table>
			</div>
		</Fragment>
	);
};

export default TableContainer;
