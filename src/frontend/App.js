import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { About, Landing, RedGuess, WhiteGuess } from './components/pages';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/guess-red" component={RedGuess} />
            <Route exact path="/guess-white" component={WhiteGuess} />
            <Route exact path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
