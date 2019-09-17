import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Hero from "../Hero/";
import Products from "../Products/";

const HomePageTemplate = ({
  title,
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

      <div className="features-section">
        <div className="container">
          <div className="feature">
            <div className="columns">
              <div className="column is-half">
                <div className="has-text-centered">Imagem</div>
              </div>
              <div className="column is-half is-mobile">
                <div className="feature-title">
                  <h3 className="is-size-3">Roteirizador</h3>
                  <h4 className="is-size-5">
                    Perfeito para otimização de processos
                  </h4>
                </div>
                <div className="feature-text">
                  <p>
                    Garanta a melhor roteirização para sua operação com as
                    funcionalidades do nosso algoritmo personalizado
                  </p>
                  <div className="columns is-mobile">
                    <div className="column is-half">
                      <ul>
                        <li>Previsão de custos das rotas</li>
                        <li>Previsão de custos das rotas</li>
                        <li>Previsão de custos das rotas</li>
                      </ul>
                    </div>
                    <div className="column is-half">
                      <ul>
                        <li>Previsão de custos das rotas</li>
                        <li>Previsão de custos das rotas</li>
                        <li>Previsão de custos das rotas</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
