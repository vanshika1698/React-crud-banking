import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
function App(props) {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
