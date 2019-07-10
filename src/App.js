import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './app/components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Home />
        </div>
      </Router>
    );
  }
}

export default App;