import React from 'react';
import { Background } from '../containers/background';
import { Cursor } from '../components/cursor';

import { BackBtn } from '../components/backbtn'
import { GitBtn } from '../components/gitbtn'
import { LinkBtn } from '../components/linkbtn'
import Button from '../components/button'

import lifesim1 from '../assets/lifesim1.webp'
import lifesim2 from '../assets/lifesim2.webp'

import {Fade} from '../animations/fade'
import {SizeUp} from '../animations/sizeup'

import video from '../assets/lifesim_video.mp4'

export function LifeSim() {

    return (
        <div className='projectpage'>
            <Cursor />
            <Background />
            <div className='projectpage-wrapper'>
                <div className='back-button'>
                    <BackBtn />
                </div>
                <div className='projectpage-header'>
                    <video autoPlay loop muted  className='background-video'>
                        <source src={video} type="video/mp4"></source>
                        Your browser does not support video tag.
                    </video>
                    <div className='header-content'>
                        <div className='buttons'>
                            <Button light target="_blank" link="https://github.com/lubosgarancovsky/LifeSim" text="GitHub"></Button>
                            <Button light target="_blank" link="https://lubosgarancovsky.github.io/LifeSim/" text="Visit" />
                        </div>
                    </div>
                </div>

                <div className='projectpage-body'>
                    <div className='bottom-buttons'>
                        <div>
                            <BackBtn />
                        </div>

                        <div>
                            <GitBtn link="https://github.com/lubosgarancovsky/LifeSim"/>
                        </div>

                        <div>
                            <LinkBtn link="https://lubosgarancovsky.github.io/LifeSim/" />
                        </div>
                    </div>
                    <div className='projectpage-description'>
                        <Fade>
                            <h2>Life Sim</h2>
                        </Fade>
                        

                        <Fade>
                            <p>
                                Life Sim is an ecosystem simulation made using vanilla JavaScript and HTML canvas.
                                It uses Perlins noise to randomly generate a world out of little squares.
                                Blue squares represent water, green ones are ground.
                                Food is also randomly placed throughout the generated world.
                                Several life instances represented by colored circles are then put into
                                this world. They wander around in their viewrange,
                                they eat, drink and sometimes reproduce.
                            </p>
                        </Fade>
                        

                        <Fade>
                            <p>
                                All circles have needs like hunger, thirst, mating urge and they also have health.
                                Those variables are displayed using progress bars above them.
                                The speed of filling those progress bars depends on their genes, that are being passed down
                                when reproducing.
                                Sometimes, when a life instance eats or drinks, it can get sick and spread the sickness
                                among other inhabitants, starting a pandemic that reduces their population.
                            </p>
                        </Fade>

                        <Fade>
                            <p>
                                This app also has settings controls on top of the screen and also on the left bottom.
                                By changing these settings you can manipulate with the simulation and change its behavior.
                                Simulation is also fully responsive and works well on phone, PC and TV screens. 
                            </p>
                        </Fade>

                        <Fade>
                            <div className='technologies'>
                                <div className='technology-capsule'>
                                    JavaScript
                                </div>

                                <div className='technology-capsule'>
                                    HTML canvas
                                </div>
                            </div>
                        </Fade>

                        <div className='project-pictures column-pictures'>
                            <SizeUp>
                                <img src={lifesim1} alt='screenshot_01'/>
                            </SizeUp>

                            <SizeUp>
                                <img src={lifesim2} alt='screenshot_02'/>
                            </SizeUp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
