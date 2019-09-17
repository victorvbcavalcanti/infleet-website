import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import HomePageTemplate from "../components/HomePageTemplate";
import Layout from "../components/Layout";

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { background, crea, inovativa, renault, senai, vale } = data;

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
        background={background}
        crea={crea}
        inovativa={inovativa}
        renault={renault}
        senai={senai}
        vale={vale}
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
    background: file(relativePath: { eq: "background.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 892) {
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
        fluid(maxWidth: 1000) {
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
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`;
