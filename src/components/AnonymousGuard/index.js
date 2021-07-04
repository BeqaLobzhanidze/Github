import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import { ROUTE_PAGE_DASHBOARD } from "../../constants/routes";
import PropTypes from "prop-types";

function AnonymousGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <Redirect
        to={
          localStorage.getItem("path")
            ? localStorage.getItem("path")
            : ROUTE_PAGE_DASHBOARD
        }
      />
    );
  }
  return <>{children}</>;
}

AnonymousGuard.propTypes = {
  children: PropTypes.node,
};

export default AnonymousGuard;
