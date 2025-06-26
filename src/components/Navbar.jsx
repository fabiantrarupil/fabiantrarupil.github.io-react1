import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = true;

  const formattedTotal = total.toLocaleString('es-CL');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-dark" type="button">Home</button>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-dark" type="button">Profile</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-dark" type="button">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-dark" type="button">Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-dark" type="button">Register</button>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex">
            <button className="btn btn-dark" type="button">
              Total: ${formattedTotal}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;