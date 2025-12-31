import { Button } from '@/components/button'
import { Footer } from '@/components/footer'
import { TestimonialsSection } from '@/components/home-sections/testimonials'
import { ServicesSection } from '@/components/home-sections/services'
import { WorkSection } from '@/components/home-sections/work'
import { WhyHireMeSection } from '@/components/home-sections/why-hire-me'
import { SkillsSection } from '@/components/home-sections/skills'

export default function Home() {
    return (
        <div className="flex flex-col font-sans">
            {/* Demo Section from before */}
            <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 p-8 pt-32">
                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold italic">
                        Portfolio Project
                    </h2>
                    <p className="text-black/50">
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

            <SkillsSection />
            <WorkSection />
            <ServicesSection />
            <WhyHireMeSection />
            <TestimonialsSection />

            {/* New Components */}
            <Footer />
        </div>
    )
}
