import axios from 'axios';
import { API_URL } from '../../const';
import {
	getListsStart,
	getListsSuccess,
	getListsFailure,
	createListsStart,
	createListsSuccess,
	createListsFailure,
	// updateListsStart,
	// updateListsSuccess,
	// updateListsFailure,
	deleteListsStart,
	deleteListsSuccess,
	deleteListsFailure,
} from './ListActions';

// GET ALL LISTS
export const getLists = async (dispatch) => {
	dispatch(getListsStart());

	try {
		const res = await axios.get(API_URL + '/lists', {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
			},
		});

		dispatch(getListsSuccess(res.data.lists));
	} catch (error) {
		dispatch(getListsFailure());
	}
};

// CREATE
export const createList = async (list, dispatch) => {
	dispatch(createListsStart());

	try {
		const res = await axios.post(API_URL + '/lists', list, {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
			},
		});

		dispatch(createListsSuccess({ ...res.data.list }));
	} catch (error) {
		dispatch(createListsFailure());
	}
};

// DELETE
export const deleteList = async (id, dispatch) => {
	dispatch(deleteListsStart());

	try {
		await axios.delete(API_URL + '/lists/' + id, {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
			},
		});

		dispatch(deleteListsSuccess(id));
	} catch (error) {
		dispatch(deleteListsFailure());
	}
};

// UPDATE
// export const updateList = async (list, dispatch) => {
// 	dispatch(updateListsStart());

// 	try {
// 		const res = await axios.put(API_URL + '/lists/' + list._id, list, {
// 			headers: {
// 				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
// 			},
// 		});

// 		dispatch(updateListsSuccess({ ...res.data.list }));
// 	} catch (error) {
// 		dispatch(updateListsFailure());
// 	}
// };
