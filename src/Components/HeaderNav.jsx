import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import flightLogo from "../assets/images/flightsitelogo.jpeg";
import flaglogo from "../assets/images/flaglogo.png";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import {SignIn } from "./SignIn";
import SignUp from "./SignUp";
import  Home from "./Home";
function HeaderNav() {
  return (
    <Router>
    <nav className="navbar navbar-expand-sm position-sticky fixed-top bg-body-tertiary border border-dark">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/signup">
          <img
            src={flightLogo}
            alt="site_logo"
            className="rounded-circle"
            width={60}
            height={60}
          />
        </Link>

        {/* Navbar Toggler (for Mobile View) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right - Navbar Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item me-sm-4 mb-2">
              <button className="btn btn-primary">
                <Link className="text-light text-decoration-none" to="/signin">Sign in</Link>
                </button>
            </li>
            <li className="nav-item me-sm-4 mb-2">
              <button className="btn btn-primary">
                <Link className="text-light text-decoration-none" to="/signup">Sign up</Link>
                </button>
            </li>

            {/* Language Selector */}
            <li className="nav-item">
              <div className="btn btn-primary d-flex align-items-center p-1.4 mb-1">
                <img
                  src={flaglogo}
                  className="rounded-circle"
                  width={25}
                  height={25}
                  alt="Flag"
                />
                <div className="border border-start mx-2"></div>
                <select
                  className="bg-primary text-white border-0"
                  style={{ outline: "none", cursor: "pointer"}}
                >
                  <option>Eng</option>
                  <option>Japanese</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
    </Routes>
    </Router>
  );
}

export default HeaderNav;
