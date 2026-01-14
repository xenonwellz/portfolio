import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Mono, Acme, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const satoshi = localFont({
    src: [
        {
            path: '../public/fonts/Satoshi-Variable.woff2',
            weight: '300 900',
            style: 'normal',
        },
        {
            path: '../public/fonts/Satoshi-VariableItalic.woff2',
            weight: '300 900',
            style: 'italic',
        },
    ],
    variable: '--font-satoshi',
})

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: '--font-plus-jakarta',
    subsets: ['latin'],
})

const spaceMono = Space_Mono({
    variable: '--font-space-mono',
    subsets: ['latin'],
    weight: ['400', '700'],
})

const acme = Acme({
    variable: '--font-acme',
    subsets: ['latin'],
    weight: ['400'],
})

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    metadataBase: new URL('https://obedovabor.me'),
    title: {
        default: 'Obed Ovabor | Software Engineer & Architect',
        template: '%s | Obed Ovabor',
    },
    description:
        'Software Engineer and Architect specializing in high-performance systems, blockchain, and full-stack development with Rust, TS/JS, Python, and Elixir.',
    keywords: [
        'Obed Ovabor',
        'Software Engineer',
        'Architect',
        'Rust',
        'TypeScript',
        'Python',
        'Elixir',
        'Blockchain',
        'Full-Stack',
        'Portfolio',
    ],
    authors: [{ name: 'Obed Ovabor' }],
    creator: 'Obed Ovabor',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://obedovabor.me',
        title: 'Obed Ovabor | Software Engineer & Architect',
        description:
            'Software Engineer & Architect building the future of software with Rust, TS/JS, Python, and Elixir.',
        siteName: 'Obed Ovabor Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Obed Ovabor Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Obed Ovabor | Software Engineer & Architect',
        description:
            'Software Engineer & Architect building the future of software with Rust, TS/JS, Python, and Elixir.',
        images: ['/twitter-image.png'],
        creator: '@xenonwellz',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-icon.png',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

import { BottomBlur } from '@/components/footer/bottom-blur'
import { Navbar } from '@/components/navbar'
import { SmoothScroll } from '@/components/smooth-scroll'
import { PostHogProvider } from './posthog-provider'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${satoshi.variable} ${plusJakartaSans.variable} ${spaceMono.variable} ${acme.variable} ${inter.variable} antialiased bg-background`}
            >
                <PostHogProvider>
                    <SmoothScroll>
                        <Navbar />
                        {children}
                        <BottomBlur />
                    </SmoothScroll>
                </PostHogProvider>
            </body>
        </html>
    )
}
