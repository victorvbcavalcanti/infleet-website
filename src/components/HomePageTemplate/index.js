import React, { useState } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Hero from "../Hero/";
import Products from "../Products/";
import Router from "../Features/router";
import Monitoring from "../Features/monitoring";
import Maintenance from "../Features/maintenance";
import Fuelling from "../Features/fuelling";
import Testimonials from "../Testimonials/";
import Partners from "../Partners/";
import Indicators from "../Indicators/";
import Press from "../Press/";
import BlogList from "../BlogList/";
import Newsletter from "../Newsletter/";
import ContactForm from "../ContactForm/";
import TestModal from "../TestModal/";

const HomePageTemplate = ({
  meta_title,
  meta_description,
  background,
  crea,
  renault,
  vale,
  inovativa,
  senai,
  routerIcon,
  monitorIcon,
  maintenanceIcon,
  fuellingIcon,
  routerFeature,
  monitorFeature,
  maintenanceFeature,
  fuellingFeature,
  avatar1,
  avatar2,
  maxforte,
  biosanear,
  milfontes,
  unimed,
  ecologicaNordeste,
  mirasol,
  pegn,
  creaPartner,
  tecmundo,
  band,
  trucks
}) => {
  const backgroundImage = background.childImageSharp.fluid;
  const inovativaImage = inovativa.childImageSharp.fluid;
  const creaImage = crea.childImageSharp.fluid;
  const valeImage = vale.childImageSharp.fluid;
  const renaultImage = renault.childImageSharp.fluid;
  const senaiImage = senai.childImageSharp.fluid;

  const routerIconImage = routerIcon.childImageSharp.fluid;
  const monitorIconImage = monitorIcon.childImageSharp.fluid;
  const maintenanceIconImage = maintenanceIcon.childImageSharp.fluid;
  const fuellingIconImage = fuellingIcon.childImageSharp.fluid;

  const routerFeatureImage = routerFeature.childImageSharp.fluid;
  const monitorFeatureImage = monitorFeature.childImageSharp.fluid;
  const maintenanceFeatureImage = maintenanceFeature.childImageSharp.fluid;
  const fuellingFeatureImage = fuellingFeature.childImageSharp.fluid;

  const avatar1Image = avatar1.childImageSharp.fluid;
  const avatar2Image = avatar2.childImageSharp.fluid;

  const maxforteImage = maxforte.childImageSharp.fluid;
  const biosanearImage = biosanear.childImageSharp.fluid;
  const milfontesImage = milfontes.childImageSharp.fluid;
  const unimedImage = unimed.childImageSharp.fluid;
  const ecologicaNordesteImage = ecologicaNordeste.childImageSharp.fluid;
  const mirasolImage = mirasol.childImageSharp.fluid;

  const pegnImage = pegn.childImageSharp.fluid;
  const creaPartnerImage = creaPartner.childImageSharp.fluid;
  const tecmundoImage = tecmundo.childImageSharp.fluid;
  const bandImage = band.childImageSharp.fluid;

  const trucksImage = trucks.childImageSharp.fluid;

  const [isOpen, setModal] = useState(false);

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
        handleModal={setModal}
      />

      <Products
        routerIcon={routerIconImage}
        monitorIcon={monitorIconImage}
        maintenanceIcon={maintenanceIconImage}
        fuellingIcon={fuellingIconImage}
      />

      <section className="features-section">
        <div className="container">
          <Router routerFeature={routerFeatureImage} />
          <Monitoring monitorFeature={monitorFeatureImage} />
          <Maintenance maintenanceFeature={maintenanceFeatureImage} />
          <Fuelling fuellingFeature={fuellingFeatureImage} />
        </div>
      </section>

      <Testimonials avatar1={avatar1Image} avatar2={avatar2Image} />

      <Partners
        maxforte={maxforteImage}
        biosanear={biosanearImage}
        milfontes={milfontesImage}
        unimed={unimedImage}
        ecologicaNordeste={ecologicaNordesteImage}
        mirasol={mirasolImage}
      />

      <Indicators />

      <Press
        band={bandImage}
        pegn={pegnImage}
        tecmundo={tecmundoImage}
        creaPartner={creaPartnerImage}
      />

      <BlogList image={backgroundImage} />

      <Newsletter />

      <ContactForm trucks={trucksImage} />

      <TestModal isOpen={isOpen} handleModal={setModal} />
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
