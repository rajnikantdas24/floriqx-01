import { Link } from 'react-router'
import {
  ArrowRight,
  BookOpen,
  Check,
  CodeXml,
  Cpu,
  GraduationCap,
  Network,
  Sprout,
} from 'lucide-react'
import { Meta } from '@/components/Meta'

const SERVICES = [
  {
    icon: CodeXml,
    title: 'Custom software',
    body: 'Web platforms, internal tools and mobile apps built on one codebase your team can maintain after handover.',
    to: '/services#software',
  },
  {
    icon: Network,
    title: 'AI integration',
    body: 'Assistants, document search and review workflows wired into the systems you already run — with guardrails and an audit trail.',
    to: '/services#ai-integration',
  },
  {
    icon: Cpu,
    title: 'AI tools & solutions',
    body: 'Ready-to-configure tools for support triage, invoice reading and classroom content, deployed on your own data.',
    to: '/services#ai-tools',
  },
  {
    icon: GraduationCap,
    title: 'AI education',
    body: 'Workshops, cohort courses and eBooks for teams moving from curious to confident with these tools.',
    to: '/education',
  },
]

const BENEFITS = [
  { icon: Sprout, title: 'Built to grow', body: 'We start with a working release, then add scope you have already seen running.' },
  { icon: Network, title: 'One team, both sides', body: 'The people who teach the workshop are the people who write the integration.' },
  { icon: Check, title: 'Your data, your ground', body: 'Models run where your data already lives; nothing needs to leave the building.' },
  { icon: GraduationCap, title: 'Handover, not lock-in', body: 'Documentation, code access and a training session are part of every project.' },
]

const EDU = [
  { title: 'Applied AI for teams', meta: 'Cohort course · 4 weeks', body: 'Prompt craft, evaluation and safe use, practised on your own documents.' },
  { title: 'Shipping with LLMs', meta: 'Workshop · 2 days', body: 'For developers moving from a demo notebook to a deployed feature.' },
  { title: 'Leading AI adoption', meta: 'Leadership session · half day', body: 'Scope, risk and hiring decisions for founders and operations heads.' },
]

const EBOOKS = [
  { title: 'The Prompt Workbook', price: '₹399', note: '62 pages · 40 exercises' },
  { title: 'Plain-Language AI', price: '₹299', note: 'For non-technical managers' },
]

