import React from "react"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const Principal = () => {
  return (
    <>
      <motion.div
        className="divCont"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 3,
          duration: 1,
          type: "spring",
          //   stiffness: 150,
          //   damping: 20,
        }}
      >
        <div className="contenido">
          <div className="nombre">
            <h1>RONNY MINDA V.</h1>
            <h2>Desarrollador de Software</h2>
          </div>

          <div className="imgPrincipal">
            <div className="filtro"></div>
            {/* <StaticImage
              src="../images/fondo.jpg"
              alt="aaa"
              // layout="constrained"
            /> */}
          </div>

          <div className="scrolldown">
            <div className="chevrons">
              <div className="chevrondown"></div>
              <div className="chevrondown"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Principal
