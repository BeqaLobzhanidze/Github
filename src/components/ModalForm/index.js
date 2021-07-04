/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./ModalForm.module.css";
import { useFav } from "../../context/FavContext";
import PropTypes from "prop-types";

function ModalForm({ property, setShowModal }) {
  const { setFavorites } = useFav();

  function deleteFavorites() {
    setFavorites((prev) =>
      prev.filter((item) => item.username != property.username)
    );
  }
  return (
    <div className={styles.container}>
      <h1>You really want to delete {property.username}?</h1>
      <div className={styles.buttons}>
        <button onClick={deleteFavorites}>Yes</button>
        <button onClick={() => setShowModal(false)}>No</button>
      </div>
    </div>
  );
}

ModalForm.propTypes = {
  property: PropTypes.object,
  setShowModal: PropTypes.func,
};

export default ModalForm;
