'use client'

import React from 'react'
import { Badge } from '@/components/badge'
import { AnimatedText } from '@/components/animated-text'
import { Button } from '@/components/button'
import { LinkSimpleIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const PROJECTS = [
    {
        id: 'agroease',
        title: 'Agroease',
        image: '/images/projects/agroease.avif',
        link: 'https://agroease.trade',
        hasButton: true,
        side: 'left' as const,
    },
    {
        id: 'smc-dao',
        title: 'SMC DAO',
        image: '/images/projects/smc-dao.avif',
        link: 'https://smcdao.org',
        hasButton: true,
        side: 'right' as const,
    },
    {
        id: 'peniwallet',
        title: 'Peniwallet',
        image: '/images/projects/peniwallet.avif',
        link: 'https://peniwallet.com',
        hasButton: true,
        side: 'left' as const,
    },
    {
        id: 'xcel-radiology',
        title: 'Xcel Radiology',
        image: '/images/projects/xcelrad.avif',
        link: 'https://xcelradiology.com',
        hasButton: true,
        side: 'right' as const,
    },
    {
        id: 'mmia',
        title: 'MMIA staff access control system',
        image: '/images/projects/faan.avif',
        side: 'left' as const,
    },
    {
        id: 'flyte',
        title: 'Flyte Technologies',
        image: '/images/projects/misas.avif',
        side: 'right' as const,
    },
]

export function WorkSection() {
    return (
        <section className="w-full section-padding py-20 lg:py-32 bg-background rounded-t-[48px] border-t border-x">
            <div className="flex flex-col gap-12">
                {/* Header */}
                <div className="flex flex-col gap-8">
                    <div>
                        <Badge dot>Recent Projects</Badge>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="flex flex-col gap-6">
                            <h2 className="section-header-text text-black">
                                <AnimatedText text="Some of my" />{' '}
                                <span className="text-black/60">
                                    <AnimatedText text="work" delay={0.2} />
                                </span>
                            </h2>
                        </div>
                        <div>
                            <Button
                                variant="primary"
                                animation="translate"
                                href="#contact"
                            >
                                Get in touch
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Column 1: Left positioned cards */}
                    <div className="flex flex-col gap-6">
                        {PROJECTS.filter((p) => p.side === 'left').map(
                            (project) => (
                                <WorkCard key={project.id} project={project} />
                            ),
                        )}
                    </div>

                    {/* Column 2: Right positioned cards */}
                    <div className="flex flex-col gap-6">
                        {PROJECTS.filter((p) => p.side === 'right').map(
                            (project) => (
                                <WorkCard key={project.id} project={project} />
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

function WorkCard({ project }: { project: (typeof PROJECTS)[0] }) {
    const isLeft = project.side === 'left'

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            transition={{
                duration: 1,
                ease: [0.215, 0.61, 0.355, 1],
                // On small screens, we might want a different animation, but x offset is fine as long as we don't overflow
            }}
            className="bg-card rounded-3xl p-4 border border-black/5 group flex flex-col gap-4 card-shadow"
        >
            <div className="relative rounded-lg overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex items-center justify-between gap-4 h-12">
                <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-black leading-tight">
                    {project.title}
                </h3>

                {project.hasButton && (
                    <Button
                        variant="primary"
                        animation="text"
                        href={project.link}
                        className="gap-2 flex py-2.5 px-6"
                    >
                        <span className="flex items-center gap-2">
                            <LinkSimpleIcon size={16} weight="bold" />
                            View Live
                        </span>
                    </Button>
                )}
            </div>
        </motion.div>
    )
}
