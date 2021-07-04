import RoutingPages from "./routes/RoutingPages";
import { useAuth } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { FavContextProvider } from "./context/FavContext";
import NavBar from "./components/NavBar";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <UserContextProvider>
      <FavContextProvider>
        <Router>
          {isAuthenticated ? <NavBar /> : null}
          <RoutingPages />
        </Router>
      </FavContextProvider>
    </UserContextProvider>
  );
}

export default App;
