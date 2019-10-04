import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";

import addToMailchimp from "gatsby-plugin-mailchimp";

export default function index() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState({});
  // const [buttonStatus, setStatus] = useState("Inscrever");

  const _handleSubmit = async e => {
    e.preventDefault();
    addToMailchimp(input) // listFields are optional if you are only capturing the email address.
      .then(data => {
        console.log(data);
        setResult(data);
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <section className="newsletter-section">
      <h1 className="is-size-2 is-size-3-mobile">
        Inscreva-se no nosso Newsletter
      </h1>
      <p className="is-size-4 is-size-5-mobile has-text-grey-light">
        Receba dicas e conteúdos únicos preparados pela nossa equipe de
        especialistas em logística!
      </p>
      <form onSubmit={_handleSubmit}>
        <Container style={{ marginTop: "2rem" }}>
          <Row gutterWidth={8} justify="center">
            <Col md={6}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                className="input is-large"
                type="email"
                placeholder="Insira seu e-mail"
              />
              <p>{result.msg}</p>
            </Col>
            <br />
            <Col md={2}>
              <div className="">
                <button className="button is-success is-large newsletter-button">
                  {result.result !== "success" ? "Inscrever" : "Obrigado!"}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    </section>
  );
}