export default function Home() {
  return (
    <>
      <Meta
        title="FloriQX — software and AI for Indian businesses"
        description="FloriQX builds custom software and AI integrations for Indian businesses, and teaches the teams that run them. Innovate. Educate. Elevate."
      />
      <main>
        {/* The home banner: one full-width plate on the navy ground, the claim set
            over it and the two actions beneath. The first screen is the picture. */}
        <section className="relative isolate overflow-hidden border-b border-border bg-navy text-on-navy">
          <img
            src="/images/banner-home.webp"
            alt="A glowing software interface resolving out of a blue technical grid on a navy ground"
            width={1200}
            height={675}
            fetchPriority="high"
            className="absolute inset-0 -z-20 size-full object-cover object-[82%_center] opacity-80 sm:object-[70%_center] lg:object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background:
                'linear-gradient(105deg, var(--navy-deep) 0%, color-mix(in oklch, var(--navy) 92%, transparent) 42%, color-mix(in oklch, var(--navy) 35%, transparent) 72%, transparent 100%)',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-60"
            style={{
              backgroundImage:
                'linear-gradient(to right, color-mix(in oklch, var(--on-navy) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--on-navy) 7%, transparent) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(ellipse 70% 100% at 15% 40%, black 10%, transparent 72%)',
            }}
          />

          <div className="relative mx-auto flex w-full max-w-content flex-col justify-end px-gutter pt-24 pb-16 sm:pt-32 sm:pb-20 lg:min-h-[42rem] lg:justify-center lg:pt-28 lg:pb-28">
            <div className="max-w-4xl">
              <p className="font-label text-xs font-semibold tracking-[0.16em] text-accent uppercase sm:text-[0.8125rem]">
                Software · AI · Education
              </p>
              <h1 className="mt-6 font-display text-[var(--hero-size)] font-extrabold leading-[1.02] tracking-[-0.04em] text-balance text-on-navy lg:mt-8">
                Build the AI your business can actually run.
              </h1>
              <p className="mt-6 max-w-xl text-[1.1875rem] leading-[1.65] text-on-navy-muted sm:mt-8 sm:text-[1.375rem] sm:leading-[1.6]">
                FloriQX designs custom software and integrates AI into it — then trains the team who
                owns it. Ahmedabad-based, working with businesses across India.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-background px-6 font-semibold text-navy shadow-lift transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Get started
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-on-navy-border px-6 font-semibold text-on-navy transition-colors hover:bg-[color-mix(in_oklch,var(--on-navy)_12%,transparent)]"
                >
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Two paths, stated plainly: no projects are claimed, so this asks which one you are on. */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto w-full max-w-content px-gutter py-14">
            <h2 className="font-display text-2xl text-navy sm:text-3xl">Two ways in</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg bg-secondary p-7 lg:p-9">
                <h3 className="font-display text-xl text-navy">You have a system to build or improve</h3>
                <p className="mt-2 text-muted-foreground">
                  A scoping call, a written plan, then a working first release. Fixed scope per stage.
                </p>
                <Link
                  to="/services"
                  className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary hover:text-navy"
                >
                  See the four services <ArrowRight className="size-4" strokeWidth={1.75} />
                </Link>
              </div>
              <div className="rounded-lg border border-border p-7 lg:p-9">
                <h3 className="font-display text-xl text-navy">You want your team fluent in AI</h3>
                <p className="mt-2 text-muted-foreground">
                  Courses, workshops and eBooks written by the engineers who build the integrations.
                </p>
                <Link
                  to="/education"
                  className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary hover:text-navy"
                >
                  Browse education <ArrowRight className="size-4" strokeWidth={1.75} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services as an index: numbered rows, not four identical cards. */}
        <section className="bg-background py-section">
          <div className="mx-auto w-full max-w-content px-gutter">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="max-w-md font-display text-3xl text-navy lg:text-4xl">
                Four services, one team behind them
              </h2>
              <Link
                to="/services"
                className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary hover:text-navy"
              >
                All services in detail <ArrowRight className="size-4" strokeWidth={1.75} />
              </Link>
            </div>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <Link
                    to={s.to}
                    className="group grid gap-3 py-6 transition-colors sm:grid-cols-[3rem_1fr] sm:gap-6 lg:py-7"
                  >
                    <span className="grid size-11 place-items-center rounded-md bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <s.icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <span className="grid gap-1.5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-baseline sm:gap-8">
                      <span className="flex items-center gap-2 font-display text-xl text-navy">
                        {s.title}
                        <ArrowRight
                          className="size-4 -translate-x-1 text-primary opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                          strokeWidth={1.75}
                        />
                      </span>
                      <span className="max-w-xl text-muted-foreground">{s.body}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Navy band: why choose us. */}
        <section className="bg-navy text-on-navy">
          <div className="mx-auto w-full max-w-content px-gutter py-section">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <h2 className="font-display text-3xl text-on-navy lg:text-4xl">Why teams pick FloriQX</h2>
                <p className="mt-4 text-on-navy-muted">
                  Most AI projects stall after the pilot. Ours are built with the training day scheduled
                  before the first screen is drawn.
                </p>
                <div aria-hidden="true" className="mt-8 h-1 w-24 rounded-full bg-[image:var(--gradient-brand)]" />
              </div>
              <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {BENEFITS.map((b, i) => (
                  <li key={b.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="grid size-11 shrink-0 place-items-center rounded-md bg-[linear-gradient(135deg,var(--primary),var(--navy))] font-display text-base font-bold text-primary-foreground"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-on-navy">{b.title}</h3>
                      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-on-navy-muted">{b.body}</p>
                    <span className="sr-only">Step {i + 1} of {BENEFITS.length}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Education split, asymmetrical: courses left, learning path right. */}
        <section className="border-t border-border bg-card py-section">
          <div className="mx-auto grid w-full max-w-content gap-12 px-gutter lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <h2 className="font-display text-3xl text-navy lg:text-4xl">A classroom beside the workshop</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Every course is taught by an engineer on live client work. Bring your own documents and
                leave with something running.
              </p>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {EDU.map((c) => (
                  <li key={c.title} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="font-display text-lg text-navy">{c.title}</h3>
                      <p className="text-sm text-muted-foreground">{c.body}</p>
                    </div>
                    <p className="shrink-0 font-label text-xs font-semibold tracking-[0.06em] text-primary uppercase">
                      {c.meta}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                to="/education"
                className="mt-8 inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary hover:text-navy"
              >
                Courses, workshops and learning paths <ArrowRight className="size-4" strokeWidth={1.75} />
              </Link>
            </div>

            <div className="h-fit rounded-lg border border-border bg-card p-6 lg:p-7">
              <p className="flex items-center gap-2 font-label text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                <BookOpen className="size-4" strokeWidth={1.75} /> New eBooks
              </p>
              <ul className="mt-5 space-y-5">
                {EBOOKS.map((b) => (
                  <li key={b.title} className="flex items-start gap-4">
                    <span
                      className="relative flex h-[7.5rem] w-[5.25rem] shrink-0 flex-col justify-between overflow-hidden rounded-sm bg-[linear-gradient(to_bottom_right,var(--primary),var(--navy))] p-2.5 shadow-raised"
                    >
                      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-navy/25" />
                      <span className="font-display text-[0.8125rem] leading-tight font-bold text-primary-foreground">
                        {b.title}
                      </span>
                      <span className="font-label text-[9px] font-semibold tracking-[0.14em] text-primary-foreground uppercase">
                        FloriQX
                      </span>
                    </span>
                    <div className="pt-1">
                      <h3 className="font-display text-base text-navy">{b.title}</h3>
                      <p className="text-xs text-navy">{b.note}</p>
                      <p className="mt-1 text-sm font-semibold text-navy">{b.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to="/education#ebooks"
                className="mt-6 flex min-h-11 items-center justify-center rounded-md border border-border bg-background text-sm font-semibold text-navy transition-colors hover:bg-secondary"
              >
                See the eBook shelf
              </Link>
            </div>
          </div>
        </section>

        {/* Closing band. */}
        <section className="bg-navy text-on-navy">
          <div className="relative mx-auto w-full max-w-content overflow-hidden px-gutter py-section">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-[36rem] rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  'radial-gradient(closest-side, color-mix(in oklch, var(--accent) 55%, transparent), transparent)',
              }}
            />
            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="max-w-xl font-display text-3xl text-on-navy lg:text-4xl">
                  Tell us what you want to automate first.
                </h2>
                <p className="mt-3 max-w-lg text-on-navy-muted">
                  Send a paragraph about your process. You get a written answer on what is worth building
                  and what is not, usually within two working days.
                </p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex min-h-12 shrink-0 items-center gap-2 rounded-md bg-background px-6 font-semibold text-navy transition-transform duration-200 hover:-translate-y-0.5"
              >
                Start a project
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
