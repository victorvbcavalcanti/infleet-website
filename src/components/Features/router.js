import React from "react";
import Img from "gatsby-image";
import { FaCheck } from "react-icons/fa";

export default function router({ routerFeature, handleModal }) {
  return (
    <div>
      <div style={{ paddingTop: "6rem" }} id="roteirizador"></div>
      <div className="columns is-multiline is-variable is-6">
        <div className="column is-half">
          <div className="mobile-container">
            <div className="has-text-centered">
              <Img fluid={routerFeature} alt="Roteirizador" />
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="mobile-container">
            <div className="feature-title">
              <h3 className="is-size-3">Roteirizador</h3>
              <h4 className="is-size-5">
                Perfeito para otimização de processos
              </h4>
            </div>
            <div className="feature-description">
              <p>
                Garanta a melhor roteirização para sua operação com as
                funcionalidades do nosso algoritmo personalizado
              </p>
            </div>
            <div className="feature-items">
              <div className="columns is-mobile is-variable is-0">
                <div className="column is-half">
                  <ul className="feature-list">
                    <li>
                      <FaCheck className="feature-icon" />
                      Previsão de custos de rota
                    </li>
                    <li>
                      <FaCheck className="feature-icon" />
                      Roteiros automatizados
                    </li>
                    <li>
                      <FaCheck className="feature-icon" />
                      Redução de consumo do combustível
                    </li>
                  </ul>
                </div>
                <div className="column is-half">
                  <ul className="feature-list">
                    <li>
                      <FaCheck className="feature-icon" />
                      Redução de custo com manutenção
                    </li>
                    <li>
                      <FaCheck className="feature-icon" />
                      Controle de carga em cada viagem
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          id="router"
          onClick={() => handleModal(true)}
          className="button-test"
        >
          Teste grátis
        </button>
      </div>
    </div>
  );
}
