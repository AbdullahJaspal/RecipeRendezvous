import * as types from '../actions/types';
import {AUTH_PENDING, AUTH_ERROR} from '../actions/auth';

const initialState = {
  userData: {},
  recipies: [],
  allRecipies: [],
  breakfast: [],
  baking: [],
  budgeted: [],
  dinerToLuch: [],
  health: [],
  others: [],
  quickluch: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case types.SAVE_RECIPIES:
      return {
        ...state,
        // baking: action.payload.baking,
        breakfast: action.payload.breakfast,
        quickluch: action.payload.quickLunch,
        dinerToLuch: action.payload.dinerToLunch,
        // health: action.payload.health,
        // budgeted: action.payload.budgeted,
        // others: action.payload.others,
      };
    case types.SAVE_ALL_RECIPIES:
      return {
        ...state,
        allRecipies: action.payload,
      };
    case types.SAVE_BREAKFAST_RECIPIES:
      return {
        ...state,
        breakfast: action.payload,
      };
    case types.SAVE_LUNCH_RECIPIES:
      return {
        ...state,
        quickluch: action.payload,
      };
    case types.SAVE_DINNER_RECIPIES:
      return {
        ...state,
        dinerToLuch: action.payload,
      };
    default:
      return state;
  }
};
