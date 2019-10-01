import React from "react";
import Img from "gatsby-image";
import { Container, Row, Col } from "react-grid-system";

export default function index({
  maxforte,
  biosanear,
  milfontes,
  unimed,
  mirasol,
  higtop
}) {
  return (
    <section className="partners-section">
      <h1 className="is-size-2 is-size-3-mobile has-text-centered has-text-primary">
        Empresas que confiam
      </h1>
      <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <Container>
          <Row justify="center">
            <Col lg={4}>
              <div id="maxforte" className="client-item">
                <Img fluid={maxforte} alt="Maxforte" />
              </div>
            </Col>
            <Col lg={4}>
              <div id="unimed" className="client-item">
                <Img fluid={unimed} alt="Unimed" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="client-item">
                <Img fluid={higtop} alt="Higtop" />
              </div>
            </Col>
          </Row>
          <br />
          <Row justify="center">
            <Col lg={4}>
              <div id="mirasol" className="client-item">
                <Img fluid={mirasol} alt="Mirasol Nestlé" />
              </div>
            </Col>
            <Col lg={4}>
              <div id="milfontes" className="client-item">
                <Img fluid={milfontes} alt="Milfontes" />
              </div>
            </Col>
            <Col lg={4}>
              <div id="biosanear" className="client-item">
                <Img fluid={biosanear} alt="Biosanear" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
