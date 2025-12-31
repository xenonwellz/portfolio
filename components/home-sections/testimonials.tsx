'use client'

import { Button } from '@/components/button'
import { Badge } from '@/components/badge'
import { Review } from '@/components/review'
import { AnimatedText } from '@/components/animated-text'

const REVIEWS = [
    {
        quote: 'Working with Obed was a remarkable experience. His innovative thinking and brilliance brought about a user-friendly and and reliable wallet to life. I was really impressed by his professionalism and dedication to building something that makes crypto simpler for everybody .',
    },
    {
        quote: "Obed's vision and commitment to community-driven innovation was what really stood out for me. He built something impactful that would definitely stand the test of time and setting a strong standard in the digital economy.",
    },
    {
        quote: 'His work with Agroease did not only combine innovation and reliability, but also creativity, genuine purpose and a deep understanding of agricultural needs. Obed built Agroease to not just be an app but a smart solution that empowers farmers and connect communities.',
    },
    {
        quote: 'Working with Obed was such an exceptional experience. His technical expertise and problem-solving skills elevated every project he worked on. He delivered efficient and reliable solutions that strengthened our systems and improved overall performance.',
    },
]

export function TestimonialsSection() {
    return (
        <section className="w-full py-20 rounded-t-[48px] border-t border-x p-10 lg:pt-32 pb-24 bg-background">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
                <div className="grid grid-cols-1 gap-10 xl:gap-16 lg:grid-cols-2 lg:items-start">
                    <div className="flex flex-col gap-10 lg:sticky lg:top-[122px]">
                        <div className="flex flex-col gap-8">
                            <Badge dot className="self-start">
                                Testimonials
                            </Badge>

                            <h2 className="text-[48px] lg:text-[54px] font-satoshi leading-[1.05] tracking-tight text-black/60">
                                <AnimatedText text="Kind words from previous " />
                                <span className="text-black">
                                    <AnimatedText
                                        text="Clients and Employers"
                                        delay={0.5}
                                    />
                                </span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="h-0.5 w-full bg-black/5" />
                            <div className="flex items-center gap-6">
                                <div className="flex gap-4">
                                    <Button
                                        variant="secondary"
                                        animation="translate-small"
                                        className="h-14 px-8 text-base"
                                    >
                                        See My Work
                                    </Button>
                                    <Button
                                        variant="primary"
                                        animation="translate-small"
                                        className="h-14 px-8 text-base"
                                    >
                                        Get In Touch
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 lg:pt-12">
                        {REVIEWS.map((review, index) => (
                            <div
                                key={index}
                                className="xl:sticky"
                                style={{
                                    top: `${122 + index * 24}px`,
                                }}
                            >
                                <Review quote={review.quote} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
