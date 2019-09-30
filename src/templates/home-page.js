import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import HomePageTemplate from "../components/HomePageTemplate";
import Layout from "../components/Layout";

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  let { edges } = data.allMarkdownRemark;

  const blogPosts = edges.filter((blog, index) => index !== 0 && index !== 1);

  const {
    background,
    crea,
    inovativa,
    renault,
    senai,
    vale,
    routerIcon,
    monitorIcon,
    maintenanceIcon,
    fuellingIcon,
    avatar1,
    avatar2,
    maxforte,
    biosanear,
    milfontes,
    unimed,
    ecologicaNordeste,
    mirasol,
    band,
    creaPartner,
    tecmundo,
    pegn,
    trucks,
    routerFeature,
    monitorFeature,
    maintenanceFeature,
    fuellingFeature
  } = data;

  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        description={frontmatter.description}
        offerings={frontmatter.offerings}
        testimonials={frontmatter.testimonials}
        blogPosts={blogPosts}
        background={background}
        crea={crea}
        inovativa={inovativa}
        renault={renault}
        senai={senai}
        vale={vale}
        routerIcon={routerIcon}
        monitorIcon={monitorIcon}
        maintenanceIcon={maintenanceIcon}
        fuellingIcon={fuellingIcon}
        avatar1={avatar1}
        avatar2={avatar2}
        maxforte={maxforte}
        biosanear={biosanear}
        milfontes={milfontes}
        unimed={unimed}
        ecologicaNordeste={ecologicaNordeste}
        mirasol={mirasol}
        band={band}
        creaPartner={creaPartner}
        tecmundo={tecmundo}
        pegn={pegn}
        trucks={trucks}
        routerFeature={routerFeature}
        monitorFeature={monitorFeature}
        fuellingFeature={fuellingFeature}
        maintenanceFeature={maintenanceFeature}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default HomePage;

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            cover
          }
          fields {
            slug
          }
          internal {
            content
          }
        }
      }
    }
    background: file(relativePath: { eq: "background.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crea: file(relativePath: { eq: "crea.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    inovativa: file(relativePath: { eq: "inovativa.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    renault: file(relativePath: { eq: "renault.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    senai: file(relativePath: { eq: "senai.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vale: file(relativePath: { eq: "vale.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    routerIcon: file(relativePath: { eq: "router-icon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    monitorIcon: file(relativePath: { eq: "monitor-icon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    maintenanceIcon: file(relativePath: { eq: "maintenance-icon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fuellingIcon: file(relativePath: { eq: "fuelling-icon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    avatar1: file(relativePath: { eq: "avatar-1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    avatar2: file(relativePath: { eq: "avatar-2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    maxforte: file(relativePath: { eq: "maxforte.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mirasol: file(relativePath: { eq: "mirasol.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    milfontes: file(relativePath: { eq: "milfontes.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    unimed: file(relativePath: { eq: "unimed.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ecologicaNordeste: file(relativePath: { eq: "ecologica-nordeste.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    biosanear: file(relativePath: { eq: "biosanear.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pegn: file(relativePath: { eq: "pegn.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tecmundo: file(relativePath: { eq: "tecmundo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    creaPartner: file(relativePath: { eq: "crea-partner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    band: file(relativePath: { eq: "band.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    trucks: file(relativePath: { eq: "trucks.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    routerFeature: file(relativePath: { eq: "router-feature.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    monitorFeature: file(relativePath: { eq: "monitor-feature.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    maintenanceFeature: file(relativePath: { eq: "maintenance-feature.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fuellingFeature: file(relativePath: { eq: "fuelling-feature.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`;
