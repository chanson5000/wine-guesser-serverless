import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Header, Landing, Footer, About, RedGuess, WhiteGuess} from './components/layout';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Header/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/guess-red" component={RedGuess}/>
            <Route exact path="/guess-white" component={WhiteGuess}/>
            <Route exact path="/about" component={About}/>
            <Footer/>
          </div>
        </Router>
    );
  }
}

export default App;
