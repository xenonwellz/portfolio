'use client'

import React from 'react'
import { motion } from 'motion/react'
import { ShootingStars } from '@/components/hero-sections/shooting-stars'
import { LightRays } from '@/components/hero-sections/light-rays'
import { HERO_CONTENT } from '@/lib/data'
import { Button } from '@/components/button'
import { AnimatedText } from '@/components/animated-text'

export function HeroSection() {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center section-padding border-x overflow-hidden bg-background">
            {/* Animated Backgrounds */}
            <div className="absolute inset-0 z-0">
                <LightRays />
                <ShootingStars />
                {/* Subtle gradient overlay to blend */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background pointer-events-none" />
            </div>

            <div className="relative z-10 w-full flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                    >
                        <span className="text-black/60 font-medium tracking-wider uppercase text-sm">
                            {HERO_CONTENT.subtitle}
                        </span>
                    </motion.div>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-[0.9]">
                        <AnimatedText text={HERO_CONTENT.title} />
                    </h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                        className="text-lg md:text-xl text-black/60 font-medium max-w-xl leading-relaxed"
                    >
                        {HERO_CONTENT.description}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                    className="flex flex-wrap gap-4"
                >
                    <Button variant="primary" animation="translate" href="#work">
                        View Projects
                    </Button>
                    <Button variant="secondary" animation="translate-small" href="#about">
                        More About Me
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
