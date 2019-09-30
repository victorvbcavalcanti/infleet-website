import React from "react";
import Img from "gatsby-image";
import { Container, Row, Col } from "react-grid-system";

export default function index({
  maxforte,
  biosanear,
  milfontes,
  unimed,
  ecologicaNordeste,
  mirasol
}) {
  return (
    <section className="partners-section">
      <h1 className="is-size-2 is-size-3-mobile has-text-centered has-text-primary">
        Empresas que confiam
      </h1>
      <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <Container>
          <Row>
            <Col xs={6} sm={6} md={3} lg={3}>
              <div className="partner-image">
                <Img fluid={maxforte} alt="Maxforte" />
              </div>
            </Col>
            <Col xs={6} sm={6} md={3} lg={3}>
              <div
                style={{ padding: "1.2rem 0rem 0rem 0rem" }}
                className="partner-image"
              >
                <Img fluid={unimed} alt="Unimed" />
              </div>
            </Col>
            <Col xs={6} md={3} lg={3}>
              <div
                id="mirasol"
                style={{ padding: "3rem 0rem 0rem 0rem" }}
                className="partner-image"
              >
                <Img fluid={mirasol} alt="Mirasol Nestlé" />
              </div>
            </Col>
            <Col xs={6} md={3} lg={3}>
              <div
                style={{ padding: "2rem 0rem 0rem 0rem" }}
                className="partner-image"
              >
                <Img fluid={milfontes} alt="Milfontes" />
              </div>
            </Col>
            {/* <Col xs={6} md={2} lg={2}>
              <div className="partner-image">
                <Img fluid={ecologicaNordeste} alt="Ecologica Nordeste" />
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <div className="partner-image">
                <Img fluid={biosanear} alt="Biosanear" />
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    </section>
  );
}
