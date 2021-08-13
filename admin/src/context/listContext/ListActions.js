import {
	GET_LISTS_START,
	GET_LISTS_SUCCESS,
	GET_LISTS_FAILURE,
	CREATE_LISTS_START,
	CREATE_LISTS_SUCCESS,
	CREATE_LISTS_FAILURE,
	UPDATE_LISTS_START,
	UPDATE_LISTS_SUCCESS,
	UPDATE_LISTS_FAILURE,
	DELETE_LISTS_START,
	DELETE_LISTS_SUCCESS,
	DELETE_LISTS_FAILURE,
} from '../contextConst';

// GET
export const getListsStart = () => ({
	type: GET_LISTS_START,
});

export const getListsSuccess = (list) => ({
	type: GET_LISTS_SUCCESS,
	payload: list,
});

export const getListsFailure = () => ({
	type: GET_LISTS_FAILURE,
});

// CREATE
export const createListsStart = () => ({
	type: CREATE_LISTS_START,
});

export const createListsSuccess = (list) => ({
	type: CREATE_LISTS_SUCCESS,
	payload: list,
});

export const createListsFailure = () => ({
	type: CREATE_LISTS_FAILURE,
});

// UPDATE
export const updateListsStart = () => ({
	type: UPDATE_LISTS_START,
});

export const updateListsSuccess = (list) => ({
	type: UPDATE_LISTS_SUCCESS,
	payload: list,
});

export const updateListsFailure = () => ({
	type: UPDATE_LISTS_FAILURE,
});

// DELETE
export const deleteListsStart = () => ({
	type: DELETE_LISTS_START,
});

export const deleteListsSuccess = (id) => ({
	type: DELETE_LISTS_SUCCESS,
	payload: id,
});

export const deleteListsFailure = () => ({
	type: DELETE_LISTS_FAILURE,
});
