
import React from "react";
import { Link } from 'gatsby';

import styled from "styled-components";
import Logo from "../svg/logo";



const HHeader = styled.header`
    .oscuro & {
        background-color: #171717;
        box-shadow: 0px 8px 6px 0 #040404;
        div {
        }
        nav {
            li {
                border: 2px solid #0000004d;
                box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636;
                a {
                    color: #fff;
                }
            }
            li:active {
                border: 2px solid #0000004d;
                /* box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636; */
                transition: none;
                box-shadow: 4px 4px 6px 0 #040404, -4px -4px 6px #363636, 3px 3px 5px 0 #040404 inset, -2px -2px 5px #363636 inset;
                /* transform: scale(0.99); */
                a {
                    color: #fff;
                }
            }
        }
    }
    .claro & {
        background-color: #efeeee;
        box-shadow: 0px 8px 6px 0 #0002;
        div {
        }
        nav {
            li {
                border: 2px solid #ffffff4d;
                box-shadow: 4px 4px 5px 0 #0002, -4px -4px 5px #fff;
                a {
                    color: #000;
                }
            }
            li:active {
                border: 2px solid #ffffff4d;
                /* box-shadow: 4px 4px 6px 0 #0002, -4px -4px 6px #fff; */
                transition: none;
                box-shadow: 4px 4px 6px 0 #0002, -4px -4px 6px #fff, 3px 3px 5px 0 #0002 inset, -2px -2px 5px #fff inset;
                /* transform: scale(0.99); */
                a {
                    color: #000;
                }
            }
        }
    }

    transition: .5s background-color, .5s box-shadow;

    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* box-shadow: 0px 10px 5px 0px #0006; */
    width: 100%;

    svg {
        margin: 0px;
        height: 65px;
        width: 150px;
        /* background-color: red; */
    }
    nav {
        display: flex;
        li {
            list-style: none;
            transition: 0.1s ease-out transform, .5s ease-out border, .5s ease-out box-shadow, .5s ease-out background-color;
            
            margin: 0 10px;
            padding: 5px 10px;
            border-radius: 5px;
            
            a {
                text-decoration: none;
                color: #fff;
                height: 100%;
                width: 100%;
            }
        }
        li:hover {
            transform: scale(1.01);
        }
        /* li:active  {
            outline: none;
            transform: scale(2);
        } */
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
                    {/* <a href="#">HOME</a> */}
                    {/* <a href="https://platzi.com/p/RonnyMinda/" target="_blank" rel="noopener noreferrer" title="Platzi"><div class="platzi"></div></a> */}
                    <Link to="/#FRONTEND">FRONTEND</Link>
                    {/* <a href="#FRONTEND" rel="noopener noreferrer" title="FRONTEND">FRONTEND</a> */}
                </li>
                <li>
                    <Link to="/#BACKEND">BACKEND</Link>
                    {/* <a href="#BACKEND" rel="noopener noreferrer" title="BACKEND">BACKEND</a> */}
                    {/* <a href="#">PROYECTOS</a> */}
                </li>
            </nav>
        </HHeader>
    )
}

export default Header;