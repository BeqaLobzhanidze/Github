/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import FetchUsers from "../../api/FetchUsers";
import User from "../../components/User";
import { ROUTE_PAGE_DASHBOARD } from "../../constants/routes";
import styles from "./Dashboard.module.css";
import Hashloader from "react-spinners/HashLoader";
// import { ROUTE_PAGE_DASHBOARD } from "../../constants/routes";

function Dashboard() {
  const [popularUsers, setPopularUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(20);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    FetchUsers(usersCount)
      .then((data) => {
        if (isMounted) setPopularUsers(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));

    return () => (isMounted = false);
  }, [usersCount]);

  useEffect(() => {
    localStorage.setItem("path", ROUTE_PAGE_DASHBOARD);
  }, []);

  return (
    <main className={styles.main}>
      {error && <h1>{error}</h1>}
      {loading ? (
        <div className={styles.wrapper}>
          <Hashloader size={50} color={"green"} />
        </div>
      ) : (
        <>
          {popularUsers.length != 0 ? (
            <section className={styles.container}>
              {popularUsers.map((item) => (
                <User key={item.id} property={item} />
              ))}
            </section>
          ) : (
            <h1>Loading...</h1>
          )}

          <div className={styles.buttonContainer}>
            <button
              onClick={() => setUsersCount(usersCount + 20)}
              className={styles.loadmore}
            >
              Load More
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default Dashboard;
