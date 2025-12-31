import { LightRays } from '@/components/hero-sections/light-rays'

export default function ExperimentPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-white">
            <div className="relative w-full h-full max-w-[1920px] max-h-[1080px]">
                <LightRays />
            </div>

            {/* Guide or Label */}
            <div className="absolute top-10 left-10 z-50 text-white/50 font-mono text-sm">
                Experiment Page: Light Rays Alignment
                <br />
                Parent Size: 1784x1823 (clamped for view)
            </div>
        </div>
    )
}
