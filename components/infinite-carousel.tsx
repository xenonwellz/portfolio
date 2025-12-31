'use client'

import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'

interface InfiniteCarouselProps {
    images: string[]
    velocity?: number
}

export function InfiniteCarousel({
    images,
    velocity = 20,
}: InfiniteCarouselProps) {
    // Duplicate images to create a seamless loop
    const doubledImages = [...images, ...images]

    return (
        <div className="relative w-full overflow-hidden group py-2">
            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-8 lg:w-12 bg-linear-to-r from-[#fafafa] via-[#fafafa]/60 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 lg:w-12 bg-linear-to-l from-[#fafafa] via-[#fafafa]/60 to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-4 lg:gap-6 w-fit"
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    duration: velocity,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                {doubledImages.map((src, index) => (
                    <div
                        key={index}
                        className="relative h-44 lg:h-52 w-64 lg:w-72 shrink-0 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-black/3"
                    >
                        <Image
                            src={src}
                            alt={`Carousel image ${index}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
