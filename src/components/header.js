
import React from "react";
import { Link } from 'gatsby';

import styled from "styled-components";
import Logo from "../svg/logo";



const HHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #0009;
    backdrop-filter: blur(7px);
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9999;
    

    a {
        font-size: 22px;
        margin: 0 40px;
        svg {
            /* background-color: #0FF; */
            height: 60px;
            width: 210px;
        }
    }
    a:hover {
        color: #fff8;
    }
    nav {
        display: flex;
        li {
            list-style: none;
            a {
                text-decoration: none;
                color: #fff;
            }
        }
    }
`;

const Header = () => {
    return(
        <HHeader>
            <Link to="/">
                <Logo />
            </Link>
            
            <nav>
                <li>
                    <a href="/#HOME">HOME</a>
                </li>
                <li>
                    <Link to="/#ABOUT">ABOUT</Link>
                </li>
                <li>
                    <Link to="/#PORTAFOLIO">PROTAFOLIO</Link>
                </li>
                <li>
                    <Link to="/#CONTACTO">CONTACT</Link>
                </li>
            </nav>
        </HHeader>
    )
}

export default Header;