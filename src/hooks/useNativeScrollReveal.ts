import { useEffect, useRef } from 'react';

/**
 * Custom hook to trigger an animation class when elements scroll into the viewport.
 * Does not use GSAP or Framer Motion, only native Intersection Observer.
 */
export const useNativeScrollReveal = (options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: stop observing once it's visible if we only want it to happen once
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        const elements = containerRef.current?.querySelectorAll('.reveal-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => {
            elements?.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, [options]);

    return containerRef;
};
