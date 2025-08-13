import BackLink from "@/components/BackLink";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl p-6 sm:p-10">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
        <a
          href="/resume.pdf"
          className="rounded-lg border border-black/10 dark:border-white/10 px-3 py-1.5 text-sm hover:bg-foreground hover:text-background transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF
        </a>
      </div>
      <div className="mt-6 w-full rounded-xl overflow-hidden bg-background/60">
        <div className="relative bg-gray-900 dark:bg-gray-900">
          <iframe
            src="/resume.pdf#view=FitH"
            className="w-full dark:filter dark:invert dark:hue-rotate-180 dark:brightness-90 dark:contrast-110"
            style={{ height: "80vh" }}
            title="Resume PDF"
          />
        </div>
      </div>
      
      <BackLink />
    </main>
  );
}


