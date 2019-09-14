import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import SearchBox from "../SearchBox";

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <nav
        className="navbar is-fixed-top is-transparent"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <strong style={{ color: "white" }}>INFLEET</strong>
            </Link>
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
              className={`button navbar-burger ${isActive ? "is-active" : ""}`}
              data-target="navMenu"
              onClick={toggleNavbar}
            >
              <span style={{ color: "white" }} />
              <span style={{ color: "white" }} />
              <span style={{ color: "white" }} />
            </button>
          </div>
          <div
            className={`navbar-menu ${isActive ? "is-active" : ""}`}
            id="navMenu"
          >
            <div className="navbar-end">
              <Link
                style={{ color: isActive ? "black" : "white" }}
                className="navbar-item"
                to="/about"
              >
                Contato
              </Link>
              <Link
                style={{ color: isActive ? "black" : "white" }}
                className="navbar-item"
                to="/blog"
              >
                Blog
              </Link>
              {/* <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link className="button is-primary is-outlined" to="/contact">
                    Contact Us
                  </Link>
                </p>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </nav>
    )}
  />
);

export default NavBar;
