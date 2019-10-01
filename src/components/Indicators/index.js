import React from "react";
import { Container, Row, Col } from "react-grid-system";

export default function index() {
  return (
    <div className="indicators-section">
      <Container>
        <Row>
          <Col md={4}>
            <div className="has-text-centered indicator-item">
              <div>
                <p style={{ fontSize: "3.5rem", paddingTop: '1rem' }} className="indicator-number">
                  + 10.000.000
                </p>
                <p className="heading">km monitorados</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="has-text-centered indicator-item">
              <div>
                <p className="indicator-number">+ 10</p>
                <p className="heading">prêmios de inovação</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="has-text-centered indicator-item">
              <div>
                <p className="indicator-number">100%</p>
                <p className="heading">território nacional</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
