import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/Title"
import Banner from "../components/Banner"
import Jumbo from "../components/Jumbo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner>
      <Title />
      <Arrow>
        <Jumbo>↯</Jumbo>
      </Arrow>
    </Banner>
    <Content>
      <H2>Arriving December 5th, 7:00pm at</H2>
      <H2>Stripe Singapore</H2>
      <H3>In collaboration with</H3>
      <a href="https://reactknowledgeable.org/meetups/5" target="blank">
        <H3>React Knowledgeable</H3>
      </a>
    </Content>
  </Layout>
)

export default IndexPage

const Arrow = styled("div")`
  position: absolute;
  bottom: 0;
  h1 {
    font-size: 6rem;
  }
`
const Content = styled("div")`
  text-align: center;
  padding: 0rem 1rem 5rem 1rem;
  max-width: 1200px;
  margin: auto;
  a {
    color: inherit;
  }
`
const H2 = styled("h2")`
  margin: 4rem 0rem;
  font-size: 4rem;
  font-weight: 900;
  font-style: italic;
  @media (max-width: 600px) {
    font-size: 3rem;
  }
`
const H3 = styled("h3")`
  font-weight: 900;
  font-style: italic;
  font-size: 2rem;
  margin: 0rem;
`
