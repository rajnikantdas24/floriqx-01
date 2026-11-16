import { useState } from 'react'
import { ArrowRight, BookOpen, Check, GraduationCap } from 'lucide-react'
import { Meta } from '@/components/Meta'

type Course = {
  title: string
  format: string
  length: string
  body: string
  points: string[]
  kind: 'cohort' | 'workshop' | 'leadership'
}

const COURSES: Course[] = [
  {
    title: 'Applied AI for teams',
    format: 'Cohort course',
    length: '4 weeks · 2 hours a week',
    body: 'For operations, support and content teams who will use AI tools daily. Every session runs on the team’s own documents.',
    points: ['Writing prompts that survive a change of input', 'What to check before trusting an answer', 'Building a shared library of reusable prompts'],
    kind: 'cohort',
  },
  {
    title: 'Shipping with LLMs',
    format: 'Developer workshop',
    length: '2 days · in person',
    body: 'For developers taking a feature from notebook to production. We build a retrieval pipeline and an evaluation set together.',
    points: ['Retrieval, chunking and prompt structure', 'Evaluation before and after changes', 'Cost, latency and failure handling'],
    kind: 'workshop',
  },
  {
    title: 'Leading AI adoption',
    format: 'Leadership session',
    length: 'Half day',
    body: 'For founders and operations heads deciding where AI belongs, what it costs and which risks are real.',
    points: ['Choosing the first process to change', 'Vendor, build or wait', 'Policy, data handling and team expectations'],
    kind: 'leadership',
  },
]

const EBOOKS = [
  { title: 'The Prompt Workbook', price: '₹399', pages: '62 pages', blurb: 'Forty exercises with worked answers, using invoices, tickets and class notes as source material.' },
  { title: 'Plain-Language AI', price: '₹299', pages: '84 pages', blurb: 'What a model is and is not, written for managers who will never train one but have to buy one.' },
  { title: 'Shipping with LLMs', price: '₹499', pages: '130 pages', blurb: 'The workshop in book form: retrieval, evaluation and deployment, with code you can run.' },
  { title: 'Designing Software People Keep', price: '₹449', pages: '112 pages', blurb: 'Our notes on internal tools: scope, permissions, adoption and the handover that ends a project.' },
]

const PATHS = [
  { step: '1', title: 'Get the vocabulary', body: 'Read Plain-Language AI, then run three exercises from the Prompt Workbook on your own documents.' },
  { step: '2', title: 'Build one small thing', body: 'Take Shipping with LLMs, from the reading list or the workshop. The goal is a working internal tool, not a demo.' },
  { step: '3', title: 'Bring it into the team', body: 'Run the Applied AI cohort with the people who will use it, using the tool you just built as the practice ground.' },
]

