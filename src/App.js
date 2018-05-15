import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

//import component 
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';

import Footer from './components/Footer';

//stylesheet
import './App.css';


const ScrollTop = () => {
  window.scrollTo(0,0);
  return null;
}

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Route component={ScrollTop}/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer/>
    </div>
  </Router>
)
 
export default App;
