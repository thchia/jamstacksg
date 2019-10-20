import React from "react"
import styled from "styled-components"

import Jumbo, { jumboCss } from "./Jumbo"

function Title() {
  return (
    <Container>
      <Name>
        JAM<Star>&#9734;</Star>
      </Name>
      <Name>Stack</Name>
      <Name>SG</Name>
    </Container>
  )
}

export default Title

const Container = styled("div")`
  text-align: center;
  color: white;
  margin: 3rem 1rem 0rem 1rem;
  mix-blend-mode: difference;
`
const Name = styled(Jumbo)`
  display: inline-block;
  position: relative;
  margin: 0px;
`
const Star = styled("span")`
  ${jumboCss};
  font-size: 4rem;
  position: absolute;
  top: 0rem;
  left: -1.5rem;
  font-weight: 100;
  margin-top: 0px;
  @media (max-width: 375px) {
    font-size: 3rem;
  }
`
