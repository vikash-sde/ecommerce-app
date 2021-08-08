import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./container/ProductListing";
import Header from "./container/Header";
import "./App.css";
import ProductDetail from "./container/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <ProductListing />
          </Route>
          <Route path="/product/:productId">
            <ProductDetail />
          </Route>
          <Route>404 Not found !</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
