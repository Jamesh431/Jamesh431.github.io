import { Route, Switch } from "react-router-dom";

import "../styles/app.scss";
import Defaultcontainer from "./routing/DefaultContainer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Defaultcontainer}></Route>
      </Switch>
    </div>
  );
}

export default App;
