import React, { useState } from "react";
import "../../landing.scss"
import logo from "../../assets/images/HRSLogo.jpg"
import LanguageSwitcher from "../LanguageSwitcher";
import { IconContext } from "react-icons";
import { Link } from "react-scroll";

import { navbarAnimation } from "../animations";


import { header, stagger } from '../animations'

import DarkModeSwitch from "../DarkModeSwitcher/DarkModeToggle";


// import BrandName from "./BrandName";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";


const Navbar = () => {

    const [toggleNavbar, setToggleNavbar] = useState(false);
    const navbarToggler = () => {
        setToggleNavbar(!toggleNavbar);
    };

    return (

        <motion.div
            className={`navbar ${toggleNavbar === true ? "active" : ""}`}
            variants={navbarAnimation}
            transition={{ delay: 0.1 }}
        >
            <div className="col">
                <motion.div className="logo_wrapper" variants={header}>
                    <img src={logo}
                        style={{
                            width: '50%',
                        }}
                    />
                </motion.div>
                <div className="collapseble-button">
                    {!toggleNavbar ? (
                        <GiHamburgerMenu onClick={navbarToggler} />
                    ) : (
                        <MdClose onClick={navbarToggler} />
                    )}
                </div>
            </div>
            <nav>
                <div className="links">
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                        <li>
                            <DarkModeSwitch />
                        </li>
                        <li>
                            <LanguageSwitcher />
                        </li>

                    </ul>
                </div>
            </nav>
        </motion.div>
    )

}

export default Navbar;