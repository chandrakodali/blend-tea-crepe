import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface KineticHeadingProps {
    text: string;
    className?: string;
    Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    animateBy?: 'word' | 'letter';
    delay?: number;
    triggerOnLoad?: boolean;
}

const KineticHeading: React.FC<KineticHeadingProps> = ({
    text,
    className = '',
    Tag = 'h2',
    animateBy = 'word',
    delay = 0,
    triggerOnLoad = false,
}) => {
    const containerRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    // Split text into an array of strings based on animation type
    const elements = animateBy === 'word' ? text.split(/(\s+)/) : text.split('');

    useEffect(() => {
        if (!containerRef.current || shouldReduceMotion) return;

        // The animated elements inside the container
        const targets = containerRef.current.querySelectorAll('.kinetic-el');

        // Initial state
        gsap.set(targets, {
            opacity: 0,
            y: 20,
        });

        const animationConfig = {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: animateBy === 'letter' ? 0.03 : 0.08,
            ease: 'back.out(1.7)',
            delay: delay,
        };

        let animation: gsap.core.Tween;

        if (triggerOnLoad) {
            animation = gsap.to(targets, animationConfig);
        } else {
            animation = gsap.to(targets, {
                ...animationConfig,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                },
            });
        }

        return () => {
            if (animation.scrollTrigger) {
                animation.scrollTrigger.kill();
            }
            animation.kill();
        };
    }, [shouldReduceMotion, animateBy, delay, triggerOnLoad]);

    if (shouldReduceMotion) {
        return <Tag className={className}>{text}</Tag>;
    }

    return (
        <Tag ref={containerRef as any} className={className} style={{ display: 'inline-block' }}>
            {elements.map((el, index) => {
                // If it's just a space (when splitting by words), preserve it but don't animate it
                if (animateBy === 'word' && el.trim() === '') {
                    return <span key={index}>{el}</span>;
                }

                // Wrap each word/letter in a span containing a span. The outer span hides overflow if we wanted a mask effect. 
                // We just need a class to target.
                return (
                    <span
                        key={index}
                        className="kinetic-el"
                        style={{ display: 'inline-block', whiteSpace: 'pre' }}
                    >
                        {el}
                    </span>
                );
            })}
        </Tag>
    );
};

export default KineticHeading;
