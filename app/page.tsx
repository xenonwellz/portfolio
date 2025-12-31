import { HeroSection } from '@/components/home-sections/hero'
import { AboutSection } from '@/components/home-sections/about'
import { SkillsSection } from '@/components/home-sections/skills'
import { WorkSection } from '@/components/home-sections/work'
import { ServicesSection } from '@/components/home-sections/services'
import { WhyHireMeSection } from '@/components/home-sections/why-hire-me'
import { TestimonialsSection } from '@/components/home-sections/testimonials'
import { Footer } from '@/components/footer'

export default function Home() {
    return (
        <div className="flex flex-col font-sans">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <WorkSection />
            <ServicesSection />
            <WhyHireMeSection />
            <div id="testimonials">
                <TestimonialsSection />
            </div>

            {/* New Components */}
            <Footer />
        </div>
    )
}
