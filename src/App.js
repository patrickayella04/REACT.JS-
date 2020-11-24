
import React from 'react';
import Nav from './components/nav';
import AboutPage from './components/about';
import HomePage from './components/home';
import ContactPage from './components/contact';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // We just named BrowserRouter to Router







function App() {
  return (
    <Router> 
      <h1>
        <Nav />
        <Switch>
          <Route path="/" exact component = {HomePage} />
          <Route path="/about" component = {AboutPage} />
          <Route path="/contact" component = {ContactPage} />
        </Switch>
    </h1>
    </Router>
    
  );
}

export default App;
