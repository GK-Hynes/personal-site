import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Github } from "@styled-icons/boxicons-logos/Github";

const HeroStyles = styled.div`
  margin-top: 20vh;
  text-align: center;
  padding: 0 0.5rem;
`;

const HeadingStyles = styled.h2`
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  color: var(--dark);
  display: inline;
  background-image: linear-gradient(
    to top,
    transparent 15%,
    var(--primary-500) 15% 55%,
    transparent 55%
  );
`;

const SubHeadingStyles = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: var(--dark);
  margin-bottom: 0.5rem;
`;

const DescriptionStyles = styled.ul`
  font-size: 1.25rem;
  text-align: center;
  color: var(--dark);
  list-style: none;

  a {
    font-weight: 600;
    text-decoration: underline;
    color: #75abad;
  }
`;

const TwitterIconStyles = styled(Twitter)`
  width: 2rem;
  margin: 1rem 0.5rem;
  fill: var(--dark);
  transition: fill 300ms ease-in-out;

  &:hover {
    fill: var(--primary-900);
  }
`;

const GithubIconStyles = styled(Github)`
  width: 2rem;
  margin: 1rem 0.5rem;
  fill: var(--dark);
  transition: fill 300ms ease-in-out;

  &:hover {
    fill: var(--primary-900);
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Gerard Hynes | Web Developer" />
    <HeroStyles>
      <HeadingStyles>Hi, I'm Gerard</HeadingStyles>
      <SubHeadingStyles>
        I make fast, modern sites and apps using the Jamstack and fullstack
        JavaScript.
      </SubHeadingStyles>
      <DescriptionStyles>
        <li>
          <span role="img" aria-label="Laptop Emoji">
            💻
          </span>{" "}
          <Link to="/projects">My Projects</Link>
        </li>
        <li>
          <span role="img" aria-label="Waving Hand Emoji">
            👋
          </span>{" "}
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <span role="img" aria-label="Hand Writing Emoji">
            ✍️
          </span>{" "}
          <Link to="/writing">Recent Writing</Link>
        </li>
      </DescriptionStyles>
      <a href="https://twitter.com/Gerard_K_Hynes" aria-label="Twitter">
        <TwitterIconStyles />
      </a>
      <a href="https://github.com/GK-Hynes" aria-label="GitHub">
        <GithubIconStyles />
      </a>
    </HeroStyles>
  </Layout>
);

export default IndexPage;
