import React from "react";
import { Container, Row, Col } from "react-grid-system";

export default function index() {
  return (
    <section className="contact-section">
      <div className="contact-title">
        <h1 className="is-size-2 is-size-3-mobile has-text-primary">
          Entre em contato conosco
        </h1>
        <h2 className="is-size-4 is-size-5-mobile">
          Nosso consultor entrará em contato em até 24h
        </h2>
      </div>

      <div className="container">
        <div className="contact-info">
          <p>contato@infleet.com.br</p>
          <p>(71) 9 9999 - 9999</p>
        </div>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <Row>
                <Col>
                  <div className="field">
                    <label className="label">Nome</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Nome" />
                    </div>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="field">
                    <label className="label">E-mail</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Ex.: joao@exemplo.com"
                      />
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="field">
                    <label className="label">Telefone</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="(71) 9 9999 - 9999"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="field">
                    <label className="label">Mensagem</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder="Escreva aqui sua mensagem"
                      ></textarea>
                    </div>
                  </div>
                </Col>
              </Row>
              <br />
              <button
                className="send"
              >
                ENVIAR
              </button>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <div>Imagem</div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
