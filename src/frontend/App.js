import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import {
  About,
  Landing,
  GuessWine,
  NotFound,
  NewWine,
  AllWines,
  Administration,
  WineDetail
} from './components/pages';
import './App.css';

export default function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route
              exact
              path="/wine/red/guess"
              render={props => <GuessWine {...props} isRedWine={true}/>}
            />
            <Route
              exact
              path="/wine/white/guess"
              render={props => <GuessWine {...props} isRedWine={false}/>}
            />
            <Route
              exact
              path="/wine/red/new"
              render={props => <NewWine {...props} isRedWine={true}/>}
            />
            <Route
              exact
              path="/wine/white/new"
              render={props => <NewWine {...props} isRedWine={false}/>}
            />
            <Route
              exact
              path="/wines/red"
              render={props => <AllWines {...props} isRedWine={true}/>}
            />
            <Route
              exact
              path="/wines/white"
              render={props => <AllWines {...props} isRedWine={false}/>}
            />
            <Route
              path="/wines/red/:varietal/:world"
              render={props => <WineDetail {...props} isRedWine={true}/>}
            />
            <Route
              path="/wines/white/:varietal/:world"
              render={props => <WineDetail {...props} isRedWine={false}/>}
            />
            <Route exact path="/administration" component={Administration}/>
            <Route exact path="/about" component={About}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}
