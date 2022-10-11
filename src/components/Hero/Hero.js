import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Img from '../../assets/images/HRSSection.png';
import { stagger, easeing, heroAnim, content, fadeInUp } from '../animations'
import '../../assets/styles/theme.scss'

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

const Hero = () => {

    const { t } = useTranslation()

    return (

        <motion.section
            initial="hidden"
            whileInView="visible"
            className='hero'
        >
            <div className='imgContainer'>
                <img src={Img} alt="hero" className='img' />
            </div>
            <article className='text'>
                <motion.h1 custom={1} variants={textAnimation} className='title'>{t('heroTitle')}</motion.h1>
                <motion.p custom={2} variants={textAnimation} className='description'>{t('heroText')}</motion.p>
            </article>

            <motion.div className="btn_group" variants={stagger}>
                <SocialIcon
                    url="https://www.linkedin.com"
                    target="_blank"
                    className="socialIcon"
                />
                <SocialIcon
                    url="https://facebook.com"
                    target="_blank"
                    className="socialIcon"
                />
            </motion.div>
        </motion.section>
    )
}

export default Hero;