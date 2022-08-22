import { motion, useAnimation, useInView} from 'framer-motion';
import React, {useEffect, useRef} from 'react';


export function Roll(props) {
    const {once = true} = props
    const ref = useRef(null)
    const isInView = useInView(ref,{
        margin: "50% 0% 0% 0%",
        once: once
    })

    const animation = useAnimation()

    

    useEffect (()=>{
        if(isInView){
            animation.start({
                x:0,
                rotate:0,
                transition: {
                    duration: 1
                }
            })
        }

        if(!isInView){
            animation.start({
                x:300,
                rotate:80,
            })
        }

    },[isInView])

    return ( 
        <motion.div ref={ref} 
            animate={animation}
        >
           {props.children}
        </motion.div>
     );
}
