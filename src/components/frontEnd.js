import React, {useState} from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion";


const Section = styled.section`
    /* background-color: red; */

    
    h3 {
        color: #fff;
        font-size: 25px;
        padding-left: 15px;
    }

    .conteFron {
        height: 500px;
        width: auto;
        /* background-color: #c1bbd1; */
        /* display: flex;
        justify-content: center;
        align-items: center; */
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .verCodigo {
            backdrop-filter: blur(5px);
            position: absolute;
            bottom: 50px;
            padding: 10px 20px;
            border-radius: 3px;
            border: 2px solid #fff;
            color: #fff;
            background-color: #0009;
        }
        .verCodigo:active {
            background-color: #c1bbd1;
        }
        
        .cart {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            /* background-color: aquamarine; */
            height: auto;
            width: 90%;
            max-width: 1000px;

            .imgI {
            }
        }
        .botonDere {
            height: 50px;
            width: 50px;
            background-color: #000;
            position: absolute;
            top: 50%;
            right: 10px;
        }
        .botonIz {
            height: 50px;
            width: 50px;
            background-color: #000;
            position: absolute;
            top: 50%;
            left: 10px;
        }
    }
`;

const FromEnd = () => {

    

    const [ imgesta, setImgesta ] = useState(0);

    console.log(imgesta)

    

    return (
        <Section>

            <motion.div
                className="divCont"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
            >

            <h3 id="PORTAFOLIO">Proyectos del lado del Frontend</h3>
            <div className="conteFron">

                {/* <div className="cart">

                </div> */}
                
                {
                    imgesta == 0 ? (<div className="cart">
                    <StaticImage
                        class="imgI"
                        src={`../images/imgData/0.png`}
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="fullWidth"
                        objectFit="fill"
                    //    width={1000}
                    //    height={400}
                    />
                </div>) : null
                }
                {
                    imgesta == 1 ? (<div className="cart">
                    <StaticImage
                        class="imgI"
                        src={`../images/imgData/1.png`}
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="fullWidth"
                        objectFit="fill"
                    //    width={1000}
                    //    height={400}
                    />
                </div>) : null
                }
                {
                    imgesta == 2 ? (<div className="cart">
                    <StaticImage
                        class="imgI"
                        src={`../images/imgData/2.png`}
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="fullWidth"
                        objectFit="fill"
                    //    width={1000}
                    //    height={400}
                    />
                </div>) : null
                }
                {
                    imgesta == 3 ? (<div className="cart">
                    <StaticImage
                        class="imgI"
                        src={`../images/imgData/3.png`}
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="fullWidth"
                        objectFit="fill"
                    //    width={1000}
                    //    height={400}
                    />
                </div>) : null
                }




                {
                    imgesta == 4 ? (<div className="cart">
                    <StaticImage
                        class="imgI"
                        src={`../images/imgData/4.png`}
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="fullWidth"
                        objectFit="fill"
                    //    width={1000}
                    //    height={400}
                    />
                </div>) : null
                }
                {
                    imgesta == 5 ? (<div className="cart">
                    <StaticImage
                        class="imgI"
                        src={`../images/imgData/5.png`}
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="fullWidth"
                        objectFit="fill"
                    //    width={1000}
                    //    height={400}
                    />
                </div>) : null
                }
                {
                    imgesta == 6 ? (<div className="cart">
                    <StaticImage
                        class="imgI"
                        src={`../images/imgData/6.png`}
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="fullWidth"
                        objectFit="fill"
                    //    width={1000}
                    //    height={400}
                    />
                </div>) : null
                }
                {
                    imgesta == 7 ? (<div className="cart">
                    <StaticImage
                        class="imgI"
                        src={`../images/imgData/7.png`}
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="fullWidth"
                        objectFit="fill"
                    //    width={1000}
                    //    height={400}
                    />
                </div>) : null
                }
                {
                    imgesta == 8 ? (<div className="cart">
                    <StaticImage
                        class="imgI"
                        src={`../images/imgData/8.png`}
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="fullWidth"
                        objectFit="fill"
                    //    width={1000}
                    //    height={400}
                    />
                </div>) : null
                }
                {
                    imgesta == 9 ? (<div className="cart">
                    <StaticImage
                        class="imgI"
                        src={`../images/imgData/9.png`}
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="fullWidth"
                        objectFit="fill"
                    //    width={1000}
                    //    height={400}
                    />
                </div>) : null
                }
                {
                    imgesta == 10 ? (<div className="cart">
                    <StaticImage
                        class="imgI"
                        src={`../images/imgData/10.png`}
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="fullWidth"
                        objectFit="fill"
                    //    width={1000}
                    //    height={400}
                    />
                </div>) : null
                }

                <div className="verCodigo">ver codigo</div>
                

                

                <div onClick={ () => imgesta > 0 ? setImgesta(imgesta - 1) : null } className="botonIz"></div>
                <div onClick={ () => imgesta < 10 ? setImgesta(imgesta + 1) : null } className="botonDere"></div>
                
            </div>

            </motion.div>

            
        </Section>
    )

}

export default FromEnd