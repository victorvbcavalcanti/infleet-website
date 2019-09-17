import React from "react";
import Helmet from "react-helmet";
import { FaCheck } from "react-icons/fa";
import PropTypes from "prop-types";

import Hero from "../Hero/";
import Products from "../Products/";

const HomePageTemplate = ({
  title,
  meta_title,
  meta_description,
  background,
  crea,
  renault,
  vale,
  inovativa,
  senai
}) => {
  const backgroundImage = background.childImageSharp.fluid;
  const inovativaImage = inovativa.childImageSharp.fluid;
  const creaImage = crea.childImageSharp.fluid;
  const valeImage = vale.childImageSharp.fluid;
  const renaultImage = renault.childImageSharp.fluid;
  const senaiImage = senai.childImageSharp.fluid;

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
      </Helmet>

      <Hero
        background={backgroundImage}
        inovativa={inovativaImage}
        crea={creaImage}
        vale={valeImage}
        renault={renaultImage}
        senai={senaiImage}
      />

      <Products />

      <div className="features-section">
        <div className="container">
          <div className="feature">
            <div className="columns">
              <div className="column is-half">
                <div className="has-text-centered">Imagem</div>
              </div>
              <div className="column is-half is-mobile">
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
                  <div className="columns is-mobile">
                    <div className="column is-half">
                      <ul className="feature-list">
                        <li>
                          <FaCheck className="feature-icon" />
                          Previsão de custos das rotas
                        </li>
                        <li>
                          <FaCheck className="feature-icon" />
                          Roteirização automatizada
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
          </div>

          <div className="feature">
            <div className="columns ">
              <div className="column is-half is-mobile">
                <div className="feature-title">
                  <h3 className="is-size-3">Monitoramento</h3>
                  <h4 className="is-size-5">
                    Tenha um maior controle da sua operação
                  </h4>
                </div>
                <div className="feature-description">
                  <p>
                    Acompanhe a localização da sua frota em tempo real e
                    consulte relatórios de eficiência do seu negócio
                  </p>
                </div>
                <div className="feature-items">
                  <div className="columns is-mobile">
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
                          Horas ligado + Horas ligado e parado
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
              <div className="column is-half">
                <div className="has-text-centered">Imagem</div>
              </div>
            </div>
          </div>

          <div className="feature">
            <div className="columns">
              <div className="column is-half">
                <div className="has-text-centered">Imagem</div>
              </div>
              <div className="column is-half is-mobile">
                <div className="feature-title">
                  <h3 className="is-size-3">Gestão da Manutenção</h3>
                  <h4 className="is-size-5">
                    Maior controle de custos da sua operação logística
                  </h4>
                </div>
                <div className="feature-description">
                  <p>
                    Realize o controle das manutenções corretivas e preventivas
                    dos seus veículos e equipamentos para otimizar seus custos
                  </p>
                </div>
                <div className="feature-items">
                  <div className="columns is-mobile">
                    <div className="column is-half">
                      <ul className="feature-list">
                        <li>
                          <FaCheck className="feature-icon" />
                          Plano de manutenções preventivas
                        </li>
                        <li>
                          <FaCheck className="feature-icon" />
                          Registo de ordens de serviço
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
        </div>
      </div>
    </div>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  testimonials: PropTypes.array
};

export default HomePageTemplate;
