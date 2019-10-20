import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
      {/* <footer>© {new Date().getFullYear()} JamStackSG</footer> */}
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Container = styled("div")`
  margin: 0 auto;
`

export default Layout
