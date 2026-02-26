import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (staggerDelay = 0.1) => {
    const ref = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (!ref.current || shouldReduceMotion) return;

        const el = ref.current;
        const children = Array.from(el.children);

        // Hide initially
        gsap.set(children, {
            opacity: 0,
            y: 50,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top 80%', // trigger when top of element hits 80% down viewport
                toggleActions: 'play none none reverse',
            },
        });

        tl.to(children, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: staggerDelay,
        });

        return () => {
            tl.kill();
        };
    }, [shouldReduceMotion, staggerDelay]);

    return ref;
};
