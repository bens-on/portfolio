import Image from "next/image";
import BackLink from "@/components/BackLink";

export default function AutomatedGreenhousePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10">
      <h1 className="text-2xl font-semibold tracking-tight">Automated Greenhouse</h1>
      <p className="mt-2 text-foreground/80">
        Reworked the electrical design of a greenhouse control system for safety, efficiency, and documentation. Implemented the new system in the second project iteration.
      </p>
      <div className="mt-6 relative w-full h-60 rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
        <Image src="/projects/placeholder.svg" alt="Automated Greenhouse" fill className="object-cover" />
      </div>
      <ul className="mt-6 list-disc pl-6 text-foreground/80">
        <li>Power and wiring redesign</li>
        <li>Controls integration</li>
        <li>Documentation for implementation</li>
      </ul>
      <BackLink />
    </main>
  );
}


