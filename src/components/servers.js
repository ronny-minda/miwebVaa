import React from 'react';
import Server from "./server";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { graphql, useStaticQuery } from 'gatsby'



const Section = styled.section`
    /* background-color: red; */
    /* background-image: linear-gradient(to right, #423436, #3a2a30, #30212d, #24192a, #141227); */
    /* height: 10000px; */

    

    margin: 0 0 60px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    position: relative;
    
    .conte {
      .claro & h3 {
        color: #000;
      }

      .oscuro & h3 {
        color: #fff;
      }

      @media (max-width: 600px) {
            margin-left: 0;
        }
        margin-left: 7%;
      
      h3 {
        @media (max-width: 600px) {
          margin-left: 0;
        }
        margin-left: 8%;
      }
      
      .listas {
        
        max-width: 1000px;
        @media (max-width: 770px) {
          /* background-color: red; */
          max-width: 500px;
        }
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        

        
      }
    }
    
`;


const Servers = () => {

    const info = useStaticQuery(graphql`
    query {
        allDatoCmsBackend {
          nodes{
            titulo,
            descripcion,
            tecnologias,
            link
          }
        }
      }
      
    `)

    const datos = info.allDatoCmsBackend.nodes;

    /* console.log(datos); */

    return (
      <>
        <Section id="BACKEND">

            <div className="conte">
                <h3>Desarrollo Backend</h3>

                <div className="listas">
                  {
                      datos.map( (dato) => {
                          // console.log(dato)
                          return <Server dato={dato} key={uuidv4()} />
                      })
                  }
                </div>

            </div>
        </Section>
      </>   
    )

}

export default Servers;