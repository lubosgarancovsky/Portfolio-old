import React, { useEffect, useState } from 'react';
import { handleHover, handleLeave } from '../scripts/hover';
import { motion, useAnimation } from "framer-motion"


import git from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
//import ig from '../assets/icons/instagram.svg';

export function Menu() {

    const [isOpen, setOpen] = useState(false);

    const animation = useAnimation();

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
                delay: 0
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
                staggerChildren: 0.1,
                delay: 0
            },
        },
    }

    const item = {
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.15, ease: 'easeIn' }
        },
        hidden: {
            opacity: 0,
            x: 100 ,
            transition: { duration: 0.15, ease: 'easeIn' }
            },
    }

    useEffect(() => {
        if (isOpen) {

            animation.start({
                x: 0,
                transition: {
                    duration: 0.4,
                }
            })
        }
        else {
            animation.start({
                x: "100%",
                transition: {
                    duration: 0.4,
                    delay: 0.7
                }
            })
        }

    }, [isOpen])




    return (
        <div className='menu'>
            <div className='left'>
                <div className="menu-btn" onClick={() => setOpen(!isOpen)} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    <div className={isOpen ? "square open" : "square"}></div>
                </div>
            </div>
            <motion.div className={isOpen ? 'right visible' : "right hidden"}
                initial={{ x: "100%" }}
                animate={animation}
            >
                <div className='menu-wrapper'>
                    <nav>
                        <motion.ul className='nav'
                            initial="hidden"
                            animate={isOpen ? 'visible' : 'hidden'}
                            variants={list}
                        >
                            <motion.a variants={item} href="#Home" onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={() => setOpen(!isOpen)}>Home</motion.a>
                            <motion.a variants={item} href="#Intro" onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={() => setOpen(!isOpen)}>Introduction</motion.a>
                            <motion.a variants={item} href="#Work" onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={() => setOpen(!isOpen)}>Work</motion.a>
                            <motion.a variants={item} href="#Approach" onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={() => setOpen(!isOpen)}>Approach</motion.a>
                            <motion.a variants={item} href="#Contact" onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={() => setOpen(!isOpen)}>Contact</motion.a>
                        </motion.ul>
                        <motion.div className='nav-footer'
                            initial={{opacity:0, y:100}}
                            animate={isOpen? {opacity:1, y:0, transition:{delay:1}}:{opacity:0, y:100}}
                        >
                            <div className='bottom'>
                                <ul>
                                    <a href="https://twitter.com/LGarancovsky" target="_blank" onMouseEnter={handleHover} onMouseLeave={handleLeave} ><img src={twitter} alt='twitter-icon'/></a>
                                    <a href="https://github.com/lubosgarancovsky" target="_blank" onMouseEnter={handleHover} onMouseLeave={handleLeave} ><img src={git} alt='github-icon'/></a>
                                    <a href="https://www.linkedin.com/in/%C4%BEubo%C5%A1-garan%C4%8Dovsk%C3%BD-89a643249/" target="_blank" onMouseEnter={handleHover} onMouseLeave={handleLeave} ><img src={linkedin} alt='linkedin-icon'/></a>
                                </ul>
                            </div>
                        </motion.div>
                    </nav>
                </div>
            </motion.div>
        </div>
    );
}


