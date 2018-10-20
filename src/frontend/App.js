import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import {
  About,
  Landing,
  RedGuess,
  WhiteGuess,
  NotFound,
  NewRedWine,
    NewWhiteWine
} from './components/pages';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/wine/red/guess" component={RedGuess} />
            <Route exact path="/wine/white/guess" component={WhiteGuess} />
            <Route exact path="/wine/red/new" component={NewRedWine} />
            <Route exact path="/wine/white/new" component={NewWhiteWine} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
