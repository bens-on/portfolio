import BackLink from "@/components/BackLink";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10 pt-20 sm:pt-24">
      <div className="mb-4">
        <BackLink />
      </div>
      <h1 className="font-header text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
        Contact
      </h1>
      <p className="mt-2 text-lg text-foreground/80">
        Always interested in new opportunities in embedded systems, AI for sensing and
        control, and RF for aerospace and defense.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="glass-panel rounded-2xl p-5 sm:p-6">
          <h2 className="relative z-10 text-xl font-semibold tracking-tight mb-4">
            Professional Information
          </h2>
          <div className="relative z-10 space-y-4">
            <div>
              <h3 className="font-medium text-foreground">Current Status</h3>
              <p className="text-sm text-foreground/80">
                MSEE Student · Expected Dec 2027
              </p>
              <p className="text-sm text-foreground/80">
                B.S. Electrical Engineering (Aerospace), May 2026
              </p>
              <p className="text-sm text-foreground/80">Colorado State University</p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">Focus</h3>
              <p className="text-sm text-foreground/80">Embedded Systems &amp; AI</p>
              <p className="text-sm text-foreground/80">RF / Radar Engineering</p>
              <p className="text-sm text-foreground/80">Aerospace &amp; Defense</p>
            </div>

            <div>
              <h3 className="font-medium text-foreground">Location</h3>
              <p className="text-sm text-foreground/80">Fort Collins, Colorado</p>
              <p className="text-sm text-foreground/80">
                Open to relocation for opportunities
              </p>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-5 sm:p-6">
          <h2 className="relative z-10 text-xl font-semibold tracking-tight mb-4">
            Contact Information
          </h2>
          <div className="relative z-10 space-y-4">
            <div>
              <p className="text-sm text-foreground/60">Personal Email</p>
              <a
                href="mailto:alexander.benson@me.com"
                className="text-foreground hover:text-[var(--accent-primary)] transition-colors"
              >
                alexander.benson@me.com
              </a>
            </div>
            <div>
              <p className="text-sm text-foreground/60">Academic Email</p>
              <a
                href="mailto:asbenson@colostate.edu"
                className="text-foreground hover:text-[var(--accent-primary)] transition-colors"
              >
                asbenson@colostate.edu
              </a>
            </div>
            <div>
              <p className="text-sm text-foreground/60">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/alex-benson-c2226"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-[var(--accent-primary)] transition-colors"
              >
                Alex Benson
              </a>
            </div>
            <div>
              <p className="text-sm text-foreground/60">GitHub</p>
              <a
                href="https://github.com/bens-on"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-[var(--accent-primary)] transition-colors"
              >
                @bens-on
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 glass-panel rounded-2xl p-6">
        <h2 className="relative z-10 text-lg font-semibold tracking-tight mb-2">
          Interested in Working Together?
        </h2>
        <p className="relative z-10 text-foreground/80 mb-4">
          Reach out for collaborations, internships, or to learn more about my
          background in embedded systems and RF.
        </p>
        <div className="relative z-10 flex flex-wrap gap-3">
          <a
            href="mailto:alexander.benson@me.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            Send Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--glass-bg-strong)] transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
}
