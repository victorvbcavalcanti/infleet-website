import React from "react";
import { FaCheck } from "react-icons/fa";

export default function fuelling() {
  return (
    <div className="feature">
      <div className="columns ">
        <div className="column is-half is-mobile">
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
            <div className="columns is-mobile">
              <div className="column is-half">
                <ul className="feature-list">
                  <li>
                    <FaCheck className="feature-icon" />
                    Lançamento de abastecimentos via App
                  </li>
                  <li>
                    <FaCheck className="feature-icon" />
                    Histórico de abastecimentos
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
        <div className="column is-half">
          <div className="has-text-centered">Imagem</div>
        </div>
      </div>
    </div>
  );
}
