import React from 'react';


export const Card = (props) => {
    return ( 
         <div className='card'>
            <div className='title'>
               <div className='icon'>
                  <img src={props.img} alt="icon"/>
               </div>
               
               <h2>{props.title}</h2>
            </div>
            <div className='content'>
                  {props.children}
            </div>
         </div>
     );
}
 