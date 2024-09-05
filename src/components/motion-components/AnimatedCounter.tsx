import { animate, KeyframeOptions, useInView, useIsomorphicLayoutEffect } from 'framer-motion';
import React, { useRef } from 'react';

type AnimatedCounterProps = {
    from: number, 
    to: number,
    animationOptions?: KeyframeOptions
};

const AnimatedCounter:React.FC<AnimatedCounterProps> = ({from, to, animationOptions}) => {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, {once: true})
    useIsomorphicLayoutEffect(() => {
        const element = ref.current
        if(!element) return
        if(!inView) return;
        element.textContent = String(from)

        const controls = animate(from,to, {
            duration: 1.5,
            ease: "easeOut",
            ...animationOptions,
            onUpdate(value) {
                element.textContent = value.toFixed(0)
            }
        })
        return () => {
            controls.stop();
        }
    },[ref, inView, to,from])


    if(!inView) {
        return <span ref={ref}>{from}</span>
    }

    else {
        return (<span ref={ref}/>)
    }

}
export default AnimatedCounter;