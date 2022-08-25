import React, { useState, useEffect } from "react"

import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios"

const Form = styled.form`
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

  const conectar = async () => {
    const res = await axios.get("https://apimiweb.herokuapp.com/api/halo")
    console.log("Server listo: " + res.data.success)
  }

  useEffect(() => {
    conectar()
  }, [])

  const enviar = async e => {
    console.log("enviado")
    console.log(envio)

    e.preventDefault()
    let respuesta = await axios.post(
      "https://apimiweb.herokuapp.com/api/email",
      {
        nombre: envio.nombre,
        email: envio.email,
        mensaje: envio.mensaje,
      }
    )

    // const res = await axios.get('http://localhost:4000/email');
    console.log("Correo enviado: " + respuesta.data.success)

    setBotonEnvio(true)
    setEnvio({
      nombre: "",
      email: "",
      mensaje: "",
    })

    setTimeout(() => {
      setBotonEnvio(false)
    }, 3000)
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
            <span>E-mail</span>
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
            <span>Nombre</span>
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

        <input className="sutmit" type="submit" value="Enviar" />
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
        </AnimatePresence>
      </motion.div>
    </Form>
  )
}

export default Contacto
