import React from "react";

import DrPepper from './DrPepper';
import Skittles from './Skittles';
import MilkyWay from './MilkyWay';
import VendingMachine from './VendingMachine';

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
        <VendingMachine />
      </Route>
      <Route exact path="/chocolate">
        <MilkyWay />
      </Route>
      <Route exact path="/sweets">
        <Skittles />
      </Route>
      <Route exact path="/soda">
        <DrPepper />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
