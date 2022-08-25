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
      background-color: #2c2c2c;
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
        background-color: #2c2c2c;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 20px 0;
        padding: 10px 0;

        svg {
          margin: 0 8px;
          height: 50px;
          width: 50px;
          fill: #dde4ff;
        }
      }
    }

    .descripcion {
      h3 {
        color: #dde4ff;
      }
      p {
        margin-top: 20px;
        width: 500px;
        color: #dde4ff;
        
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
          </div>
          <div className="tecnologias">
            <h3>Tecnologias que uso</h3>

            <div className="conteIco">
              <Javascript />
              <LiteReact />
              <Sass />
              <Node />
              <Git />
              <GitHub />
            </div>

          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default SobreMi
