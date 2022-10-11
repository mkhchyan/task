import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { motion } from "framer-motion";
import { reveal } from "../animations";

import '../../assets/styles/theme.scss'
import { useScroll } from "../useScroll";
import Title from "./Title";
import img from '../../assets/images/about.png'

function About() {
    const [element, controls] = useScroll();

    return (

        <div className="about-container" id="about" ref={element}>
            <div className="container">
                <div className="bottom-arrow"></div>
                <motion.div
                    className="details"
                    initial="hidden"
                    animate={controls}
                    variants={reveal}
                    transition={{ delay: 0.1, stiffness: 300 }}
                >
                    <Title title="About us" />
                    <p className="aboutContent">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </motion.div>
                <div className="cards" ref={element}>
                    {/* <img src={img} /> */}
                </div>

            </div>
        </div>
    );
}

export default About;