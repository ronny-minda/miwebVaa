import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Div = styled.div`
  .opa {
    opacity: 0;
  }
  div {
    .oscuro & {
      background-color: #171717;
    }
    .claro & {
      background-color: #e6e6e6;
    }
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999999;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: 0.6s opacity;

    svg {
      g {
        & > path {
          fill: #c9393900;
          stroke-width: 0.5;
          stroke: #c93939;
          stroke-dasharray: 260;

          /* transition: 1s fill;
        transition-delay: 10s; */

          transition-property: fill;
          transition-duration: 1s;
          transition-delay: 1.5s;
        }

        & > .fondo {
          fill: #c93939ff;
        }
      }
    }
  }
`

const Loader = props => {
  const [fondo, setFondo] = useState("")
  const [opa, setOpa] = useState("")

  setTimeout(() => {
    setFondo("fondo")
  }, 1)

  setTimeout(() => {
    setOpa("opa")
  }, 3500)

  return (
    <Div>
      <div className={opa}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="79mm"
          height="93mm"
          viewBox="0 0 79 93"
          {...props}
        >
          <g
            style={{
              display: "inline",
            }}
          >
            <motion.path
              className={fondo}
              initial={{ strokeDashoffset: 260 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2 }}
              d="m49.88 52.687 21.598-12.359-19.426-11.173v-3.697L71.44 36.676v-2.744L49.664 21.36v9.177l16.432 9.487-13.836 7.988v-2.788l8.158-4.71-2.795-1.613-8 4.619zM56.44 9.409h-9.357L22.729 51.592h2.915l22.897-39.66h3.477L29.163 51.518H32z"
              style={{
                display: "inline",
              }}
              transform="translate(.025 .869)"
            />
            <motion.path
              className={fondo}
              initial={{ strokeDashoffset: 260 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2 }}
              d="m38.636 81.385-23.92-23.92v6.292l17.789 17.789z"
              style={{
                display: "inline",
              }}
              transform="translate(.025 .869)"
            />
            <motion.path
              className={fondo}
              initial={{ strokeDashoffset: 260 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2 }}
              d="M26.051 81.418 14.724 70.09v6.07l5.333 5.332zM14.716 57.539h16.363s7.805 1.885 7.64 8.136c-.166 6.25-6.954 8.839-6.954 8.839l-4.44-4.44h3.588s3.307-.662 3.44-3.837c.132-3.175-3.506-4.597-3.506-4.597H18.891zM45.857 81.586V62.397l8.554 10.183 12.356-14.935h-4.074l-8.191 9.776-8.237-9.776h-4.21V81.63z"
              style={{
                display: "inline",
              }}
              transform="translate(.025 .869)"
            />
            <motion.path
              className={fondo}
              initial={{ strokeDashoffset: 260 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2 }}
              d="M66.767 81.541v-21L54.41 75.521l-7.015-8.236v5.114l7.015 8.237 8.644-10.5-.045 11.45zM29.445 7.38 7.848 19.74l19.426 11.174v3.696L7.886 23.391v2.744l21.776 12.572v-9.176L13.23 20.044l13.836-7.988v2.787l-8.158 4.71 2.795 1.614 8-4.62z"
              style={{
                display: "inline",
              }}
              transform="translate(.025 .869)"
            />
          </g>
        </svg>
      </div>
    </Div>
  )
}

export default Loader
