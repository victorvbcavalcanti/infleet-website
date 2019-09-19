import React, { useState, useEffect } from "react";
import { useWindowSize } from "./useWindowSize";

export default function index() {
  const size = useWindowSize();

  const [input, setInput] = useState("");

  const hasAddon = size.width <= 1024 ? " " : "has-addons";

  const inputClass = size.width <= 425 ? "is-medium" : "is-large";

  return (
    <section className="newsletter-section">
      <h1 className="is-size-2 is-size-3-mobile">
        Inscreva-se no nosso Newsletter
      </h1>
      <p className="is-size-4 is-size-5-mobile has-text-grey-light">
        Receba dicas e conteúdos únicos preparados pela nossa equipe de
        especialistas em logística!
      </p>
      <div className="input-container">
        <div className={`field ${hasAddon}`}>
          <div className="control is-expanded">
            <input
              onChange={e => setInput(e.target.value)}
              className={`input ${inputClass}`}
              type="text"
              placeholder="Insira seu e-mail"
            />
          </div>
          <div className="control">
            <button className={`button is-success is-large newsletter-button`}>
              Inscrever
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
