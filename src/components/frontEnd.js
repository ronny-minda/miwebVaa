import React, { useState } from "react"
import styled from "styled-components"
// import { StaticImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"

import { imagenes } from "../components/imagenesCarru"
// import Flecha from "../svg/flecha"

const Section = styled.section`
  /* background-color: red; */
  position: relative;

  h3 {
    color: #dde4ff;
    font-size: 25px;
    padding-left: 30px;
    margin-bottom: 30px;
  }

  .conteFron {
    margin-left: 15px;
    height: 500px;
    /* width: 500px; */
    display: block;
    background-color: red;
    border: 2px solid red;

    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    position: relative;
    /* padding: 40px; */

    img {
      left: 0;
      top: 0;
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
      background-color: #f00;
      /* border: 5px solid red; */
    }

    .izqu {
      /* transform: rotate(180deg); */
      height: 50px;
      width: 50px;
      /* background-color: #000; */
      top: 45%;
      left: 10px;
      position: absolute;
      background-color: #f00;
      border-radius: 50%;
      padding: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 80px;
      transition: 0.3s;

      &:hover {
        background-color: #ff5555;
      }
    }

    .dere {
      height: 50px;
      width: 50px;
      background-color: #f00;
      border-radius: 50%;
      padding: 15px;
      top: 45%;
      right: 10px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 80px;
      transition: 0.3s;

      &:hover {
        background-color: #ff5555;
        /* color: #0009; */
      }
    }

    .link {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 10%,
        rgba(0, 0, 0, 1) 100%
      );
      top: calc(64% - 20px);
      left: -0px;
      /* left: calc(50% - 300px); */
      position: absolute;
      z-index: 9999;
      /* background-color: #0006; */
      /* border: 2px solid #dde4ff6; */
      /* border-radius: 5px; */
      /* backdrop-filter: blur(1px); */
      /* padding: 8px 25px; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 200px;

      h5 {
        text-align: center;
        font-size: 30px;
        color: #dde4ff;
        margin-bottom: 8px;
        -webkit-text-stroke: 2px #0004;
      }
      a {
        text-align: center;
        text-decoration: none;
        color: #dde4ff;
        background-color: #f00;
        padding: 10px 25px;
        font-size: 20px;
        transition: 0.3s;
        border-radius: 4px;
      }
      a:hover {
        background-color: #ff5555;
      }
    }
  }
`

const FromEnd = () => {
  const [imgesta, setImgesta] = useState(2)
  const [direction, setDirection] = useState(true)

  return (
    <Section>
      <motion.div
        className="divCont"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1, type: "spring" }}
      >
        <h3 id="PORTAFOLIO">Proyectos del lado del Frontend</h3>

        <div className="conteFron">
          <AnimatePresence initial={true}>
            <motion.img
              className="img"
              key={imagenes[imgesta].img}
              src={imagenes[imgesta].img}
              initial={{ opacity: 0, x: direction ? 800 : -800 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction ? -800 : 800 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          <div
            onClick={() => {
              setDirection(false)
              imgesta > 0 ? setImgesta(imgesta - 1) : setImgesta(imgesta)
            }}
            className="izqu"
          >
            {"<"}
          </div>
          <div
            onClick={() => {
              setDirection(true)
              imgesta < imagenes.length - 1
                ? setImgesta(imgesta + 1)
                : setImgesta(imgesta)
            }}
            className="dere"
          >
            {">"}
          </div>

          <div className="link">
            <h5>{imagenes[imgesta].titulo}</h5>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              title="Fuente"
              href={imagenes[imgesta].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Codigo GitHub
            </motion.a>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default FromEnd
