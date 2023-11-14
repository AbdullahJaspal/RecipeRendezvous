import * as types from '../actions/types';
import {AUTH_PENDING, AUTH_ERROR} from '../actions/auth';

const initialState = {
  userData: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};
