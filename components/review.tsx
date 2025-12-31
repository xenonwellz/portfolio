import React from 'react'

interface ReviewProps {
    quote?: string
}

export function Review({
    quote = 'Start building your sites without any stress using the landerkit now, and if you have any doubts please feel free to reach out',
}: ReviewProps) {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-black/10 p-6 pl-4">
            <div className="flex relative z-3 gap-2">
                <div className="text-black w-2">
                    <span className="font-acme text-[40px] leading-none opacity-80">
                        "
                    </span>
                </div>

                <p className="text-black/70 pt-2 leading-relaxed font-inter text-[15px]">
                    {quote}
                </p>
            </div>

            <div
                className="absolute inset-0 z-1"
                style={{
                    background:
                        'linear-gradient(121deg, rgb(135, 135, 135) -52%, rgb(250, 250, 250) 19%, rgb(247, 247, 247) 100%)',
                }}
            />

            <div className="absolute inset-0 brightness-10 blur-2xl opacity-5 z-2">
                <img
                    src="/images/review-gradient.jpeg"
                    alt=""
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    )
}
