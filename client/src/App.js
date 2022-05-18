import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import ControlledTabs from "./Components/Tabs.js";
import UpdateInventory from "./Components/UpdateInventory.js";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <ControlledTabs />
          </Route>
          <Route exact path='/:id' >
            <UpdateInventory />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}


export default App;