import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"
/* import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from '@reach/router'; */
/* import { StaticImage } from 'gatsby-plugin-image'; */

import Footer from "./footer"
import Header from "./header"

import Luna from "../svg/luna"
import Sol from "../svg/sol"

// import PropTypes from "prop-types"

// let x, y;

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
    user-select: none;
  }
  *, *:before, *::after {
      box-sizing: inherit;
  } 
  body {
    /* background-color: #20232c; */
    /* background-image: linear-gradient(to left, #1a1d27, #1c202e, #1f2434, #21273b, #232b42); */
    /* background-image: linear-gradient(to right top, #78808b, #616975, #4a535f, #353d4a, #212936); */
    /* background-image: linear-gradient(to right, #4c3434, #3e2a31, #2e222b, #1e1a24, #0f111a); */
    
    /* background-image: linear-gradient(to right, #525d6d, #495364, #404a5a, #374151, #2e3848); */

    /* height: 100vh; */
    /* position: absolute; */
    width: 100%;
    /* overflow-x: hidden; */
    
    
  }
  body::-webkit-scrollbar {
    width: 12px;
  }

  

  
  .oscuro  {
    background-color: #171717;

    &::-webkit-scrollbar-track {
      background-color: #2E2E2E;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #171717;
      border-radius: 10px;
    }
  }
  .claro {
    background-color: #E6E6E6;

    &::-webkit-scrollbar-track {
      background-color: #CBCBCB;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #E6E6E6;
      border-radius: 10px;
    }
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

const Div = styled.div`
  position: fixed;
  z-index: 999999;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  /* background-color: red; */
  height: 80px;
  width: 80px;
  transition: 0.5s background-color;
  display: flex;
  justify-content: center;
  align-items: center;

  .claro & {
    /* background-color: #000; */
    background-color: #fff;
    svg {
      height: 70%;
      width: 70%;
      fill: #000;
    }
    svg:hover {
      fill: #f00;
      filter: drop-shadow(0px 0px 5px #f00);
    }
  }
  .oscuro & {
    /* background-color: #fff; */
    background-color: #0e0e0e;
    svg {
      height: 70%;
      width: 70%;
      fill: #fff;
    }
    svg:hover {
      fill: #f00;
      filter: drop-shadow(0px 0px 5px #f00);
    }
  }

  .claro &:active {
    /* background-color: #000; */
    transition: none;
    box-shadow: 3px 3px 5px 0 #0002 inset, -2px -2px 5px #fff inset;
    background-color: #e6e6e6;
  }
  .oscuro &:active {
    /* background-color: #fff; */
    transition: none;
    box-shadow: 3px 3px 5px 0 #040404 inset, -2px -2px 5px #363636 inset;
    background-color: #171717;
  }
`

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

  // React.useEffect(() => {

  //   window.addEventListener('mousemove', (e) => {
  //     const mause = document.querySelector('.mause');
  //     const y = e.pageY;
  //     const x = e.pageX;

  //     mause.style.left = `${x - 10}px`;
  //     mause.style.top = `${y - 10}px`;

  //     // console.log({x});
  //     // console.log({y});
  //   })

  // }, [])

  useEffect(() => {
    let defecto = localStorage.getItem("tema")

    if (!defecto) {
      localStorage.setItem("tema", "claro")
    }
  }, [])

  const [tema, setTema] = useState("")

  useEffect(() => {
    let defecto = localStorage.getItem("tema")

    setTema(defecto)
  }, [tema])

  const modo = () => {
    if (tema === "oscuro") {
      setTema("claro")
      localStorage.setItem("tema", "claro")
    } else {
      setTema("oscuro")
      localStorage.setItem("tema", "oscuro")
    }
  }

  useEffect(() => {
    const body = document.body
    body.setAttribute("class", tema)

    setTimeout(() => {
      body.setAttribute("style", "transition: .5s background-color;")
    }, 1)
  }, [tema])

  return (
    <>
      <React.StrictMode>
        <Global />
        {/*     <StaticImage className="logoty" src="../images/logo.png" alt="Logo" /> */}

        {/* <Mause className="mause"></Mause> */}

        <div>
          <Header />

          <main>
            {children} {/* LLega el cuerpo de pagina! */}
          </main>

          <Footer />

          <Div onClick={modo}>{tema === "claro" ? <Sol /> : <Luna />}</Div>
        </div>
      </React.StrictMode>
    </>
  )
}

export default Layout
