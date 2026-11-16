import { Link } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import { Meta } from '@/components/Meta'
import { PageBanner } from '@/components/PageBanner'

const BLOCKS = [
  {
    id: 'software',
    n: '01',
    title: 'Software development',
    lead: 'Web platforms, internal tools and mobile apps, built to be handed over.',
    body: 'We scope in stages and ship a working first release early, so you are reviewing software rather than a document. TypeScript and React on the front, a typed API behind it, tested as it goes.',
    points: [
      'Customer portals, admin dashboards and operations tools',
      'Mobile apps for field and shop-floor teams',
      'Migration off spreadsheets, with the data cleaned on the way',
      'Source, documentation and a walkthrough at handover',
    ],
  },
  {
    id: 'ai-integration',
    n: '02',
    title: 'AI integration',
    lead: 'Assistants and review workflows wired into the systems you already use.',
    body: 'The interesting work is not the model call — it is the retrieval, the guardrails, and the point where a person signs off. We build that part, then measure it against a set of real cases from your business.',
    points: [
      'Document search across contracts, invoices and manuals',
      'Drafting assistants for support and sales replies',
      'Extraction and classification feeding your existing database',
      'Evaluation sets, logging and a human approval step',
    ],
  },
  {
    id: 'ai-tools',
    n: '03',
    title: 'AI tools & solutions',
    lead: 'Smaller, configured tools for a single job that has to be right.',
    body: 'For teams who need one thing working now, we configure a tool on your own data and hand over the settings. No new platform to learn and nothing exported to a third party.',
    points: [
      'Support triage and reply drafting',
      'Invoice and purchase-order checking',
      'Course content and question banks for teaching teams',
      'Deployed inside your accounts, with usage reporting',
    ],
  },
  {
    id: 'education',
    n: '04',
    title: 'Education for teams',
    lead: 'Training the people who will run whatever we build.',
    body: 'The workshop happens before launch, not after. Teams practise on their own documents, so the first week of use is not the first time anyone has seen the tool.',
    points: [
      'Half-day leadership sessions on scope and risk',
      'Two-day workshops for developers',
      'Four-week cohorts with weekly practice',
      'eBooks and worksheets your team keeps',
    ],
  },
]

export default function Services() {
  return (
    <>
      <Meta
        title="Services — software, AI integration and education | FloriQX"
        description="Custom software development, AI integration, AI tools and team training from FloriQX, delivered as staged, documented projects for businesses in India."
      />
      <main>
        <PageBanner
          title="Software, AI, and the training that makes it stick"
          lead="Four services that are usually bought one at a time. Each has a fixed first stage, a written scope, and a handover you can maintain."
          image="/images/banner-services.webp"
          imageAlt="Four blue geometric modules joined by glowing connections on a navy ground"
          imageWidth={1200}
          imageHeight={675}
        />

        <div className="mx-auto w-full max-w-content px-gutter">
          {BLOCKS.map((b) => (
            <section
              key={b.id}
              id={b.id}
              className="scroll-mt-24 border-b border-border py-section last:border-b-0"
            >
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div>
                  <p className="font-display text-sm font-bold text-primary">{b.n}</p>
                  <h2 className="mt-2 font-display text-3xl text-navy">{b.title}</h2>
                  <p className="mt-3 text-lg text-navy">{b.lead}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex min-h-11 items-center gap-1.5 font-semibold text-primary hover:text-navy"
                  >
                    Discuss a {b.title.toLowerCase()} project
                    <ArrowRight className="size-4" strokeWidth={1.75} />
                  </Link>
                </div>
                <div>
                  <p className="text-muted-foreground">{b.body}</p>
                  <ul className="mt-6 grid gap-3">
                    {b.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-navy">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.75} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="bg-navy text-on-navy">
          <div className="mx-auto flex w-full max-w-content flex-col items-start gap-6 px-gutter py-12 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-2xl text-on-navy">Not sure which one you need?</h2>
              <p className="mt-2 text-on-navy-muted">
                Describe the process. We will say which of the four it is — or that it is none of them.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-md bg-background px-6 font-semibold text-navy"
            >
              Contact us
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
