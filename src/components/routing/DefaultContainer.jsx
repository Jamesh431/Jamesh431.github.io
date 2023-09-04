import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
import LandingPage from "../pages/LandingPage";
import Github from "../pages/Github";
import About from "../pages/About";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function DefaultContainer() {
  return (
    <Router>
      <Route component={Navbar} />

      <Switch>
        <Redirect exact from="/" to="home" />

        <Route exact path="/home" component={LandingPage} />
        <Route path="/github" component={Github} />
        <Route path="/about" component={About} />
      </Switch>

      <Footer />
    </Router>
  );
}
