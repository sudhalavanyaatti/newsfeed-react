import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/home";
import Business from "./routes/business";
import Sports from "./routes/sports";
import Entertainment from "./routes/entertainment";
import Science from "./routes/science";
import Health from "./routes/health";
import Technology from "./routes/technology";
import Find from "./routes/find";
import Search from "./routes/search";

import InBusiness from "./routes/in-business";
import InSports from "./routes/in-sports";
import InEntertainment from "./routes/in-entertainment";
import InScience from "./routes/in-science";
import InHealth from "./routes/in-health";
import InTechnology from "./routes/in-technology";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/business" component={Business} />
        <Route path="/sports" component={Sports} />
        <Route path="/entertainment" component={Entertainment} />
        <Route path="/science" component={Science} />
        <Route path="/health" component={Health} />
        <Route path="/technology" component={Technology} />
        <Route path="/search" component={Search} />
        <Route path="/find" component={Find} />

        <Route path="/in-technology" component={InTechnology} />
        <Route path="/in-business" component={InBusiness} />
        <Route path="/in-sports" component={InSports} />
        <Route path="/in-entertainment" component={InEntertainment} />
        <Route path="/in-science" component={InScience} />
        <Route path="/in-health" component={InHealth} />
      </Router>
    );
  }
}

export default App;
