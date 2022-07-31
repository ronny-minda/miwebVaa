
import React from "react";
import styled from "styled-components";
/* import { GatsbyImage } from 'gatsby-plugin-image'; */
import { v4 as uuidv4 } from 'uuid';
import { motion } from  'framer-motion';


import GitHub from '../svg/gitHub';


const Li = styled.li`
    
    /* @media (max-width: 1000px) {
        & {
            background-color: red;
        }
    } */
    /* &:hover {
        background-color: #FFF5;
    } */
    /* border: 3px solid black; */
    border-radius: 4px;
    list-style: none;
    height: 200px;
    width: 300px;

    
    /* background-color: #0005; */
    transition: 0.5s box-shadow;
    .claro & {
        box-shadow: 4px 4px 5px 0 #0002, -4px -4px 5px #fff;
        .contenido > * {
            color: #000;
        }
    }
    .oscuro & {
        box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636;
        .contenido > * {
            color: #fff;
        }
    }
    /* background-color: #fff7; */
      /* backdrop-filter: blur(20px); */
    margin: 20px;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 999999;
    margin: 10px;

    .contenido {
        padding: 20px;
        width: 70%;
        /* background-color: bisque; */
        h3 {
            margin-bottom: 20px;
        }
        p {
            margin-bottom: 20px;
        }
        li {
            list-style: none;
        }
    }
    .conteimg {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 0.5s box-shadow;
        /* background-color: red; */

        .claro & {
            box-shadow: 4px 4px 5px 0 #0002, -4px -4px 5px #fff;
        }
        .oscuro & {
            box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636;
        }
        a {
            text-decoration: none;
            width: 100%;
            h4 {
                display: flex;
                align-items: center;
                justify-content: center;
                /* padding: 10px 0; */
                width: 100%;
                height: 20px;
                /* text-align: center; */
                border-radius: 6px;
                margin: 20px 0;
                font-size: 10px;
                color: #fff;
                transition: 0.5s box-shadow, 0.5s color;

                .claro & {
                    box-shadow: 4px 4px 5px 0 #0002, -4px -4px 5px #fff;
                    color: #000;
                }
                .oscuro & {
                    box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636;
                    color: #fff;
                }
            }

            h4:hover {
                transition: none;
                /* transition: 5s; */
                .claro & {
                    box-shadow: 4px 4px 6px 0 #0002, -4px -4px 6px #fff, 3px 3px 5px 0 #0002 inset, -2px -2px 5px #fff inset;
                }
                .oscuro & {
                    box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636, 3px 3px 5px 0 #040404 inset, -2px -2px 5px #363636 inset;
                }
            }

        }

        
        .gii {
            border-radius: 50%;
            height: 40px;
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            /* box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636; */
            svg {
                height: 30px;
                width: 30px;
                transition: 0.5s fill;

                .claro & {
                    fill: #000;
                }
                .oscuro & {
                    fill: #fff;
                }
            }
        }


        .img {
            border-radius: 3px;
            width: 90%;
            height: 70%;
            /* filter: grayscale(100%); */
            transition: .1s;
        }
        .img:hover {
            filter: grayscale(0%);
        }
    }
    &:hover {
        .conteimg {
            .gii {
                svg {
                    transition: none;
                    transition: 0.2s fill, 0.2s filter;
                    fill: #f00;
                    filter: drop-shadow(0px 0px 15px #f00);
                }
            }
        }
    }
    

`;

const Server = ({dato}) => {

    // console.log({dato})

    const { titulo, tecnologias, link } = dato;


    const tec = tecnologias.split(',');
    // console.log({tecnologias});


    return (
        <>
            <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
            >
                <Li title={ titulo } >
                    <section className="contenido">
                        <h3>{ titulo }</h3>
                        
                        {
                            tec.map( (i) => {
                                return <li key={uuidv4()}>-{i}</li>
                            })
                        }
                        
                    </section>
                    <section className="conteimg">
                        <a href={ link } target="_blank" rel="noopener noreferrer" >
                            <h4>Ver Codigo</h4>
                        </a>
                        

                        <div className="gii">
                            <GitHub />
                        </div>

                        {/* <GatsbyImage
                            className="img"
                            image={imgproyecto.gatsbyImageData}
                            alt="imagen"
                        /> */}
                    </section>
                    
                </Li>
            </motion.div>
        </>
    )

}

export default Server;