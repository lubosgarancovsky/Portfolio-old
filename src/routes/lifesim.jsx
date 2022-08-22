import React from 'react';
import { Background } from '../containers/background';
import { Cursor } from '../components/cursor';

import { BackBtn } from '../components/backbtn'
import { GitBtn } from '../components/gitbtn'
import Button from '../components/button'

import background from '../assets/lifesim.png'

import lifesim1 from '../assets/lifesim1.png'
import lifesim2 from '../assets/lifesim2.png'

import {Fade} from '../animations/fade'
import {SizeUp} from '../animations/sizeup'

export function LifeSim() {

    return (
        <div className='projectpage'>
            <Cursor />
            <Background />
            <div className='projectpage-wrapper'>
                <div className='back-button'>
                    <BackBtn />
                </div>
                <div className='projectpage-header' style={{ backgroundImage: `url(${background})` }}>
                    <div className='header-content'>
                        <div className='buttons'>
                            <Button light target="_blank" link="https://github.com/lubosgarancovsky/LifeSim-2" text="GitHub"></Button>
                        </div>
                    </div>
                </div>

                <div className='projectpage-body'>
                    <div className='bottom-buttons'>
                        <div>
                            <BackBtn />
                        </div>

                        <div>
                            <GitBtn link="https://github.com/lubosgarancovsky/LifeSim-2"/>
                        </div>
                    </div>
                    <div className='projectpage-description'>
                        <Fade>
                            <h2>Life-sim 2</h2>
                        </Fade>
                        

                        <Fade>
                            <p>
                                Life Sim is an ecosystem simulation made using Pygame library.
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
                            <div className='technologies'>
                                <div className='technology-capsule'>
                                    Python
                                </div>

                                
                                <div className='technology-capsule'>
                                    Pygame
                                </div>
                            </div>
                        </Fade>

                        <div className='project-pictures'>
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
