import React from "react";
import Img from "gatsby-image";
import { Container, Row, Col } from "react-grid-system";

export default function index() {
  return (
    <section className="partners-section">
      <h1 className="is-size-2 is-size-3-mobile has-text-centered">
        Empresas que confiam
      </h1>
      <div style={{marginTop: '3rem'}}>
        <Container>
          <Row>
            <Col xs={6} sm={6} md={3} lg={3}>
              <div className="partner-image">
                Imagem
                {/* <Img fluid={creaImage} alt="Vale do Dendê" /> */}
              </div>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3}>
              <div className="partner-image">
                Imagem
                {/* <Img fluid={senaiImage} alt="Vale do Dendê" /> */}
              </div>
            </Col>
            <Col xs={6} md={3} lg={3}>
              <div className="partner-image">
                Imagem
                {/* <Img fluid={renaultImage} alt="Vale do Dendê" /> */}
              </div>
            </Col>
            <Col xs={6} md={3} lg={3}>
              <div className="partner-image">
                Imagem
                {/* <Img fluid={inovativaImage} alt="Vale do Dendê" /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
