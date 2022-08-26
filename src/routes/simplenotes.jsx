import React from 'react';
import { Background } from '../containers/background';
import { Cursor } from '../components/cursor';

import { BackBtn } from '../components/backbtn'
import { GitBtn } from '../components/gitbtn'
import Button from '../components/button'

import background from '../assets/notes.webp'

import notes1 from '../assets/notes1.webp'
import notes2 from '../assets/notes2.webp'

import {Fade} from '../animations/fade'
import {SizeUp} from '../animations/sizeup'


export function Notes() {

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
                            <Button light link="https://github.com/lubosgarancovsky/LifeSim-2" text="GitHub"></Button>
                        </div>
                    </div>
                </div>

                <div className='projectpage-body'>
                    <div className='bottom-buttons'>
                        <div>
                            <BackBtn />
                        </div>

                        <div>
                            <GitBtn link="https://github.com/lubosgarancovsky/LifeSim-2" />
                        </div>
                    </div>
                    <div className='projectpage-description'>
                        <Fade>
                            <h2>My simple notes</h2>
                        </Fade>
                        
                        <Fade>
                            <p>
                                Note taking and task tracking CRUD android application. It uses SQLite to store
                                notes that can be updated or completly removed. Tasks are divided to three categories.
                                Low priority, medium priority and high priority. They are later sorted from the latest
                                task with highest priority. It was made using Kotlin and Android studio.
                            </p>
                        </Fade>
                        
                        <Fade>
                            <div className='technologies'>
                                <div className='technology-capsule'>
                                    Kotlin
                                </div>

                                <div className='technology-capsule'>
                                    SQLite
                                </div>

                                <div className='technology-capsule'>
                                    Android Studio
                                </div>
                            </div>
                        </Fade>
                        

                        <div className='project-pictures'>
                            <SizeUp>
                                <img src={notes2} alt='screenshot_02' />
                            </SizeUp>
                            <SizeUp>
                                <img src={notes1} alt='screenshot_01' />
                            </SizeUp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
