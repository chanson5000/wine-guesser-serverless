import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ExternalLink from '../common/ExternalLink';

class Footer extends Component {
  render() {
    return (
        <div className="container-fluid wg-footer text-center p-2">
          <footer className="p-2">
            <div>
            <Link to="/about">
              What is Wine Guesser?
            </Link>
            </div>
            &copy;{new Date().getFullYear()}&nbsp;
            <ExternalLink
                url="https://coryhanson.us"
                text="Cory Hanson"
                newWindow={true}/>
          </footer>
        </div>
    );
  }
}

export default Footer;
