import { motion, useAnimation, useInView} from 'framer-motion';
import React, {useEffect, useRef} from 'react';


export function SizeUp(props) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "20% 0% 0% 0%"
    })

    const animation = useAnimation()

    useEffect (()=>{
        if(isInView){
            animation.start({
                scale:1,
                opacity:1,
                transition: {
                    duration: 0.5
                }
            })
        }

        if(!isInView){
            animation.start({
                scale:0.5,
                opacity:0.5,
                transition: {
                    duration: 1
                }
            })
        }

    },[isInView])

    return ( 
        <motion.div ref={ref} 
            animate={animation}
            style={{height:"100%"}}
        >
           {props.children}
        </motion.div>
     );
}
