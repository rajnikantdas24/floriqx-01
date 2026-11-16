import { Link } from 'react-router'
import { ArrowRight, GraduationCap, Sprout, Users } from 'lucide-react'
import { Meta } from '@/components/Meta'
import { PageBanner } from '@/components/PageBanner'

const PILLARS = [
  {
    title: 'Growth',
    body: 'We build things that grow with a business: a first working release, then added scope you have already seen running.',
    icon: Sprout,
  },
  {
    title: 'Intelligent technology',
    body: 'AI where it earns its place, and honest advice where it does not. A rule is often cheaper than a model.',
    icon: Users,
  },
  {
    title: 'Teaching',
    body: 'Nothing we hand over should need us to explain it next quarter. Training is part of delivery, not an upsell.',
    icon: GraduationCap,
  },
]

export default function About() {
  return (
    <>
      <Meta
        title="About FloriQX Technologies"
        description="How FloriQX came about, what it stands for, and the team behind the software, AI and teaching work in Ahmedabad."
      />
      <main>
        <PageBanner
          title="A software company that also teaches"
          lead="FloriQX Technologies is based in Ahmedabad. We build software and AI for businesses across India, and we run the classroom beside the workshop."
          image="/images/banner-about.webp"
          imageAlt="A blue and cyan rearing horse built from geometric planes on a navy ground"
          imageWidth={1200}
          imageHeight={675}
        />

        {/* Story: editorial column with the founding note set into the margin. */}
        <section className="bg-background py-section">
          <div className="mx-auto grid w-full max-w-content gap-10 px-gutter lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl text-navy">Why we exist</h2>
              <p className="mt-4 text-lg text-navy">
                We kept meeting the same scene: an AI pilot that impressed everyone in the demo, and six
                months later nobody using it. The model was never the problem. The team had not been part
                of choosing it, and nobody could say what to do when an answer looked wrong.
              </p>
              <p className="mt-4 text-muted-foreground">
                FloriQX was set up to close that gap — software and AI built with the people who will run
                it, and the teaching that makes it ordinary. The same engineers write the integration and
                stand in front of the room, which keeps both honest.
              </p>
            </div>
            <aside className="self-start rounded-lg border border-border bg-card p-6">
              <p className="font-label text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                Mission
              </p>
              <p className="mt-2 text-navy">
                Make intelligent software ordinary in Indian businesses — built, documented and
                understood by the team that owns it.
              </p>
              <p className="mt-5 font-label text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                Vision
              </p>
              <p className="mt-2 text-navy">
                A generation of teams who treat AI the way they treat a spreadsheet: a tool they know the
                limits of.
              </p>
            </aside>
          </div>
        </section>

        <section className="border-y border-border bg-secondary py-section">
          <div className="mx-auto w-full max-w-content px-gutter">
            <h2 className="font-display text-3xl text-navy">What FloriQX stands for</h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {PILLARS.map((p) => (
                <li key={p.title} className="rounded-lg border border-border bg-background p-6">
                  <p.icon className="size-6 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-4 font-display text-lg text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Team: role-based, no invented portraits or names. */}
        <section className="bg-background py-section">
          <div className="mx-auto w-full max-w-content px-gutter">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-3xl text-navy">How the team is set up</h2>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  Four roles on every engagement. Small on purpose — the people you meet in scoping are the
                  people who build.
                </p>
              </div>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Product & scoping', 'Turns the process into a first release worth shipping.'],
                ['Engineering', 'Front, back and mobile, in one codebase you keep.'],
                ['AI & data', 'Retrieval, evaluation and the guardrails around them.'],
                ['Education', 'Writes the course and runs the training day.'],
              ].map(([role, body]) => (
                <li key={role} className="rounded-lg bg-card p-5">
                  <span aria-hidden="true" className="block h-1 w-10 rounded-full bg-[image:var(--gradient-brand)]" />
                  <h3 className="mt-4 font-display text-base text-navy">{role}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Team photographs and individual introductions will be added as each member joins the site.
            </p>
          </div>
        </section>

        <section className="bg-navy text-on-navy">
          <div className="mx-auto flex w-full max-w-content flex-col items-start gap-6 px-gutter py-12 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="max-w-lg font-display text-2xl text-on-navy">
                Talk to the people who would do the work.
              </h2>
              <p className="mt-2 max-w-md text-on-navy-muted">
                Send a paragraph about the process. We answer in writing, whether or not it becomes a
                project.
              </p>
              <span className="mt-6 block w-fit rounded-md bg-background px-3 py-2">
                <img
                  src="/images/floriqx-logo.webp"
                  alt="FloriQX"
                  width={489}
                  height={477}
                  loading="lazy"
                  className="h-14 w-auto"
                />
              </span>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-md bg-background px-6 font-semibold text-navy"
            >
              Contact us <ArrowRight className="size-4" strokeWidth={1.75} />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
