import React, { useEffect, useState } from 'react';


import html from '../assets/skills/html.svg'
import css from '../assets/skills/css.svg'
import sass from '../assets/skills/sass.svg'
import react from '../assets/skills/react.svg'
import node from '../assets/skills/node.svg'
import js from '../assets/skills/js.svg'
import python from '../assets/skills/python.svg'
import git from '../assets/skills/git.svg'
import cpp from '../assets/skills/cpp.svg'
import java from '../assets/skills/java.svg'
import linux from '../assets/skills/linux.svg'
import npm from '../assets/skills/npm.svg'
import sql from '../assets/skills/sql.svg'


import { motion } from 'framer-motion';
import { dragEnter, dragLeave } from '../hooks/hover';


export function Skills() {

    const [boundary, setBoundary] = useState(0)

    useEffect(() => {
        let wrapper = document.querySelector('.icons').clientWidth
        let icon = document.querySelector('.skillicon').clientWidth
        let width = wrapper - (icon * 3)
        setBoundary(-width)

    })

    return (
        <div id="Skills" className='skillspage'>
            
                <motion.div className='icons'
                    drag="x"
                    dragConstraints={{ left: boundary, right: 0 }}
                    dragElastic={0.5}
                    onMouseEnter={dragEnter} onMouseLeave={dragLeave}
                    initial={{x:'50%'}}
                    animate={{x:'-100%', transition:{
                        duration: 30,
                        repeat: Infinity,
                        ease: 'linear'
                    }}}
                >
                    <div className='top-level'></div>
                    <div className='skillicon'>
                        <img src={html} alt="icon" />
                        <h4>HTML5</h4>
                    </div>
                    <div className='skillicon'>
                        <img src={css} alt="icon" />
                        <h4>CSS3</h4>
                    </div>
                    <div className='skillicon'>
                        <img src={sass} alt="icon" />
                        <h4>Sass</h4>
                    </div>
                    <div className='skillicon'>
                        <img src={react} alt="icon" />
                        <h4>React</h4>
                    </div>
                    <div className='skillicon'>
                        <img src={node} alt="icon" />
                        <h4>Node.js</h4>
                    </div>
                    <div className='skillicon'>
                        <img src={js} alt="icon" />
                        <h4>JavaScript</h4>
                    </div>
                    <div className='skillicon'>
                        <img src={python} alt="icon" />
                        <h4>Python</h4>
                    </div>
                    <div className='skillicon'>
                        <img src={java} alt="icon" />
                        <h4>Java</h4>
                    </div>
                    <div className='skillicon'>
                        <img src={cpp} alt="icon" />
                        <h4>C++</h4>
                    </div>
                    <div className='skillicon'>
                        <img src={sql} alt="icon" />
                        <h4>SQL</h4>
                    </div>
                    <div className='skillicon'>
                        <img src={npm} alt="icon" />
                        <h4>npm</h4>
                    </div>
                    <div className='skillicon'>
                        <img src={linux} alt="icon" />
                        <h4>Linux</h4>
                    </div>
                    <div className='skillicon'>
                        <img src={git} alt="icon" />
                        <h4>Git</h4>
                    </div>

                </motion.div>
        </div>
    );
}
