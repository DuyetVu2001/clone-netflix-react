import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteList, getLists } from '../../context/listContext/apiCall';
import { ListContext } from '../../context/listContext/ListContext';
import './style.scss';

const ListList = () => {
	const { lists, dispatch } = useContext(ListContext);

	useEffect(() => {
		console.log('log');
		getLists(dispatch);
	}, [dispatch]);

	const handleDelete = (id) => {
		deleteList(id, dispatch);
	};

	console.log('lists', lists);

	const columns = [
		{ field: '_id', headerName: 'ID', width: 360 },
		// {
		// 	field: 'content',
		// 	headerName: 'Content',
		// 	width: 160,
		// },
		{
			field: 'title',
			headerName: 'Title',
			sortable: true,
			width: 200,
		},
		{
			field: 'genre',
			headerName: 'Genre',
			width: 160,
		},
		{
			field: 'type',
			headerName: 'Type',
			sortable: true,
			width: 160,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 140,
			renderCell: (params) => (
				<div className="lists__edit-product">
					<Link to={{ pathname: '/list/' + params.row._id, list: params.row }}>
						<button>Edit</button>
					</Link>

					<DeleteOutline
						className="icon"
						onClick={() => handleDelete(params.row._id)}
					/>
				</div>
			),
		},
	];

	return (
		<div className="lists">
			<DataGrid
				style={{ fontSize: '1.8rem', outline: 'none' }}
				rows={lists}
				columns={columns}
				disableSelectionOnClick
				autoHeight
				rowsPerPageOptions={[10]}
				pageSize={10}
				getRowId={(r) => r._id}
			/>
		</div>
	);
};

export default ListList;
