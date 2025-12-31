'use client'

import React from 'react'
import { motion } from 'motion/react'
import { ShootingStars } from '@/components/hero-sections/shooting-stars'
import { LightRays } from '@/components/hero-sections/light-rays'
import { CodeMarquee } from '@/components/hero-sections/code-marquee'
import { HERO_CONTENT } from '@/lib/data'
import { Button } from '@/components/button'
import { AnimatedText } from '@/components/animated-text'
import { Badge } from '../badge'
import Link from 'next/link'
import { CaretDownIcon } from '@phosphor-icons/react'

export function HeroSection() {
    return (
        <section
            id="hero"
            className="relative section-padding w-full flex items-center pt-[160px] pb-10 px-10 border-x overflow-hidden bg-background"
        >
            {/* Animated Backgrounds */}
            <div className="absolute inset-0 z-0">
                <LightRays />
                <ShootingStars />
                {/* Subtle gradient overlay to blend */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background pointer-events-none" />
            </div>

            <div className="relative z-10 w-full flex flex-col gap-8 md:gap-12">
                <div>
                    <Badge dot>Software Engineer</Badge>
                </div>
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.215, 0.61, 0.355, 1],
                        }}
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
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                            ease: [0.215, 0.61, 0.355, 1],
                        }}
                        className="text-lg md:text-xl text-black/60 font-medium max-w-xl leading-relaxed"
                    >
                        {HERO_CONTENT.description}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.6,
                        ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="flex flex-wrap gap-4"
                >
                    <Button
                        variant="primary"
                        animation="translate"
                        href="#work"
                    >
                        View Projects
                    </Button>
                    <Button
                        variant="secondary"
                        animation="translate-small"
                        href="#about"
                    >
                        More About Me
                    </Button>
                </motion.div>

                <div className="w-full">
                    <CodeMarquee />
                </div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <Link
                            href="#about"
                            className="flex flex-col items-center gap-2 group transition-opacity hover:opacity-100 opacity-60"
                        >
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <CaretDownIcon size={24} weight="bold" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
