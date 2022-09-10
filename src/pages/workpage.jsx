import React from 'react';
import { ProjectBig } from '../components/projectcard';
import {Button} from '../components/button'
import {Fade} from '../animations/fade'


import lifesim from '../assets/lifesim.webp';
import notes from '../assets/notes.webp';
import college from '../assets/college.webp';
import eshop from '../assets/eshop.webp';
import shoes from '../assets/shoes.webp';

import github from '../assets/icons/github.svg';

import { Link } from "react-router-dom";



export function Workpage() {

    return (
        <div id="Work" className='page workpage'>
            <Fade>
                <div className='work-header'>
                    <h2>Explore my work</h2>
                    <p>Click on project to learn more</p>
                </div>
            </Fade>
            <div className='big-wrapper'>
                <Link to='/plusshoes'>
                    <ProjectBig number={"01-05"} title={"+Shoes"} year={"2022"} thumbnail={shoes}>
                        <p>
                            E-shop for shoes made with React and Redux
                        </p>
                    </ProjectBig>
                </Link>

                <Link to='/collegesearch'>
                    <ProjectBig number={"02-05"} title={"College search"}  year={"2022"} thumbnail={college}>
                        <p>
                            Personal React project that fetches API of universities
                        </p>
                    </ProjectBig>
                </Link>

                <Link to='/eshop'>
                    <ProjectBig number={"03-05"} title={"E-shop"} year={"2022"} thumbnail={eshop}>
                        <p>
                            Simple eshop made with usage of useContext and session storage
                        </p>
                    </ProjectBig>
                </Link>

                <Link to='/lifesim'>
                    <ProjectBig number={"04-05"} title={"Life-Sim"} year={"2022"} thumbnail={lifesim}>
                        <p>
                            Ecosystem simulation made using vanilla JS and HTML canvas
                        </p>
                    </ProjectBig>
                </Link>

                <Link to='/mysimplenotes'>
                    <ProjectBig number={"05-05"} title={"My Simple Notes"} type={"Android app"} year={"2022"} thumbnail={notes}>
                        <p>
                            Note taking / task tracking android application.
                        </p>
                    </ProjectBig>
                </Link>
            </div>

            <Fade>
                <div className='work-footer'>
                    <h2>More projects on my GitHub</h2>
                    <Button link='https://github.com/lubosgarancovsky?tab=repositories' target="_blank" img={github} text='Visit my GitHub'></Button>
                </div>
            </Fade>
        </div>
    );
}
