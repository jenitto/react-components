import React, { Fragment, useState, useEffect } from 'react';
import Table from '../components/Table/Table';
import { users } from '../database/users';
import Chip from '../components/Chip/Chip';
import TableAvatar from '../components/Table/Avatar/TableAvatar';
import { SORT } from '../enums/sort';
import useDebounce from '../hooks/useDebounce';

const TableContainer = () => {
    const sizes = [20, 50, 100];

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
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(sizes[0]);
    const [sort, setSort] = useState({ active: 'name', direction: SORT.ASC });
    const [search, setSearch] = useState({ active: '', term: '' });
    const debouncedSearchTerm = useDebounce(search, 500);

    useEffect(() => {
        const colors = { ok: '#73C480', error: '#E43E42', warning: '#FBD24F' };

        if (users.length) {
            setData(
                users.map((user) => {
                    return {
                        ...user,
                        status: renderChip(user.description, colors[user.status]),
                        avatar: renderAvatar(`${user.name} ${user.surname}`, user.avatar),
                    };
                }),
            );
        }
    }, []);

    useEffect(() => {
        if (debouncedSearchTerm.term) {
            console.log('search request:', debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);

    const changeSelected = (item) => {
        if (selected.find((a) => a.id === item.id)) {
            setSelected(selected.filter((a) => a.id !== item.id));
        } else {
            setSelected([...selected, item]);
        }
    };

    const changeSelectedAll = () => {
        if (selected.length === data.length) {
            setSelected([]);
        } else {
            setSelected([...data]);
        }
    };

    const changeSearchValue = (searchEvent) => {
        setSearch(searchEvent);
    };

    const renderChip = (label, color) => <Chip label={label} color={color} />;
    const renderAvatar = (label, image) => <TableAvatar name={label} image={image} />;

    return (
        <Fragment>
            <h1>Table</h1>
            <div className='container'>
                <div className='title'>Table</div>
                <Table
                    columns={columns}
                    data={data}
                    selected={selected}
                    check={true}
                    sort={sort}
                    search={search}
                    size={size}
                    sizes={sizes}
                    page={page}
                    total={200}
                    changeSelected={changeSelected}
                    changeSelectedAll={changeSelectedAll}
                    changeSort={setSort}
                    changeSize={(e) => {
                        setSize(e);
                        setPage(1);
                    }}
                    changePage={(e) => setPage(e)}
                    changeSearchValue={(e) => changeSearchValue(e)}
                ></Table>
            </div>
        </Fragment>
    );
};

export default TableContainer;
