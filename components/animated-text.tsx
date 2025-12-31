'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
    text: string
    className?: string
    delay?: number
}

export function AnimatedText({
    text,
    className,
    delay = 0,
}: AnimatedTextProps) {
    const words = text.split(' ')

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.04 * i + delay,
            },
        }),
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                type: 'spring' as const,
                damping: 20,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: 'blur(8px)',
            transition: {
                type: 'spring' as const,
                damping: 20,
                stiffness: 100,
            },
        },
    }

    return (
        <motion.span
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn('', className)}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="inline-block"
                >
                    {word}
                    {index !== words.length - 1 && '\u00a0'}
                </motion.span>
            ))}
        </motion.span>
    )
}
