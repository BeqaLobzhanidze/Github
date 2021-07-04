/* eslint-disable no-unused-vars */
import { AUTH_INITIALIZED, AUTH_LOGOUT, AUTH_LOGIN } from "./constants";

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_INITIALIZED: {
      const { isAuthenticated, user } = action.payload;
      return {
        ...state,
        isAuthenticated,
        user,
        isInitialized: true,
      };
    }
    case AUTH_LOGIN: {
      const { user } = action.payload;
      return {
        ...state,
        user,
        isAuthenticated: true,
      };
    }
    case AUTH_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}

export { reducer, initialState };
