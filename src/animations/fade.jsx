import { motion, useAnimation, useInView} from 'framer-motion';
import React, {useEffect, useRef} from 'react';


export function Fade(props) {
    const {once = true, dirrection = "bottom"} = props
    const ref = useRef(null)
    const isInView = useInView(ref, {once: once})

    const animation = useAnimation()

    let modifierX = 0;
    let modifierY = 0;

    const getDirrection = () => {
        if (dirrection === "bottom") {
            modifierX = 0
            modifierY = 1
        }

        if (dirrection === "top") {
            modifierX = 0
            modifierY = -1
        }

        if (dirrection === "left") {
            modifierX = -1
            modifierY = 0
        }

        if (dirrection === "right") {
            modifierX = 1
            modifierY = 0
        }
    }


    useEffect (()=>{
        getDirrection()
        if(isInView){
            animation.start({
                x:0 * modifierX,
                y:0 * modifierY,
                opacity:1,
                transition: {
                    duration: 0.8,
                    delay: 0.1
                }
            })
        }

        if(!isInView){
            animation.start({
                x:200 * modifierX,
                y:200 * modifierY,
                opacity:0,
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
