import React from "react";
import styled from "styled-components";


const Section = styled.section`
    margin: 300px 0;
    width: 100%;
    height: auto;
    /* background-color: aqua; */
    display: flex;
    justify-content: center;
    align-items: center;

    .conte {
        margin: 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .imgPerfil {
            height: 200px;
            width: 200px;
            background-color: red;
            margin-right: 30px;
            position: relative;
            z-index: 10;
        }

        .som {
            height: 200px;
            width: 200px;
            background-color: #2c2c2c;
            position: absolute;
            top: 20px;
            left: 20px;
            z-index: 9;
        }

        .descripcion {

            h3 {
                color: #fff;
            }
            p {
                margin-top: 20px;
                width: 500px;
                color: #fff;
            }
        }
        
    }
    @media (max-width: 725px) {
        .conte {
            .imgPerfil {
                height: 150px;
                width: 150px;
            }
            .som {
                height: 150px;
                width: 150px;
            }
            .descripcion {
                h3 {
                    
                }
                p {

                }
            }
        }
    }

    @media (max-width: 653px) {
        .conte {
            flex-direction: column;
            
            .imgPerfil {
                height: 150px;
                width: 150px;
                margin-bottom: 20px;
            }
            .som {
                top: 10px;
                left: 70px;
            }

            .descripcion {
                h3 {
                    
                }
                p {
                    width: 300px;
                }
            }
        }
    }
`;

const SobreMi = () => {

    return (
        <Section>

            <div id="ABOUT" className="conte">
                <div className="imgPerfil"></div>
                <div className="som"></div>
                <div className="descripcion">
                    <h3>ABOUT ME</h3>
                    <p>¡Hola! Mis conocimientos en en pedidos api rest de lado frontend y desarrollo de api rest de lado backend con node y sus respectivas validaciones administracion de roles.</p>
                </div>
            </div>
        
        </Section>
    )
}

export default SobreMi