'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { EnvelopeSimpleIcon } from '@phosphor-icons/react'
import { NAV_LINKS } from '@/lib/data'
import { Button } from './button'
import { cn } from '@/lib/utils'

interface NavbarProps {
    leftElement?: React.ReactNode
    links?: typeof NAV_LINKS
}

export function Navbar({ leftElement, links = NAV_LINKS }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        const handleSectionChange = (e: any) => {
            setActiveSection(e.detail)
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('sectionChange', handleSectionChange)

        // Set initial active section from hash
        if (window.location.hash) {
            setActiveSection(window.location.hash.slice(1))
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('sectionChange', handleSectionChange)
        }
    }, [])

    const defaultLeftElement = (
        <Link
            href="/"
            onClick={() => setActiveSection('hero')}
            className="text-xl font-bold tracking-tight text-black uppercase shrink-0"
        >
            Obed
        </Link>
    )

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)]">
            <motion.div
                layout
                className={cn(
                    'relative w-full rounded-[32px] max-section-width py-3 xl:py-1.5 items-center flex border border-black/5 bg-[rgba(255,255,255,0.7)] backdrop-blur-md transition-shadow duration-300',
                    scrolled
                        ? 'shadow-lg'
                        : 'shadow-[0_8px_32px_rgba(0,0,0,0.05)]',
                )}
                transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                }}
            >
                <div className="w-full">
                    <div className="flex items-center justify-between px-6 xl:pr-1.5">
                        {leftElement || defaultLeftElement}

                        {/* Desktop Menu */}
                        <div className="hidden xl:flex items-center gap-8">
                            <div className="flex items-center gap-8 mr-4">
                                {links.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={
                                            link.href.startsWith('#')
                                                ? `/${link.href}`
                                                : link.href
                                        }
                                        className={cn(
                                            'text-[15px] font-medium transition-colors',
                                            activeSection === link.href.slice(1)
                                                ? 'text-black'
                                                : 'text-black/60 hover:text-black',
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <Button
                                variant="tertiary"
                                className="px-6 py-2"
                                animation="translate-small"
                                href="/#contact"
                            >
                                <span className="flex items-center gap-2">
                                    <EnvelopeSimpleIcon
                                        size={20}
                                        weight="bold"
                                    />
                                    Get In Touch
                                </span>
                            </Button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex xl:hidden h-10 w-10 items-center justify-center rounded-lg transition-colors overflow-hidden group"
                            aria-label="Toggle Menu"
                        >
                            <div className="relative flex flex-col items-end gap-1.5 w-6 h-6 justify-center">
                                <motion.span
                                    animate={
                                        isOpen
                                            ? { rotate: 45, y: 4.5 }
                                            : { rotate: 0, y: 0 }
                                    }
                                    transition={{
                                        type: 'spring',
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                    className="h-0.5 w-full rounded-full bg-black origin-center"
                                />
                                <motion.span
                                    animate={
                                        isOpen
                                            ? {
                                                  rotate: -45,
                                                  y: -4.5,
                                                  width: '100%',
                                              }
                                            : { rotate: 0, y: 0, width: '50%' }
                                    }
                                    transition={{
                                        type: 'spring',
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                    className="h-0.5 rounded-full bg-black origin-center self-end"
                                />
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="overflow-hidden xl:hidden"
                            >
                                <div className="px-8 pb-10 flex flex-col gap-10">
                                    <div className="flex flex-col gap-10 pt-10">
                                        {links.map((link, idx) => (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: idx * 0.05 + 0.1,
                                                    duration: 0.4,
                                                    ease: 'easeOut',
                                                }}
                                            >
                                                <Link
                                                    href={
                                                        link.href.startsWith(
                                                            '#',
                                                        )
                                                            ? `/${link.href}`
                                                            : link.href
                                                    }
                                                    onClick={() =>
                                                        setIsOpen(false)
                                                    }
                                                    className="text-black/60 font-medium hover:text-black transition-colors"
                                                >
                                                    {link.name}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.3,
                                            duration: 0.4,
                                        }}
                                    >
                                        <Button
                                            variant="tertiary"
                                            className="px-6"
                                            animation="translate-small"
                                            href="/#contact"
                                        >
                                            <span className="flex items-center gap-2">
                                                <EnvelopeSimpleIcon
                                                    size={20}
                                                    weight="bold"
                                                />
                                                Get In Touch
                                            </span>
                                        </Button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </nav>
    )
}
