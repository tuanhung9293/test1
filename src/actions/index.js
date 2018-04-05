import * as types from '../constants/ActionTypes';
import { Cookies } from 'react-cookie';

let getToken = () => {
	const cookies = new Cookies();
	let auth = cookies.get('authState').token || {};
	let header = {
		"Uid": auth['uid'],
		"Access-token": auth['access-token'],
		"Client": auth['client']
	}

	return header;
}


export const userLogin = (data) => (dispatch, getState) => dispatch({
	type: types.USER_LOGIN,
	payload: {
		request: {
			url: '/auth/sign_in',
			method: 'POST',
			data
		}
	}
});

export const userLogout = () => (dispatch, getState) => dispatch({
	type: types.USER_LOGOUT,
	payload: {
		request: {
			url: '/auth/sign_out',
			method: 'DELETE',
			headers: getToken(),
		}
	}
});

export const userRegister = (data = {
	"email": "",
	"password": ""
}) => (dispatch, getState) => dispatch({
	type: types.USER_REGISTER,
	payload: {
		request: {
			url: '/auth',
			method: 'POST',
			data
		}
	}
});

export const updateUserProfile = (data = { "user": { "first_name": "Obama" } }) => (dispatch, getState) => dispatch({
	type: types.UPDATE_USER_PROFILE,
	payload: {
		request: {
			url: '/auth',
			method: 'PUT',
			data,
			headers: getToken(),
		},
	}
});

export const createBook = ( data = {} ) => (dispatch, getState) => dispatch({
	type: types.CREATE_BOOK,
	payload: {
		request: {
			url: '/books',
			method: 'POST',
			data,
			headers: getToken(),
		}
	}
});

export const getBookList = () => (dispatch, getState) => dispatch({
	type: types.GET_BOOK_LIST,
	payload: {
		request: {
			url: '/books',
			method: 'GET',
			headers: getToken(),
		}
	}
});

export const getBookDetail = (id) => (dispatch, getState) => dispatch({
	type: types.GET_BOOK_DETAIL,
	payload: {
		request: {
			url: `/books/${id}`,
			method: 'GET',
			headers: getToken(),
		}
	}
});

export const updateBookDetail = (id) => (dispatch, getState) => dispatch({
	type: types.UPDATE_BOOK_DETAIL,
	payload: {
		request: {
			url: `/books/${id}`,
			method: 'PATCH',
			headers: getToken(),
		}
	}
});

export const deleteBook = (id) => (dispatch, getState) => dispatch({
	type: types.DELETE_BOOK,
	payload: {
		request: {
			url: `/books/${id}`,
			method: 'DELETE',
			headers: getToken(),
		}
	}
});
