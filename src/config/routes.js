import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import {
  ROUTE_PAGE_DASHBOARD,
  ROUTE_PAGE_FAVORITES,
  ROUTE_PAGE_SEARCH,
  ROUTE_PAGE_SIGNIN,
  ROUTE_PAGE_SIGNUP,
  ROUTE_PAGE_USER,
} from "../constants/routes";

import AnonymousGuard from "../components/AnonymousGuard";
import AuthGuard from "../components/AuthGuard";
import User from "../pages/User";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search";

const ROUTERS_CONFIG = [
  {
    path: ROUTE_PAGE_SIGNIN,
    exact: true,
    page: SignIn,
    guard: AnonymousGuard,
  },
  {
    path: ROUTE_PAGE_SIGNUP,
    exact: false,
    page: SignUp,
    guard: AnonymousGuard,
  },
  {
    path: ROUTE_PAGE_DASHBOARD,
    exact: false,
    page: Dashboard,
    guard: AuthGuard,
  },
  {
    path: ROUTE_PAGE_USER,
    exact: false,
    page: User,
    guard: AuthGuard,
  },
  {
    path: ROUTE_PAGE_FAVORITES,
    exact: false,
    page: Favorites,
    guard: AuthGuard,
  },
  {
    path: ROUTE_PAGE_SEARCH,
    exact: false,
    page: Search,
    guard: AuthGuard,
  },
];

export default ROUTERS_CONFIG;
