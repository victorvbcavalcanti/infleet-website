import React from "react";
import Helmet from "react-helmet";
import BackgroundImage from "gatsby-background-image";
import Offerings from "../Offerings";
import Testimonials from "../Testimonials";
import PropTypes from "prop-types";
import { FaPlay } from "react-icons/fa";

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
  file
}) => {
  const image = file.childImageSharp.fluid;
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>

      <BackgroundImage Tag="div" fluid={image}>
        <section className="background-hero hero is-bold is-large position-section">
          <div id="hero" className="hero-body">
            <div className="container">
              <h1 className="has-text-white position-hero">{title}</h1>
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
      <div className="columns is-centered">
        <div className="column is-2 has-text-centered">Imagem</div>
        <div className="column is-2 has-text-centered">Imagem</div>
        <div className="column is-2 has-text-centered">Imagem</div>
        <div className="column is-2 has-text-centered">Imagem</div>
        <div className="column is-2 has-text-centered">Imagem</div>
      </div>

      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div>
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                  <Offerings gridItems={offerings.blurbs} />
                  <h2 className="has-text-weight-semibold is-size-2">
                    Testimonials
                  </h2>
                  <Testimonials testimonials={testimonials} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  testimonials: PropTypes.array
};

export default HomePageTemplate;
