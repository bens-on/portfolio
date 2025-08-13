import Image from "next/image";
import BackLink from "@/components/BackLink";

export default function USLIPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10">
      <h1 className="text-2xl font-semibold tracking-tight">NASA USLI Payload</h1>
      <p className="mt-2 text-foreground/80">
        Deployable payload to land, collect a 50 mL soil sample, and perform onboard analysis for a March 2026 L2 rocket launch. Leading a 4-member team and collaborating with vehicle integration to optimize performance and stability.
      </p>
      <div className="mt-6 relative w-full h-60 rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
        <Image src="/projects/placeholder.svg" alt="USLI Payload" fill className="object-cover" />
      </div>
      <ul className="mt-6 list-disc pl-6 text-foreground/80">
        <li>Mechanism design for deployment and sampling</li>
        <li>Systems integration and testing planning</li>
        <li>Onboard analysis concept</li>
      </ul>
      <BackLink />
    </main>
  );
}


