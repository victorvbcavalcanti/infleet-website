import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
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

      <BackgroundImage alt="Caminhão" Tag="div" fluid={backgroundImage}>
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

      <div className="container">

        <div className="columns is-centered is-mobile">
          <div className="column is-2 has-text-centered">
            <Img fluid={valeImage} alt="Vale do Dendê" />
          </div>
          <div className="column is-2 has-text-centered">
            <Img fluid={inovativaImage} alt="Inovativa" />
          </div>
          <div className="column is-2 has-text-centered">
            <Img fluid={senaiImage} alt="Senai" />
          </div>
          <div className="column is-2 has-text-centered">
            <Img fluid={renaultImage} alt="Renault"></Img>
          </div>
          <div className="column is-2 has-text-centered">
            <Img fluid={creaImage} alt="Crea"></Img>
          </div>
        </div>

        <div className="has-text-centered">
          <br />
          <h1 className="is-size-1">Nossas soluções</h1>
          <br />
          <div className="sub-heading-container">
            <h2 className="is-size-4">
              Alinhadas com o conceito de Torre de Controle logístico,
              fornecemos ferramentas capazes de{" "}
              <span style={{ fontSize: "2rem" }}>
                <strong>economizar</strong>
              </span>{" "}
              seu tempo e{" "}
              <span style={{ fontSize: "2rem" }}>
                <strong>otimizar</strong>
              </span>{" "}
              sua operação
            </h2>
          </div>
        </div>

        <div className="products-container">
          <div className="columns is-centered">
            <div className="is-3">
              <div className="product has-text-centered">
                <div>Imagem</div>
                <h4 className="is-size-5 product-text">
                  <strong>Roteirizador</strong>
                </h4>
                <p className="product-text">
                  Otimize as suas rotas em questão de minutos considerando as
                  condições de cada cliente
                </p>
              </div>
            </div>
            <div className="is-3">
              <div className="product has-text-centered">
                <div>Imagem</div>
                <h4 className="is-size-5 product-text">
                  <strong>Monitoramento</strong>
                </h4>
                <p className="product-text">
                  Acompanhe a posição dos seus veículos em tempo real e gere
                  indicadores da sua operação
                </p>
              </div>
            </div>
            <div className="is-3">
              <div className="product has-text-centered">
                <div>Imagem</div>
                <h4 className="is-size-5 product-text">
                  <strong>Manutenção</strong>
                </h4>
                <p className="product-text">
                  Controle as ordens de serviço corretivas e preventivas
                  acompanhando os planos de manutenção de cada veículo
                </p>
              </div>
            </div>
            <div className="is-3">
              <div className="product has-text-centered">
                <div>Imagem</div>
                <h4 className="is-size-5 product-text">
                  <strong>Abastecimento</strong>
                </h4>
                <p className="product-text">
                  Tenha o registro dos abastecimentos realizados e controle seus
                  gasto com combustível
                </p>
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
