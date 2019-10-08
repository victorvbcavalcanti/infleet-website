import React from "react";
import Img from "gatsby-image";
import { Container, Row, Col } from "react-grid-system";
import { FaCheck } from "react-icons/fa";

export default function fuelling({ fuellingFeature, handleModal }) {
  return (
    <div className="feature">
      <div style={{ paddingTop: "6rem" }} id="fuelling-link"></div>
      <Container>
        <Row>
          <Col lg={6} push={{ lg: 6 }}>
            <div className="mobile-container">
              <div className="has-text-centered">
                <Img fluid={fuellingFeature} alt="Abastecimento" />
              </div>
            </div>
          </Col>
          <Col lg={6} pull={{ lg: 6 }}>
            <div className="mobile-container">
              <div className="feature-title">
                <h3 className="is-size-3">Gestão de Abastecimento</h3>
                <h4 className="is-size-5">
                  Tenha um maior controle da sua operação
                </h4>
              </div>
              <div className="feature-description">
                <p>
                  Realize o controle de abastecimentos dos seus veículos e
                  equipamentos para gerir os seus gastos com combustível
                </p>
              </div>
              <div className="feature-items">
                <div className="columns is-mobile is-1 is-variable">
                  <div className="column is-half">
                    <ul className="feature-list">
                      <li>
                        <FaCheck className="feature-icon" />
                        Lançamento de abastecimentos pelo App
                      </li>
                      <li>
                        <FaCheck className="feature-icon" />
                        Registro de abastecimento
                      </li>
                      <li>
                        <FaCheck className="feature-icon" />
                        Cálculo de autonomia
                      </li>
                    </ul>
                  </div>
                  <div className="column is-half">
                    <ul className="feature-list">
                      <li>
                        <FaCheck className="feature-icon" />
                        Dashboard interativo
                      </li>
                      <li>
                        <FaCheck className="feature-icon" />
                        Controle de estoque para postos internos
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => handleModal(true)} className="button-test">
          Teste grátis
        </button>
      </div>
    </div>
  );
}
