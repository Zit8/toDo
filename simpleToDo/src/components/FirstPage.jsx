import React from 'react';

export default function FirstPage() {
  return (
    <div className="jumbotron">
      <h3 className="display-9 text-center text-dark">
        Title
      </h3>
      <p className="lead text-center text-secondary">
        Some information
        <br />
        <div>
          <button onClick={() => window.location = '/signup'} type="button" className="btn btn-outline-danger">Sign Up</button>
          <button onClick={() => window.location = '/signin'} type="button" className="btn btn-outline-primary">Login</button>
        </div>
      </p>
    </div>
  );
}
