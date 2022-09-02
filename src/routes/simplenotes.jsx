import React from 'react';
import { Background } from '../containers/background';
import { Cursor } from '../components/cursor';

import { BackBtn } from '../components/backbtn'
import { GitBtn } from '../components/gitbtn'
import Button from '../components/button'


import notes1 from '../assets/notes1.webp'
import notes2 from '../assets/notes2.webp'

import {Fade} from '../animations/fade'
import {SizeUp} from '../animations/sizeup'

import video from '../assets/notes_video.mp4'

export function Notes() {

    return (
        <div className='projectpage'>
            <Cursor />
            <Background />

            <div className='projectpage-wrapper'>
                <div className='back-button'>
                    <BackBtn />
                </div>

                <div className='projectpage-header'
                    style={{
                        background: "rgb(51,51,51)",
                        background: "linear-gradient(39deg, rgba(51,51,51,1) 0%, rgba(32,32,32,1) 100%)",
                    }}
                >
                    <div className='video-wrapper'>
                        <video autoPlay loop muted  className='background-video-2'>
                            <source src={video} type="video/mp4"></source>
                            Your browser does not support video tag.
                        </video>
                    </div>

                    <div className='header-content'>
                        <div className='buttons'>
                            <Button light link="https://github.com/lubosgarancovsky/MySimpleNotes" text="GitHub"></Button>
                        </div>
                    </div>
                </div>

                <div className='projectpage-body'>
                    <div className='bottom-buttons'>
                        <div>
                            <BackBtn />
                        </div>

                        <div>
                            <GitBtn link="https://github.com/lubosgarancovsky/MySimpleNotes" />
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
