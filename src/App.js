import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './routes/home';
import Business from './routes/business';
import Sports from './routes/sports';
import Entertainment from './routes/entertainment';
import Science from './routes/science';
import Health from './routes/health';
import SignIn from './routes/signin';

import './App.css';


class App extends Component {
 render(){
  return (
      <Router>
          <Route exact path="/" component={SignIn} />

      <Route  path="/home" component={Home} />
      <Route path="/business" component={Business}/>
      <Route path="/sports" component={Sports} />
      <Route path="/entertainment" component={Entertainment} />
      <Route path="/science" component={Science} />
      <Route path="/health" component={Health} />
      </Router>
  
  );
 }
}

export default App;
