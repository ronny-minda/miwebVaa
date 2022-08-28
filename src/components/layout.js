import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "@reach/router"
/* import { StaticImage } from 'gatsby-plugin-image'; */

import Footer from "./footer"
import Header from "./header"
import imgtextura from "../images/textura.png"

import Luna from "../svg/luna"
import Sol from "../svg/sol"

// import PropTypes from "prop-types"

// let x, y;

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: 'Noto Sans', sans-serif;

    scroll-behavior: smooth;
    user-select: none;
    
  }
  *, *:before, *::after {
      box-sizing: inherit;
  } 
  body {
    overflow-x: hidden;
    /* background-color: #20232c; */
    /* background-image: linear-gradient(to left, #1a1d27, #1c202e, #1f2434, #21273b, #232b42); */
    /* background-image: linear-gradient(to right top, #78808b, #616975, #4a535f, #353d4a, #212936); */
    /* background-image: linear-gradient(to right, #4c3434, #3e2a31, #2e222b, #1e1a24, #0f111a); */
    
    /* background-image: linear-gradient(to right, #525d6d, #495364, #404a5a, #374151, #2e3848); */

    /* height: 100vh; */
    /* position: absolute; */
    width: 100%;
    background-color: #1C1C1C;

    /* overflow-x: hidden; */
    
    
  }

  .textura {
    background-image: url(${imgtextura});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }

  body::-webkit-scrollbar {
    width: 4px;
    background-color: #f00;
  }

  body::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 10px;
  }

  .logoty {
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    height: 100px;
    width: 100px;
  }
`

const Div = styled.div``

// const Mause = styled.div`
//   background-color: #0CFF00;
//   /* border: 1px solid #0CFF00; */
//   border-radius: 50%;
//   height: 40px;
//   width: 40px;
//   /* box-shadow: 0px 0px 25px 15px #AA00FF; */
//   position: fixed;
//   z-index: 99;
//   transition: .1s;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* box-shadow: 10px 10px 5px 0px #0006; */
//   /* filter: blur(10px); */
//   /* backdrop-filter: blur(2px); */
//   /* top: 0;
//   left: ${50}px; */
//   div {
//     height: 3px;
//     width: 3px;
//     background-color: #AA00FF;
//     border-radius: 50%;

//   }
// `;

const Layout = ({ children }) => {
  /*   const location = useLocation();

  console.log(location); */

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  React.useEffect(() => {
    window.addEventListener("mousemove", e => {
      // const mause = document.querySelector(".mause")
      const y = e.pageY - window.top.scrollY
      const x = e.pageX

      // console.log(x)
      // console.log(y - window.top.scrollY)

      setPosition({
        x: x - 25,
        y: y - 25,
      })
    })
  }, [])

  // useEffect(() => {
  //   let defecto = localStorage.getItem("tema")

  //   if (!defecto) {
  //     localStorage.setItem("tema", "claro")
  //   }
  // }, [])

  // const [tema, setTema] = useState("")

  // useEffect(() => {
  //   let defecto = localStorage.getItem("tema")

  //   setTema(defecto)
  // }, [tema])

  // const modo = () => {
  //   if (tema === "oscuro") {
  //     setTema("claro")
  //     localStorage.setItem("tema", "claro")
  //   } else {
  //     setTema("oscuro")
  //     localStorage.setItem("tema", "oscuro")
  //   }
  // }

  useEffect(() => {
    const body = document.body

    setTimeout(() => {
      body.setAttribute("class", "textura")
    }, 2000)
  }, [])

  // const mause = e => {
  //   console.log("sii")
  //   console.log(e.pageX)
  //   // console.log("heit: " + e.pageY)
  //   console.log(e.pageY - window.top.scrollY)
  //   // console.log("screen: " + window.innerWidth)
  //   // console.log(document.documentElement.scrollHeight)
  //   // console.log("total")
  //   // console.log(document.documentElement.scrollHeight - window.innerWidth)
  // }

  return (
    <>
      <React.StrictMode>
        <Global />
        {/*     <StaticImage className="logoty" src="../images/logo.png" alt="Logo" /> */}

        {/* <Mause className="mause"></Mause> */}
        <motion.div
          animate={{
            translateX: position.x,
            translateY: position.y,
            rotate: position.x,
          }}
          className="backgroundMause"
          style={{
            position: "fixed",
            zIndex: "99999",
            height: "50px",
            width: "50px",
            // borderRadius: "50%",
            // border: "3px solid black",
            clipPath:
              "polygon(0 100%, 0 0, 15% 0, 0 17%, 0 83%, 15% 100%, 100% 100%, 100% 0, 79% 0, 100% 20%, 100% 83%, 81% 100%)",
            backgroundColor: "red",
            top: "0",
            left: "0",
          }}
        ></motion.div>

        <div
          style={{
            background:
              "linear-gradient(270deg, #000000ee 10%, #2c2c2cdd 100%)",
          }}
        >
          <Header />
          {children} {/* LLega el cuerpo de pagina! */}
          <Footer />
          {/* <Div onClick={modo}>{tema === "claro" ? <Sol /> : <Luna />}</Div> */}
        </div>
      </React.StrictMode>
    </>
  )
}

export default Layout
