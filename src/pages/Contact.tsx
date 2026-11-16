import { useState } from 'react'
import { Check, MapPin, Send } from 'lucide-react'
import { Meta } from '@/components/Meta'
import { PageBanner } from '@/components/PageBanner'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const EMAIL = 'hello@floriqx.com'

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const next: Errors = {}
    if (!name) next.name = 'Please add your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please add an email address we can reply to.'
    if (message.length < 20) next.message = 'A sentence or two about the process, please — at least 20 characters.'
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  return (
    <>
      <Meta
        title="Contact FloriQX — start a project"
        description="Tell FloriQX what you want to automate. Write to hello@floriqx.com or send the short form and get a written answer on what is worth building."
      />
      <main>
        <PageBanner
          title="Contact us"
          lead="Tell us the process that hurts. You get a written answer on what is worth building and what is not — usually within two working days."
          image="/images/banner-contact.webp"
          imageAlt="An abstract city block glowing in blue and cyan light, with signal lines rising out of it"
          imageWidth={1200}
          imageHeight={750}
        />

        <section className="bg-background py-section">
          <div className="mx-auto grid w-full max-w-content gap-10 px-gutter lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              {sent ? (
                <div role="status" className="rounded-lg border border-border bg-card p-7">
                  <span className="grid size-11 place-items-center rounded-full bg-secondary text-primary">
                    <Check className="size-5" strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-4 font-display text-2xl text-navy">Form filled in — one step left</h2>
                  <p className="mt-2 text-muted-foreground">
                    This site has no server yet, so nothing was sent. Nothing you typed has been stored or
                    delivered. Please send the same details to{' '}
                    <a className="font-semibold text-primary underline underline-offset-4" href={`mailto:${EMAIL}`}>
                      {EMAIL}
                    </a>{' '}
                    and we will reply from there.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="rounded-lg border border-border p-6 sm:p-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Your name</Label>
                      <Input
                        id="name"
                        name="name"
                        autoComplete="name"
                        className="mt-2 h-11"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-sm text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="mt-2 h-11"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-sm text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <Label htmlFor="company">
                      Company <span className="font-normal text-muted-foreground">(optional)</span>
                    </Label>
                    <Input id="company" name="company" autoComplete="organization" className="mt-2 h-11" />
                  </div>

                  <div className="mt-5">
                    <Label htmlFor="message">What would you like to automate or build?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-2"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-sm text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <p className="mt-5 rounded-md bg-secondary p-3.5 text-sm text-navy">
                    This form has no server behind it yet. It checks what you wrote, then tells you to send
                    it to <strong className="font-semibold">{EMAIL}</strong> — nothing is delivered
                    automatically.
                  </p>

                  <button
                    type="submit"
                    className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-navy sm:w-auto"
                  >
                    Check and continue
                    <Send className="size-4" strokeWidth={1.75} />
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-display text-lg text-navy">Write to us directly</h2>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-2 inline-block text-lg font-semibold text-primary underline underline-offset-4 hover:text-navy"
                >
                  {EMAIL}
                </a>
                <p className="mt-3 text-sm text-muted-foreground">
                  Replies come from a person, not a queue. Include your time zone and a rough timeline if
                  you have one.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-5">
                <h2 className="flex items-center gap-2 font-display text-lg text-navy">
                  <MapPin className="size-4 text-primary" strokeWidth={1.75} /> Office
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  FloriQX Technologies
                  <br />
                  Ahmedabad, Gujarat, India
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mon–Fri, 10:00–19:00 IST. Workshops run on Saturdays by arrangement.
                </p>
                <div
                  aria-hidden="true"
                  className="mt-4 h-32 rounded-md border border-border"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, color-mix(in oklch, var(--primary) 16%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--primary) 16%, transparent) 1px, transparent 1px)',
                    backgroundSize: '22px 22px',
                    backgroundColor: 'var(--secondary)',
                  }}
                >
                  <div className="grid h-full place-items-center">
                    <span className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-navy shadow-raised">
                      Ahmedabad
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  A map with directions will replace this sketch once the office address is published.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
