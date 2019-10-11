import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Img from "gatsby-image";
import { FaCheck } from "react-icons/fa";

export default function monitoring({ monitorFeature, handleModal }) {
  return (
    <div className="feature">
      <div style={{ paddingTop: "4rem" }} id="monitor-link"></div>
      <Container>
        <Row>
          <Col lg={6} push={{ lg: 6 }}>
            <div className="mobile-container">
              <div className="has-text-centered">
                <Img fluid={monitorFeature} alt="Rastreamento" />
              </div>
            </div>
          </Col>
          <Col lg={6} pull={{ lg: 6 }}>
            <div className="mobile-container">
              <div style={{ height: "2rem" }}></div>
              <div className="feature-title">
                <h3 className="is-size-3">Monitoramento</h3>
                <h4 className="is-size-5">
                  Tenha um maior controle da sua operação
                </h4>
              </div>
              <div className="feature-description">
                <p>
                  Acompanhe a localização da sua frota em tempo real e consulte
                  relatórios de eficiência do seu negócio
                </p>
              </div>
              <div className="feature-items">
                <div className="columns is-mobile is-variable is-0">
                  <div className="column is-half">
                    <ul className="feature-list">
                      <li>
                        <FaCheck className="feature-icon" />
                        Limite de velocidade
                      </li>
                      <li>
                        <FaCheck className="feature-icon" />
                        Pontos de parada
                      </li>

                      <li>
                        <FaCheck className="feature-icon" />
                        Horas ligado <br></br>+ Horas parado
                      </li>
                    </ul>
                  </div>
                  <div className="column is-half">
                    <ul className="feature-list">
                      <li>
                        <FaCheck className="feature-icon" />
                        Cercas virtuais
                      </li>
                      <li>
                        <FaCheck className="feature-icon" />
                        Histórico de rotas
                      </li>
                      <li>
                        <FaCheck className="feature-icon" />
                        Acelerações, curvas e frenagens bruscas
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
