import * as React from "react"
// import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import img from "../images/img.png"
// import img2 from "../images/logopage.png"

function Seo({ titulo }) {
  return (
    <Helmet>
      <title>{titulo}</title>
      <meta
        name="google-site-verification"
        content="cChVu7MlRZTNnxm1MJi5q8EoC8-87P0Qbx2NUcHKJCk"
      />
      <meta charset="UTF-8"></meta>
      <meta
        name="description"
        content="Soy desrrolador de Software Frontend y Backend, conocimientos en api rest, responsive design, diseño moderno, trabajo en equipo con git y por ultimo validaciones del lado del servidor."
      ></meta>
      <meta name="author" content="{ titulo }"></meta>
      <meta
        name="keywords"
        content="website, development, software, design"
      ></meta>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>

      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ronny Minda .V" />
      <meta
        property="og:description"
        content="Soy desrrolador de Software Frontend y Backend full rest, responsive design, diseño moderno, trabajo en equipo con git y por ultimo validaciones del lado del servidor."
      />
      <meta property="og:url" content={img} />
      <meta property="og:site_name" content="Mi Web" />

      {/* Facebook */}

      <meta property="og:title" content="Mi Web"></meta>
      <meta property="og:site_name" content="Ronny Minda .V"></meta>
      <meta
        property="og:url"
        content="https://ronny-minda.github.io/myweb/"
      ></meta>
      <meta
        property="og:description"
        content="Soy desrrolador de Software Frontend y Backend full rest, responsive design, diseño moderno, trabajo en equipo con git y por ultimo validaciones del lado del servidor."
      ></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:image" content={img}></meta>

      {/* twitter */}

      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content="{ titulo }"></meta>
      <meta name="twitter:site" content="@MichaelMinda7"></meta>
      <meta
        name="twitter:description"
        content="Soy desrrolador de Software Frontend y Backend full rest, responsive design, diseño moderno, trabajo en equipo con git y por ultimo validaciones del lado del servidor."
      ></meta>
      <meta name="twitter:image" content={img}></meta>
      <meta name="twitter:image:alt" content="texto img"></meta>

      {/* whatsapp */}

      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;1,900&display=swap"
        rel="stylesheet"
      ></link>

      <script>
        console.log( "%cHola! ¿Interesado en ofrecerme un puesto en su empresa?
        Envíeme un correo electrónico a: %cronny.minda.vera@gmail.com",
        "font-size: 18px;", "font-size: 18px; color: red; text-decoration:
        underline;" )
      </script>

      <link rel="icon" type="ico" href={img}></link>
    </Helmet>
  )
}

export default Seo
