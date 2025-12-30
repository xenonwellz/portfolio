'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { X, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end'],
    })

    // Map scroll progress to y offset: starts at -150, ends at 0
    const y = useTransform(scrollYProgress, [0, 1], [-150, 0])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])

    return (
        <motion.footer
            ref={containerRef}
            style={{ y, opacity }}
            className="w-full bg-white px-8 py-20"
        >
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-12">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                            OBED
                        </h3>
                        <div className="flex gap-4">
                            {[
                                { Icon: X, href: '#' },
                                { Icon: Linkedin, href: '#' },
                                { Icon: Github, href: '#' },
                            ].map(({ Icon, href }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-black"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-8 text-sm font-medium text-zinc-500">
                        <Link
                            href="#"
                            className="transition-colors hover:text-black"
                        >
                            Skills
                        </Link>
                        <Link
                            href="#"
                            className="transition-colors hover:text-black"
                        >
                            My Work
                        </Link>
                        <Link
                            href="#"
                            className="transition-colors hover:text-black"
                        >
                            About
                        </Link>
                    </div>

                    <div className="text-[13px] text-zinc-400">© 2025 Obed</div>
                </div>
            </div>
        </motion.footer>
    )
}
