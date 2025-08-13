import BackLink from "@/components/BackLink";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-lg text-foreground/80">
        I&apos;m always interested in new opportunities in embedded systems or RF for aerospace and defense.
      </p>
      
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Professional Information */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-4">Professional Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-foreground">Current Status</h3>
              <p className="text-sm text-foreground/80">Senior Electrical Engineering Student</p>
              <p className="text-sm text-foreground/80">Accelerated Master&apos;s Program (MSEE exp 2027)</p>
              <p className="text-sm text-foreground/80">Colorado State University</p>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground">Academic Focus</h3>
              <p className="text-sm text-foreground/80">Embedded Systems Engineering</p>
              <p className="text-sm text-foreground/80">RF Engineering</p>
              <p className="text-sm text-foreground/80">Honors Student</p>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground">Location</h3>
              <p className="text-sm text-foreground/80">Fort Collins, Colorado</p>
              <p className="text-sm text-foreground/80">Open to relocation for opportunities</p>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground">Availability</h3>
              <p className="text-sm text-foreground/80">Graduating Spring 2026</p>
              <p className="text-sm text-foreground/80">Seeking full-time and internship positions</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-foreground/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Personal Email</p>
                <a 
                  href="mailto:alexander.benson@me.com" 
                  className="text-foreground hover:text-cyan-600 transition-colors"
                >
                  alexander.benson@me.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-foreground/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Academic Email</p>
                <a 
                  href="mailto:asbenson@colostate.edu" 
                  className="text-foreground hover:text-cyan-600 transition-colors"
                >
                  asbenson@colostate.edu
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-foreground/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.1h4V24h-4V8.1zM8.9 8.1h3.8v2.16h.05c.53-1 1.83-2.16 3.77-2.16 4.03 0 4.77 2.65 4.77 6.1V24h-4v-7.62c0-1.82-.03-4.16-2.53-4.16-2.53 0-2.91 1.98-2.91 4.03V24h-4V8.1z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-foreground/60">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/alex-benson-c2226" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-cyan-600 transition-colors"
                >
                  Alex Benson
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-foreground/10 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .85-.28 2.8 1.05.81-.23 1.68-.35 2.55-.35.87 0 1.74.12 2.55.35 1.95-1.33 2.8-1.05 2.8-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.68.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-foreground/60">GitHub</p>
                <a 
                  href="https://github.com/bens-on" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-cyan-600 transition-colors"
                >
                  @bens-on
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <div className="mt-12 p-6 bg-foreground/5 rounded-xl border border-foreground/10">
        <h2 className="text-lg font-semibold tracking-tight mb-2">Interested in Working Together?</h2>
        <p className="text-foreground/80 mb-4">
          I&apos;m particularly interested in opportunities in embedded systems and RF for aerospace applications. 
          Feel free to reach out for collaborations, general inquiry, or to learn more about my background.
        </p>
        <div className="flex flex-wrap gap-3">
          <a 
            href="mailto:alexander.benson@me.com" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      <BackLink />
    </main>
  );
}
