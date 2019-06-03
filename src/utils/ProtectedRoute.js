import React from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';
import routeConstants from './routes.contants';

function ProtectedRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        true || isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: routeConstants.LOGIN,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  location: PropTypes.shape({ pathname: PropTypes.string })
};

ProtectedRoute.defaultProps = {
  isAuthenticated: false,
  location: { pathname: '' }
};

export default ProtectedRoute;
