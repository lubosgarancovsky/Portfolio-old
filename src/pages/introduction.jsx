import React from 'react';
import { Roll } from '../animations/roll'
import { Fade } from '../animations/fade'
import Button from '../components/button';
import arrow from '../assets/icons/arrow.svg';
import { Skills } from './skills';

export const Intro = () => {

    return (
        <div id="Intro" className='page intropage'>
            <div className='top'>
                <Fade dirrection='left'>
                <div className='line' >
                    <hr />
                </div>
                </Fade>

                
                <div className='content'>
                    <Fade dirrection='left'>
                        <h2>Introduction</h2>
                    </Fade>
                    
                    <Fade dirrection='bottom'>
                        <p>
                            Hello, my name is Ľuboš Garančovský
                            and I am a software developer. 
                            I focus on front-end web development and web design. 
                            I am passionate about writing code, designing and building software, 
                            UI/UX design and much more.
                        </p>
                        <div className="button-w">
                            <Button text={"See my work"} img={arrow} link={"#Work"} />
                        </div>
                    </Fade>
                </div>
                
                <div className='photo'>
                    <Roll>
                        <div className='circle'></div>
                    </Roll>
                </div>

            </div>
            
            <Skills />

        </div>
    );
}

