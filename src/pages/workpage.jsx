import React from 'react';
import { ProjectBig } from '../components/projectcard';
import {Button} from '../components/button'
import {Fade} from '../animations/fade'


import lifesim from '../assets/lifesim.webp';
import notes from '../assets/notes.webp';
import college from '../assets/college.webp';
import eshop from '../assets/eshop.webp';
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
                <Link to='/eshop'>
                    <ProjectBig number={"01-04"} title={"E-shop"} year={"2022"} thumbnail={eshop}>
                        <p>
                            Simple eshop made with usage of useContext and session storage
                        </p>
                    </ProjectBig>
                </Link>
                <Link to='/collegesearch'>
                    <ProjectBig number={"02-04"} title={"College search"}  year={"2022"} thumbnail={college}>
                        <p>
                            Personal React project that fetches API of universities
                        </p>
                    </ProjectBig>
                </Link>

                <Link to='/project'>
                    <ProjectBig number={"03-04"} title={"Life-Sim 2"} year={"2022"} thumbnail={lifesim}>
                        <p>
                            Ecosystem simulation made in Python using PyGame library.
                        </p>
                    </ProjectBig>
                </Link>

                <Link to='/mysimplenotes'>
                    <ProjectBig number={"04-04"} title={"My Simple Notes"} type={"Android app"} year={"2022"} thumbnail={notes}>
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
