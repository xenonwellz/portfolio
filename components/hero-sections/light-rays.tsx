'use client'

import React from 'react'
import { motion } from 'framer-motion'

// User provided CSS properties for Rays
// const RAY_ROTATIONS = [-18, -5, -11, 25, 0] 
const RAY_ROTATIONS = [6, 18, -3, -24, -12, -18, -5, -11, 25, 0]

// Individual Ray Components with optional animation
function Ray({
    rotation,
    animate = false,
}: {
    rotation: number
    animate?: boolean
}) {
    return (
        <motion.div
            className="absolute border border-blue-500/30"
            style={{
                width: '14px',
                height: '1876px',
                display: 'block',
                background:
                    'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.6) 0%, rgba(171, 171, 171, 0) 100%)',
                overflow: 'hidden',
                zIndex: 1,
                transformOrigin: '100% 0%',
                position: 'absolute',
                borderRadius: '0px',
                left: '50%',
                top: '0%',
            }}
            initial={{ rotate: rotation, scale: 1, opacity: 1 }}
            animate={
                animate
                    ? {
                          scale: [1, 0.65, 1],
                          opacity: [1, 0.5, 1],
                      }
                    : {}
            }
            transition={
                animate
                    ? {
                          duration: 5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                      }
                    : {}
            }
        />
    )
}

// Light Source Component
function LightSource({
    width,
    height,
    opacity,
}: {
    width: number
    height: number
    opacity: number
}) {
    return (
        <div
            className="absolute"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                display: 'block',
                background:
                    'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.6) 0%, rgba(171, 171, 171, 0) 100%)',
                overflow: 'hidden',
                opacity: opacity,
                zIndex: 1,
                transformOrigin: '100% 0%',
                position: 'absolute',
                borderRadius: '0px',
                left: '50%',
                top: '0%',
                transform: 'translateX(-50%)',
            }}
        />
    )
}

export function LightRays() {
    return (
        <motion.div
            className="absolute"
            style={{
                width: '1784px',
                height: '1823px',
                filter: 'blur(16px)',
                maskImage:
                    'radial-gradient(50% 109% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0.96427) 0%, rgba(0, 0, 0, 0) 80.68468468468468%)',
                WebkitMaskComposite: 'source-over',
                maskComposite: 'add',
                zIndex: 3,
                position: 'absolute',
                borderRadius: '0px',
                pointerEvents: 'none',
                // Center in experiment page for alignment
                left: '50%',
                top: '50%',
            }}
            initial={{ x: '-70%', y: '-60%', rotate: -58, opacity: 0.55 }}
            animate={{
                rotate: [-58, -43, -58],
                opacity: [0.55, 1, 0.55],
            }}
            transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            {/* Source 1 */}
            <LightSource width={778} height={639} opacity={0.13} />

            {/* Source 2 */}
            <LightSource width={865} height={929} opacity={0.13} />

            {/* Source 3 */}
            <LightSource width={1198} height={2221} opacity={0.13} />

            {/* Rays */}
            {RAY_ROTATIONS.map((rotation, i) => (
                <Ray
                    key={`ray-${i}`}
                    rotation={rotation}
                    animate={[-18, -5, -11, 25, 0].includes(rotation)}
                />
            ))}
        </motion.div>
    )
}
