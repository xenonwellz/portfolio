import { Button } from '@/components/button'
import { Footer } from '@/components/footer'

export default function Home() {
    return (
        <div className="flex flex-col font-sans">
            {/* Demo Section from before */}
            <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 p-8 pt-32">
                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold italic">
                        Portfolio Project
                    </h2>
                    <p className="text-zinc-500">
                        Testing the custom button components and the new footer
                        scroll effect.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Button Gallery</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary" animation="translate">
                            Primary Action
                        </Button>
                        <Button
                            variant="secondary"
                            animation="text"
                            href="#work"
                        >
                            View Projects
                        </Button>
                        <Button variant="tertiary" animation="translate-small">
                            Learn More
                        </Button>
                    </div>
                </section>
            </main>

            {/* Scroll Test Sections */}
            <div className="h-screen w-full bg-slate-100 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-slate-300">
                    Scroll Down for CTA
                </h1>
            </div>

            <div className="h-screen w-full bg-zinc-50 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-zinc-200">
                    Keep Scrolling for Footer
                </h1>
            </div>

            {/* New Components */}
            <Footer />
        </div>
    )
}
