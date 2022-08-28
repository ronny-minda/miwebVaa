import React, { useState } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

import styled from "styled-components"
import Logo from "../svg/logo"
import Menu from "../svg/menu"

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
    /* margin: 0 40px; */
    /* width: 177px; */
    width: 100%;

    display: inline-block;
    text-align: center;
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
      width: 177px;
      list-style: none;
      a {
        text-decoration: none;
        color: #fff;
        width: 100%;
      }
      .under {
        height: 1px;
        width: 30%;
        background-color: red;
        transition: 0.5s width;
      }
    }
    li:hover {
      .under {
        width: 100%;
      }
    }
  }
  @media (max-width: 990px) {
    nav {
      display: none;
    }
  }

  .menu {
    cursor: pointer;
    .menuActivio {
      backdrop-filter: blur(5px);
      background-color: #000c;
      height: 100vh;
      width: 100vw;
      position: fixed;
      z-index: 0;
      top: 0;
      left: 0;

      .menuCot {
        height: 100%;
        width: 70%;
        background-color: #1c1c1c;
        position: absolute;
        top: 0;
        right: 0;
        clip-path: circle(0% at 100% 0);
        transition: 1s clip-path;
      }
      .menuCotActivo {
        clip-path: circle(150% at 100% 0);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        li {
          list-style: none;

          a {
            text-decoration: none;
            color: #fff;
            font-size: 45px;
          }
        }
      }
    }
  }
  @media (min-width: 990px) {
    .menu {
      display: none;
    }
  }
`

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [Cli, setCli] = useState("menuCot")

  const cambio = () => {
    menu ? setMenu(false) : setMenu(true)

    setTimeout(() => {
      Cli === "menuCot" ? setCli("menuCot menuCotActivo") : setCli("menuCot")
    }, 1)
  }

  return (
    <HHeader>
      <Link to="/">
        <Logo />
      </Link>

      <nav>
        <li>
          <Link to="/#HOME">HOME</Link>
          <div className="under"></div>
        </li>
        <li>
          <Link to="/#ABOUT">ABOUT</Link>
          <div className="under"></div>
        </li>
        <li>
          <Link to="/#PORTAFOLIO">PROTAFOLIO</Link>
          <div className="under"></div>
        </li>
        <li>
          <Link to="/#CONTACTO">CONTACT</Link>
          <div className="under"></div>
        </li>
      </nav>

      <div className="menu" title="Menu">
        <Menu onClick={cambio} />

        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={cambio}
              className="menuActivio"
            >
              <div className={Cli}>
                <li>
                  <Link to="/#HOME">HOME</Link>
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </HHeader>
  )
}

export default Header
