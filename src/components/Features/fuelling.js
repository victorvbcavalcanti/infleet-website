import React from "react";
import Img from "gatsby-image";
import { FaCheck } from "react-icons/fa";

export default function fuelling({ fuellingFeature }) {
  return (
    <div className="feature">
      <div className="columns is-multiline is-variable is-6">
        <div className="column is-half is-mobile">
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
        </div>
        <div className="column is-half">
          <div className="mobile-container">
            <div className="has-text-centered">
              <Img fluid={fuellingFeature} alt="Abastecimento" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
