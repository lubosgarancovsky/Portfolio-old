import React from 'react';
import { handleHover, handleLeave } from '../hooks/hover';

import link from '../assets/icons/link.svg'

export function LinkBtn(props) {
    return (
        <a href={props.link} target="_blank">
            <div onMouseEnter={handleHover} onMouseLeave={handleLeave} className='backBtn'>
                <img src={link} />
            </div>
        </a>
    );
}
