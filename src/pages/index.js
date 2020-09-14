import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Github } from "@styled-icons/boxicons-logos/Github";

const Hero = styled.div`
  margin-top: 30vh;
  text-align: center;
`;

const MainHeading = styled.h1`
  margin: auto auto 1.5rem auto;
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

const SubHeading = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  color: var(--dark);
`;

const TwitterIcon = styled(Twitter)`
  width: 2rem;
  margin: 1rem 0.5rem;
  color: var(--dark);
`;

const GithubIcon = styled(Github)`
  margin: 1rem 0.5rem;
  width: 2rem;
  color: var(--dark);
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Gerard Hynes | Web Developer" />
    <Hero>
      <MainHeading>Hi, I'm Gerard</MainHeading>
      <SubHeading>
        I make fast, modern sites and apps using the JAMstack and fullstack
        JavaScript.
      </SubHeading>
      <a href="https://twitter.com/Gerard_K_Hynes">
        <TwitterIcon />
      </a>
      <a href="https://github.com/GK-Hynes">
        <GithubIcon />
      </a>
    </Hero>
  </Layout>
);

export default IndexPage;
