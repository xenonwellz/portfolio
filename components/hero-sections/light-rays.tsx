'use client'

import React from 'react'
import { motion } from 'motion/react'

const RAYS = [
    { rotate: 0, scale: 0.7, opacity: 0.4, delay: 0 },
    { rotate: 25, scale: 0.86, opacity: 0.9, delay: 0.2 },
    { rotate: 11, scale: 0.83, opacity: 0.8, delay: 0.4 },
    { rotate: -12, scale: 1, opacity: 0.6, delay: 0.6 },
    { rotate: -24, scale: 1, opacity: 0.5, delay: 0.8 },
    { rotate: -18, scale: 0.76, opacity: 0.7, delay: 1.0 },
    { rotate: -5, scale: 0.86, opacity: 0.85, delay: 1.2 },
    { rotate: -3, scale: 1, opacity: 0.5, delay: 1.4 },
    { rotate: 18, scale: 1, opacity: 0.65, delay: 1.6 },
    { rotate: 6, scale: 1, opacity: 0.7, delay: 1.8 },
]

export function LightRays() {
    return (
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-55">
            <div 
                className="absolute -top-[20%] -right-[10%] w-[150%] h-[150%] origin-top-right rotate-[-55.8deg]"
            >
                {RAYS.map((ray, i) => (
                    <motion.div
                        key={i}
                        initial={{ scaleY: 0, opacity: 0, rotate: ray.rotate }}
                        animate={{ 
                            scaleY: [ray.scale * 0.8, ray.scale, ray.scale * 0.8],
                            opacity: [ray.opacity * 0.7, ray.opacity, ray.opacity * 0.7],
                            rotate: [ray.rotate - 1, ray.rotate + 1, ray.rotate - 1]
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: ray.delay
                        }}
                        style={{ transformOrigin: '100% 0%' }}
                        className="absolute right-0 top-0 w-[300px] h-screen bg-linear-to-b from-blue-500/10 via-blue-500/5 to-transparent blur-3xl"
                    />
                ))}
            </div>
        </div>
    )
}
