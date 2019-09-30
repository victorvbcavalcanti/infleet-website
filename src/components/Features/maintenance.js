import React from "react";
import Img from "gatsby-image";
import { FaCheck } from "react-icons/fa";

export default function maintenance({ maintenanceFeature }) {
  return (
    <div className="feature">
      <div className="columns is-multiline is-variable is-6">
        <div className="column is-half">
          <div className="mobile-container">
            <div className="has-text-centered">
              <Img fluid={maintenanceFeature} alt="Manutenção" />
            </div>
          </div>
        </div>
        <div className="column is-half is-mobile">
          <div className="mobile-container">
            <div className="feature-title">
              <h3 className="is-size-3">Gestão da Manutenção</h3>
              <h4 className="is-size-5">
                Maior controle de custos da sua operação logística
              </h4>
            </div>
            <div className="feature-description">
              <p>
                Realize o controle das manutenções corretivas e preventivas dos
                seus veículos e equipamentos para otimizar seus custos
              </p>
            </div>
            <div className="feature-items">
              <div className="columns is-mobile is-variable is-0">
                <div id="fuelling-link" className="column is-half">
                  <ul className="feature-list">
                    <li>
                      <FaCheck className="feature-icon" />
                      Plano de manutenções preventivas
                    </li>
                    <li>
                      <FaCheck className="feature-icon" />
                      Registro de ordem de serviço
                    </li>
                    <li>
                      <FaCheck className="feature-icon" />
                      Histórico de manutenções
                    </li>
                  </ul>
                </div>
                <div className="column is-half">
                  <ul className="feature-list">
                    <li>
                      <FaCheck className="feature-icon" />
                      Controle de custos
                    </li>
                    <li>
                      <FaCheck className="feature-icon" />
                      Indicadores de manutenção
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
