import React, { useState, useEffect } from "react"

import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios"

const Form = styled.form`
  /* backdrop-filter: blur(5px);
  background-color: #0002; */

  .divCont {
    display: flex;
    flex-direction: column;
    margin: 120px 0;
    width: 70%;
    margin: auto;

    @media (max-width: 1000px) {
      width: 90%;
    }

    .sutmit {
      width: 70%;
      margin: auto;
      outline: none;
      height: 50px;
      background-color: #fff3;
      color: #dde4ff;
      border: 3px solid #fff9;
    }
    .sutmit:active {
      background-color: #fff5;
      border: 3px solid #dde4ff;
    }

    .button {
      text-decoration: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      border: none;
      background: none;
      color: #0f1923;
      cursor: pointer;
      position: relative;
      padding: 8px;
      margin-bottom: 20px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      transition: all 0.15s ease;
    }

    .button::before,
    .button::after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      left: 0;
      height: calc(50% - 5px);
      border: 1px solid #7d8082;
      transition: all 0.15s ease;
    }

    .button::before {
      top: 0;
      border-bottom-width: 0;
    }

    .button::after {
      bottom: 0;
      border-top-width: 0;
    }

    .button:active,
    .button:focus {
      outline: none;
    }

    .button:active::before,
    .button:active::after {
      right: 3px;
      left: 3px;
    }

    .button:active::before {
      top: 3px;
    }

    .button:active::after {
      bottom: 3px;
    }

    .button_lg {
      position: relative;
      display: block;
      /* padding: 10px 20px; */
      color: #dde4ff;
      background-color: #470404;
      overflow: hidden;
      box-shadow: inset 0px 0px 0px 1px transparent;
      width: 100%;
    }

    .button_lg::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 2px;
      background-color: #470404;
    }

    .button_lg::after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 4px;
      height: 4px;
      background-color: #470404;
      transition: all 0.2s ease;
    }

    .button_sl {
      display: block;
      position: absolute;
      top: 0;
      bottom: -1px;
      left: -8px;
      width: 0;
      background-color: #f00;
      transform: skew(-15deg);
      transition: all 0.2s ease;
    }

    .button_text {
      width: 100%;
      position: relative;
      top: 0;
      /* left: calc(50% - 27px); */
      /* top: calc(); */
    }

    .button:hover {
      color: #470404;
    }

    .button:hover .button_sl {
      width: calc(100% + 15px);
    }

    .button:hover .button_lg::after {
      background-color: #dde4ff;
    }

    .mensaje {
      padding: 10px 50px;
      margin: auto;
      background-color: red;
      color: #dde4ff;
      font-size: 25px;
      font-weight: bold;
    }

    label {
      display: flex;
      flex-direction: column;
      textarea {
        outline: none;
        height: 150px;
        background-color: #fff0;
        color: #dde4ff;
        border: 3px solid #fff9;
        margin: 10px;
        padding: 10px;
      }
      textarea:focus {
        border: 3px solid #dde4ff;
      }
    }

    div {
      display: flex;
      .email {
        width: 50%;
        span {
          color: #dde4ff;
          margin-left: 10px;
        }

        input {
          outline: none;
          height: 40px;
          background-color: #fff0;
          color: #dde4ff;
          border: 3px solid #fff9;
          margin: 10px;
          padding-left: 10px;
        }
        input:focus {
          border: 3px solid #dde4ff;
        }
      }

      .nombre {
        width: 50%;

        span {
          color: #dde4ff;
          margin-left: 10px;
        }

        input {
          outline: none;
          height: 40px;
          background-color: #fff0;
          color: #dde4ff;
          border: 3px solid #fff9;
          margin: 10px;
          padding-left: 10px;
        }
        input:focus {
          border: 3px solid #dde4ff;
        }
      }
    }
  }
`

const Contacto = () => {
  const [botonEnvio, setBotonEnvio] = useState(false)

  const [envio, setEnvio] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const [mensaje, setMensaje] = useState("")

  const conectar = async () => {
    const res = await axios.get("https://apimiweb.herokuapp.com/api/halo")
    console.log("Server listo: " + res.data.success)
  }

  useEffect(() => {
    conectar()
  }, [])

  const enviar = async e => {
    // console.log(envio)

    e.preventDefault()
    // let respuesta = await axios.post(
    //   "https://apimiweb.herokuapp.com/api/email",
    //   {
    //     nombre: envio.nombre,
    //     email: envio.email,
    //     mensaje: envio.mensaje,
    //   }
    // )

    const expresiones = {
      nombre: /./g,
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      mensaje: /./g,
    }

    let nombre = expresiones.nombre.test(envio.nombre)
    let email = expresiones.correo.test(envio.email)
    let mensaje = expresiones.mensaje.test(envio.mensaje)

    console.log({ nombre, email, mensaje })

    if (nombre && email && mensaje) {
      let respuesta = await axios.post(
        "https://apimiweb.herokuapp.com/api/email",
        {
          nombre: envio.nombre,
          email: envio.email,
          mensaje: envio.mensaje,
        }
      )
      setBotonEnvio(true)
      setEnvio({
        nombre: "",
        email: "",
        mensaje: "",
      })

      setTimeout(() => {
        setBotonEnvio(false)
      }, 3000)
      console.log("Correo enviado: " + respuesta.data.success)
    } else {
      setMensaje("El Email es incorrecto o falta de digitalo")
      setTimeout(() => {
        setMensaje("")
      }, 2000)
    }

    // !nombre
    //   ? setMensaje("El Nombre es incorrecto o falta de digitalo ")
    //   : setMensaje("")
    // !email
    //   ?
    //   : setMensaje("")
    // !mensaje
    //   ? setMensaje("El Mensaje es incorrecto o falta de digitalo")
    //   : setMensaje("")

    // const res = await axios.get('http://localhost:4000/email');
  }

  return (
    <Form id="CONTACTO" onSubmit={enviar}>
      <motion.div
        className="divCont"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <div>
          <label className="email">
            <span style={{ fontWeight: "bold" }}>E-mail</span>
            <input
              value={envio.email}
              autoComplete="email"
              type="text"
              placeholder="E-mail"
              required
              onChange={e => setEnvio({ ...envio, email: e.target.value })}
            />
          </label>
          <label className="nombre">
            <span style={{ fontWeight: "bold" }}>Nombre</span>
            <input
              value={envio.nombre}
              autoComplete="name"
              type="text"
              placeholder="Nombre"
              required
              onChange={e => setEnvio({ ...envio, nombre: e.target.value })}
            />
          </label>
        </div>

        <label>
          <textarea
            value={envio.mensaje}
            placeholder="Mensaje"
            required
            onChange={e => setEnvio({ ...envio, mensaje: e.target.value })}
          ></textarea>
        </label>

        <div className="button sutmit">
          <span className="button_lg">
            <span className="button_sl"></span>
            {/* <span className="button_text">Enviar</span> */}
            <input
              style={{ border: "none" }}
              className="sutmit button_text"
              type="submit"
              value="Enviar"
            />
          </span>
        </div>

        <AnimatePresence>
          {botonEnvio && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="mensaje"
            >
              Mensaje Enviado
            </motion.div>
          )}

          {mensaje === "" ? null : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="mensaje"
            >
              {mensaje}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Form>
  )
}

export default Contacto
