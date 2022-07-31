
import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';


const Li = styled.li`
    /* &:hover {
        background-color: #FFF5;
    } */
    /* border: 3px solid black; */
    border-radius: 4px;
    list-style: none;
    height: 200px;
    max-width: 450px;
    
    /* background-color: #0005; */
    transition: 0.5s box-shadow;
    
    margin: 20px;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 999999;
    margin: 10px;
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

    .contenido {
        padding: 10px;
        width: 30%;
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
        width: 70%;
        margin: 8px 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
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
    .link {
        position: absolute;
        bottom: 7%;
        transition: .5s box-shadow, .5s color;
        text-decoration: none;
        padding: 3px 13px;
        /* background-color: red; */

        .claro & {
            box-shadow: 4px 4px 5px 0 #0002, -4px -4px 5px #fff;
            color: #000;
        }
        .oscuro & {
            box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636;
            color: #fff;
        }
    }
    .link:active {
        
        .claro & {
            box-shadow: 3px 3px 5px 0 #0002 inset, -2px -2px 5px #fff inset;
        }
        .oscuro & {
            box-shadow: 3px 3px 5px 0 #040404 inset, -2px -2px 5px #363636 inset;
        }
    }
    .link:hover {
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

    

`;

const Proyecto = ({dato}) => {

    // console.log({dato})

    const { nombre, tecnologias, imgproyecto } = dato;


    const tec = tecnologias.split(',');
    // console.log({tec})
    


    return (
        <>
            <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
            >
                <Li title={ nombre } >
                    {/* <section className="sitio"></section> */}
                    <section className="contenido">
                        <h3>{nombre}</h3>
                        {/* <p>{descripcion}</p> */}
                        
                        {
                            tec.map( (i) => {
                                return <li key={uuidv4()}>-{i}</li>
                                // console.log(i)
                            })
                        }
                        
                    </section>
                    <section className="conteimg">
                        <GatsbyImage
                            className="img"
                            image={imgproyecto.gatsbyImageData}
                            alt={ nombre }
                        />
                    </section>
                    <Link className="link" to={ nombre } >Detalles</Link>
                    
                    {/* <section className="img"></section> */}
                    {/* <section className="tecnolo">{tecnologias}</section> */}
                </Li>
            </motion.div>
        </>
    )

}

export default Proyecto;