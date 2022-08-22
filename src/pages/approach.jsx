import React from 'react';
import { Card } from '../components/card';
import { Fade } from '../animations/fade';
import { SizeUp } from '../animations/sizeup';

import paint from '../assets/icons/paint.svg'
import pc from '../assets/icons/pc.svg'
import clock from '../assets/icons/clock.svg'

import { motion} from 'framer-motion';

export function Approach() {

    return (
        <div id="Approach" className='page approachpage'>


            <div className='cards-w'>
                <div className='background-img' ></div>
                <div className='cards'>
                        <div className='grid'>
                            <Fade dirrection={'left'}>
                                <Card img={paint} title="Design">
                                    <p>
                                        It is not easy to come up with a good and original
                                        idea that has a little bit of “wow effect”, but
                                        with a pinch of imagination and inspiration i always
                                        deliver a beautiful product.
                                        I like giving a website its own identity and style, that separates it
                                        from the others.
                                    </p>
                                </Card>
                            </Fade>

                            <Fade dirrection='bottom'>
                                <Card img={pc} title="Development">
                                    <p>
                                        I always strive to create memorable experiences
                                        that are aesthetically appealing, functional
                                        and distinctive. I like order and good planning.
                                        I am always learning new technologies that make my products better
                                        and also make me grow as a developer.

                                    </p>
                                </Card>
                            </Fade>

                            <Fade dirrection={'right'}>
                                <Card img={clock} title="Managment">
                                    <p>
                                        Many times I have been under the pressure of a deadline
                                        I simply had to meet. I leart to work efficiently with
                                        the time of mine, and of the others. Loving what I do also makes
                                        my time and work managment much better.
                                    </p>
                                </Card>
                            </Fade>
                        </div>
                </div>
            </div>
            <Fade>
                <div className='bottom-title'>
                    <h2 className='serif'>I do what I do best</h2>
                    <p>... and I am looking forward to our cooperation</p>
                </div>
            </Fade>
            
            <div className='status-w'>
                <SizeUp>
                    <div className='outer-circle'>
                    <div className='status'>
                                <h3>Status</h3>
                                <p>Availible for work</p>
                            </div>
                        <motion.div className='inner-circle'
                            initial={{opacity:1, scale:1}}
                            animate={{opacity:0, scale:1.2, transition:{
                            duration: 1,
                            delay:0.5,
                            repeat: Infinity
                        }}}
                        >
                            
                        </motion.div>
                    </div>
                </SizeUp>

            </div>
        </div>
    );
}


/*
 <Link to="/aboutme"><Button light link="#" text="Learn more about me" img={person} /></Link>
*/