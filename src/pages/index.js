import React, { useState } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Loader from "../components/loader"
import SobreMi from "../components/sobreMi"
import FromEnd from "../components/frontEnd"
import BackEnd from "../components/backEnd"
import Contacto from "../components/contacto"
import Principal from "../components/principal"

import imgFondo from "../images/fondo.jpg"

const Main = styled.main`
  margin-top: 66px;
  display: flex;
  justify-content: center;

  .spacio {
    /* background-color: red; */
    /* height: 100px; */
    width: 8%;
  }

  @media (max-width: 600px) {
    .spacio {
      width: 0%;
    }
  }

  .spa {
    width: 100%;

    .contenido {
      display: flex;
      align-items: center;
      justify-content: center;
      /* background-color: red; */
      width: 100%;
      /* height: calc(100vh - 66px); */
      position: relative;

      .nombre {
        /* background-color: blue; */
        width: auto;
        height: min-content;
        margin-right: 1%;

        h1 {
          margin-bottom: 20px;
          font-size: 50px;
          color: #dde4ff;
        }
        h2 {
          font-size: 30px;
          color: #dde4ff;
          -webkit-text-stroke: 1px #dde4ff;
          color: #fff0;
        }
      }

      @media (max-width: 1005px) {
        .nombre {
          h1 {
            font-size: 35px;
          }
          h2 {
            font-size: 20px;
          }
        }
      }
      @media (max-width: 770px) {
        & {
          flex-direction: column;
          .nombre {
            position: absolute;
            h1 {
              font-size: 30px;
              text-align: center;
            }
            h2 {
              font-size: 16px;
              text-align: center;
            }
          }
        }
      }

      .imgPrincipal {
        background-color: red;
        height: 100vh;
        width: 50%;
        /* background-image: url("https://i.blogs.es/ea406c/haloin/1366_2000.jpeg"); */
        background-image: url(${imgFondo});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        .filtro {
          /* opacity: 0.7; */
          /* backdrop-filter: opacity(0%); */
          /* filter: opacity(100%); */
          /* backdrop-filter: blur(1px); */
          height: 100%;
          width: 100%;
          background-color: #5e0000b8;
        }
      }
      @media (max-width: 770px) {
        .imgPrincipal {
          width: 80%;
        }
      }

      /* From uiverse.io by @mrhyddenn */
      .scrolldown {
        position: absolute;
        bottom: 75px;
        left: calc(44% - 12px);
        --color: #dde4ff;
        --sizeX: 30px;
        --sizeY: 50px;
        /* position: relative; */
        width: var(--sizeX);
        height: var(--sizeY);
        margin-left: var(sizeX / 2);
        border: calc(var(--sizeX) / 10) solid var(--color);
        border-radius: 50px;
        box-sizing: border-box;
        margin-bottom: 16px;
        cursor: pointer;
      }

      .scrolldown::before {
        content: "";
        position: absolute;
        bottom: 30px;
        left: 50%;
        width: 6px;
        height: 6px;
        margin-left: -3px;
        background-color: var(--color);
        border-radius: 100%;
        animation: scrolldown-anim 2s infinite;
        box-sizing: border-box;
        box-shadow: 0px -5px 3px 1px #2a547066;
      }

      @keyframes scrolldown-anim {
        0% {
          opacity: 0;
          height: 6px;
        }

        40% {
          opacity: 1;
          height: 10px;
        }

        80% {
          transform: translate(0, 20px);
          height: 10px;
          opacity: 0;
        }

        100% {
          height: 3px;
          opacity: 0;
        }
      }

      .chevrons {
        padding: 6px 0 0 0;
        margin-left: -3px;
        margin-top: 48px;
        width: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .chevrondown {
        margin-top: -6px;
        position: relative;
        border: solid var(--color);
        border-width: 0 3px 3px 0;
        display: inline-block;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
      }

      .chevrondown:nth-child(odd) {
        animation: pulse54012 500ms ease infinite alternate;
      }

      .chevrondown:nth-child(even) {
        animation: pulse54012 500ms ease infinite alternate 250ms;
      }

      @keyframes pulse54012 {
        from {
          opacity: 0;
        }

        to {
          opacity: 0.5;
        }
      }
    }
  }
  @media (max-width: 800px) {
    .spa {
      width: 90%;
    }
  }

  @media (max-width: 600px) {
  }
`

const IndexPage = () => {
  const [loader, setLoader] = useState(true)

  setTimeout(() => {
    setLoader(false)
  }, 4000)

  return (
    <>
      <Seo titulo="Ronny Minda V." />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Layout>
          <Loader />

          <Main>
            <div id="HOME" className="spacio"></div>

            <div className="spa">
              <Principal />

              <SobreMi />

              <FromEnd />
              <BackEnd />
              <Contacto />
            </div>
          </Main>

          {/* <Div /> */}
        </Layout>
      </motion.div>
    </>
  )
}

export default IndexPage
