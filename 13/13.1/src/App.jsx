import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Products from './Products';
import Contacts from './Contacts';
import PageNotFound from './PageNotFound';

class App extends Component{
  state = {
    number: 0,
  }

  render() {
    return (
      <div className="page">
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/products"><Products /></Route>
            <Route path="/contacts"><Contacts /></Route>
            <Route path="/*"><PageNotFound /></Route>
          </Switch>
        </BrowserRouter>
      </div>
     
   )
  }
}

export default App;