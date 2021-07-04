import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import FetchRepos from "../../api/FetchRepos";
import FetchOrgs from "../../api/FetchOrgs";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [watchers, setWatchers] = useState({
    follwers: "",
    followings: "",
    username: "",
    url: "",
  });

  const [repos, setRepos] = useState([]);
  const [organisation, setOrganisation] = useState([]);

  useEffect(() => {
    if (watchers.username) {
      FetchRepos(watchers.username).then((data) => setRepos(data));
      FetchOrgs(watchers.username).then((data) => setOrganisation(data));
    }
  }, [watchers.username]);

  return (
    <UserContext.Provider
      value={{ watchers, setWatchers, repos, organisation }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("");
  }
  return context;
}

UserContextProvider.propTypes = {
  children: PropTypes.node,
};

export { UserContextProvider, useUser };
