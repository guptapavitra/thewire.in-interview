import React from "react";
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from './fakeAuth';

const AuthRoute = ({component: Component, authed, ...rest}) => {
  fakeAuth.authenticate();

  return (
    <Route
      {...rest}
      render={(props) => fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export default AuthRoute;
