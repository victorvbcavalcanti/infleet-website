import React from "react";
import config from "../../../config";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>{config.copyright}</p>
          <p style={{ color: "gray", fontSize: "1.1rem" }}>
            Interakt Soluções de Engenharia LTDA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
