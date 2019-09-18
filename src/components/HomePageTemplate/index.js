import React from "react";
import Helmet from "react-helmet";
import { FaCheck } from "react-icons/fa";
import PropTypes from "prop-types";

import Hero from "../Hero/";
import Products from "../Products/";
import Router from "../Features/router";
import Monitoring from "../Features/monitoring";
import Maintenance from "../Features/maintenance";
import Fuelling from "../Features/fuelling";
import Testimonials from "../Testimonials/";

const HomePageTemplate = ({
  meta_title,
  meta_description,
  background,
  crea,
  renault,
  vale,
  inovativa,
  senai
}) => {
  const backgroundImage = background.childImageSharp.fluid;
  const inovativaImage = inovativa.childImageSharp.fluid;
  const creaImage = crea.childImageSharp.fluid;
  const valeImage = vale.childImageSharp.fluid;
  const renaultImage = renault.childImageSharp.fluid;
  const senaiImage = senai.childImageSharp.fluid;

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>

      <Hero
        background={backgroundImage}
        inovativa={inovativaImage}
        crea={creaImage}
        vale={valeImage}
        renault={renaultImage}
        senai={senaiImage}
      />

      <Products />

      <section className="features-section">
        <div className="container">
          <Router />
          <Monitoring />
          <Maintenance />
          <Fuelling />
        </div>
      </section>

      <Testimonials />
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
