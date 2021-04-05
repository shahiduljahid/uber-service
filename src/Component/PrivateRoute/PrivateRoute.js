import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { passengerContext } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {
    const[loggedInPassenger, setLoggedInPassenger] = useContext(passengerContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
    loggedInPassenger.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;