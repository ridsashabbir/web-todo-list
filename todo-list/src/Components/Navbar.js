import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      style={{ color: "white", backgroundColor: props.color }}
      className={`navbar navbar-expand-lg navbar-${props.color} bg-${props.color} `}
    >
      <div className="container-fluid" style={{ color: "white" }}>
        <Link className="navbar-brand" to="/" style={{ color: "white" }}>
          Todo-List
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{ color: "white" }}
                v
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: "white" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                style={{ color: "white" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link
              className="btn "
              type="submit"
              to="/loginsignup"
              style={{
                backgroundColor: "white",
                color: "#7A316F",
                fontWeight: "bold",
              }}
            >
              Login / Signup
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
