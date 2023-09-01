import React from "react";
import ReactDom from "react-dom/client";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./components/App";
// import styles here when they are created

const history = createBrowserHistory();

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>
);
