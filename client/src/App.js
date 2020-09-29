import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/Search";

import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
