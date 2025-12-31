'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import {
    XLogoIcon,
    LinkedinLogoIcon,
    GithubLogoIcon,
} from '@phosphor-icons/react'
import Link from 'next/link'

export function MainFooter() {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end'],
    })

    const y = useTransform(scrollYProgress, [0, 1], [-150, 0])

    return (
        <motion.footer
            ref={containerRef}
            style={{ y }}
            className="w-full section-padding border-x bg-background-tertiary py-25"
        >
            <div>
                <div className="flex flex-col gap-15">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold tracking-tight text-black">
                            OBED
                        </h3>
                        <div className="flex gap-4">
                            {[
                                { Icon: XLogoIcon, href: '#' },
                                { Icon: LinkedinLogoIcon, href: '#' },
                                { Icon: GithubLogoIcon, href: '#' },
                            ].map(({ Icon, href }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background"
                                >
                                    <Icon size={24} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-8 font-medium h-8 items-center text-black/60">
                        <Link
                            href="#"
                            className="transition-colors duration-500 hover:text-black"
                        >
                            Skills
                        </Link>
                        <Link
                            href="#"
                            className="transition-colors duration-500 hover:text-black"
                        >
                            My Work
                        </Link>
                        <Link
                            href="#"
                            className="transition-colors duration-500 hover:text-black"
                        >
                            About
                        </Link>
                    </div>

                    <div className="flex font-medium h-8 items-center text-black/60">
                        © 2025 Obed
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}
