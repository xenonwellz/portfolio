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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-2 bg-background-secondary rounded-lg border border-black/5 gap-3 sm:gap-4 transition-all hover:bg-black/2">
            <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-3 sm:w-48 shrink-0">
                    <div className="size-10 rounded-md shrink-0 bg-black/10 flex items-center justify-center overflow-hidden border border-black/5">
                        <img
                            src={logo}
                            alt={company}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="font-bold sm:font-medium text-black/80 sm:text-black/60 leading-tight tracking-tight">
                        {company}
                    </div>
                </div>
                {/* Desktop Role */}
                <div className="hidden sm:flex flex-col">
                    <span className="text-black/60 font-medium tracking-tight mt-0.5">
                        {role}
                    </span>
                </div>
            </div>

            {/* Mobile Role and Duration */}
            <div className="flex sm:hidden items-center justify-between w-full pl-13">
                <span className="text-black/60 text-sm font-medium tracking-tight">
                    {role}
                </span>
                <span className="text-black/40 text-xs font-medium tracking-tight">
                    {duration}
                </span>
            </div>

            {/* Desktop Duration */}
            <div className="hidden sm:block font-medium text-black/60 transition-colors tracking-tight whitespace-nowrap">
                {duration}
            </div>
        </div>
    )
}
