import {
  CREATE_BOOK,
  GET_BOOK_LIST,
  GET_BOOK_LIST_SUCCESS,
  GET_BOOK_DETAIL,
  GET_BOOK_DETAIL_SUCCESS,
  UPDATE_BOOK_DETAIL,
  DELETE_BOOK,
} from '../constants/ActionTypes';

let initialState = {
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        createBook: action.payload.data || []
      }
    case GET_BOOK_LIST_SUCCESS:
      return {
        ...state,
        bookList: action.payload.data || []
      }
    case GET_BOOK_DETAIL:
      return {
        ...state,
        bookDetail: action.payload.data || []
      }
    case GET_BOOK_DETAIL_SUCCESS:
      return {
        ...state,
        bookDetail: action.payload.data || []
      }
    case UPDATE_BOOK_DETAIL:
      return {
        ...state,
        updateBookDetail: action.payload.data.results || []
      }
    case DELETE_BOOK:
      return {
        ...state,
        deleteBook: action.payload.data.results || []
      }

      default:
  }

  return state;
};
