'use client'

import { useEffect, ReactNode, useRef } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

interface SmoothScrollProps {
    children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<Lenis | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo out
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        })

        lenisRef.current = lenis

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Intersection Observer for Section Tracking
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // Trigger when section is in the middle-top area
            threshold: 0,
        }

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id
                    if (id) {
                        // Update hash without jumping
                        window.history.replaceState(null, '', `#${id}`)
                        // Dispatch custom event for Navbar/other components to listen to
                        window.dispatchEvent(new CustomEvent('sectionChange', { detail: id }))
                    }
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, observerOptions)

        // Observe all sections with an id
        const sections = document.querySelectorAll('section[id]')
        sections.forEach((section) => observer.observe(section))

        // Handle Anchor Links Smoothly
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const link = target.closest('a')
            if (
                link &&
                link.hash &&
                link.origin === window.location.origin &&
                link.pathname === window.location.pathname
            ) {
                e.preventDefault()
                const targetId = link.hash.slice(1)
                const targetElement = document.getElementById(targetId)
                if (targetElement) {
                    lenis.scrollTo(targetElement)
                }
            }
        }

        document.addEventListener('click', handleAnchorClick)

        return () => {
            lenis.destroy()
            observer.disconnect()
            document.removeEventListener('click', handleAnchorClick)
        }
    }, [pathname])

    return <>{children}</>
}
