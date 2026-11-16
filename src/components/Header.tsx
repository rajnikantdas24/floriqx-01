import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Brand } from '@/components/Brand'
import { cn } from '@/lib/utils'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/education', label: 'Education' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background-color,box-shadow] duration-200',
        scrolled
          ? 'bg-background/92 shadow-[0_10px_30px_-18px_oklch(0.26_0.075_268/45%)] backdrop-blur-md'
          : 'bg-background',
      )}
    >
      {/* The bar carries the mark at full size: bigger plate, bigger nav type and
          a gradient hairline so the top of the page reads as a masthead. */}
      <div className="mx-auto flex h-[5rem] w-full max-w-content items-center justify-between gap-6 px-gutter sm:h-[5.5rem] lg:h-[6.25rem]">
        <Brand />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'rounded-md px-3.5 py-2 text-[0.9375rem] font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-primary lg:text-base',
                      isActive && 'text-primary',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-md bg-primary px-6 py-3 text-[0.9375rem] font-semibold text-primary-foreground shadow-raised transition-colors hover:bg-navy lg:inline-flex lg:text-base"
          >
            Get started
            <ArrowRight className="size-[1.05rem] transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid size-11 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-accent/70 via-primary/40 to-transparent lg:from-accent lg:via-primary/50" />

      {/* Mobile sheet: full width under the bar, one obvious close above. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-[5rem] bottom-0 z-40 overflow-y-auto bg-background px-gutter pt-6 pb-10 sm:top-[5.5rem] lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'flex min-h-14 items-center justify-between border-b border-border font-display text-xl font-semibold text-foreground',
                      isActive && 'text-primary',
                    )
                  }
                >
                  {item.label}
                  <ArrowRight className="size-4 text-muted-foreground" strokeWidth={1.75} />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          to="/contact"
          className="mt-8 flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary font-semibold text-primary-foreground"
        >
          Start a project
          <ArrowRight className="size-4" strokeWidth={1.75} />
        </Link>
        <p className="mt-6 text-sm text-muted-foreground">
          Ahmedabad, India · <a className="text-primary" href="mailto:hello@floriqx.com">hello@floriqx.com</a>
        </p>
      </div>
    </header>
  )
}
