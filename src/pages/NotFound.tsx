import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="mx-auto grid w-full max-w-content place-items-center px-gutter py-24 text-center lg:py-32">
      <div>
        <img
          src="/images/floriqx-symbol.webp"
          alt=""
          width={313}
          height={296}
          className="mx-auto h-14 w-auto"
        />
        <p className="mt-6 font-label text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          Error 404
        </p>
        <h1 className="mt-3 font-display text-3xl text-navy md:text-4xl">This page does not exist</h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The address may be mistyped, or the page may have moved. Two places worth going instead:
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-navy"
          >
            Back to home
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </Link>
          <Link
            to="/services"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-6 font-semibold text-navy transition-colors hover:bg-secondary"
          >
            See our services
          </Link>
        </div>
      </div>
    </main>
  )
}
