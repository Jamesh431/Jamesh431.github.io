import { BrowserRouter as Route, Router, Switch } from "react-router-dom";

import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
import LandingPage from "../pages/LandingPage";
import Github from "../pages/Github";
import About from "../pages/About";

export default function DefaultContainer() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/github" component={Github} />
          <Route path="/about" component={About} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}
