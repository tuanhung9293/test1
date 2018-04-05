import {
  USER_REGISTER,
  UPDATE_USER_PROFILE,
} from '../constants/ActionTypes';

let initialState = {
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        userRegister: action.payload.data || []
      }
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        updateUserProfile: action.payload.data.results || []
      }

      default:
  }

  return state;
};
