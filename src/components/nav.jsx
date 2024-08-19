import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';  // Ensure this path is correct

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Restaurant</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/SignUp' className="nav-link">SignUp</Link>
              </li>
              <li className="nav-item">
                <Link to='/SignIn' className="nav-link">SignIn</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Recipes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
