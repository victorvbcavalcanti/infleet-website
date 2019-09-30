import React from "react";
import { Container, Row, Col } from "react-grid-system";
import moment from "moment";
import "moment/locale/pt-br";

export default function index({ image, blogPosts }) {
  console.log(blogPosts);

  return (
    <section className="bloglist-section">
      <h1 className="is-size-2 is-size-3-mobile has-text-centered has-text-primary">
        Fique por dentro
      </h1>
      <div style={{ marginTop: "4rem" }}>
        <Container>
          <Row gutterWidth={48}>
            {blogPosts.map((blog, index) => (
              <Col sm={4} key={index}>
                <div className="blogPost">
                  <div className="blogImage">
                    <img
                      style={{maxHeight: '100%'}}
                      src={require(`../../../static${blog.node.frontmatter.cover}`)}
                      alt={blog.node.frontmatter.title}
                    />
                    {/* <Img fluid={image} alt="Blog" /> */}
                  </div>
                  <div className="blogContent">
                    <h1 className="blogTitle">{blog.node.frontmatter.title}</h1>
                    <h2 className="blogDate">
                      {moment(blog.node.frontmatter.date).format("LL")}
                    </h2>
                    <p className="blogText">{blog.node.internal.content}</p>
                    <div style={{ textAlign: "left", marginTop: "0.15rem" }}>
                      <a href="#">Ler mais</a>
                    </div>
                  </div>
                </div>
              </Col>
            ))}

            {/* <Col sm={4}>
              <div className="blogPost">
                <div className="blogImage">
                  <Img fluid={image} alt="Blog" />
                </div>
                <div className="blogContent">
                  <h1 className="blogTitle">
                    Sit exercitation culpa sunt velit commodo.
                  </h1>
                  <h2 className="blogDate">30 agosto de 2019</h2>
                  <p className="blogText">
                    Ut proident deserunt elit ea. Deserunt id non exercitation
                    amet nostrud velit pariatur mollit in dolore incididunt
                    veniam proident do. Adipisicing magna fugiat incididunt et
                    aute minim proident reprehenderit do deserunt mollit eiusmod
                    ex velit. Amet duis qui minim esse officia laboris laborum
                    minim voluptate cillum. Eiusmod magna ex in culpa Lorem
                    culpa do ad ut enim quis. Ut proident deserunt elit ea.
                    Deserunt id non exercitation amet nostrud velit pariatur
                    mollit in dolore incididunt veniam proident do. Adipisicing
                    magna fugiat incididunt et aute minim proident reprehenderit
                    do deserunt mollit eiusmod ex velit
                  </p>
                  <div style={{ textAlign: "left", marginTop: "0.15rem" }}>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="blogPost">
                <div className="blogImage">
                  <Img fluid={image} alt="Blog" />
                </div>
                <div className="blogContent">
                  <h1 className="blogTitle">
                    Sit exercitation culpa sunt velit commodo.
                  </h1>
                  <h2 className="blogDate">30 agosto de 2019</h2>
                  <p className="blogText">
                    Ut proident deserunt elit ea. Deserunt id non exercitation
                    amet nostrud velit pariatur mollit in dolore incididunt
                    veniam proident do. Adipisicing magna fugiat incididunt et
                    aute minim proident reprehenderit do deserunt mollit eiusmod
                    ex velit. Amet duis qui minim esse officia laboris laborum
                    minim voluptate cillum. Eiusmod magna ex in culpa Lorem
                    culpa do ad ut enim quis. Ut proident deserunt elit ea.
                    Deserunt id non exercitation amet nostrud velit pariatur
                    mollit in dolore incididunt veniam proident do. Adipisicing
                    magna fugiat incididunt et aute minim proident reprehenderit
                    do deserunt mollit eiusmod ex velit
                  </p>
                  <div style={{ textAlign: "left", marginTop: "0.15rem" }}>
                    <a href="#">Ler mais</a>
                  </div>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    </section>
  );
}
