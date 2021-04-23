import { CssBaseline } from "@material-ui/core";
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Fragment>
              <HomePage {...props} />
              <Footer {...props} />
            </Fragment>
          )}
        />
      </Switch>
      <Redirect to="/" />
    </Router>
  );
};

export default App;
