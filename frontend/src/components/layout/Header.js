import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div className="container-fluid wg-header-outer">
          <div className="container p-2 font-weight-bold text-center">
            <Link to="/">
              <h1>Wine Guesser</h1>
            </Link>
          </div>
        </div>
    );
  }
}

export default Header;
