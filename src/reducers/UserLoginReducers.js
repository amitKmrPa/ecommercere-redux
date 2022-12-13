import { USER_LOGIN } from "../actions/ActionType";

const userState = {
  userDetails: [],
};

export const UserLoginReducers = (state = userState, action) => {
// alert();
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};