import React, { useState, useEffect } from "react";
// import { useWindowSize } from "./useWindowSize";
import { Container, Row, Col } from "react-grid-system";

export default function index() {

  const [input, setInput] = useState("");

  return (
    <section className="newsletter-section">
      <h1 className="is-size-2 is-size-3-mobile">
        Inscreva-se no nosso Newsletter
      </h1>
      <p className="is-size-4 is-size-5-mobile has-text-grey-light">
        Receba dicas e conteúdos únicos preparados pela nossa equipe de
        especialistas em logística!
      </p>
      <Container style={{ marginTop: "2rem" }}>
        <Row gutterWidth={8} justify="center">
          <Col md={6}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className="input is-large"
              type="text"
              placeholder="Insira seu e-mail"
            />
          </Col>
          <br />
          <Col md={2}>
            <div className="">
              <button
                className="button is-success is-large newsletter-button"
              >
                Inscrever
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

