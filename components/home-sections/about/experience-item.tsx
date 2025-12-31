'use client'

import React from 'react'

interface ExperienceItemProps {
    company: string
    role: string
    duration: string
    logo: string
}

export function ExperienceItem({
    company,
    role,
    duration,
    logo,
}: ExperienceItemProps) {
    return (
        <div className="flex items-center justify-between p-2 bg-background-secondary rounded-lg border border-black/5 transition-all hover:bg-black/2">
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
