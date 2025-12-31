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
    title: 'Portfolio',
    description: 'My professional portfolio',
}

import { BottomBlur } from '@/components/footer/bottom-blur'
import { Navbar } from '@/components/navbar'

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
                <Navbar />
                {children}
                <BottomBlur />
            </body>
        </html>
    )
}
