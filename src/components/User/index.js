import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./User.module.css";
import FetchEachUser from "../../api/FetchEachUser";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";

function User({ property }) {
  const [viewers, setViewers] = useState({
    followers: "",
    followings: "",
    username: "",
    url: "",
  });
  const { setWatchers } = useUser();

  useEffect(() => {
    FetchEachUser(property.login).then((data) =>
      setViewers({
        followers: data.followers,
        followings: data.following,
        username: data.login,
        url: data.avatar_url,
      })
    );
  }, []);

  return (
    <div className={styles.User}>
      <Link
        to={`/user/${viewers.username}`}
        onClick={() => {
          setWatchers({
            followers: viewers.followers,
            followings: viewers.followings,
            username: viewers.username,
            url: viewers.url,
          });
        }}
      >
        <div className={styles.img}>
          <img src={property.avatar_url} alt="users avatar" />
        </div>
        {viewers ? (
          <>
            <h1>Username : {property.login}</h1>
            <h1>Followers : {viewers.followers}</h1>
            <h1>Followings : {viewers.followings}</h1>
          </>
        ) : (
          <h1>null</h1>
        )}
      </Link>
    </div>
  );
}

User.propTypes = {
  property: PropTypes.object.isRequired,
};

export default User;
