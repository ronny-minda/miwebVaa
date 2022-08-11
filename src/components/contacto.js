import React from "react";

import styled from "styled-components";


const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 120px 0;
    width: 70%;
    margin: auto;

    @media (max-width: 1000px) {
        width: 90%;
    }

    .sutmit {
        width: 70%;
        margin: auto;
        outline: none;
        height: 50px;
        background-color: #fff3;
        color: #fff;
        border: 3px solid #fff9;
    }
    .sutmit:active {
        background-color: #fff5;
        border: 3px solid #fff;
    }

    label {
        display: flex;
        flex-direction: column;
        textarea {
            outline: none;
            height: 150px;
            background-color: #fff0;
            color: #fff;
            border: 3px solid #fff9;
            margin: 10px;
        }
        textarea:focus {
            border: 3px solid #fff;
        }
    }

    div {
        display: flex;
        .email {
            width: 50%;
            span {
                color: #fff;
                margin-left: 10px;
            }
            
            input {
                outline: none;
                height: 40px;
                background-color: #fff0;
                color: #fff;
                border: 3px solid #fff9;
                margin: 10px;
            }
            input:focus {
                border: 3px solid #fff;
            }
        }

        .nombre {
            width: 50%;

            span {
                color: #fff;
                margin-left: 10px;
            }
            
            input {
                outline: none;
                height: 40px;
                background-color: #fff0;
                color: #fff;
                border: 3px solid #fff9;
                margin: 10px;
            }
            input:focus {
                border: 3px solid #fff;
            }
        }
    }
`;

const Contacto = () => {

    return (
        <Form id="CONTACTO" onSubmit={e => e.preventDefault()}>
            <div>
                <label className="email">
                    <span >E-mail</span>
                    <input type='text' placeholder="E-mail"/>
                </label>
                <label className="nombre">
                    <span>Nombre</span>
                    <input  type='text' placeholder="Nombre"/>
                </label>
            </div>
    

            <label>
                <textarea placeholder="Mensaje">

                </textarea>
            </label>

            <input className="sutmit" type='submit' value='Enviar' />
        </Form>
    )
}

export default Contacto