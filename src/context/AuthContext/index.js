/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { SignIn } from "../../api/Auth";
import { ParseToken, ToggleToken } from "../../utils/jwt";
import { Login, Logout } from "./Actions";
import authorizedEffect from "./effects";
import { initialState, reducer } from "./reducer";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    authorizedEffect(dispatch);
  }, []);

  async function login(username, password) {
    const response = await SignIn(username, password);
    const { token } = response;
    ToggleToken(token);
    const parser = ParseToken(token);
    dispatch(Login(parser.payload));
    return response;
  }

  function logout() {
    ToggleToken();
    dispatch(Logout());
  }

  if (!state.isInitialized) {
    <h1>Loading...</h1>;
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Invalid cotnext");
  }
  return context;
}

export { useAuth, AuthContextProvider };
