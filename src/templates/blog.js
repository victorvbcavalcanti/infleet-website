import React, { Component } from "react";
import { Link } from "gatsby";
import config from "../../config";
import Helmet from "react-helmet";
import PostCard from "../components/PostCard";
import Layout from "../components/Layout";

const PaginationLink = props => {
  if (!props.test) {
    return (
      <Link to={`/blog/${props.url}`} className="button is-rounded">
        {props.text}
      </Link>
    );
  } else {
    return (
      <span disabled className="button is-rounded">
        {props.text}
      </span>
    );
  }
};

export default class BlogPage extends Component {
  render() {
    const { pageContext } = this.props;
    const { group, index, first, last } = pageContext;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString() + "/";

    const websiteSchemaOrgJSONLD = {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: config.siteUrl,
      name: `${config.siteTitle}-${index + 1}`,
      alternateName: config.siteTitleAlt
        ? `${config.siteTitleAlt}-${index + 1}`
        : ""
    };

    return (
      <Layout>
        <Helmet>
          <title>Blog | INFLEET |{` Página ${index}`}</title>
          <meta
            name="description"
            content={`Pagina do blog Infleet numero ${index}`}
          />
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(websiteSchemaOrgJSONLD)}
          </script>
        </Helmet>
        {/* <section className="hero is-primary is-bold position-section">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-10">
                  <div style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
                    <h1 className="is-size-1">Blog</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "400",
            textAlign: "center",
            color: "gray",
            marginBottom: "2rem",
            marginTop: "5rem"
          }}
        >
          Acesse o conteúdo preparado por nossos especialistas em logística.
        </h1>
        <section className="section">
          <PostCard posts={group} />
          <section className="section">
            <div className="buttons is-centered">
              <PaginationLink
                test={first}
                url={previousUrl}
                text="Página anterior"
              />
              <PaginationLink test={last} url={nextUrl} text="Próxima página" />
            </div>
          </section>
        </section>
      </Layout>
    );
  }
}
