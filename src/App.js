import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Loading from "./pages/Loading/Loading";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.scss";
function App({ location }) {
  var title =
    location.pathname === "/" ? "Titles" : location.pathname.replace("/", "");
  title = "Popular " + title.charAt(0).toUpperCase() + title.slice(1);
  console.log(title);
  return (
    <div className="app">
      <Header pageName={title} />
      <div className="main-app">
        <div className="margin-div-left" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/series" exact component={Series} />
          <Route path="/loading" exact component={Loading} />
          <Route path="/error" exact component={Error} />
        </Switch>
        <div className="margin-div-right" />
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(App);
