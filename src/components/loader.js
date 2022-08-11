import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Logo from "../svg/logo";
import Hola from "../svg/hola";


const Div = styled.div`
    .load {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        background-color: red;
        height: 100%;
        width: 100%;
        clip-path: polygon(50% 100%, 50% 100%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 0);
        transition: 5s cubic-bezier(.46,.2,0,1.77) clip-path;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .primer {
        background-color: #fff;
    }
    .segund {
        background-color: #1C1C1C;
    }
    
    .uso {
        clip-path: polygon(0% 100%, 100% 100%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0, 0% 0);
    }
`;

const Loader = () => {

    const [primer, setPrimer] = useState('')
    const [Segundo, setSegundo] = useState('')

    useEffect( () => {
        setTimeout( () => {
            setPrimer('uso')
        }, 2000)
        setTimeout( () => {
            setSegundo('uso')
        }, 500)
    }, [])

    return (
        <Div>
            <div
   
                className={`load primer ${primer}`}>
                <Logo color='#000'/>
                <div className={`load segund ${Segundo}`}>
                    <Logo color='#fff' />
                </div>

            </div>

        </Div>
    )
}

export default Loader