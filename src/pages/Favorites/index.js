import React, { useEffect } from "react";
import { useFav } from "../../context/FavContext";
import FavoriteUser from "../../components/FavoriteUser";
import { ROUTE_PAGE_FAVORITES } from "../../constants/routes";
import styles from "./Favorites.module.css";

function Favorites() {
  const { favorites } = useFav();

  useEffect(() => {
    localStorage.setItem("path", ROUTE_PAGE_FAVORITES);
  }, []);

  return (
    <div className={styles.container}>
      {favorites ? (
        <>
          {favorites.map((item) => (
            <div key={item.username}>
              <FavoriteUser property={item} />
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default Favorites;
