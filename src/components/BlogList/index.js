import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "gatsby";
import moment from "moment";
import "moment/locale/pt-br";
import dashboard from "../../assets/img/dashboard.jpg";

export default function index({ image, blogPosts }) {
  return (
    <section className="bloglist-section">
      <h1 className="is-size-2 is-size-3-mobile has-text-centered has-text-primary">
        Fique por dentro
      </h1>
      <div style={{ marginTop: "4rem" }}>
        <Container>
          <Row gutterWidth={48}>
            {blogPosts.map((blog, index) => (
              <Col sm={12} md={6} lg={4} key={index}>
                <div className="blogPost">
                  <div className="blogImage">
                    <img
                      style={{ height: "100%", width: "100%" }}
                      src={require(`../../../static${blog.node.frontmatter.cover}`)}
                      alt={blog.node.frontmatter.title}
                    />
                  </div>
                  <div className="blogContent">
                    <h1 className="blogTitle">{blog.node.frontmatter.title}</h1>
                    <h2 className="blogDate">
                      {moment(blog.node.frontmatter.date).format("LL")}
                    </h2>
                    <p className="blogText">{blog.node.internal.content}</p>
                    <div style={{ textAlign: "left", marginTop: "0.15rem" }}>
                      <Link to={blog.node.fields.slug}>Ler mais</Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}
