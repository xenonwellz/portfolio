'use client'

import { Button } from '@/components/button'
import { Badge } from '@/components/badge'
import { motion } from 'motion/react'

export function CTASection() {
    return (
        <section className="w-full z-10 relative">
            <div className="overflow-hidden rounded-[48px] border-t border-x p-10 bg-background-secondary">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center max-w-6xl px-6 mx-auto">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <Badge dot className="self-start">
                                Get in Touch
                            </Badge>

                            <h2 className="text-[52px] tracking-tight text-zinc-900 font-satoshi leading-12">
                                Let's Work{' '}
                                <span className="text-black/60">Together</span>
                            </h2>
                        </div>

                        <div className="flex flex-col">
                            {[
                                'Full Stack Development',
                                'BlockChain Engineering',
                                'System Design & Architecture',
                            ].map((service) => (
                                <div
                                    key={service}
                                    className="py-4 last:pb-0 text-xl border-t-2 border-black/10 font-semibold text-black/60"
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
                            Get In Touch
                        </Button>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="relative aspect-video overflow-hidden rounded-3xl bg-white p-5 shadow-xl"
                    >
                        <div className="relative h-full w-full overflow-hidden rounded-sm">
                            <img
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                                alt="Coding setup"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
