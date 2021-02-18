import logo from "./logo.svg";
import "./App.css";
import Coverscreen from "./pages/Coverscreen";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Coverscreen />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
