import React, { Fragment } from "react";
import { Container, Row, Col } from "react-grid-system";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { FaPlay } from "react-icons/fa";

export default function index({
  background,
  vale,
  crea,
  inovativa,
  renault,
  senai,
  handleModal
}) {
  return (
    <Fragment>
      <BackgroundImage alt="Caminhão" Tag="div" fluid={background}>
        <section className="background-hero hero is-bold is-large position-section">
          <div id="hero" className="hero-body">
            <div className="container">
              <h1 className="has-text-white position-hero">
                Fornecemos tecnologia de ponta para a sua frota.
              </h1>
              <h3 className="has-text-grey-light position-hero--sub">
                Reduzimos seus custos e otimizamos sua operação logística.
              </h3>
              <div className="">
                <button
                  onClick={() => handleModal(true)}
                  className="button-test"
                >
                  Teste grátis
                </button>
                {/* <button className="button-video">
                  <FaPlay
                    style={{ fontSize: "0.75rem", marginRight: "0.5rem" }}
                  />
                  Ver vídeo
                </button> */}
              </div>
            </div>
          </div>
        </section>
      </BackgroundImage>

      <div
        style={{ marginBottom: "4rem" }}
        className="columns is-centered is-mobile"
      >
        <div
          style={{ padding: "0.05rem" }}
          className="column is-1 separator"
        ></div>
      </div>

      <Container>
        <Row>
          <Col xs={6} sm={6} md={3} lg={3}>
            <div
              style={{ height: "10rem", width: "10rem", paddingTop: "2rem" }}
              className="partner-image"
            >
              <Img fluid={crea} alt="Crea" />
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <div style={{ paddingTop: "2.75rem" }} className="partner-image">
              <Img fluid={senai} alt="Senai" />
            </div>
          </Col>
          <Col xs={6} md={3} lg={3}>
            <div style={{ paddingTop: "2.5rem" }} className="partner-image">
              <Img fluid={renault} alt="Renault" />
            </div>
          </Col>
          <Col xs={6} md={3} lg={3}>
            <div style={{ paddingTop: "2rem" }} className="partner-image">
              <Img fluid={inovativa} alt="Inovativa" />
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
