import BackLink from "@/components/BackLink";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl p-6 sm:p-10 pt-20 sm:pt-24">
      <div className="mb-4">
        <BackLink />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Resume</h1>
        <a
          href="/resume.pdf"
          className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 px-4 py-2.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF
        </a>
      </div>

      {/* Mobile: download-first (iOS Safari often blanks PDF iframes) */}
      <div className="mt-6 md:hidden rounded-xl border border-foreground/15 bg-background/60 p-6 text-center">
        <p className="text-sm text-foreground/70 leading-relaxed">
          On mobile, open or download the PDF for the best viewing experience.
        </p>
        <a
          href="/resume.pdf"
          className="mt-4 inline-flex items-center justify-center rounded-lg border border-foreground/20 bg-foreground text-background px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Resume PDF
        </a>
      </div>

      {/* Desktop / tablet: in-page preview */}
      <div className="mt-6 hidden md:block w-full rounded-xl overflow-hidden bg-background/60">
        <div className="relative bg-gray-900 dark:bg-gray-900">
          <iframe
            src="/resume.pdf#view=FitH"
            className="w-full dark:filter dark:invert dark:hue-rotate-180 dark:brightness-90 dark:contrast-110"
            style={{ height: "80vh" }}
            title="Resume PDF"
          />
        </div>
      </div>
    </main>
  );
}
