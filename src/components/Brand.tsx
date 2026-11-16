import { Link } from 'react-router'
import { cn } from '@/lib/utils'

/* The owner's logo file is the mark: symbol-only cut at small sizes, full
   lockup (symbol, wordmark and tagline) where there is room for it to read.
   Nothing here draws, traces or re-types it. */
export function Brand({
  className,
  variant = 'lockup',
  light = false,
}: {
  className?: string
  variant?: 'symbol' | 'lockup'
  light?: boolean
}) {
  return (
    <Link
      to="/"
      aria-label="FloriQX — Innovate. Educate. Elevate. Home"
      className={cn(
        'group inline-flex items-center gap-2.5 rounded-md transition-opacity hover:opacity-85',
        className,
      )}
    >
      <img
        src="/images/floriqx-symbol.webp"
        alt=""
        width={313}
        height={296}
        className={cn('h-11 w-auto shrink-0 sm:h-10 lg:h-11', variant === 'lockup' && 'sm:h-9 lg:h-10')}
        decoding="async"
      />
      {variant === 'lockup' && (
        <span className="hidden sm:block">
          <span className="block text-[1.5rem] leading-none font-extrabold tracking-tight lg:text-[1.75rem]">
            <span className={light ? 'text-on-navy' : 'text-navy'}>FLORI</span>
            <span
              className={
                light
                  ? 'bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'
              }
            >
              QX
            </span>
          </span>
          {/* The owner's tagline, in the label face and the muted ink of the ground. */}
          <span
            className={cn(
               'mt-1.5 block font-label text-[0.625rem] leading-none font-semibold tracking-[0.18em] uppercase lg:text-[0.6875rem]',
              light ? 'text-on-navy-muted' : 'text-muted-foreground',
            )}
          >
            Innovate. Educate. Elevate.
          </span>
        </span>
      )}
    </Link>
  )
}
