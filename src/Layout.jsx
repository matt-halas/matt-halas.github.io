import { Outlet, Link } from "react-router-dom";

import './App.css'

function Layout() {
  return (
      <div className="wrapper">
        <div className="header-container">
          <div className="header-item">
            <Link to="/">
              <h3>Home</h3>
            </Link>
          </div>
          <div className="header-item">
            <Link to="/about">
              <h3>
                About
              </h3>
            </Link>
          </div>
          <div className="header-item">
            <Link to="/contact">
              <h3>
                Contact
              </h3>
            </Link>
          </div>
          <div className="header-item">
            <Link to="/resume">
              <h3>
                Resume
              </h3>
            </Link>
          </div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
  )
}

export default Layout
