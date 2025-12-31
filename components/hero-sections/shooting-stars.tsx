'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface Star {
    id: number
    x: number
    y: number
    scale: number
    opacity: number
    duration: number
    delay: number
}

export function ShootingStars() {
    const [stars, setStars] = useState<Star[]>([])

    useEffect(() => {
        const interval = setInterval(() => {
            const newStar: Star = {
                id: Date.now(),
                x: Math.random() * 100, // percentage
                y: Math.random() * 50, // percentage (top half)
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
                duration: Math.random() * 2 + 1,
                delay: Math.random() * 5,
            }
            setStars((prev) => [...prev.slice(-10), newStar])
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <AnimatePresence>
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        initial={{ 
                            left: `${star.x}%`, 
                            top: `${star.y}%`, 
                            opacity: 0, 
                            scale: 0,
                        }}
                        animate={{ 
                            x: [0, 400], 
                            y: [0, 166], 
                            opacity: [0, 1, star.opacity, 0],
                            scale: [0, star.scale, star.scale, 0],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                            duration: star.duration, 
                            ease: "linear",
                            delay: star.delay
                        }}
                        className="absolute w-32 h-px rotate-[22.5deg]"
                    >
                        <div 
                            className="w-full h-full rounded-full bg-linear-to-r from-transparent via-blue-400/50 to-blue-400/10"
                            style={{
                                boxShadow: '0 0 10px 2px rgba(96, 165, 250, 0.2)'
                            }}
                        >
                            <div className="absolute top-1/2 -translate-y-1/2 right-0 size-1 rounded-full bg-blue-300 shadow-[0_0_15px_3px_rgba(96,165,250,0.6)]" />
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}
