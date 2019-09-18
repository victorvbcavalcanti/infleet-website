import React from "react";
import Slider from "react-slick";

export default function index() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="testimonial-section">
      <div className="container mobile-container">
        <div className="has-text-centered">
          <h1 className="is-size-2 is-size-3-mobile has-text-primary">
            Uma relação baseada em{" "}
            <span className="has-text-weight-bold is-size-1 is-size-2-mobile">confiança.</span>
          </h1>
          <Slider {...settings}>
            <div>
              <div className="testimonial-image">Imagem</div>
              <div className="testimonial-text">
                <h2 className="is-italic is-size-4">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vitae donec in eget mattis augue id suspendisse.”
                </h2>
                <br />
                <p className="is-size-4 has-text-weight-bold">Paulo Silveira</p>
                <p className="is-size-4 has-text-weight-light has-text-grey-light">
                  Diretor de Operações na MaxForte
                </p>
              </div>
            </div>
            <div>
              <div className="testimonial-image">Imagem</div>
              <div className="testimonial-text">
                <h2 className="is-italic is-size-4">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vitae donec in eget mattis augue id suspendisse.”
                </h2>
                <br />
                <p className="is-size-4 has-text-weight-bold">Paulo Silveira</p>
                <p className="is-size-4 has-text-weight-light has-text-grey-light">
                  Diretor de Logística na Biosanear
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
