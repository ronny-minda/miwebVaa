import { GatsbyImage } from "gatsby-plugin-image"
/* import { v4 as uuidv4 } from 'uuid'; */
import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Javascript from "../svg/javascript"
import LiteReact from "../svg/react"
import Sass from "../svg/sass"
import GitHub from "../svg/gitHub"
import Git from "../svg/git"
import Noode from "../svg/node"
import Tama from "../svg/tama"
import SombraTama from "../svg/sombraTama"

import curriculum from "../archivos/curriculum.pdf"

const Div = styled.div`
  /* background-color: red; */
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  /* .spacio {
        height: 10px;
        width: 10px;
        background-color: blue;
        position: absolute;
        z-index: 999999;
    } */
  .conte {
    .claro & {
      background-color: #e6e6e6;
    }
    .oscuro & {
      background-color: #171717;
    }

    .descargarCurri {
      border-radius: 4px;
      padding: 3px 8px;
      position: absolute;
      bottom: 0;
      transition: 0.5s border, 0.5s box-shadow, 0.08s transform;
      margin-bottom: 10px;

      .claro & {
        border: 1.5px solid #ffffff4d;
        box-shadow: 4px 4px 5px 0 #0002, -4px -4px 5px #fff;
        a {
          color: #000;
        }
      }
      .oscuro & {
        border: 1.5px solid #0000004d;
        box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636;
        a {
          color: #fff;
        }
      }

      a {
        text-decoration: none;
        font-weight: bold;
      }
    }
    .claro & .descargarCurri:hover {
      transform: scale(1.03);
    }
    .claro & .descargarCurri:active {
      transition: none;
      box-shadow: 4px 4px 6px 0 #0002, -4px -4px 6px #fff,
        3px 3px 5px 0 #0002 inset, -2px -2px 5px #fff inset;
      a {
        color: #f00;
      }
    }

    .oscuro & .descargarCurri:hover {
      transform: scale(1.03);
    }
    .oscuro & .descargarCurri:active {
      transition: none;
      box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636,
        3px 3px 5px 0 #040404 inset, -2px -2px 5px #363636 inset;
      a {
        color: #ff9090;
      }
    }

    @media (max-width: 600px) {
      margin-left: 0;
    }
    margin-left: 7%;
    max-width: 1250px;

    position: absolute;
    z-index: 999999;

    /* background-image: linear-gradient(to right, #30373d33, #2a303433, #25292c33, #1f222433, #1a1b1c33); */
    /* box-shadow: 10px 10px 5px 0px #0006, -3px -3px 20px 0px #0006; */
    /* box-shadow: 5px 5px 5px 5px #0006, -5px -5px 5px 5px #fff6; */
    /* backdrop-filter: blur(20px); */

    transition: 0.5s;

    .oscuro & {
      box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636;
      /* background-color: #fff1; */
      border-top: 1px solid #fff1;
      border-left: 1px solid #fff1;
      border-right: 1px solid #fff1;
      border-bottom: 1px solid #fff1;
    }
    .claro & {
      box-shadow: 4px 4px 5px 0 #0002, -4px -4px 5px #fff;
      /* background-color: #0001; */
      /* background-color: #E6E6E6; */
      border-top: 1px solid #0001;
      border-left: 1px solid #0001;
      border-right: 1px solid #0001;
      border-bottom: 1px solid #0001;
    }

    border-radius: 20px;
    height: 70%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* justify-content: space-around; */

    /* margin-left: 20px; */
    .info {
      padding: 30px;
      width: 50%;
      height: 100%;
      /* background-color: aqua; */
      display: flex;
      flex-direction: column;
      justify-content: start;
      & > * {
        user-select: text;
      }

      h1 {
        margin: 10px;
        font-weight: bold;
      }
      .miconte {
        display: block;

        /* background-color: red; */
      }
      /* @media (max-width: 1200px) {
                .miconte {
                    display: none;
                }
            } */
      p {
        margin: 10px;
      }
      .correo {
        font-weight: bold;
      }
      h3 {
        font-weight: bold;
      }
      .oscuro & h1 {
        color: #fff;
      }
      .claro & h1 {
        color: #000;
      }

      .oscuro & p {
        color: #fff;
      }
      .claro & p {
        color: #000;
      }

      .oscuro & h3 {
        color: #fff;
      }
      .claro & h3 {
        color: #000;
      }

      .conteTec {
        /* background-color: red; */
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        li {
          /* color: red; */
          list-style: none;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          svg {
            transition: 0.5s fill;
            .claro & {
              height: 50px;
              width: 50px;
              fill: #000;
            }
            .oscuro & {
              height: 50px;
              width: 50px;
              fill: #fff;
            }
          }

          span {
            transition: 0.5s color;
            .claro & {
              color: #000;
            }
            .oscuro & {
              color: #fff;
            }
          }
        }
      }
    }
    .img {
      position: relative;
      border-radius: 50%;
      transition: 0.5s box-shadow;

      .claro & {
        box-shadow: 4px 4px 5px 0 #0002, -4px -4px 5px #fff;
      }
      .oscuro & {
        box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636;
      }

      img {
        height: 400px;
        width: 400px;
        border-radius: 50%;
        transition: 0.5s background-color;
        .claro & {
          background-color: #fff4;
        }
        .oscuro & {
          background-color: #0004;
        }
      }
      .filtro {
        height: 400px;
        width: 400px;
        border-radius: 50%;
        background-color: #0005;
        position: absolute;
        top: 0;
        transition: 0.5s;
        .claro & {
          background-color: #fff2;
        }
        .oscuro & {
          background-color: #0004;
        }
      }

      @media (max-width: 1200px) {
        img {
          height: 300px;
          width: 300px;
        }
        .filtro {
          height: 300px;
          width: 300px;
          border-radius: 50%;
        }
      }
      @media (max-width: 420px) {
        img {
          height: 250px;
          width: 250px;
        }
        .filtro {
          height: 250px;
          width: 250px;
          border-radius: 50%;
        }
      }
    }
  }

  @media (max-width: 950px) {
    & {
      height: 1000px;
      /* background-color: red; */
      .conte {
        display: flex;
        flex-direction: column;
        height: auto;
        .info {
          width: 100%;
          h1 {
            text-align: center;
          }
        }
        .img {
          margin-bottom: 70px;
        }
      }
    }
  }

  /* @media (max-width: 1000px) {
        .img {
            width: 100%;
        }
    } */
  /* .ani1 {
        background-color: #c9b37e;
        border-radius: 39% 61% 58% 42% / 44% 96% 4% 56% ;

        height: 200px;
        width: 200px;
        position: absolute;
        z-index: 99999;
        top: 48%;
        left: 12%;
        transition: 10s;
    }
    .ani2 {
        background-color: #f57878;
        border-radius: 39% 61% 58% 42% / 44% 96% 4% 56% ;

        height: 100px;
        width: 100px;
        position: absolute;
        z-index: 99999;
        top: 20%;
        right: 11%;
        transition: 10s;
    } */
`

