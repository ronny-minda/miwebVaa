import React, { useState } from "react"
import styled from "styled-components"
// import { StaticImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"
import { v4 as uuidv4 } from "uuid"

// import { imagenes } from "../components/imagenesCarru"
// import Flecha from "../svg/flecha"
import GitHub from "../svg/gitHub"

const Section = styled.section`
  /* background-color: red; */
  position: relative;
  margin: 150px 0;

  h3 {
    color: #dde4ff;
    font-size: 25px;
    padding-left: 30px;
    margin-bottom: 30px;
  }

  .conteFron {
    margin-left: 15px;
    height: 400px;
    display: block;
    /* background-color: red; */
    border: 2px solid red;
    /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); */
    position: relative;

    .cart {
      background-color: #dde4ff;
      width: 300px;
      height: 90%;
      position: absolute;
      top: calc(50% - 180px);
      left: calc(50% - 150px);
      list-style: none;
      display: flex;

      .iz {
        height: 100%;
        width: 80%;
        background-color: #dde4ff;
        padding: 0px 0 0 20px;

        h3 {
          margin-top: 20px;
          padding: 0;
          font-size: 20px;
          color: #000;
        }
        h4 {
          color: #000;
        }
        li {
          color: #000;
          margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: #000;
          background-color: #f00;
          padding: 3px 15px;
          border-radius: 3px;
          margin-top: 50px;
          transition: 0.3s;
        }
        a:hover {
          background-color: #ff5555;
        }
      }
      .der {
        height: 100%;
        width: 20%;
        background-color: #0005;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .botonNext {
      height: 40px;
      width: 200px;
      background-color: #f00;
      position: absolute;
      bottom: -40px;
      left: calc(50% - 100px);
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s;
      border-radius: 3px;
    }
    .botonNext:hover {
      background-color: #ff5555;
    }
  }
`

const messages = [
  {
    id: 1,
    titulo: "Backend tienda de ropa",
    descrip: "",
    tecnologias: ["NODE", "EXPRESS", "JSON WEB TOKEN", "BCRYPT"],
    link: "https://github.com/ronny-minda/TIENDA-ROPA-BACKEND",
  },
  {
    id: 2,
    titulo: "Backend Envio De Correo",
    descrip: "",
    tecnologias: ["NODE", "NODEMAILER"],
    link: "https://github.com/ronny-minda/Api_rest_correo_nodemailer",
  },
  {
    id: 3,
    titulo: "Api Simple Node",
    descrip: "",
    tecnologias: ["NODE"],
    link: "https://github.com/ronny-minda/Api_Simple_Node",
  },
  {
    id: 4,
    titulo: "Control de Clientes(BACKEND)",
    descrip: "",
    tecnologias: ["NODEJS", "APOLLO SERVER", "MONGODB"],
    link: "https://github.com/ronny-minda/GRAPHQL-Apollo-Server-ControlDeClientes",
  },
]

const BackEnd = () => {
  const [imgesta, setImgesta] = useState(1)
  // const [direction, setDirection] = useState(true)

  return (
    <Section>
      <motion.div
        className="divCont"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1, type: "spring" }}
      >
        <h3 id="PORTAFOLIO">Proyectos del lado del BackEnd</h3>

        <div className="conteFron">
          <AnimatePresence>
            {messages.map(({ id, titulo, descrip, tecnologias, link }) => {
              return id === imgesta ? (
                <motion.li
                  className="cart"
                  key={id}
                  initial={{ opacity: 0, x: 500 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -500 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="iz">
                    <h3>{titulo}</h3>
                    <h4>Tecnologias</h4>
                    {tecnologias.map((i, e) => (
                      <li>- {i}</li>
                    ))}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      Ver codigo
                    </a>
                  </div>

                  <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ fill: "#f00" }}
                    whileTap={{ fill: "#dde4ff" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="der"
                  >
                    <GitHub />
                  </motion.a>
                </motion.li>
              ) : null
            })}
          </AnimatePresence>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="botonNext"
            onClick={() =>
              imgesta < messages.length
                ? setImgesta(imgesta + 1)
                : setImgesta(1)
            }
          >
            Siguiente proyecto
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}

export default BackEnd

// <AnimatePresence>BackEnd
//   {false && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 1 }}
//     >
//       asdfssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
//     </motion.div>
//   )}
// </AnimatePresence>
