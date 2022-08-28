import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

import Javascript from "../svg/javascript"
import LiteReact from "../svg/react"
import Sass from "../svg/sass"
import Node from "../svg/node"
import Git from "../svg/git"
import GitHub from "../svg/gitHub"

import Html from "../svg/html"
import Css from "../svg/css"
import Next from "../svg/next"

import curriculum from "../archivos/curriculum.pdf"

const Section = styled.section`
  margin: 300px 0;
  width: 100%;
  height: auto;
  /* background-color: aqua; */
  display: flex;
  justify-content: center;
  align-items: center;

  .conte {
    margin: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-wrap: wrap;

    .imgPerfil {
      height: 200px;
      width: 200px;
      background-color: red;
      margin-right: 30px;
      position: relative;
      z-index: 10;
    }

    .som {
      height: 200px;
      width: 200px;
      background-color: #141414;
      position: absolute;
      top: 30px;
      right: 73%;
      z-index: 9;
    }

    .tecnologias {
      margin-top: 35px;
      // background-color: red;
      height: 50px;
      width: calc(100% - 17.5px);
      padding-top: 20px;

      h3 {
        color: #dde4ff;
        padding-left: 30px;
      }

      .conteIco {
        background-color: #141414;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 20px 0;
        padding: 10px 0;

        .conteIconos {
          /* background-color: #ff4747; */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h4 {
          color: #dde4ff;
          margin: 10px 5px;
          font-size: 15px;
        }

        svg {
          margin: 0 8px;
          height: 50px;
          width: 50px;
          fill: #dde4ff;
        }
      }
    }

    .descripcion {
      & > * {
        user-select: text;
      }
      h3 {
        color: #dde4ff;
      }
      p {
        margin-top: 20px;
        width: 500px;
        color: #dde4ff;
      }

      /* From uiverse.io by @satyamchaudharydev */
      .button {
        --width: 200px;
        --height: 50px;
        --tooltip-height: 35px;
        --tooltip-width: 90px;
        --gap-between-tooltip-to-button: calc(var(--tooltip-height) + 3px);
        --button-color: #f00;
        --tooltip-color: #fff;
        margin-top: 20px;
        width: var(--width);
        height: var(--height);
        background: var(--button-color);
        position: relative;
        text-align: center;
        border-radius: 3px;
        font-family: "Arial";
        transition: background 0.1s;
      }

      .button::before {
        position: absolute;
        content: attr(data-tooltip);
        width: var(--tooltip-width);
        height: var(--tooltip-height);
        background-color: var(--tooltip-color);
        font-size: 0.9rem;
        color: #111;
        border-radius: 0.25em;
        line-height: var(--tooltip-height);
        bottom: calc(
          var(--height) + var(--gap-between-tooltip-to-button) + 10px
        );
        left: calc(50% - var(--tooltip-width) / 2);
      }

      .button::after {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top-color: var(--tooltip-color);
        left: calc(50% - 10px);
        bottom: calc(
          var(--height) + var(--gap-between-tooltip-to-button) - 10px
        );
      }

      .button::after,
      .button::before {
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s;
      }

      .text {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .button-wrapper,
      .text,
      .icon {
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        color: #fff;
      }

      .text {
        top: 0;
      }

      .text,
      .icon {
        transition: top 0.5s;
      }

      .icon {
        color: #fff;
        top: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .button:hover {
        background: #ff4747;
      }

      .button:hover .text {
        top: -100%;
      }

      .button:hover .icon {
        top: 0;
      }

      /* .button:hover:before,
      .button:hover:after {
        opacity: 1;
        visibility: visible;
      } */

      .button:hover:after {
        bottom: calc(
          var(--height) + var(--gap-between-tooltip-to-button) - 20px
        );
      }

      .button:hover:before {
        bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
      }
    }
  }
  @media (max-width: 830px) {
    .conte {
      // background-color: aqua;
      .imgPerfil {
        height: 150px;
        width: 150px;
      }
      .som {
        height: 150px;
        width: 150px;
      }
      .descripcion {
        h3 {
        }
        p {
        }
      }
    }
  }

  @media (max-width: 775px) {
    .conte {
      flex-direction: column;

      .imgPerfil {
        height: 150px;
        width: 150px;
        margin-bottom: 20px;
      }
      .som {
        top: 15px;
        left: 175px;
      }

      .descripcion {
        h3 {
        }
        p {
          // background-color: aqua;
          width: 500px;
        }
      }
    }
  }
  @media (max-width: 515px) {
    .conte {
      flex-direction: column;

      .imgPerfil {
        height: 150px;
        width: 150px;
        margin-bottom: 20px;
      }
      .som {
        top: 10px;
        left: 70px;
      }

      .descripcion {
        h3 {
        }
        p {
          // background-color: red;
          width: 300px;
        }
      }
    }
  }
`

const SobreMi = () => {
  return (
    <Section>
      <motion.div
        className="divCont"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 1,
          type: "spring",
          //   stiffness: 150,
        }}
      >
        <div id="ABOUT" className="conte">
          <div className="imgPerfil">
            <StaticImage
              src="../images/principal.jpg"
              alt="img"
              width={200}
              height={200}
            />
          </div>
          <div className="som"></div>
          <div className="descripcion">
            <h3>ABOUT ME</h3>
            <p>
              ¡Hola! Mis conocimientos en en pedidos api rest de lado frontend y
              desarrollo de api rest de lado backend con node y sus respectivas
              validaciones administracion de roles.
            </p>

            <h3 style={{ marginTop: "10px" }}>
              <b>Correo:</b> ronny.minda.vera@gmail.com
            </h3>

            <a
              href={curriculum}
              style={{ display: "inline-block", width: "auto" }}
              download
            >
              {/* <div class="button" data-tooltip="Size: 20Mb"> */}
              <div className="button">
                <div className="button-wrapper">
                  <div className="text">Descargar Curriculum</div>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15V3m0 12-4-4m4 4 4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div className="tecnologias">
            <h3>Tecnologias que uso</h3>

            <div className="conteIco">
              <div className="conteIconos">
                <Html />
                <h4>Html</h4>
              </div>
              <div className="conteIconos">
                <Css />
                <h4>Css</h4>
              </div>
              <div className="conteIconos">
                <Javascript />
                <h4>Javascript</h4>
              </div>
              <div className="conteIconos">
                <LiteReact />
                <h4>React</h4>
              </div>
              <div className="conteIconos">
                <Sass />
                <h4>Sass</h4>
              </div>
              <div className="conteIconos">
                <Node />
                <h4>Node</h4>
              </div>
              <div className="conteIconos">
                <Next />
                <h4>Next</h4>
              </div>
              <div className="conteIconos">
                <Git />
                <h4>Git</h4>
              </div>
              <div className="conteIconos">
                <GitHub />
                <h4>GitHub</h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default SobreMi
