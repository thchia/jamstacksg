import React from "react"
import styled from "styled-components"

function Banner(props) {
  const scroll = useScroll()
  return <Container {...props} scroll={scroll} />
}

export default Banner

const Container = styled("div").attrs(({ scroll }) => {
  const factor = Math.min(100, scroll / 10 + 50)
  return {
    style: {
      background: `linear-gradient(to bottom right, #ef3340 0 ${factor}%, white ${factor}% 100%)`,
    },
  }
})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

function useScroll() {
  const [scroll, setScroll] = React.useState(_getCurrentScroll())
  function onScroll() {
    setScroll(_getCurrentScroll())
  }
  React.useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })
  return scroll
}

function _getCurrentScroll() {
  if (typeof window === "undefined") return 0
  return window.scrollY
}
