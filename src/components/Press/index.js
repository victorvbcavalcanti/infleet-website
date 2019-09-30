import React from "react";
import Img from "gatsby-image";
import { Container, Row, Col } from "react-grid-system";

export default function index({ band, pegn, tecmundo, creaPartner }) {
  return (
    <section className="press-section">
      <h1 className="is-size-2 is-size-3-mobile has-text-centered has-text-primary">
        Quem já falou da gente
      </h1>
      <div style={{ marginTop: "3rem" }}>
        <Container>
          <Row>
            <Col xs={6} sm={6} md={3} lg={3}>
              <div className="partner-image">
                <Img fluid={band} alt="Band" />
              </div>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3}>
              <div
                style={{ padding: "0rem 0rem 0rem 0rem" }}
                className="partner-image"
              >
                <Img fluid={pegn} alt="Pequenas Empresas, Grandes Negócios" />
              </div>
            </Col>
            <Col xs={6} md={3} lg={3}>
              <div
                id="tecmundo"
                style={{ padding: "1.2rem 0rem 0rem 0rem" }}
                className="partner-image"
              >
                <Img fluid={tecmundo} alt="Tecmundo" />
              </div>
            </Col>
            <Col xs={6} md={3} lg={3}>
              <div
                style={{ padding: "0rem 0rem 0rem 0rem" }}
                className="partner-image"
              >
                <Img fluid={creaPartner} alt="CREA" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
