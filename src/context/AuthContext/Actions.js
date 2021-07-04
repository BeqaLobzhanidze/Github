import { AUTH_INITIALIZED, AUTH_LOGIN, AUTH_LOGOUT } from "./constants";

function Initialize(isAuthenticated, user) {
  return {
    type: AUTH_INITIALIZED,
    payload: {
      isAuthenticated,
      user,
    },
  };
}

function Login(user) {
  return {
    type: AUTH_LOGIN,
    payload: {
      user,
    },
  };
}

function Logout() {
  return {
    type: AUTH_LOGOUT,
  };
}

export { Initialize, Login, Logout };
