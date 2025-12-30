'use client'

import { Button } from '@/components/button'
import { motion } from 'motion/react'
import Image from 'next/image'

export function CTASection() {
    return (
        <section className="w-full px-4 py-20 bg-background">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#f7f7f7] bg-opacity-50 p-8 md:p-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[13px] font-medium text-zinc-600 shadow-sm self-start">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            Get in Touch
                        </div>

                        <h2 className="text-5xl font-medium tracking-tight text-zinc-900 md:text-6xl">
                            Let's Work{' '}
                            <span className="text-zinc-400">Together</span>
                        </h2>

                        <div className="flex flex-col divide-y divide-zinc-200">
                            {[
                                'Full Stack Development',
                                'BlockChain Engineering',
                                'System Design & Architecture',
                            ].map((service) => (
                                <div
                                    key={service}
                                    className="py-4 text-xl font-medium text-zinc-500"
                                >
                                    {service}
                                </div>
                            ))}
                        </div>

                        <Button
                            variant="primary"
                            animation="translate"
                            className="w-fit"
                        >
                            Get in Touch
                        </Button>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="relative aspect-video overflow-hidden rounded-3xl bg-white p-4 shadow-xl"
                    >
                        <div className="relative h-full w-full overflow-hidden rounded-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                                alt="Coding setup"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
