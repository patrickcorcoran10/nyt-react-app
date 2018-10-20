import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Start from "./components/Start";

const App = () =>
  <Router>
    <div>
      <Route path="/" component={Start} />
    </div>
  </Router>;

export default App;
