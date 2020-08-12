import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

import SEO from "../components/seo";

const Writing = ({ data }) => {
  const { edges: posts } = data.allMdx;
  return (
    <Layout>
      <SEO title="Gerard Hynes | Writing" />
      <h1>Articles will go here</h1>
      <ul style={{ listStyle: `none` }}>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.frontmatter.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Writing;

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