export default function Education() {
  const [open, setOpen] = useState(0)
  const [bought, setBought] = useState<string | null>(null)

  return (
    <>
      <Meta
        title="AI education and eBooks | FloriQX"
        description="Cohort courses, two-day workshops and practical eBooks on AI and software for teams in India, taught by the engineers who build the integrations."
      />
      <main>
        <section className="relative overflow-hidden border-b border-border bg-navy text-on-navy">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-0 size-[30rem] rounded-full opacity-40 blur-3xl"
            style={{
              background: 'radial-gradient(closest-side, color-mix(in oklch, var(--accent) 60%, transparent), transparent)',
            }}
          />
          <div className="relative mx-auto grid w-full max-w-content gap-10 px-gutter py-14 lg:grid-cols-[1.05fr_0.8fr] lg:items-center lg:py-16">
            <div>
              <p className="inline-flex items-center gap-2 font-label text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                <GraduationCap className="size-4" strokeWidth={1.75} /> Education & eBooks
              </p>
              <h1 className="mt-4 max-w-xl font-display text-[clamp(2.25rem,4.6vw,3.5rem)] text-on-navy">
                Learn the AI your team will be using
              </h1>
              <p className="mt-4 max-w-lg text-lg text-on-navy-muted">
                Taught by engineers who ship integrations for a living. Practice happens on your own
                material, so the first real use is not the first attempt.
              </p>
            </div>
            <img
              src="/images/banner-education.webp"
              alt="A stack of cyan and blue books with a learning module panel on a navy ground"
              width={1200}
              height={675}
              className="w-full rounded-lg shadow-lift ring-1 ring-on-navy-border"
            />
          </div>
        </section>

        {/* Courses as an accordion: same kind of thing, one open at a time. */}
        <section className="bg-background py-section">
          <div className="mx-auto w-full max-w-content px-gutter">
            <h2 className="font-display text-3xl text-navy">Courses & workshops</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Three formats, all run live. Choose by who is learning, not by how technical the topic sounds.
            </p>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {COURSES.map((c, i) => {
                const isOpen = open === i
                return (
                  <li key={c.title}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        aria-controls={`course-${i}`}
                        className="flex w-full items-start justify-between gap-4 py-5 text-left"
                      >
                        <span>
                          <span className="font-display text-xl font-semibold text-navy">{c.title}</span>
                          <span className="mt-1 block text-sm text-muted-foreground">
                            {c.format} · {c.length}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-border text-primary"
                        >
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                    </h3>
                    <div id={`course-${i}`} hidden={!isOpen} className="pb-6">
                      <p className="max-w-2xl text-muted-foreground">{c.body}</p>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:max-w-2xl">
                        {c.points.map((p) => (
                          <li key={p} className="flex gap-2.5 text-sm text-navy">
                            <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.75} />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="mailto:hello@floriqx.com?subject=Course%20enquiry"
                        className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary hover:text-navy"
                      >
                        Enquire about this course <ArrowRight className="size-4" strokeWidth={1.75} />
                      </a>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* eBook shelf: covers drawn in the site's own two colours. */}
        <section id="ebooks" className="scroll-mt-24 border-y border-border bg-secondary py-section">
          <div className="mx-auto w-full max-w-content px-gutter">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-3xl text-navy">The eBook shelf</h2>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  Short, practical books you can read in an evening and use the next morning.
                </p>
              </div>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <BookOpen className="size-4" strokeWidth={1.75} /> PDF, delivered by email
              </p>
            </div>

            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {EBOOKS.map((b) => (
                <li key={b.title} className="flex h-full flex-col rounded-lg border border-border bg-background p-4">
                  <div
                    className="relative flex aspect-3/4 flex-col justify-between overflow-hidden rounded-sm bg-[image:var(--gradient-brand)] p-4 text-primary-foreground"
                    aria-hidden="true"
                  >
                    <span className="font-label text-[10px] font-semibold tracking-[0.16em] uppercase opacity-90">
                      FloriQX Press
                    </span>
                    <span className="font-display text-xl leading-tight font-extrabold">{b.title}</span>
                    <span className="absolute right-3 bottom-3 grid size-7 place-items-center rounded-sm border border-primary-foreground/40 text-[10px] font-bold">
                      F
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base text-navy">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.blurb}</p>
                  <div className="mt-auto flex items-center justify-between gap-2 pt-4">
                    <p className="font-display text-sm font-bold text-navy">
                      {b.price}
                      <span className="ml-1.5 text-xs font-normal text-muted-foreground">{b.pages}</span>
                    </p>
                    <a
                      href={`mailto:hello@floriqx.com?subject=${encodeURIComponent(`Buy: ${b.title} (${b.price})`)}`}
                      onClick={() => setBought(b.title)}
                      className="inline-flex min-h-10 items-center rounded-md bg-primary px-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy"
                    >
                      Buy
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <p aria-live="polite" className="mt-6 max-w-2xl text-sm text-muted-foreground">
              {bought
                ? `Checkout is not open on this site yet. Your email app will open with “${bought}” in the subject — send it to hello@floriqx.com and we reply with a payment link and the PDF.`
                : 'Buying opens your email app with the title filled in. There is no payment step on this site yet.'}
            </p>
          </div>
        </section>

        {/* Learning path: genuinely sequential, so numbered. */}
        <section id="paths" className="scroll-mt-24 bg-background py-section">
          <div className="mx-auto w-full max-w-content px-gutter">
            <h2 className="font-display text-3xl text-navy">A learning path, start to finish</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              If you are choosing for yourself rather than for a team, this is the order that works.
            </p>
            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {PATHS.map((p, i) => (
                <li key={p.step} className="relative rounded-lg border border-border p-6">
                  <span
                    aria-hidden="true"
                    className="grid size-10 place-items-center rounded-md bg-[image:var(--gradient-brand)] font-display font-bold text-primary-foreground"
                  >
                    {p.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg text-navy">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.body}</p>
                  {i < PATHS.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      className="absolute top-9 -right-4 hidden size-4 text-border md:block"
                      strokeWidth={1.75}
                    />
                  )}
                </li>
              ))}
            </ol>
            <a
              href="mailto:hello@floriqx.com?subject=Education%20enquiry"
              className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-navy"
            >
              Enrol your team
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
