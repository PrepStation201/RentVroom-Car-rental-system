import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./pages/CarListing";
import BookingForm from "./pages/BookingForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import ProductDetails from "./pages/CarDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/cars/:productId" component={ProductDetails} />
          <Route path="/form/:productId" component={BookingForm} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
