import React from 'react'

interface ReviewProps {
    quote?: string
}

export function Review({
    quote = 'Start building your sites without any stress using the landerkit now, and if you have any doubts please feel free to reach out',
}: ReviewProps) {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-background p-6 pl-4">
            <div className="relative z-10 flex gap-2">
                <div className="w-2 text-black">
                    <span className="font-acme text-[40px] leading-none opacity-80">
                        "
                    </span>
                </div>

                <p className="pt-2 font-inter text-[15px] leading-relaxed text-black/70">
                    {quote}
                </p>
            </div>

            <div
                className="absolute inset-0 z-1"
                style={{
                    background:
                        'linear-gradient(121deg, rgb(135, 135, 135) -52%, rgb(250, 250, 250) 19%, rgb(247, 247, 247) 100%)',
                }}
            >
                <div className="border border-black/10 absolute top-0 left-0 w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-2xl">
                    <img
                        src="/images/review-gradient.jpeg"
                        alt=""
                        className="h-full w-full object-cover opacity-6 brightness-15 blur-2xl"
                    />
                </div>
            </div>
        </div>
    )
}
