import React from 'react';
import { Link } from "react-router-dom";
import { handleHover, handleLeave } from '../scripts/hover';
import arrow from '../assets/icons/arrow2.svg';

export function BackBtn() {
    return ( 
        <Link to="/">
            <div onMouseEnter={handleHover} onMouseLeave={handleLeave} className='backBtn'>
                <div className='arrow-w'>
                    <img src={arrow}/>
                    <img src={arrow}/>
                </div>
            </div>
        </Link>
     );
}
