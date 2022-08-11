import React from "react"
import styled from "styled-components"

import Linkedin from "../svg/linkedin"
import Twitter from "../svg/twitter"
import GitHub from "../svg/gitHub"
import Correo from "../svg/correo"
import Telefono from "../svg/telefono"

const Ffooter = styled.footer`
  /* display: flex; */
  /* position: absolute; */
  margin-top: 150px;
  height: 100px;
  transition: 0.5s box-shadow;


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
    background-color: #fff;
  }

  a:active {
    .claro & {
      transition: none;
      box-shadow: 4px 4px 6px 0 #0002, -4px -4px 6px #fff,
        3px 3px 5px 0 #0002 inset, -2px -2px 5px #fff inset;
    }
    .oscuro & {
      transition: none;
      box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636,
        3px 3px 5px 0 #040404 inset, -2px -2px 5px #363636 inset;
    }
  }

  a {
    fill: #fff;
    margin: 10px 0px;
    transition: 0.2s transform, 0.2s box-shadow;
    width: 60px;
    height: 60px;


    display: flex;
    justify-content: center;
    align-items: center;



    svg {
      height: 30px;
      width: 30px;
      fill: "#fff";
      transition: 0.5s fill;

      path {
        border-radius: 0;
      }
    }
  }

  a:hover {
    transform: scale(1.1);

    svg {
      transition: none;
      fill: #f00;
      filter: drop-shadow(0px 0px 20px #f00);
    }
  }

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

  .oscuro & {
    background-color: #171717;
    transition: 0.5s background-color;
  }
  .claro & {
    background-color: #FFF1;
    transition: 0.5s background-color;
  }

  .oscuro & h4 {
    text-align: center;
    color: #dde4ff;
  }
  .claro & h4 {
    text-align: center;
    color: #fff;
  }
`

const Footer = () => {
  return (
    <Ffooter>
      <Isquierda>
        <div className="rayaA"></div>
        <a
          title="Linkedin"
          href="https://www.linkedin.com/in/ronny-minda-a44261214/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          title="Correo"
          href="mailto:ronny.michael.minda.vera@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Correo />
        </a>
        <a
          title="GitHub"
          href="https://github.com/ronny-minda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
        <a
          title="Twitter"
          href="https://twitter.com/MichaelMinda7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
        <a
          title="Telefono"
          href="tel:0993105654"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Telefono />
        </a>

        {/* <div className="twitter">twitter</div>
        <div className="gitHub">gitHub</div>
        <div className="telefono">telefono</div> */}
        <div  className="rayaA"></div>
      </Isquierda>

      <Section>
        <h4 id="BACKEND">© Sitio construido por Ronny Minda {new Date().getFullYear()}</h4>
      </Section>
    </Ffooter>
  )
}

export default Footer
