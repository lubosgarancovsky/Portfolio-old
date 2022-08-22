import React from 'react';
import { SizeUp } from '../animations/sizeup';
import { exploreEnter, exploreLeave } from '../hooks/hover';

import Tilt from 'react-parallax-tilt';

export const ProjectBig = (props) => {
    return (
        <div onMouseEnter={exploreEnter} onMouseLeave={exploreLeave}>
            <SizeUp>
                <Tilt  className='big-project' style={{ backgroundImage: `url(${props.thumbnail})` }}
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={1000}
                    transitionSpeed={1000}
                    gyroscope={true}
                >
                    <div className='project-desc'>
                        <div className='pr-header'>
                            <h4>{props.number}</h4>
                            <h2>{props.title}</h2>
                        </div>
                        <div className='pr-bottom'>
                            <div>
                                <h3>Description</h3>
                                {props.children}
                            </div>

                            <div>
                                <h3>Year</h3>
                                <p>{props.year}</p>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </SizeUp>
        </div>
    );
}