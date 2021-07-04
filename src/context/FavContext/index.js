/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const favContext = createContext();

function FavContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(true);

  return (
    <favContext.Provider
      value={{
        favorites,
        setFavorites,
        setIsFavorite,
        isFavorite,
      }}
    >
      {children}
    </favContext.Provider>
  );
}

function useFav() {
  const context = useContext(favContext);
  if (!context) throw new Error("");

  return context;
}

FavContextProvider.propTypes = {
  children: PropTypes.node,
};

export { useFav, FavContextProvider };
