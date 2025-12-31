'use client'

import * as React from 'react'
import { motion, HTMLMotionProps } from 'motion/react'
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex font-semibold items-center justify-center whitespace-nowrap rounded-full text-sm transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 px-6.5 py-3.5 text-base relative overflow-hidden cursor-pointer',
    {
        variants: {
            variant: {
                primary: 'text-white',
                secondary:
                    'text-black border border-[#0000001a] bg-origin-border',
                tertiary: 'text-[rgba(0,0,0,0.6)] border border-transparent',
            },
            animation: {
                none: '',
                text: '',
                'translate-small': '',
                translate: '',
            },
        },
        defaultVariants: {
            variant: 'primary',
            animation: 'none',
        },
    },
)

export interface ButtonProps
    extends
        Omit<HTMLMotionProps<'button'>, 'children'>,
        VariantProps<typeof buttonVariants> {
    href?: string
    children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, animation, href, children, ...props }, ref) => {
        const Comp = href ? motion(Link) : motion.button

        // Outer animation (translation)
        const outerHoverAnimation = {
            'translate-small': { y: -2 },
            translate: { y: -4 },
            none: {},
            text: {},
        }[animation || 'none']

        // Inner animation (scale for text) - this prevents the button itself from growing
        const innerHoverAnimation =
            animation === 'text' ? { scale: 1.05 } : { scale: 1 }

        const variants = {
            primary: {
                initial: {
                    backgroundImage:
                        'linear-gradient(rgb(0, 0, 0) 0%, rgb(135, 135, 135) 140%)',
                    boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px',
                    opacity: 1,
                },
                hover: {
                    backgroundImage:
                        'linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 140%)',
                    boxShadow: 'rgba(0, 0, 0, 0.07) 0px 6px 7px 0px',
                    opacity: 0.8,
                },
            },
            secondary: {
                initial: {
                    backgroundImage:
                        'linear-gradient(rgb(135, 135, 135) -382%, rgb(247, 247, 247) 100%)',
                    opacity: 1,
                },
                hover: {
                    backgroundImage:
                        'linear-gradient(rgb(135, 135, 135) -248%, rgb(241, 241, 241) 25%, rgb(247, 247, 247) 100% 34%, rgb(243, 243, 243) 100%)',
                    opacity: 1,
                },
            },
            tertiary: {
                initial: {
                    backgroundImage:
                        'linear-gradient(rgb(247, 247, 247) -74%, rgba(0, 0, 0, 0.1) 183%)',
                    boxShadow:
                        'rgba(0, 0, 0, 0.68) 0px -0.48175px 0.48175px -1.25px inset, rgba(0, 0, 0, 0.6) 0px -1.83083px 1.83083px -2.5px inset, rgba(0, 0, 0, 0.24) 0px -8px 8px -3.75px inset',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    opacity: 1,
                },
                hover: {
                    boxShadow:
                        'rgba(0, 0, 0, 0.88) 0px -0.48175px 0.48175px -1.66667px inset, rgba(0, 0, 0, 0.72) 0px -1.83083px 1.83083px -3.33333px inset, rgba(0, 0, 0, 0) 0px -8px 8px -5px inset',
                    borderColor: 'var(--border)',
                    opacity: 0.8,
                },
            },
        }

        const currentVariant = variants[variant || 'primary']

        return (
            <Comp
                ref={ref as any}
                href={href as any}
                className={cn(
                    buttonVariants({ variant, animation }),
                    className,
                )}
                initial="initial"
                whileHover="hover"
                variants={{
                    initial: { ...currentVariant.initial, y: 0 },
                    hover: {
                        ...currentVariant.hover,
                        ...outerHoverAnimation,
                    },
                }}
                transition={{
                    duration: 0.1,
                    ease: 'easeIn', // Custom fast ease-out
                    default: { duration: 0.1 },
                    opacity: { duration: 0.15 },
                    y: { duration: 0.1, ease: 'easeOut' },
                    backgroundImage: { duration: 0.2 },
                }}
                {...(props as any)}
            >
                <motion.span
                    variants={{
                        hover: innerHoverAnimation,
                    }}
                    transition={{ duration: 0.1, ease: 'easeOut' }}
                    className="inline-block relative z-10 leading-8"
                >
                    {children}
                </motion.span>
            </Comp>
        )
    },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
