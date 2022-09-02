import React from 'react';
import { Background } from '../containers/background';
import { Cursor } from '../components/cursor';

import { BackBtn } from '../components/backbtn'
import { GitBtn } from '../components/gitbtn'
import { LinkBtn } from '../components/linkbtn'
import Button from '../components/button'

import background from '../assets/shoes.webp'

import shoes1 from '../assets/shoes_1.webp'

import { Fade } from '../animations/fade'
import { SizeUp } from '../animations/sizeup'

import video from '../assets/shoes_video.mp4'

export function PlusShoes() {

    return (
        <div className='projectpage'>
            <Cursor />
            <Background />
            <div className='projectpage-wrapper'>
                <div className='back-button'>
                    <BackBtn />
                </div>
                <div className='projectpage-header' style={{ backgroundImage: `url(${background})` }}>
                    <div className="video-wrapper-2"
                        style={{
                            background: "rgb(220,70,232)",
                            background: "linear-gradient(39deg, rgba(220,70,232,1) 0%, rgba(219,70,231,1) 100%)",
                        }}
                    >
                        <video autoPlay loop muted className='background-video-3'>
                            <source src={video} type="video/mp4"></source>
                            Your browser does not support video tag.
                        </video>
                    </div>
                    <div className='header-content'>
                        <div className='buttons'>
                            <Button light target="_blank" link="https://github.com/lubosgarancovsky/PlusShoes" text="GitHub"></Button>
                            <Button light target="_blank" link="https://lubosgarancovsky.github.io/PlusShoes/" text="Visit" />
                        </div>
                    </div>
                </div>

                <div className='projectpage-body'>
                    <div className='bottom-buttons'>
                        <div>
                            <BackBtn />
                        </div>

                        <div>
                            <GitBtn link="https://github.com/lubosgarancovsky/PlusShoes" />
                        </div>

                        <div>
                            <LinkBtn link="https://lubosgarancovsky.github.io/PlusShoes/" />
                        </div>
                    </div>
                    <div className='projectpage-description'>
                        <Fade>
                            <h2>+Shoes</h2>
                        </Fade>


                        <Fade>
                            <p>
                                React eshop for shoes that uses Redux to manage states.
                                Highlight of this project is a sliding carousel on the landingpage and
                                fully working cart. It also takes use of session storage and framer-motion
                                library. It is also optimalized for phone screens.
                            </p>
                        </Fade>

                        <Fade>
                            <p>
                                User can choose a desired size of a shoe and then add shoes to the cart.
                                In the cart, total price for all items is calculated.
                                Item in cart can be completly removed by clicking on X button.
                                User can also change the amount of items in the cart using + and - buttons.
                                When amount of one item in cart is less than 1, it gets removed from the cart.
                            </p>
                        </Fade>

                        <Fade>
                            <p>
                                The project is not yet in a final version and will have more features to it.
                            </p>
                        </Fade>




                        <Fade>
                            <div className='technologies'>
                                <div className='technology-capsule'>
                                    React
                                </div>

                                <div className='technology-capsule'>
                                    Redux
                                </div>



                                <div className='technology-capsule'>
                                    JavaScript
                                </div>

                                <div className='technology-capsule'>
                                    Sass
                                </div>
                            </div>
                        </Fade>

                        <div className='project-pictures'>
                            <SizeUp>
                                <img src={shoes1} alt='screenshot_01' />
                            </SizeUp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
