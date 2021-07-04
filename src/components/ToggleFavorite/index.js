import React, { useEffect } from "react";
import { useFav } from "../../context/FavContext";
import { useUser } from "../../context/UserContext";
import styles from "./ToggleFavorite.module.css";

function ToggleFavorite() {
  const { setFavorites, favorites, setIsFavorite, isFavorite } = useFav();
  const { watchers } = useUser();

  useEffect(() => {
    if (favorites.filter((item) => item.username == watchers.username).length > 0)
      setIsFavorite(true);
    else setIsFavorite(false);
  }, [favorites]);

  function addFavorite() {
    setFavorites((prev) => [
      ...prev,
      {
        username: watchers.username,
        url: watchers.url,
      },
    ]);
  }

  function removeFavorite() {
    setFavorites((prev) =>
      prev.filter((item) => item.username != watchers.username)
    );
  }

  return (
    <div>
      {!isFavorite ? (
        <div className={styles.add}>
          <button onClick={addFavorite}>Add to Favorites</button>
        </div>
      ) : (
        <div className={styles.remove}>
          <button onClick={removeFavorite}>Remove from Favorites</button>
        </div>
      )}
    </div>
  );
}

export default ToggleFavorite;
