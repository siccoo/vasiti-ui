import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/home/Home";
import Message from "./pages/message/Message";
import Share from "./pages/share/Share";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/message" component={Message} />
          <Route path="/share" component={Share} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
