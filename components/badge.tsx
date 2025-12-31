import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
    'inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[15px] shadow-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    {
        variants: {
            variant: {
                default: 'bg-white text-zinc-600 border border-black/10',
                outline:
                    'border border-zinc-200 text-zinc-600 bg-transparent shadow-none',
                secondary: 'bg-zinc-100 text-zinc-900',
                dark: 'bg-zinc-900 text-zinc-50',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
)

export interface BadgeProps
    extends
        React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {
    dot?: boolean
    dotColor?: string
}

function Badge({ className, variant, dot, children, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props}>
            {dot && (
                <div className="rounded-full border-2 border-badge-dot">
                    <div
                        className={cn(
                            'rounded-full border-2 border-white bg-badge-dot size-2',
                        )}
                    />
                </div>
            )}
            {children}
        </div>
    )
}

export { Badge, badgeVariants }
