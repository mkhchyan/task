import React from "react";
import { motion } from 'framer-motion';
import LogoImg from "../../assets/images/HRSLogo.jpg"
import '../../assets/styles/theme.scss'

import { heroAnim, content } from '../animations'


const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <footer className="footer">
            <motion.p>
                <motion.span variants={heroAnim} initial="initial" animate="animate" className='first'>
                    <motion.span variants={content}>HRS Technology &copy; Copyright 2013 - {year}</motion.span>
                </motion.span>
            </motion.p>

            <div className="LogoCont">
                <a href="#">
                    <img src={LogoImg}
                        style={{
                            width: '50%',
                        }}
                    />
                </a>
            </div>
        </footer>


    );
}

export default Footer;