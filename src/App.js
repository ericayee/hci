import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './components/Landing';
import Degree from "./components/Degree";
import Explore from "./components/Explore";
import Error from './components/Error';

class App extends Component {
  render() {
    return (
       <Router basename='/hci'>
        <div className="App">
          <Switch>
           <Route path="/" component={Landing} exact/>
           <Route path="/home" component={Landing} exact/>
           <Route path="/degree" component={Degree}/>
           <Route path="/explore" component={Explore}/>
           <Route component={Error}/>
         </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
