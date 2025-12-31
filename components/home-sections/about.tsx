'use client'

import React from 'react'
import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import {
    GithubLogo,
    XLogo,
    LinkedinLogo,
    EnvelopeIcon,
} from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const EXPERIENCES = [
    {
        company: 'Xenrad',
        role: 'Founder',
        duration: 'Present',
        logo: '/images/experience/xenrad.png',
    },
    {
        company: 'Agroease Limited',
        role: 'Deputy CTO',
        duration: '2024',
        logo: '/images/experience/agroease.png',
    },
    {
        company: 'Blockchain FUL',
        role: 'Blockchain Developer',
        duration: '2023',
        logo: '/images/experience/bful.png',
    },
    {
        company: 'Flyte Tech',
        role: 'Fullstack Engineer',
        duration: '2022',
        logo: '/images/experience/flyte.png',
    },
]

export function AboutSection() {
    return (
        <section className="w-full section-padding py-20 lg:py-24 bg-background border-x">
            <div className="flex flex-col items-center gap-16">
                {/* Section Header */}
                <div className="flex flex-col items-center gap-8 text-center">
                    <Badge
                        dot
                        className="bg-white border border-[#0000001a] py-1.5 px-4 shadow-none"
                    >
                        About Me
                    </Badge>
                    <h2 className="section-header-text tracking-tight text-black leading-relaxed">
                        <span>Your</span>{' '}
                        <span className="text-black/50">
                            Software Engineer
                        </span>
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-11 w-full items-start">
                    <ProfileCard />
                    <BioAndExperienceCard />
                </div>
            </div>
        </section>
    )
}

function ProfileCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1],
            }}
            className="lg:col-span-5 bg-card rounded-xl p-6 border border-black/5 profile-shadow flex flex-col gap-10 h-fit lg:sticky lg:top-32"
        >
            {/* Profile Image Container */}
            <div className="relative aspect-square w-full rounded overflow-hidden bg-gray-100 border border-black/5">
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/5 opacity-50" />
            </div>

            {/* Profile Info */}
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold tracking-tight text-black/80 leading-tight">
                        Hello I am{' '}
                        <span className="text-black/60 font-medium">
                            Obed Ovabor
                        </span>
                    </h3>
                    <p className="text-black/60 font-medium text-base">
                        Blockchain & Fullstack Developer
                    </p>
                </div>

                <SocialLinks />

                <div className="h-px w-full bg-[#0000000d]" />

                {/* Buttons */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                    <Button variant="primary" animation="text">
                        Download Resume
                    </Button>
                    <Button
                        variant="secondary"
                        animation="translate-small"
                    >
                        <span className="flex items-center gap-2">
                            <EnvelopeIcon
                                size={20}
                                weight="duotone"
                            />
                            Get in Touch
                        </span>
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}

function SocialLinks() {
    return (
        <div className="flex items-center gap-8">
            <SocialLink icon={GithubLogo} href="https://github.com" />
            <div className="w-px h-6 bg-black/10" />
            <SocialLink icon={XLogo} href="https://x.com" />
            <div className="w-px h-6 bg-black/10" />
            <SocialLink icon={LinkedinLogo} href="https://linkedin.com" />
        </div>
    )
}

function SocialLink({ icon: Icon, href }: { icon: any; href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-70 transition-opacity"
        >
            <Icon size={22} />
        </a>
    )
}

function BioAndExperienceCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.215, 0.61, 0.355, 1],
            }}
            className="lg:col-span-7 bg-card rounded-xl p-7.5 pb-13.5 border border-black/5 card-shadow flex flex-col gap-5"
        >
            {/* About Content */}
            <div className="flex flex-col gap-8 text-black/70 leading-relaxed tracking-tight font-medium font-plus-jakarta">
                <p>
                    “I believe a true software engineer should be
                    able to build anything, anywhere, across any
                    system. I don’t limit myself to labels like
                    frontend or backend — to me, they’re just
                    perspectives. What matters is how everything
                    connects and works together.”
                </p>
                <p>
                    I’ve built solutions across blockchain, web, and
                    enterprise systems using Rust, JavaScript,
                    TypeScript, Python, PHP, and Elixir. My guiding
                    principle is always to choose the right tool for
                    the task — delivering efficient, reliable, and
                    purposeful software.
                </p>
                <p className="hidden md:block">
                    Outside of code, I’m curious about how
                    technology transforms industries and I enjoy
                    mentoring younger developers stepping into
                    tech.”
                </p>
            </div>

            <div className="h-px w-full bg-[#0000000d]" />

            {/* Experience List */}
            <div className="flex flex-col gap-5">
                <h3 className="text-xl font-bold text-black">
                    Experience
                </h3>

                <div className="flex flex-col gap-4">
                    {EXPERIENCES.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

function ExperienceItem({ company, role, duration, logo }: { 
    company: string, 
    role: string, 
    duration: string, 
    logo: string 
}) {
    return (
        <div className="flex items-center justify-between p-2 bg-background-secondary rounded-lg border border-black/5">
            <div className="flex items-center gap-4">
                <div className="flex-row flex items-center gap-3 w-48 shrink-0">
                    <div className="size-10 rounded-md shrink-0 bg-black/10 flex items-center justify-center overflow-hidden border border-black/5">
                        <img
                            src={logo}
                            alt={company}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="font-medium text-black/60 leading-tight tracking-tight truncate">
                        {company}
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-black/60 font-medium tracking-tight mt-0.5">
                        {role}
                    </span>
                </div>
            </div>
            <div className="font-medium text-black/60 transition-colors tracking-tight whitespace-nowrap">
                {duration}
            </div>
        </div>
    )
}
