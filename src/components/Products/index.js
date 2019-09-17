import React, { Fragment } from "react";

export default function index() {
  return (
    <Fragment>
      <div className="has-text-centered">
        <br />
        <h1 className="is-size-1">Nossas soluções</h1>
        <br />
        <div className="sub-heading-container">
          <h2 className="is-size-4">
            Alinhadas com o conceito de Torre de Controle logístico, fornecemos
            ferramentas capazes de{" "}
            <span style={{ fontSize: "2rem" }}>
              <strong>economizar</strong>
            </span>{" "}
            seu tempo e{" "}
            <span style={{ fontSize: "2rem" }}>
              <strong>otimizar</strong>
            </span>{" "}
            sua operação
          </h2>
        </div>
      </div>

      <div className="products-container">
        <div className="columns is-centered">
          <div className="is-3">
            <div className="product has-text-centered">
              <div>Imagem</div>
              <h4 className="is-size-5 product-text">
                <strong>Roteirizador</strong>
              </h4>
              <p className="product-text">
                Otimize as suas rotas em questão de minutos considerando as
                condições de cada cliente
              </p>
            </div>
          </div>
          <div className="is-3">
            <div className="product has-text-centered">
              <div>Imagem</div>
              <h4 className="is-size-5 product-text">
                <strong>Monitoramento</strong>
              </h4>
              <p className="product-text">
                Acompanhe a posição dos seus veículos em tempo real e gere
                indicadores da sua operação
              </p>
            </div>
          </div>
          <div className="is-3">
            <div className="product has-text-centered">
              <div>Imagem</div>
              <h4 className="is-size-5 product-text">
                <strong>Manutenção</strong>
              </h4>
              <p className="product-text">
                Controle as ordens de serviço corretivas e preventivas
                acompanhando os planos de manutenção de cada veículo
              </p>
            </div>
          </div>
          <div className="is-3">
            <div className="product has-text-centered">
              <div>Imagem</div>
              <h4 className="is-size-5 product-text">
                <strong>Abastecimento</strong>
              </h4>
              <p className="product-text">
                Tenha o registro dos abastecimentos realizados e controle seus
                gasto com combustível
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
