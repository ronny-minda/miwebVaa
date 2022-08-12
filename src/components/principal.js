import React from "react";
import { motion } from "framer-motion";


const Principal = () => {

    return (
        <>
            
            <motion.div
                className="divCont"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 3, duration: 1 }}
            >

                <div className="contenido">

                <div className="nombre">
                <h1>RONNY MINDA V.</h1>
                <h2>Desarrollador de Software</h2>
                </div>

                <div className="imgPrincipal"></div>
                </div>
            </motion.div>
        </>
    )
}

export default Principal