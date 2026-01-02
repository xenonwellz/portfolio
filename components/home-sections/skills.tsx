'use client'

import React from 'react'
import { Badge } from '@/components/badge'
import { AnimatedText } from '@/components/animated-text'
import { DatabaseIcon, CodeIcon } from '@phosphor-icons/react'
import {
    motion,
    useMotionValue,
    useTransform,
    useAnimationFrame,
} from 'motion/react'
import { cn } from '@/lib/utils'
import { CORE_SKILLS, INFRA_SKILLS } from '@/lib/data'

export function SkillsSection() {
    return (
        <section
            id="skills"
            className="w-full section-padding py-20 lg:py-32 bg-background rounded-t-[48px] border-t border-x"
        >
            <div className="flex flex-col gap-12">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-6">
                    <Badge dot>Skills</Badge>
                    <h2 className="section-header-text text-black">
                        <AnimatedText text="Skills &" />{' '}
                        <span className="text-black/60">
                            <AnimatedText text="Tech Stack" delay={0.2} />
                        </span>
                    </h2>
                </div>

                {/* Content Cards */}
                <div className="flex flex-col sm:flex-row gap-8 lg:gap-10">
                    {/* Core Skills Container */}
                    <div className="bg-white rounded-xl border border-black/5 card-shadow overflow-hidden flex flex-col flex-1">
                        <div className="flex flex-col gap-6 px-7 pt-7">
                            <div className="flex flex-col gap-4">
                                <div className="text-badge-dot">
                                    <CodeIcon size={30} weight="duotone" />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-black">
                                    Core Languages & Frameworks
                                </h3>
                            </div>
                            <div className="h-px w-full bg-black/5" />
                        </div>

                        <div className="flex flex-col gap-4 py-6">
                            <Marquee skills={CORE_SKILLS} direction="left" />
                            <Marquee skills={CORE_SKILLS} direction="right" />
                        </div>
                    </div>

                    {/* Infra Skills Container */}
                    <div className="bg-white rounded-xl border border-black/5 card-shadow overflow-hidden flex flex-col flex-1">
                        <div className="flex flex-col gap-6 px-7 pt-7">
                            <div className="flex flex-col gap-4">
                                <div className="text-badge-dot">
                                    <DatabaseIcon size={30} weight="duotone" />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-black">
                                    Databases & Infrastructure
                                </h3>
                            </div>
                            <div className="h-px w-full bg-black/5" />
                        </div>

                        <div className="flex flex-col gap-4 py-6">
                            <Marquee skills={INFRA_SKILLS} direction="left" />
                            <Marquee skills={INFRA_SKILLS} direction="right" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Marquee = ({
    skills,
    direction = 'left',
}: {
    skills: typeof CORE_SKILLS
    direction?: 'left' | 'right'
}) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const x = useMotionValue(0)
    const xPercentage = useTransform(x, (v: number) => `${v}%`)
    const duplicatedSkills = [...skills, ...skills, ...skills, ...skills]

    useAnimationFrame((_, delta) => {
        const speed = isHovered ? 0.0005 : 0.0015
        const moveBy = delta * speed

        let currentX = x.get()
        if (direction === 'left') {
            currentX -= moveBy
            if (currentX <= -50) currentX += 50
        } else {
            currentX += moveBy
            if (currentX >= 0) currentX -= 50
        }
        x.set(currentX)
    })

    return (
        <div
            className="group relative w-full overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Fades */}
            <div className="absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent pointer-events-none" />

            <motion.div
                className="flex w-fit gap-4 py-2"
                style={{ x: xPercentage }}
            >
                {duplicatedSkills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex shrink-0 items-center gap-3 rounded-full border bg-background px-6 py-3"
                    >
                        <skill.icon
                            size={20}
                            weight="duotone"
                            className="text-badge-dot"
                        />
                        <span className="text-[15px] font-semibold text-black/80">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
