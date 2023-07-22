import React from "react";
import { BrowserRouter as ROUTES, Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import "./App.css";
// import NavigationBar from "./components/NavigationBar";
// import WebPlayback from "./pages/WebPlayback/WebPlayback";
// import LoginForm from "../components/LoginForm/LoginForm";
// import SignUpForm from "../components/SignUpForm/SignUpForm";
import Nav from "./components/Nav";
import Main from "../Main";

const App = () => {
  const { isLoading } = useAuth();

  return isLoading ? (
    <h1>hold on, loading...</h1>
  ) : (
    <div className="container">
      <Router>
        <NavigationBar />
        <Nav />
        <Switch>
          <Route path="/Nav">
            {/* <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
            <Route path={ROUTES.LOGIN} component={LoginForm} />
            <Route path={ROUTES.WEB_PLAYBACK} component={WebPlayback} /> */}
            <Route path={ROUTES.MAIN} component={Main} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
};

export default App;
