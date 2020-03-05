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
		},
		{
			label: 'Apellidos',
			id: 'surname',
		},
		{
			label: 'Edad',
			id: 'age',
			maxWidth: '12rem',
		},
		{
			label: 'Ciudad',
			id: 'city',
		},
		{
			label: 'Estado',
			id: 'status',
		},
		{
			label: 'Avatar',
			id: 'avatar',
		},
	];

	const [data, setData] = useState([]);

	useEffect(() => {
		const colors = { ok: '#73C480', error: '#E43E42', warning: '#FBD24F' };

		if (users.length) {
			setData(users.map((user) => {
				return {
					...user,
					status: <Chip label={user.description} color={colors[user.status]} />,
					avatar: <TableAvatar name={`${user.name} ${user.surname}`} image={user.avatar} />
				};

				// return {
				// 	...user,
				// 	status: renderChip(user.description, colors[user.status]),
				// 	avatar: renderAvatar(`${user.name} ${user.surname}`, user.avatar)
				// };
			}));
		}
	}, []);

	// const renderChip = (label, color) => <Chip label={label} color={color} />;
	// const renderAvatar = (label, image) => <TableAvatar name={label} image={image} />

	return (
		<Fragment>
			<h1>Table</h1>
			<div className="container">
				<div className="title">Table</div>
				<Table columns={columns} data={data}></Table>
			</div>
		</Fragment>
	);
};

export default TableContainer;
