import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteMovie, getMovies } from '../../context/movieContext/apiCall';
import { MovieContext } from '../../context/movieContext/MovieContext';
import './style.scss';

const MovieList = () => {
	const { movies, dispatch } = useContext(MovieContext);

	useEffect(() => {
		getMovies(dispatch);
	}, [dispatch]);

	const handleDelete = (id) => {
		deleteMovie(id, dispatch);
	};

	const columns = [
		{ field: '_id', headerName: 'ID', width: 320 },
		{
			field: 'movies',
			headerName: 'Movies',
			width: 360,
			renderCell: (params) => (
				<div className="products__product-list">
					<img src={params.row.thumbnail} alt={params.row.title} />
					{params.row.title}
				</div>
			),
		},
		{
			field: 'genre',
			headerName: 'Genre',
			width: 160,
		},
		{
			field: 'release_year',
			headerName: 'Release year',
			width: 160,
		},
		{
			field: 'age_limit',
			headerName: 'Age limit',
			sortable: true,
			width: 160,
		},
		{
			field: 'is_series',
			headerName: 'Series',
			sortable: true,
			width: 160,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 140,
			renderCell: (params) => (
				<div className="products__edit-product">
					<Link
						to={{ pathname: '/movie/' + params.row._id, movie: params.row }}
					>
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
		<div className="products">
			<DataGrid
				style={{ fontSize: '1.8rem', outline: 'none' }}
				rows={movies}
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

export default MovieList;
