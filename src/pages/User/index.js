import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import styles from "./User.module.css";
import { useParams } from "react-router-dom";
import FetchEachUser from "../../api/FetchEachUser";
import ToggleFavorite from "../../components/ToggleFavorite";
import Hashloader from "react-spinners/HashLoader";

function User() {
  const { watchers, repos, organisation, setWatchers } = useUser();

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!watchers.followers) {
      setLoading(true);
      FetchEachUser(id)
        .then((data) =>
          setWatchers({
            followers: data.followers,
            followings: data.following,
            username: id,
            url: data.avatar_url,
          })
        )
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }
    localStorage.setItem("path", `/user/${id}`);
  }, []);

  return (
    <div className={styles.container}>
      {error && <h1>{error}</h1>}
      {loading ? (
        <div className={styles.wrapper}>
          <Hashloader color={"green"} size={50} />
        </div>
      ) : (
        <>
          <div className={styles.leftside}>
            <div className={styles.image}>
              <img src={watchers.url} alt="asd" />
            </div>
            <div>
              <ToggleFavorite username={watchers.username} url={watchers.url} />
            </div>
            <div className={styles.list}>
              <h3>
                <span>Username - </span>
                {watchers.username}
              </h3>
              <h3>
                <span>Followers - </span>
                {watchers.followers}
              </h3>
              <h3>
                <span>Followings - </span>
                {watchers.followings}
              </h3>
            </div>
            <div className={styles.orgs}>
              {organisation.length != 0 ? (
                <>
                  {organisation.map((item) => (
                    <img
                      key={item.avatar_url}
                      src={item.avatar_url}
                      alt={"orgs pic"}
                    />
                  ))}
                </>
              ) : (
                <h1>There are no Organisation</h1>
              )}
            </div>
          </div>
          <div className={styles.rightside}>
            <div className={styles.repos}>Repos</div>
            {repos.length != 0 ? (
              <>
                {repos.map((item) => (
                  <div key={item.id}>
                    <a href={item.html_url}>{item.name}</a>
                  </div>
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default User;
