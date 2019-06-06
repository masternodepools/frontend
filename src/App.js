import React from 'react';
import { Route, Switch } from 'react-router';
import ProtectedRoute from './utils/ProtectedRoute';
import routesConstants from './utils/routes.contants';
import { Home, Login, Profile, Wallet, Header } from './views';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <ProtectedRoute exact path={routesConstants.HOME} component={Home} />
        <ProtectedRoute
          exact
          path={routesConstants.WALLET}
          component={Wallet}
        />
        <ProtectedRoute
          exact
          path={routesConstants.PROFILE}
          component={Profile}
        />
        <Route
          exact
          path={routesConstants.LOGIN}
          render={props => <Login {...props} />}
        />
        <Route render={() => <div>Missing</div>} />
      </Switch>
    </>
  );
}

export default App;
