import React, { useEffect, useState } from "react";
import {
  ROUTE_PAGE_DASHBOARD,
  ROUTE_PAGE_SIGNUP,
} from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";
import styles from "./SignInForm.module.css";
import { Link } from "react-router-dom";
import Hashloader from "react-spinners/HashLoader";
import PropTypes from "prop-types";

function SignInForm({state}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState("");
  const [effect, setEffect] = useState(-1);

  const { login } = useAuth();

  function handleClick(e) {
    e.preventDefault();
    setEffect(effect + 1);
  }

  useEffect(() => {
    let isMounted = true;
    if (effect != -1) {
      setLoading(true);
      login({ username, password })
        .then(() => {
          if (isMounted) setLoading(true);
        })
        .catch((error) => setError(error.response.data.message));
      localStorage.setItem("path", ROUTE_PAGE_DASHBOARD);
    }

    return () => (isMounted = false);
  }, [effect]);

  return (
    <main className={styles.container}>
<form className={styles.form}>
      {errors && (
        <>
          <h4 style={{ color: "red" , width:"300px" }}>{errors}</h4>
        </>
      )}
      {(loading && !errors) ? (
        <Hashloader size={50} color={"green"} />
      ) : (
        <>
          <h1>
        {state?.success && (
          <h3 style={{ textAlign: "center", marginTop: "20px" , color:"red" }}>
            Sign In Succesfully
          </h3>
        )}
      </h1>
          <div className={styles.input}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.cont}>
            <button className={styles.SignIn} onClick={(e) => handleClick(e)}>
              Sign In
            </button>
            <Link to={ROUTE_PAGE_SIGNUP}>
              <button className={styles.SignUp}>Sign Up</button>
            </Link>
          </div>
        </>
      )}
    </form>
    </main>
    
  );
}

SignInForm.propTypes = {
  state : PropTypes.object
}

export default SignInForm;
