import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
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
