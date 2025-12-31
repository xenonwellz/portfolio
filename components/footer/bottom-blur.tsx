'use client'

import React from 'react'

const BLUR_LAYERS = [
    {
        blur: '0.0546875px',
        mask: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)',
    },
    {
        blur: '0.109375px',
        mask: 'linear-gradient(rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)',
    },
    {
        blur: '0.21875px',
        mask: 'linear-gradient(rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)',
    },
    {
        blur: '0.4375px',
        mask: 'linear-gradient(rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)',
    },
    {
        blur: '0.875px',
        mask: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)',
    },
    {
        blur: '1.75px',
        mask: 'linear-gradient(rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
    },
    {
        blur: '3.5px',
        mask: 'linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)',
    },
    {
        blur: '7px',
        mask: 'linear-gradient(rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)',
    },
]

export function BottomBlur() {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-25 pointer-events-none z-50 overflow-hidden">
            <div className="absolute inset-0">
                {BLUR_LAYERS.map((layer, index) => (
                    <div
                        key={index}
                        style={{
                            opacity: 1,
                            position: 'absolute',
                            inset: 0,
                            zIndex: index + 1,
                            maskImage: layer.mask,
                            WebkitMaskImage: layer.mask,
                            backdropFilter: `blur(${layer.blur})`,
                            WebkitBackdropFilter: `blur(${layer.blur})`,
                            borderRadius: '0px',
                            pointerEvents: 'none',
                            willChange: 'auto',
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
