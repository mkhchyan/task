import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Typical from "react-typical";
import { SocialIcon } from "react-social-icons";

import '../../assets/styles/theme.scss'
import Img from '../../assets/images/Globus.png';

import { stagger } from '../animations'

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


const Social = () => {

    const { t } = useTranslation()

    return (
        // <motion.div initial='initial' animate='animate'>
        //     <motion.div className="content_wrapper" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: easeing }}>

        //         <div className="right_content_wrapper">

        //             <motion.h2>
        //                 <motion.span variants={heroAnim} initial="initial" animate="animate" className='first'>
        //                     <motion.span variants={content}>{t('follow')}</motion.span>
        //                 </motion.span>
        //             </motion.h2>

        //             <motion.div className="btn_group" variants={stagger}>
        //                 <SocialIcon
        //                     url="https://www.linkedin.com"
        //                     target="_blank"
        //                     className="socialIcon"
        //                 />
        //                 <SocialIcon
        //                     url="https://facebook.com"
        //                     target="_blank"
        //                     className="socialIcon"
        //                 />
        //             </motion.div>

        //             <motion.p custom={2} variants={textAnimation}>
        //                 <motion.span variants={fadeInUp} initial="initial" animate="animate" className="paragraph">
        //                     <motion.span variants={content}>
        //                         <Typical
        //                             className='quote'
        //                             // loop={Infinity}
        //                             wrapper="p"
        //                             steps={[
        //                                 `${t('steve')}...`, 1000, 500
        //                             ]}
        //                         />
        //                     </motion.span>
        //                 </motion.span>
        //             </motion.p>
        //         </div>

        //         <motion.div className="left_content_wrapper">
        //             <motion.img src={Img} alt="bg" initial={{ x: 500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: 0.8 }} />
        //         </motion.div>
        //     </motion.div>
        // </motion.div>

        <motion.section
            initial="hidden"
            whileInView="visible"
            className='hero '
        >
            <div className='imgContainer'>
                <img src={Img} alt="hero" className='img' />
            </div>
            <article className='text social'>
                <motion.h2 custom={1} variants={textAnimation} className='title'>{t('follow')}</motion.h2>
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
            </article>

        </motion.section>
    )
}

export default Social;