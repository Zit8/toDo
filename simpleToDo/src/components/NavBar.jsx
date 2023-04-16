import axios from 'axios';
import React from 'react';

// Компонент с навигацией
export default function NavBar({ user }) {
  console.log(user, '<+++++++++++++++++++++++');
  const logoutHandler = () => {
    axios.post('/api/user/logout')
      .then((() => {
        window.location = '/';
      }));
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand" href="/mainpage">Look My Shop</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {user?.role && (
          <li className="nav-item">
            <a className="nav-link mr-4" href="/addstaf">add comX</a>
          </li>
          )}
          {/* <li className="nav-item">
            <a className="nav-link mr-4" href="#">nav-2</a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link mr-4" href="#">nav-3</a>
          </li> */}
        </ul>
        {user?.id
          && (
          <div className="d-flex flex-row-reverse ">
            <a className="nav-link p-2" onClick={logoutHandler} href="/">logout</a>
          </div>
          )}
      </div>
    </nav>
  );
}
