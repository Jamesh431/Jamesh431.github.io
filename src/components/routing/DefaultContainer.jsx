import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import initIcons from "../helpers/icons";
import Navbar from "../navigation/Navbar";
import LandingPage from "../pages/LandingPage";
import Github from "../pages/Github";
import About from "../pages/About";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function DefaultContainer() {
  initIcons();
  return (
    <Router>
      <Route component={Navbar} />

      <Switch>
        <Route exact path="/Portfolio" component={LandingPage} />
        <Route path="/Portfolio/github" component={Github} />
        <Route path="/Portfolio/about" component={About} />
      </Switch>
    </Router>
  );
}
