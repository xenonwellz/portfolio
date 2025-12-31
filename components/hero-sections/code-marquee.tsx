'use client'

import React from 'react'
import {
    motion,
    useMotionValue,
    useTransform,
    useAnimationFrame,
} from 'framer-motion'
import Image from 'next/image'

const CODE_IMAGES = Array.from(
    { length: 10 },
    (_, i) => `/images/code/${i + 1}.png`,
)

export function CodeMarquee() {
    const x = useMotionValue(0)
    const xPercentage = useTransform(x, (v: number) => `${v}%`)

    // Triple the images to ensure seamless loop
    const duplicatedImages = [...CODE_IMAGES, ...CODE_IMAGES, ...CODE_IMAGES]

    useAnimationFrame((_, delta) => {
        const speed = 0.002 // Reduced speed
        const moveBy = delta * speed

        let currentX = x.get()
        currentX -= moveBy

        if (currentX <= -33.333) {
            currentX += 33.333
        }

        x.set(currentX)
    })

    return (
        <div className="relative w-full overflow-hidden py-8">
            <motion.div
                className="flex w-fit gap-10"
                style={{ x: xPercentage }}
            >
                {duplicatedImages.map((src, index) => (
                    <div
                        key={index}
                        className="relative shrink-0"
                        style={{ width: '70px', height: '70px' }}
                    >
                        <Image
                            src={src}
                            alt={`Code Icon ${index + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
