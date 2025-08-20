import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white fixed-top">
      <div className="container p-2">
        <Link className="navbar-brand" to={"/"}>
          <img
            src="media/images/logo.svg"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
            alt="Zerodha Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 text-center text-lg-start">
            <li className="nav-item">
              <Link className="nav-link"  to={"/signup"}>
                Signup
              </Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/about"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/product"}>
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/pricing"}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/support"}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
