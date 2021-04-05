import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Alert } from "./components/Alert/Alert";
import { AlerState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/fireBasa/FirebaseState";

function App() {
  return (
    <FirebaseState>
      <AlerState>
        <BrowserRouter>

          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/about'} exact component={About} />
            </Switch>
          </div>

        </BrowserRouter>
      </AlerState>
    </FirebaseState>
  );
}

export default App;
