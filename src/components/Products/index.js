import React, { Fragment } from "react";
import Img from "gatsby-image";

export default function index({
  routerIcon,
  monitorIcon,
  maintenanceIcon,
  fuellingIcon
}) {
  return (
    <Fragment>
      <div className="container">
        <div className="has-text-centered">
          <br />
          <h1 className="is-size-1 is-size-2-mobile">Nossas soluções</h1>
          <br />
          <div className="sub-heading-container">
            <h2 className="is-size-4 is-size-5-tablet is-size-5-mobile">
              Alinhadas com o conceito de Torre de Controle Logístico,
              fornecemos ferramentas capazes de{" "}
              <span className="is-size-3 is-size-4-mobile">
                <strong>economizar</strong>
              </span>{" "}
              seu tempo e{" "}
              <span className="is-size-3 is-size-4-mobile">
                <strong>otimizar</strong>
              </span>{" "}
              sua operação
            </h2>
          </div>
        </div>
      </div>
      <div className="products-container">
        <div className="container has-text-centered">
          <div className="columns is-variable is-multiline is-6">
            <div className="column is-one-quarter-desktop is-half-tablet">
              <div className="mobile-padding">
                <div className="product">
                  <div className="product-image">
                    <Img fluid={routerIcon} alt="Roteirizador" />
                  </div>
                  <h4 className="is-size-5 product-text">
                    <strong>Roteirizador</strong>
                  </h4>
                  <p className="product-text">
                    Otimize as suas rotas em questão de minutos considerando as
                    condições de cada cliente
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet">
              <div className="mobile-padding">
                <div className="product">
                  <div className="product-image">
                    <Img fluid={monitorIcon} alt="Monitoramento" />
                  </div>
                  <h4 className="is-size-5 product-text">
                    <strong>Monitoramento</strong>
                  </h4>
                  <p className="product-text">
                    Acompanhe a posição dos seus veículos em tempo real e gere
                    indicadores da sua operação
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet">
              <div className="mobile-padding">
                <div className="product">
                  <div className="product-image">
                    <Img fluid={maintenanceIcon} alt="Manutenção" />
                  </div>
                  <h4 className="is-size-5 product-text">
                    <strong>Manutenção</strong>
                  </h4>
                  <p className="product-text">
                    Receba alertas e controle as ordens de serviço considerando
                    os planos de manutenção de cada veículo
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-one-quarter-desktop is-half-tablet">
              <div className="mobile-padding">
                <div className="product">
                  <div className="product-image">
                    <Img fluid={fuellingIcon} alt="Abastecimento" />
                  </div>
                  <h4 className="is-size-5 product-text">
                    <strong>Abastecimento</strong>
                  </h4>
                  <p className="product-text">
                    Reduza os custos com combustível acompanhando a autonomia
                    da sua frota e histórico de abastecimentos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
