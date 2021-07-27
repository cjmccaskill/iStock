import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Stock from "./pages/Stock";
import Dashboard from "./pages/Dashboard";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route
          path="/stock/:symbol"
          render={(routerProps) => {
            return <Stock {...routerProps} />;
          }}
        />
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
