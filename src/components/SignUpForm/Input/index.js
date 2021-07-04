import React from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";

function Input({ value, type, setUser, user }) {
  return (
    <div className={styles.input}>
      <label htmlFor={value}>{value}</label>
      <input
        type={type}
        id={value}
        name={value}
        placeholder={value}
        value={user.value}
        onChange={(e) => {
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }}
      />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  setUser: PropTypes.func,
  user: PropTypes.object,
};

export default Input;
