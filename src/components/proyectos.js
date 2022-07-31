
import React from "react";
import Proyecto from "./proyecto";
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
        @media (max-width: 1090px) {
          /* background-color: red; */
          & {
           /*  background-color: red; */
            max-width: 830px;
          }
        }
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        

        
      }
    }
    
`;




const Proyectos = () => {

    const info = useStaticQuery(graphql`
    query {
        allDatoCmsProyecto {
          nodes {
            nombre,
            descripcion,
            tecnologias,
            imgproyecto {
              gatsbyImageData
            }
          }
        }
      }
    `)

    const datos = info.allDatoCmsProyecto.nodes;

    return (
      <>
        <Section id="FRONTEND">

            <div className="conte">
                <h3>Desarrollo Frontend</h3>

                <div className="listas">
                  {
                      datos.map( (dato) => {
                          // console.log(dato)
                          return <Proyecto dato={dato} key={uuidv4()} />
                      })
                  }
                </div>

            </div>
        </Section>
      </>   
    )
}


export default Proyectos;