import React from "react";
import SignInForm from "../../components/SignInForm";
import PropTypes from "prop-types";
import styles from "./SignIn.module.css"

function SignIn({ location }) {
  const { state } = location;

  return (
    <div className={styles.cotnainer}>
      {/* <h1>
        {state?.success && (
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>
            Sign In Succesfully
          </h3>
        )}
      </h1> */}
      <SignInForm state={state}/>
    </div>
  );
}

SignIn.propTypes = {
  location: PropTypes.object,
};

export default SignIn;
