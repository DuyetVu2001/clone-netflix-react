import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { userRows } from '../../dummyData';
import './style.scss';

const Users = () => {
	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 88 },
		{
			field: 'user',
			headerName: 'User',
			width: 300,
			renderCell: (params) => (
				<div className="users__user-list">
					<img src={params.row.avatar} alt={params.row.username} />
					{params.row.username}
				</div>
			),
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 320,
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 160,
		},
		{
			field: 'transaction',
			headerName: 'Transaction',
			sortable: true,
			width: 168,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 120,
			renderCell: (params) => (
				<div className="users__edit-user">
					<Link to={'/user/' + params.row.id}>
						<button>Edit</button>
					</Link>
					<DeleteOutline
						className="icon"
						onClick={() => handleDelete(params.row.id)}
					/>
				</div>
			),
		},
	];

	return (
		<div className="users">
			<DataGrid
				style={{ fontSize: '1.8rem', outline: 'none' }}
				rows={data}
				columns={columns}
				disableSelectionOnClick
				autoHeight
				rowsPerPageOptions={[13]}
				pageSize={13}
			/>
		</div>
	);
};

export default Users;
