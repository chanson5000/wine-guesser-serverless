import React from 'react';
import { Link } from 'react-router-dom';

export default function Administration() {
  return (
    <div className="container text-center">
      <h2 className="p-4">Wine administration.</h2>
      <div className="row justify-content-center">
        <div className="col-auto">
          <p>
            <Link to="/wines/red">All Red Wines</Link>
          </p>
          <p>
            <Link to="/wine/red/new">Add red wine.</Link>
          </p>
        </div>
        <div className="col-auto">
          <p>
            <Link to="/wines/white">All White Wines</Link>
          </p>
          <p>
            <Link to="/wine/white/new">Add white wine.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
