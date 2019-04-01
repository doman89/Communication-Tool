import React from "react";
import { Route } from "react-router-dom";
import Login from "../components/Login/Login";
import PropTypes from "prop-types";

export default class PrivateRoute extends React.Component {
  render() {
    const Component = this.props.component
    const logged = sessionStorage.logged

    return (
      <Route
        {...this.props}
        component={() => {
          return logged ? (
            <Component />
          ) : (
              <Login setSession={this.props.setSession} path={this.props.path} />
            );
        }}
      />
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  setSession: PropTypes.func,
  path: PropTypes.string
}

