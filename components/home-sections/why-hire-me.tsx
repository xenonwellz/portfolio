'use client'
import React from 'react'

import { Badge } from '@/components/badge'
import { AnimatedText } from '@/components/animated-text'
import { CheckIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { FEATURES } from '@/lib/data'

export function WhyHireMeSection() {
    return (
        <section className="w-full section-padding rounded-t-[48px] border-t border-x bg-background-secondary py-20 lg:pt-32 pb-24">
            <div>
                <div className="flex flex-col gap-10 md:gap-3">
                    <div className="flex flex-col gap-10 lg:sticky lg:top-[122px] text-center">
                        <div className="flex flex-col gap-6 items-center">
                            <Badge dot>Why choose me</Badge>

                            <h2 className="section-header-text text-black">
                                <AnimatedText text="Why You Should" />{' '}
                                <span className="text-black/60">
                                    <AnimatedText text="Hire Me" delay={0.5} />
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 relative z-2 bg-background-secondary">
                        <div className="grid grid-cols-1 gap-6">
                            {/* Rendering in pairs to match the image structure but keeping it simple for the layout flow */}
                            {[0, 2].map((startIndex) => (
                                <motion.div
                                    key={startIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.2 + startIndex * 0.1,
                                        duration: 0.8,
                                        ease: [0.215, 0.61, 0.355, 1],
                                    }}
                                    className="bg-card rounded-2xl p-10"
                                    style={{
                                        boxShadow:
                                            'rgba(92, 92, 92, 0.08) 0px 2px 0px 0px inset',
                                    }}
                                >
                                    <div className="flex gap-12.5 flex-col md:flex-row">
                                        {/* First card in pairish layout */}
                                        {FEATURES.slice(
                                            startIndex,
                                            startIndex + 2,
                                        ).map((feature, i) => (
                                            <React.Fragment key={i}>
                                                <div
                                                    className={cn(
                                                        'flex flex-1 flex-col gap-7.5 relative',
                                                    )}
                                                >
                                                    <div className="bg-success rounded-full p-2 w-fit">
                                                        <CheckIcon
                                                            size={14}
                                                            className="text-white"
                                                            weight="bold"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="text-2xl leading-9 font-bold tracking-tight text-black">
                                                            {feature.title}
                                                        </h3>
                                                        <p className="text-[15px] leading-relaxed text-black/60 font-medium">
                                                            {
                                                                feature.description
                                                            }
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="bg-black/10 pointer-events-none h-px lg:h-auto lg:w-px last:hidden" />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
