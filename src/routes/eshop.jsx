import React from 'react';
import { Background } from '../containers/background';
import { Cursor } from '../components/cursor';

import { BackBtn } from '../components/backbtn'
import { GitBtn } from '../components/gitbtn'
import { LinkBtn } from '../components/linkbtn'
import Button from '../components/button'

import eshop1 from '../assets/E-shop_1.webp'
import eshop2 from '../assets/E-shop_2.webp'

import { Fade } from '../animations/fade'
import { SizeUp } from '../animations/sizeup'

import video from '../assets/eshop_video.mp4'

export function Eshop() {

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
                            background: "rgb(255,93,94)",
                            background: "linear-gradient(39deg, rgba(255,93,94,1) 0%, rgba(253,66,68,1) 100%)",
                        }}
                    >
                        <video autoPlay loop muted className='background-video-3'>
                            <source src={video} type="video/mp4"></source>
                            Your browser does not support video tag.
                        </video>
                    </div>
                    <div className='header-content'>
                        <div className='buttons'>
                            <Button light target="_blank" link="https://github.com/lubosgarancovsky/eshop" text="GitHub"></Button>
                            <Button light target="_blank" link="https://lubosgarancovsky.github.io/eshop/" text="Visit" />
                        </div>
                    </div>
                </div>

                <div className='projectpage-body'>
                    <div className='bottom-buttons'>
                        <div>
                            <BackBtn />
                        </div>

                        <div>
                            <GitBtn link="https://github.com/lubosgarancovsky/eshop" />
                        </div>

                        <div>
                            <LinkBtn link="https://lubosgarancovsky.github.io/eshop/" />
                        </div>
                    </div>
                    <div className='projectpage-description'>
                        <Fade>
                            <h2>Clothes E-shop</h2>
                        </Fade>


                        <Fade>
                            <p>
                                This project is a simple E-shop for clothes that I made in React.
                                It has no backend and the goods are imported from a JSON file.
                                The goal of this project was to make a working eshop cart that shares its
                                content through multiple components and routes.
                                I achieved that using useContext hook and session storage.
                            </p>
                        </Fade>

                        <Fade>
                            <p>
                                User can filter through few items by gender, size and type of clothing.
                                After choosing desired size and clicking on the "Add to cart" button, item
                                will be added to the cart and this change will be shown in top right corner, where
                                cart button is.
                                Inside cart, user can also remove items.
                            </p>
                        </Fade>

                        <Fade>
                            <p>
                                After clicking on "Make order" button inside cart, user will be redirected to
                                another route, where cart contents is shown with a simple form. Form is not working
                                and is there solely for design purpose.
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
                            </div>
                        </Fade>

                        <div className='project-pictures'>
                            <SizeUp>
                                <img src={eshop1} alt='screenshot_01' />
                            </SizeUp>
                            <SizeUp>
                                <img src={eshop2} alt='screenshot_01' />
                            </SizeUp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
