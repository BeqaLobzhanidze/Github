import React, { useEffect, useState } from "react";
import FetchEachUser from "../../api/FetchEachUser";
import User from "../../components/User";
import { ROUTE_PAGE_SEARCH } from "../../constants/routes";
import styles from "./Search.module.css";
import HashLoader from "react-spinners/HashLoader";

function Search() {
  const [name, setName] = useState("");
  const [user, setUser] = useState([]);
  const [counter, setCounter] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (counter != -1) {
      setLoading(true);
      FetchEachUser(name)
        .then((data) => setUser(data))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }
  }, [counter]);

  useEffect(() => {
    localStorage.setItem("path", ROUTE_PAGE_SEARCH);
  }, []);

  return (
    <div className={styles.container}>
      {error && <h1>{error}</h1>}
      {loading ? (
        <div className={styles.wrapper}>
          <HashLoader color={"green"} size={50} />
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="search user"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => setCounter(counter + 1)}>search</button>
          {user.length != 0 ? (
            <User className={styles.User} property={user} />
          ) : null}
        </>
      )}
    </div>
  );
}

export default Search;
