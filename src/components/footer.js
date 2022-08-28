import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import Linkedin from "../svg/linkedin"
import Twitter from "../svg/twitter"
import GitHub from "../svg/gitHub"
import Correo from "../svg/correo"
import Telefono from "../svg/telefono"

const Ffooter = styled.footer`
  /* display: flex; */
  /* position: absolute; */
  background-color: #141414;
  margin-top: 150px;
  height: 100px;
`
const Isquierda = styled.div`
  /* background-color: red; */
  position: fixed;
  /* margin-left: 10px; */
  height: 100%;
  width: 80px;
  /* bottom: calc(50% - 175px); */
  left: 2%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .rayaA {
    height: 100vmax;
    width: 3px;
    background-color: #dde4ff;
  }

  a {
    fill: #dde4ff;
    margin: 10px 0px;
    transition: 0.2s transform;
    width: 60px;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      height: 30px;
      width: 30px;
      fill: "#dde4ff";
      transition: 0.5s fill;

      path {
        border-radius: 0;
      }
    }
  }

  /* a:hover {
    transform: scale(1.1);

    svg {
      transition: none;
      fill: #f00;
      filter: drop-shadow(0px 0px 20px #f00);
    }
  } */

  @media (max-width: 600px) {
    padding-top: 10px;
    height: 60px;
    width: 100%;
    position: static;
    /* background-color: aqua; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    a {
      width: 50px;
      height: 50px;
      svg {
        margin: 0 15px;
      }
    }
  }
`

const Section = styled.section`
  /* padding: 30px 0; */
  /* height: 80px; */
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    text-align: center;
    font-weight: bold;
    color: #dde4ff;
  }
`

const Footer = () => {
  return (
    <Ffooter>
      <motion.div
        whileHover={{ scale: 2 }}
        whileTap={{ scale: 1 }}
      ></motion.div>
      <Isquierda>
        <div className="rayaA"></div>
        <motion.a
          whileHover={{ rotate: 0, scale: 1.6, fill: "#f00" }}
          whileTap={{ rotate: 0, scale: 1, fill: "#dde4ff" }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          title="Linkedin"
          href="https://www.linkedin.com/in/ronny-minda-a44261214/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </motion.a>

        <motion.a
          whileHover={{ rotate: 0, scale: 1.6, fill: "#f00" }}
          whileTap={{ rotate: 0, scale: 1, fill: "#dde4ff" }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          title="Correo"
          href="mailto:ronny.michael.minda.vera@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Correo />
        </motion.a>
        <motion.a
          whileHover={{ rotate: 0, scale: 1.6, fill: "#f00" }}
          whileTap={{ rotate: 0, scale: 1, fill: "#dde4ff" }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          title="GitHub"
          href="https://github.com/ronny-minda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </motion.a>
        <motion.a
          whileHover={{ rotate: 0, scale: 1.6, fill: "#f00" }}
          whileTap={{ rotate: 0, scale: 1, fill: "#dde4ff" }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          title="Twitter"
          href="https://twitter.com/MichaelMinda7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </motion.a>
        <motion.a
          whileHover={{ rotate: 0, scale: 1.6, fill: "#f00" }}
          whileTap={{ rotate: 0, scale: 1, fill: "#dde4ff" }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          title="Telefono"
          href="tel:0993105654"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Telefono />
        </motion.a>

        {/* <div className="twitter">twitter</div>
        <div className="gitHub">gitHub</div>
        <div className="telefono">telefono</div> */}
        <div className="rayaA"></div>
      </Isquierda>

      <Section>
        <h4 id="BACKEND">
          Sitio construido por Ronny Minda {new Date().getFullYear()}
        </h4>
      </Section>
    </Ffooter>
  )
}

export default Footer
