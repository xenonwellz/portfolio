'use client'

import React from 'react'
import { Badge } from '@/components/badge'
import { AnimatedText } from '@/components/animated-text'
import { Button } from '@/components/button'
import { Browser, Cube, GitMerge, UsersFour } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { InfiniteCarousel } from '@/components/infinite-carousel'
import { cn } from '@/lib/utils'

const SERVICES = [
    {
        id: 'full-stack',
        title: 'Full-Stack Web Development',
        description:
            'I build scalable, user-friendly applications from frontend to backend.',
        icon: Browser,
        image: '/images/full-stack.png',
        className: 'md:col-span-1 md:row-span-2',
    },
    {
        id: 'blockchain',
        title: 'Blockchain Development',
        description:
            'Building secure and scalable decentralized applications and smart contracts.',
        icon: Cube,
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'system-architecture',
        title: 'System Architecture & Integration',
        description:
            'Crafting efficient architectures that connect services, APIs, and databases seamlessly.',
        icon: GitMerge,
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 'technical-leadership',
        title: 'Technical Leadership',
        description:
            'Guiding teams and projects with a balance of vision, execution, and mentorship.',
        icon: UsersFour,
        images: [
            '/images/leadership-1.png',
            '/images/leadership-2.png',
            '/images/leadership-3.png',
        ],
        className: 'md:col-span-1 md:row-span-2',
    },
]

export function ServicesSection() {
    return (
        <section className="w-full section-padding py-20 lg:py-32 bg-background rounded-t-[48px] border-t border-x">
            <div className="flex flex-col gap-12">
                {/* Header */}
                <div>
                    <Badge dot>10X Delivery</Badge>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                    <div className="flex flex-col gap-6">
                        <h2 className="section-header-text text-black">
                            <AnimatedText text="My" />{' '}
                            <span className="text-black/60">
                                <AnimatedText text="Services" delay={0.2} />
                            </span>
                        </h2>
                        <p className="text-lg text-black/60 font-medium leading-relaxed">
                            <AnimatedText
                                text="I help companies and individuals turn ideas into reliable, production-ready software."
                                delay={0.2}
                            />
                        </p>
                    </div>
                    <div>
                        <Button
                            variant="primary"
                            animation="translate"
                            href="#contact"
                        >
                            Get In Touch
                        </Button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Column 1: Full-Stack (Large) + System Architecture (Small) */}
                    <div className="flex flex-col gap-6">
                        <ServiceCard service={SERVICES[0]} side="left" />
                        <ServiceCard service={SERVICES[2]} side="left" />
                    </div>

                    {/* Column 2: Blockchain (Small) + Technical Leadership (Large) */}
                    <div className="flex flex-col gap-6">
                        <ServiceCard service={SERVICES[1]} side="right" />
                        <ServiceCard service={SERVICES[3]} side="right" />
                    </div>
                </div>
            </div>
        </section>
    )
}

function ServiceCard({
    service,
    side,
}: {
    service: (typeof SERVICES)[0]
    side: 'left' | 'right'
}) {
    const Icon = service.icon
    const isLeft = side === 'left'

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            className={cn(
                'bg-[#fafafa] rounded-3xl p-6 lg:p-8 flex flex-col gap-6 border border-black/5 ring-1 ring-black/2 card-shadow',
            )}
        >
            <div className="flex flex-col gap-6 h-full">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <Icon size={24} weight="bold" className="text-black" />
                        <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-black leading-tight">
                            {service.title}
                        </h3>
                    </div>
                    <p className="text-[15px] lg:text-base text-black/60 font-medium leading-relaxed max-w-md">
                        {service.description}
                    </p>
                </div>

                {service.image || service.images ? (
                    <div className="mt-auto pt-4 relative">
                        {service.image && (
                            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-black/5 ring-1 ring-black/5">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        {service.images && (
                            <div className="w-full">
                                <InfiniteCarousel images={service.images} />
                            </div>
                        )}
                    </div>
                ) : null}
            </div>
        </motion.div>
    )
}
