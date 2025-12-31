'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
    ArrowLeftIcon,
    ArrowUpRightIcon,
    EnvelopeSimpleIcon,
} from '@phosphor-icons/react'
import { PROJECTS, NAV_LINKS } from '@/lib/data'
import { Button } from '@/components/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function ProjectPage() {
    const params = useParams()
    const router = useRouter()
    const id = params?.id as string
    const project = PROJECTS.find((p) => p.id === id)

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6">
                <h1 className="text-4xl font-bold">Project not found</h1>
                <Button variant="primary" animation="translate" href="/">
                    Back to home
                </Button>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-background">
            {/* Project Navbar */}
            <Navbar
                leftElement={
                    <Link
                        href="/"
                        className="flex items-center gap-3 pl-1 pr-6 -m-4 rounded-full hover:bg-black/5 transition-colors group shrink-0"
                    >
                        <div className="size-10 rounded-full bg-white border border-black/5 flex items-center justify-center shadow-sm group-hover:bg-black group-hover:text-white transition-colors">
                            <ArrowLeftIcon size={18} weight="bold" />
                        </div>
                        <span className="text-[15px] font-bold tracking-tight text-black flex items-center h-full pt-0.5">
                            Back to home
                        </span>
                    </Link>
                }
            />

            <div className="max-w-3xl mx-auto px-5 pt-32 pb-20 flex flex-col gap-12">
                {/* Header Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card rounded-[38px] p-3 border border-black/5 flex flex-col gap-3"
                    style={{
                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 20px 0px',
                    }}
                >
                    <div className="flex items-center justify-between bg-black/5 pl-6 pr-2 py-2 border rounded-full">
                        <h1 className="text-2xl font-bold tracking-tight text-black leading-none">
                            {project.title}
                        </h1>
                        <Button className="py-2.5" href={project.link || '#'}>
                            <span className="flex items-center gap-2">
                                <ArrowUpRightIcon size={18} weight="bold" />
                                View Project
                            </span>
                        </Button>
                    </div>

                    <div className="bg-background-secondary rounded-3xl p-4 border border-black/5">
                        <p className="text-lg text-black/70 font-medium leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div className="relative aspect-video w-full rounded-4xl overflow-hidden border border-black/5">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Problem, Goal, Result Grid */}
                <div className="flex flex-col gap-8">
                    {/* The Problem */}
                    <SectionCard
                        title="The Problem"
                        content={project.problem}
                    />

                    {/* The Goal */}
                    <SectionCard title="The Goal" content={project.goal} />

                    {/* The Result */}
                    <SectionCard title="The Result" content={project.result} />
                </div>
            </div>
            <Footer />
        </main>
    )
}

function SectionCard({ title, content }: { title: string; content?: string }) {
    if (!content) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 rounded-[32px] bg-card p-3"
            style={{
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 20px 0px',
            }}
        >
            <div className="flex items-center rounded-full">
                <h2 className="text-2xl font-bold text-black p-1">{title}</h2>
            </div>
            <div className="p-4 sm:p-6 border rounded-3xl  bg-black/3">
                <p className="text-lg font-medium leading-relaxed text-black/80">
                    {content}
                </p>
            </div>
        </motion.div>
    )
}
