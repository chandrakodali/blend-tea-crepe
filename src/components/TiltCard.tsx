import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || shouldReduceMotion) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        if (shouldReduceMotion) return;
        x.set(0);
        y.set(0);
    };

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: 'preserve-3d',
            }}
            className={className}
        >
            <div style={{ transform: 'translateZ(30px)', width: '100%', height: '100%' }}>
                {children}
            </div>
        </motion.div>
    );
};

export default TiltCard;
