import { useEffect, useRef } from 'react';

// Static options object — avoids recreating on every render which
// would tear down and rebuild the IntersectionObserver each time
const DEFAULT_OPTIONS: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
};

/**
 * Custom hook to trigger an animation class when elements scroll into the viewport.
 * Does not use GSAP or Framer Motion, only native Intersection Observer.
 */
export const useNativeScrollReveal = (options: IntersectionObserverInit = DEFAULT_OPTIONS) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        const elements = containerRef.current?.querySelectorAll('.reveal-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, [options]);

    return containerRef;
};
