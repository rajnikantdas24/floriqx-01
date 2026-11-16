import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* The banner every inner page opens with: a navy ground, the page's own
   heading on the left, and the banner picture bleeding to the right edge.
   The picture is a designed plate, not a photograph — no stock mood shot sits
   on a page about software. Where a page has no plate it passes children. */
export function PageBanner({
  title,
  lead,
  image,
  imageAlt,
  imageWidth = 1200,
  imageHeight = 750,
  children,
  className,
}: {
  title: string
  lead: string
  image?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  children?: ReactNode
  className?: string
}) {
  return (
    <section className={cn('relative overflow-hidden border-b border-border bg-navy text-on-navy', className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(to right, color-mix(in oklch, var(--on-navy) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--on-navy) 7%, transparent) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 85% 100% at 70% 0%, black 10%, transparent 75%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[10%] h-72 w-72 rounded-full opacity-60 blur-3xl"
        style={{
          background: 'radial-gradient(closest-side, color-mix(in oklch, var(--accent) 45%, transparent), transparent)',
        }}
      />

      <div
        className={cn(
          'relative mx-auto grid w-full max-w-content gap-9 px-gutter py-12 lg:items-center lg:gap-12 lg:py-16',
          image ? 'lg:grid-cols-[1fr_0.85fr]' : '',
        )}
      >
        <div>
          <h1 className="max-w-xl font-display text-[clamp(2.25rem,4.6vw,3.5rem)] leading-[1.08] tracking-[var(--heading-tracking)] text-on-navy">
            {title}
          </h1>
          <p className="mt-4 max-w-lg text-lg text-on-navy-muted">{lead}</p>
          <div aria-hidden="true" className="mt-7 h-1 w-20 rounded-full bg-[image:var(--gradient-brand)]" />
        </div>

        {image ? (
          <img
            src={image}
            alt={imageAlt ?? ''}
            width={imageWidth}
            height={imageHeight}
            className="w-full rounded-lg shadow-lift ring-1 ring-on-navy-border"
          />
        ) : (
          children
        )}
      </div>
    </section>
  )
}
