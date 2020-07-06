import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Check the user did
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            // if component loading
            if (auth.isLoading) {
                return <h2>Loading...</h2>;
            }
            // if user didnt login yet, redirect to login
            else if (!auth.isAuthenticated) {
                return <Redirect to="/login" />;
            } 
            // default: return the component itself
            else {
                return <Component {...props} />;
            }
        }
        }
    />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);