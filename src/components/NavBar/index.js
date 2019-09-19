import React, { useState, useEffect } from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import logo from "../../assets/img/logo.png";
import { Location } from "@reach/router";

const NavBar = ({ toggleNavbar, isActive, ...rest }) => {
  const [className, setClassName] = useState("top");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let activeClass = "top";
      if (window.scrollY >= 100) {
        activeClass = "normal";
      }
      setClassName(activeClass);
    });
    return () => {
      window.removeEventListener("scroll", () => console.log("desmontou"));
    };
  });

  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          logo: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fixed(width: 90) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => {
        const logo = data.logo.childImageSharp.fixed;
        let finalClassName = className;
        return (
          <Location>
            {({ location }) => {
              const isBlogArticle = location.href.split("/blog/");
              if (isBlogArticle[1] !== undefined) {
                finalClassName = "normal";
              }

              return (
                <nav
                  className={`navbar is-fixed-top ${finalClassName}`}
                  aria-label="main navigation"
                >
                  <div className="container">
                    <div className="navbar-brand">
                      <div style={{ padding: "1rem" }}>
                        <Img fixed={logo} alt="Infleet" />
                      </div>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                          marginTop: "0.35rem"
                        }}
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
              );
            }}
          </Location>
        );
      }}
    />
  );
};

export default NavBar;
