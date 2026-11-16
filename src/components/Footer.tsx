import { Link } from 'react-router'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { PhotoCredits } from '@/components/PhotoCredits'

const COLS = [
  {
    title: 'Services',
    links: [
      { to: '/services#software', label: 'Software development' },
      { to: '/services#ai-integration', label: 'AI integration' },
      { to: '/services#ai-tools', label: 'AI tools' },
      { to: '/services#education', label: 'Training for teams' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { to: '/education', label: 'Courses & workshops' },
      { to: '/education#ebooks', label: 'eBooks' },
      { to: '/education#paths', label: 'Learning paths' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About FloriQX' },
      { to: '/contact', label: 'Contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-on-navy-border bg-navy-deep text-on-navy">
      <div className="mx-auto w-full max-w-content px-gutter py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link
              to="/"
              aria-label="FloriQX — home"
              className="inline-flex w-fit rounded-md bg-background px-3 py-2 transition-opacity hover:opacity-90"
            >
              <img
                src="/images/floriqx-logo.webp"
                alt="FloriQX"
                width={489}
                height={477}
                loading="lazy"
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm text-on-navy-muted">
              Innovate. Educate. Elevate. We build software and AI for Indian businesses, and we teach
              the teams that run it.
            </p>
            <a
              href="mailto:hello@floriqx.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-on-navy transition-colors hover:text-accent"
            >
              <Mail className="size-4" strokeWidth={1.75} />
              hello@floriqx.com
            </a>
            <p className="mt-2 flex items-center gap-2 text-sm text-on-navy-muted">
              <MapPin className="size-4" strokeWidth={1.75} />
              Ahmedabad, Gujarat, India
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLS.map((col) => (
              <div key={col.title}>
                <h2 className="font-label text-xs font-semibold tracking-[0.12em] text-on-navy-muted uppercase">
                  {col.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="inline-flex min-h-8 items-center text-sm text-on-navy-muted transition-colors hover:text-accent"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-on-navy-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-on-navy-muted">© {new Date().getFullYear()} FloriQX Technologies. India.</p>
          <PhotoCredits className="text-xs text-on-navy-muted" />
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-on-navy transition-colors hover:text-accent"
          >
            Start a project
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
