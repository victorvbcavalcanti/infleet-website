import React from "react";

import { Container, Row, Col } from "react-grid-system";
import { Formik } from "formik";
import * as Yup from "yup";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const TrialSchema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string()
    .email("E-mail inválido")
    .required("Campo obrigatório")
});

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function index({ isOpen, handleModal }) {
  const modalClass = isOpen ? "is-active" : "";

  // const handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  return (
    <div>
      <div className={`modal ${modalClass}`}>
        <div className="modal-background"></div>
        <div style={{ width: "800px" }} className="modal-content">
          <div className="box">
            <Container>
              <Row>
                <Col>
                  <div className="modal-header">
                    <h1 className="modal-title is-size-3">TESTE GRÁTIS</h1>
                    <h2 className="modal-subtitle is-size-5 has-text-grey-light">
                      15 dias
                    </h2>
                  </div>
                </Col>
              </Row>
              <Row gutterWidth={48}>
                <Col className="border-right" xs={12} md={6}>
                  <Formik
                    initialValues={{ name: "", email: "" }}
                    onSubmit={(values, { setSubmitting }) => {
                      fetch("/?no-cache=1", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: encode({
                          "form-name": "trial",
                          ...values
                        })
                      })
                        .then(() => {
                          alert("Success!");
                          setSubmitting(false);
                        })
                        .catch(error => {
                          alert("Error: Please Try Again!");
                          setSubmitting(false);
                        });

                      alert("submit!");
                      setSubmitting(false);
                    }}
                    validateOnBlur={true}
                    validateOnChange={false}
                    validationSchema={TrialSchema}
                    render={({
                      errors,
                      touched,
                      handleChange,
                      handleReset,
                      handleSubmit,
                      isSubmitting
                    }) => (
                      <form
                        name="trial"
                        onSubmit={handleSubmit}
                        onReset={handleReset}
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                      >
                        <input type="hidden" name="trial" value="trial" />
                        <div hidden>
                          <label>
                            Don’t fill this out:{" "}
                            <input name="bot-field" onChange={handleChange} />
                          </label>
                        </div>
                        <Row>
                          <Col>
                            <div className="field">
                              <label className="label">Nome</label>
                              <div className="control">
                                <input
                                  name="name"
                                  onChange={handleChange}
                                  className="input"
                                  type="text"
                                  placeholder="Nome"
                                />
                              </div>
                              {errors.name && (
                                <p style={{ color: "red" }}>{errors.name}</p>
                              )}
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
                                  name="email"
                                  onChange={handleChange}
                                  className="input"
                                  type="text"
                                  placeholder="Ex.: joao@exemplo.com"
                                />
                              </div>
                              {errors.email && (
                                <p style={{ color: "red" }}>{errors.email}</p>
                              )}
                            </div>
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col>
                            <div className="field">
                              <label className="label">Telefone</label>
                              <div className="control">
                                <input
                                  name="phone"
                                  onChange={handleChange}
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
                              <label className="label">
                                Número de equipamentos
                              </label>
                              <div className="control">
                                <input
                                  name="equipments"
                                  onChange={handleChange}
                                  className="input"
                                  type="number"
                                  placeholder="Ex.: 10"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <br />
                        <button type="submit" className="confirm">
                          SOLICITAR
                        </button>
                      </form>
                    )}
                  />
                </Col>

                <Col xs={12} md={6}>
                  <p className="explain">
                    Em caso de qualquer dúvida, não hesite em nos contatar! : )
                  </p>
                  <br />
                  <div className="test-info">
                    <IoMdMail className="test-icon" />
                    <p>contato@infleet.com.br</p>
                  </div>
                  <div className="test-info">
                    <FaPhone className="test-icon" />
                    <p>(71) 9 9999-9999</p>
                  </div>
                  <br />
                  <p>Atenciosamente,</p>
                  <br />
                  <p>
                    <strong>Henrique Lima</strong>
                  </p>
                  <p>Consultor de Vendas | INFLEET</p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <button
          onClick={() => handleModal(false)}
          className="modal-close is-large"
          aria-label="close"
        ></button>
      </div>
    </div>
  );
}
