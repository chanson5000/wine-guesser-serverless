import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import {
  About,
  Landing,
  RedGuess,
  WhiteGuess,
  NotFound,
  NewWine,
  AllWines,
  Administration
} from './components/pages';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/wine/red/guess" component={RedGuess} />
              <Route exact path="/wine/white/guess" component={WhiteGuess} />
              <Route
                exact
                path="/wine/red/new"
                render={props => <NewWine {...props} isRedWine={true} />}
              />
              <Route
                exact
                path="/wine/white/new"
                render={props => <NewWine {...props} isRedWine={false} />}
              />
              <Route
                exact
                path="/wines/red"
                render={props => <AllWines {...props} isRedWine={true} />}
              />
              <Route
                exact
                path="/wines/white"
                render={props => <AllWines {...props} isRedWine={false} />}
              />
              <Route exact path="/administration" component={Administration} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
