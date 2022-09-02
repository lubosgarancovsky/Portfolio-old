import React from 'react';
import { Background } from '../containers/background';
import { Cursor } from '../components/cursor';

import { BackBtn } from '../components/backbtn'
import { GitBtn } from '../components/gitbtn'
import Button from '../components/button'


import college1 from '../assets/college_1.webp'

import {Fade} from '../animations/fade'
import {SizeUp} from '../animations/sizeup'
import video from '../assets/college_video.mp4'

export function CollegeSearch() {

    return (
        <div className='projectpage'>
            <Cursor />
            <Background />
            <div className='projectpage-wrapper'>
                <div className='back-button'>
                    <BackBtn />
                </div>
                <div className='projectpage-header'>
                    <div className="video-wrapper-2"
                    style={{
                        background: "rgb(96,95,157)",
                        background: "linear-gradient(39deg, rgba(96,95,157,1) 0%, rgba(132,132,189,1) 100%)",
                    }}
                    >
                        <video autoPlay loop muted  className='background-video-3'>
                            <source src={video} type="video/mp4"></source>
                            Your browser does not support video tag.
                        </video>
                    </div>

                    <div className='header-content'>
                        <div className='buttons'>
                            <Button  light target="_blank" link="https://github.com/lubosgarancovsky/CollegeSearch" text="GitHub"></Button>
                        </div>
                    </div>
                </div>

                <div className='projectpage-body'>
                    <div className='bottom-buttons'>
                        <div>
                            <BackBtn />
                        </div>

                        <div>
                            <GitBtn link="https://github.com/lubosgarancovsky/CollegeSearch"/>
                        </div>
                    </div>
                    <div className='projectpage-description'>
                        <Fade>
                            <h2>College search</h2>
                        </Fade>
                        

                        <Fade>
                            <p>
                                This project is a simple React web application that consumes API of Universities
                                all around the world. It allows user to search for any University by country and/or 
                                its name. It has a pagination feature and cards that are displayed after search is completed
                                are links to websites of given University.
                            </p>
                        </Fade>

                        <Fade>
                            <p>
                                The highligh of this project is pagination and API fetching using axios.
                            </p>
                        </Fade>


                        <Fade>
                            <div className='technologies'>
                                    <div className='technology-capsule'>
                                        React
                                    </div>

                                
                                    <div className='technology-capsule'>
                                        JavaScript
                                    </div>

                                    <div className='technology-capsule'>
                                        Sass
                                    </div>

                                    <div className='technology-capsule'>
                                        Axios
                                    </div>
                            </div>
                        </Fade>

                        <div className='project-pictures'>
                            <SizeUp>
                                <img src={college1} alt='screenshot_01'/>
                            </SizeUp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
