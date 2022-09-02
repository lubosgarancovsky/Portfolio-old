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
                            and I am a front-end web developer 
                            with a quickly growing skillset, 
                            high motivation and a strong desire for personal and professional growth.
                            I enjoy putting my analytical thinking and creativity into use by creating
                            stuff for the web.

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

