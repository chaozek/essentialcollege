import "./App.css";
import Coverscreen from "./pages/Coverscreen";
import Doma from "./pages/Doma";
import Error from "./pages/Error";
import Uchazeči from "./pages/Uchazeči";
import Sponzoři from "./pages/Sponzoři";
import Katedry from "./pages/Katedry";
import Soutez from "./pages/Soutez";
import HttpsRedirect from "react-https-redirect";
import React, { useLayoutEffect } from "react";
import ScrollToTop from "react-router-scroll-top";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <HttpsRedirect>
          <Switch>
            <Route exact path="/" component={Coverscreen}></Route>
            <Route exact path="/doma" component={Doma}></Route>
            <Route exact path="/Uchazeči" component={Uchazeči}></Route>
            <Route exact path="/katedry" component={Katedry}></Route>
            <Route exact path="/sponzori" component={Sponzoři}></Route>
            <Route exact path="/soutez" component={Soutez}></Route>
            <Route path="*" component={Error} />
          </Switch>
        </HttpsRedirect>
      </ScrollToTop>
    </Router>
  );
}

export default App;
