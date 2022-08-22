
import React from 'react';
import { Fade } from '../animations/fade'
import foto from '../assets/foto.png';
import {motion, transform} from 'framer-motion'

export function HomePage() {

    return (
        <div id="Home" className='page homepage'>

            <motion.div className='load-wrapper'
                initial={{
                    y:0
                }}

                animate={{
                    y:'-100%',
                    transition: {
                        delay:0.3,
                        duration: 0.8
                    }
                }}
            ></motion.div>


            <div className='homepic'>
                <div className='pic-wrapper'>
                    <img src={foto} />
                </div>
            </div>



            <div className='text'>
                <Fade>
                    <h1>I turn</h1>
                </Fade>

                <Fade>
                    <h1 className='serif forward'>ideas</h1>
                </Fade>


                <Fade>
                    <h1>into</h1>
                </Fade>

                <Fade>
                    <h1>code</h1>
                </Fade>
            </div>

        </div>


    );
}
