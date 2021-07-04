import React from "react";
import ROUTERS_CONFIG from "../config/routes";
import { Switch, Route } from "react-router-dom";

function RoutingPages() {
  return (
    <Switch>
      {ROUTERS_CONFIG.map((item) => {
        const Page = item.page;
        const Guard = item.guard;
        return (
          <Route
            key={item.path}
            path={item.path}
            exact={item.exact}
            render={(props) => (
              <Guard>
                <Page {...props} />
              </Guard>
            )}
          />
        );
      })}
      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
  );
}

export default RoutingPages;
