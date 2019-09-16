import React, { useState, useEffect } from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import SearchBox from "../SearchBox";

const NavBar = ({ toggleNavbar, isActive }) => {
  const [className, setClassName] = useState("top");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let activeClass = "top";
      if (window.scrollY >= 100) {
        activeClass = "normal";
      }
      setClassName(activeClass);
    });
    // return () => {
    //   window.removeEventListener("scroll", () => console.log('desmontou'));
    // };
  });

  return (
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
          className={`navbar is-fixed-top ${className}`}
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <strong
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: 300,
                    marginRight: "0.5rem"
                  }}
                >
                  INFLEET
                </strong>
              </Link>
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
                className={`button navbar-burger ${
                  isActive ? "is-active" : ""
                }`}
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
              <div className="navbar-start">
                <Link
                  style={{ color: isActive ? "black" : "white" }}
                  className="navbar-item"
                  to="/about"
                >
                  Roteirizador
                </Link>
                <Link
                  style={{ color: isActive ? "black" : "white" }}
                  className="navbar-item"
                  to="/about"
                >
                  Monitoramento
                </Link>
                <Link
                  style={{ color: isActive ? "black" : "white" }}
                  className="navbar-item"
                  to="/about"
                >
                  Manutenção
                </Link>
                <Link
                  style={{ color: isActive ? "black" : "white" }}
                  className="navbar-item"
                  to="/about"
                >
                  Abastecimento
                </Link>
              </div>
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
              </div>
            </div>
          </div>
        </nav>
      )}
    />
  );
};

export default NavBar;
