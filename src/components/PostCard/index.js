import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Row, Container, Col } from "react-grid-system";

const PostCard = ({ posts }) => {
  return (
    <div className="container">
      {posts
        .filter(post => post.node.frontmatter.templateKey === "article-page")
        .map(({ node: post }) => (
          <div className="post-container">
            <Container style={{ margin: 0, padding: 0 }}>
              <Row>
                <Col sm={12} md={12} lg={6}>
                  {/* <div className="post-image"> */}
                  <img
                    className="post-image"
                    src={post.frontmatter.cover}
                    alt={post.frontmatter.title}
                  />
                  {/* </div> */}
                </Col>
                <Col sm={12} md={12} lg={6}>
                  <div className="post-container-text">
                    <h2 className="post-title">{post.frontmatter.title}</h2>
                    <p className="post-text">{post.excerpt}</p>
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Ler mais
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
    </div>
  );
};

export default PostCard;
