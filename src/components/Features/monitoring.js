import React from "react";
import Img from "gatsby-image";
import { FaCheck } from "react-icons/fa";

export default function monitoring({ monitorFeature }) {
  return (
    <div className="feature">
      <div className="columns is-multiline is-variable is-6">
        <div className="column is-half">
          <div className="mobile-container">
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
                <div id="maintenance-link" className="column is-half">
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
                      Horas ligado + Horas parado
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
                      Alertas de manutenção
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
              <Img fluid={monitorFeature} alt="Rastreamento" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
