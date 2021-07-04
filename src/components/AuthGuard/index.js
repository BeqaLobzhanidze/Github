import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import { ROUTE_PAGE_SIGNIN } from "../../constants/routes";
import PropTypes from "prop-types";

function AuthGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect to={ROUTE_PAGE_SIGNIN} />;
  }
  return <>{children}</>;
}

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;
