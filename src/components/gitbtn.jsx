import React from 'react';
import { handleHover, handleLeave } from '../hooks/hover';

import git from '../assets/icons/github.svg'

export function GitBtn(props) {
    return (
        <a href={props.link} target="_blank">
            <div onMouseEnter={handleHover} onMouseLeave={handleLeave} className='Btn'>
                <img src={git} />
            </div>
        </a>
    );
}
