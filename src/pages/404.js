import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Seo from "../components/seo"


const Aside = styled.aside`
  height: calc(100vh - 168.750px);
  display: flex;
  justify-content: center;
  align-items: center;

  div {

    h1 {
      color: red;
      margin: 20px 0;
      font-size: 40px;
    }
    p {
      font-size: 30px;
    }

    a {
        // background-color: red;
        font-size: 30px;
        text-decoration: none;
        padding: 5px 15px;
        transition: .2s text-shadow, .2s color, .5s box-shadow;
        
        .claro & {
            box-shadow: 4px 4px 5px 0 #0002, -4px -4px 5px #fff;
            color: #000;
        }
        .oscuro & {
            box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636;
            color: #fff;
        }
        
    }
    a:active {
        
        .claro & {
            box-shadow: 3px 3px 5px 0 #0002 inset, -2px -2px 5px #fff inset;
        }
        .oscuro & {
            box-shadow: 3px 3px 5px 0 #040404 inset, -2px -2px 5px #363636 inset;
        }
    }
    a:hover {
        // background-color: red;
        color: red;
        text-shadow: 0px 0px 15px red;
        
        .claro & {
            color: red;
            text-shadow: 0px 0px 15px red;
        }
        .oscuro & {
            color: #FF9797;
            text-shadow: 0px 0px 15px red;
        }

    }

  }
  
`;


const NotFoundPage = () => (
  <Layout>
    <Aside>
      <Seo title="Pagina no existente" />

      <div>
        <Link to='/'>Regresa!</Link>
        <h1>Error 404</h1>
        <p>Buscas un lugar que no existe</p>
        <h3>Regresa!</h3>
      </div>
      
    </Aside>
    
  </Layout>
)

export default NotFoundPage;
