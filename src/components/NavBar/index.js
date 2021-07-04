import React from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  ROUTE_PAGE_DASHBOARD,
  ROUTE_PAGE_FAVORITES,
  ROUTE_PAGE_SEARCH,
} from "../../constants/routes";

function NavBar() {
  const { logout } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.headers}>
        <NavLink activeStyle={{ color: "red" }} to={ROUTE_PAGE_DASHBOARD}>
          Dashboard
        </NavLink>
        <NavLink activeStyle={{ color: "red" }} to={ROUTE_PAGE_SEARCH}>
          Search
        </NavLink>
        <NavLink activeStyle={{ color: "red" }} to={ROUTE_PAGE_FAVORITES}>
          Favourites
        </NavLink>
      </div>
      <div className={styles.logout}>
        <button onClick={logout}>Log Out</button>
      </div>
    </div>
  );
}

export default NavBar;
