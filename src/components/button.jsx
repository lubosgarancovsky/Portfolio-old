import React, { useEffect } from 'react';
import { handleHover, handleLeave } from '../hooks/hover';

export const Button = (props) => {

    return ( 
        <div onMouseEnter={handleHover} onMouseLeave={handleLeave} className={props.light ? 'primary-btn light' : 'primary-btn'}>
            <a href={props.link} target={props.target}>
                {props.text}

                <img src={props.img}></img>

            </a>
        </div>
     );
}
 
export default Button;