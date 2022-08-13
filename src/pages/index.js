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

      .nombre {
        /* background-color: blue; */
        width: auto;
        height: min-content;
        margin-right: 1%;

        h1 {
          margin-bottom: 20px;
          font-size: 50px;
          color: #fff;
        }
        h2 {
          font-size: 30px;
          color: #fff;
          -webkit-text-stroke: 1px #fff;
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
            }
            h2 {
              font-size: 16px;
            }
          }
        }
      }

      .imgPrincipal {
        height: 100vh;
        width: 50%;
        background-color: red;
      }
      @media (max-width: 770px) {
        .imgPrincipal {
          width: 80%;
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
        {/* <Loader /> */}

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
