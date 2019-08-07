import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './routes/home';
import Business from './routes/business';
import Sports from './routes/sports';
import Entertainment from './routes/entertainment';
import Science from './routes/science';
import Health from './routes/health';
import Technology from './routes/technology';


import INBusiness from './routes/in-business';
import INSports from './routes/in-sports';
import INEntertainment from './routes/in-entertainment';
import INScience from './routes/in-science';
import INHealth from './routes/in-health';
import INTechnology from './routes/in-technology';


import './App.css';


class App extends Component {
 render(){
  return (
      <Router>
          <Route exact path="/" component={Home} />
      <Route path="/business" component={Business}/>
      <Route path="/sports" component={Sports} />
      <Route path="/entertainment" component={Entertainment} />
      <Route path="/science" component={Science} />
      <Route path="/health" component={Health} />
      <Route path="/technology" component={Technology} />

      <Route path="/in-technology" component={INTechnology} />
      <Route path="/in-business" component={INBusiness}/>
      <Route path="/in-sports" component={INSports} />
      <Route path="/in-entertainment" component={INEntertainment} />
      <Route path="/in-science" component={INScience} />
      <Route path="/inhealth" component={INHealth} />
      
      </Router>
  
  );
 }
}

export default App;
