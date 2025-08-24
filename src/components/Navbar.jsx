import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;
  const token = true;

  const formattedTotal = total.toLocaleString('es-CL');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="btn btn-dark" to="/">Home</Link>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <Link className="btn btn-dark" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-dark" to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-dark" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-dark" to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex">
            <Link className="btn btn-dark" to="/cart">
              Total: ${formattedTotal}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;