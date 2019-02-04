import React from 'react';
import {AuthContext} from '../auth/auth-context';
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...rest}) => (
    <AuthContext.Consumer>
        {({ user }) => {
           return <Route
                render={
                    props =>
                        user
                            ? <Component {...props} />
                            : <Redirect to="/auth/sign-in" />
                }
                {...rest}
            />
        }}
    </AuthContext.Consumer>
);
export default ProtectedRoute;
