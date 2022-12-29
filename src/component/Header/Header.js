import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div id="waterHolder">

        <div className="header__top">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <h1>Minal</h1>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse custom-nav"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <NavLink className="nav-item nav-link active" to="/">
                    Home
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/portfolio">
                    Portfolio
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/aboutus">
                    About us
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/services">
                    Services
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/faq">
                    Faq
                  </NavLink>
                </div>
              </div>
              {/* <!-- /.navbar-collapse --> */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
