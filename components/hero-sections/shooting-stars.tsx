'use client'

import React from 'react'
import { motion } from 'motion/react'

// Fixed shimmer positions matching Framer design
// Animation goes diagonally from left to bottom-right at 22.6 degrees
const SHIMMERS = [
    { id: 1, top: '53%', left: -120, delay: 0 },
    { id: 2, top: -40, left: -90, delay: 2.5 },
    { id: 3, top: 83, left: -100, delay: 5 },
    { id: 4, top: 10, left: -120, delay: 7.5 },
    { id: 5, top: 20, left: -111, delay: 10 },
]

function Shimmer({
    top,
    left,
    delay,
}: {
    top: number | string
    left: number
    delay: number
}) {
    // For 22.6 degree angle: y movement = x movement * tan(22.6°) ≈ 0.416
    const xDistance = 1400
    const yDistance = xDistance * Math.tan((22.6 * Math.PI) / 180) // ~583px

    return (
        <motion.div
            className="absolute w-[100px] h-px"
            style={{
                top: typeof top === 'string' ? top : `${top}px`,
                left: `${left}px`,
                transform: 'rotate(22.6deg)',
                transformOrigin: 'left center',
            }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
                x: [0, xDistance],
                y: [0, yDistance],
                opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
                duration: 2.5,
                delay: delay,
                repeat: Infinity,
                repeatDelay: 10,
                ease: 'linear',
            }}
        >
            {/* The shimmer line with gradient - white/light for subtle effect */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    background:
                        'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.3) 100%)',
                }}
            />
            {/* The bright dot at the end */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-[2px] rounded-full"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    boxShadow:
                        '0 0 4px 1px rgba(255, 255, 255, 0.4), 0 0 8px 2px rgba(255, 255, 255, 0.2)',
                }}
            />
        </motion.div>
    )
}

export function ShootingStars() {
    return (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[488px] overflow-hidden pointer-events-none">
            {SHIMMERS.map((shimmer) => (
                <Shimmer
                    key={shimmer.id}
                    top={shimmer.top}
                    left={shimmer.left}
                    delay={shimmer.delay}
                />
            ))}
        </div>
    )
}