const Principal = () => {
  /*     setInterval(() => {
        // console.log('siii');
    
        const ani1 = document.querySelector('.ani1');
        // mause.style.left = `${x - 10}px`;
        
        const num1 = Math.floor((Math.random() * (-1-100))+101);
        const num2 = Math.floor((Math.random() * (-1-100))+101);
        const num3 = Math.floor((Math.random() * (-1-100))+101);
        const num4 = Math.floor((Math.random() * (-1-100))+101);
    
        ani1.style.borderRadius = `${num1}% ${num2}% ${num3}% ${num4}% / ${num1}% ${num2}% ${num3}% ${num4}%`;
    
        // console.log(num);
    
        // console.log(ani1);
    }, 5000);
    
    setInterval(() => {
        // console.log('siii');
    
        const ani1 = document.querySelector('.ani2');
        // mause.style.left = `${x - 10}px`;
        
        const num1 = Math.floor((Math.random() * (-1-100))+101);
        const num2 = Math.floor((Math.random() * (-1-100))+101);
        const num3 = Math.floor((Math.random() * (-1-100))+101);
        const num4 = Math.floor((Math.random() * (-1-100))+101);
    
        ani1.style.borderRadius = `${num1}% ${num2}% ${num3}% ${num4}% / ${num1}% ${num2}% ${num3}% ${num4}%`;
    
        // console.log(num);
    
        // console.log(ani1);
    }, 5000);
 */
  const info = useStaticQuery(graphql`
    query {
      datoCmsHome {
        titulo
        imgmiperfil {
          gatsbyImageData
        }
        micontenido
        tec
      }
    }
  `)

  const { titulo, micontenido, imgmiperfil } = info.datoCmsHome

  // const image = getImage(imgmiperfil);

  /* const tecno = tec.split(','); */

  // console.log(tec);

  return (
    <>
      <Div>
        <div className="conte">
          <SombraTama />
          <Tama />
          <div className="info">
            <h1>{titulo}</h1>
            <p className="miconte">{micontenido}</p>

            <p className="correo">ronny.minda.vera@gmail.com</p>
            <h3>Tecnologias que uso</h3>

            <div className="conteTec">
              <li title="Javascript">
                <Javascript />
                <span>Javascript</span>
              </li>
              <li title="React">
                <LiteReact />
                <span>React</span>
              </li>
              <li title="Sass">
                <Sass />
                <span>Sass</span>
              </li>
              <li title="Node">
                <Noode />
                <span>Node</span>
              </li>
              <li title="Git">
                <Git />
                <span>Git</span>
              </li>
              <li title="GitHub">
                <GitHub />
                <span>GitHub</span>
              </li>
            </div>

            {/*
                            tecno.map( (i) => {
                                // console.log(i)
                                return <li key={uuidv4()} >{i}</li>
                            })
                            */}
          </div>
          <div className="img">
            <GatsbyImage
              image={imgmiperfil.gatsbyImageData}
              alt="IMAGEN DE PERFIL"
            />
            {/* <div className='filtro'>

                        </div> */}
          </div>
          <div className="descargarCurri">
            <a
              href={curriculum}
              target="_blank"
              rel="noopener noreferrer"
              title="Descargar curriculum"
              download=""
            >
              Descargar Currriculum
            </a>
          </div>
        </div>
      </Div>
    </>
  )
}

export default Principal
