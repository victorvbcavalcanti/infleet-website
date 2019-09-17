import React, { Fragment } from "react";

import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { FaPlay } from "react-icons/fa";

export default function index({
  background,
  vale,
  crea,
  inovativa,
  renault,
  senai
}) {
  return (
    <Fragment>
      <BackgroundImage alt="Caminhão" Tag="div" fluid={background}>
        <section className="background-hero hero is-bold is-large position-section">
          <div id="hero" className="hero-body">
            <div className="container">
              <h1 className="has-text-white position-hero">Fornecemos tecnologia de ponta para a sua frota.</h1>
              <h3 className="has-text-grey-light position-hero--sub">
                O conceito de torre de controle logístico na sua empresa
              </h3>
              <div className="">
                <button className="button-test">Teste grátis</button>
                <button className="button-video">
                  <FaPlay
                    style={{ fontSize: "0.75rem", marginRight: "0.5rem" }}
                  />
                  Ver vídeo
                </button>
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>

      <div style={{ marginBottom: "4rem" }} className="columns is-centered">
        <div
          style={{ padding: "0.05rem" }}
          className="column is-1 separator"
        ></div>
      </div>

      <div className="container">
        <div className="columns is-centered is-mobile">
          <div className="column is-2 has-text-centered">
            <Img fluid={vale} alt="Vale do Dendê" />
          </div>
          <div className="column is-2 has-text-centered">
            <Img fluid={inovativa} alt="Inovativa" />
          </div>
          <div className="column is-2 has-text-centered">
            <Img fluid={senai} alt="Senai" />
          </div>
          <div className="column is-2 has-text-centered">
            <Img fluid={renault} alt="Renault"></Img>
          </div>
          <div className="column is-2 has-text-centered">
            <Img fluid={crea} alt="Crea"></Img>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
