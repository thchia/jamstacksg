import React from "react"
import styled, { css } from "styled-components"

function Jumbo({ children, className }) {
  return <H1 className={className}>{children}</H1>
}

export default Jumbo

export const jumboCss = css`
  font-size: 8rem;
  font-weight: 900;
  font-style: italic;
  margin-top: 3rem;
  margin-bottom: 0px;
  text-shadow: ${() => {
    const width = 1
    const color = "#ef3340"
    const config = [[6, 6]]
    return config
      .map(c => `${c[0] * width}px ${c[1] * width}px 0 ${color}`)
      .join(", ")
  }};
  @media (max-width: 375px) {
    font-size: 6.5rem;
  }
`

const H1 = styled("h1")`
  ${jumboCss};
`
