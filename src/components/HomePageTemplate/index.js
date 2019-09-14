import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import Offerings from "../Offerings";
import Testimonials from "../Testimonials";
import PropTypes from "prop-types"; 

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
  console.log("aas", file)
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>
      <div className="position-section">
        <section className="is-primary background-hero hero is-bold is-large">
          <div id="hero" className="hero-body">
            <div className="container">
              <h1 className="title is-2 has-text-white position-hero">
                {title}
              </h1>
              <h3 className="title is-4 has-text-grey-light position-hero--sub">
                O conceito de torre de controle logístico na sua empresa
              </h3>
            </div>
          </div>
        </section>
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
