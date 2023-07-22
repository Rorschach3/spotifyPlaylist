import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import WebPlayback from "./firebase/pages/WebPlayback/WebPlayback";
import LoginForm from "./components/LoginForm/LoginForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import { useAuth } from "./context/AuthContext";
import Nav from "./components/Nav";
import Main from './Main';

const Mainpage = () => {
  const { isLoading } = useAuth();
  return isLoading ? (
    <h1>hold on, loading...</h1>
  ) : (
    <Router>
      <NavigationBar />
      <Nav />
      <Switch>
        <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
        <Route path={ROUTES.LOGIN} component={LoginForm} />
        <Route path={ROUTES.WebPlayback}component={WebPlayback} />
        <Route path={ROUTES.HOME} component={Main} />
      </Switch>
    </Router>
  );
};

export default Mainpage;