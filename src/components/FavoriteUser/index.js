import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./FavoriteUser.module.css";
import Modal from "../Modal";
import ModalForm from "../ModalForm";

function FavoriteUser({ property }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={property.url} alt="avatar" />
      </div>
      <h1 style={{color:"white"}}>{property.username}</h1>
      <div>
        <button onClick={() => setShowModal(true)}>Delete</button>
      </div>
      {showModal && (
        <Modal>
          <ModalForm property={property} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}

FavoriteUser.propTypes = {
  property: PropTypes.object,
};

export default FavoriteUser;
