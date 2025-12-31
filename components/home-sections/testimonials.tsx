'use client'

import { Button } from '@/components/button'
import { Badge } from '@/components/badge'
import { Review } from '@/components/review'
import { AnimatedText } from '@/components/animated-text'
import { REVIEWS } from '@/lib/data'

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="w-full section-padding rounded-t-[48px] border-t border-x bg-background py-20 pb-24 xl:pt-32">
            <div>
                <div className="grid grid-cols-1 gap-10 xl:gap-16 xl:grid-cols-2 xl:items-start">
                    <div className="flex flex-col gap-10 xl:sticky xl:top-[122px]">
                        <div className="flex flex-col gap-8">
                            <Badge dot className="self-start">
                                Testimonials
                            </Badge>

                            <h2 className="section-header-text text-black/60">
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
                                        href="#work"
                                    >
                                        See My Work
                                    </Button>
                                    <Button
                                        variant="primary"
                                        animation="translate-small"
                                        className="h-14 px-8 text-base"
                                        href="#contact"
                                    >
                                        Get In Touch
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6 xl:pt-12">
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
