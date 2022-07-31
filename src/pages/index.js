import React, { useState } from "react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Principal from "../components/principal"
import Proyectos from "../components/proyectos"
import Server from "../components/servers"
import Loader from "../components/loader"

const IndexPage = () => {
  const [loader, setLoader] = useState(true)

  setTimeout(() => {
    setLoader(false)
  }, 4000)

  return (
    <>
      <Seo titulo="Ronny Minda V." />

      {loader && <Loader />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* <Loader /> */}

        <Layout>
          <Principal />
          <Proyectos />
          <Server />
          {/* <Div /> */}
        </Layout>
      </motion.div>
    </>
  )
}

export default IndexPage
