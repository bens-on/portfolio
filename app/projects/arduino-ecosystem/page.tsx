import Image from "next/image";
import BackLink from "@/components/BackLink";

export default function ArduinoEcosystemPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 sm:p-10">
      <h1 className="text-2xl font-semibold tracking-tight">Arduino Monitored Ecosystem</h1>
      <p className="mt-2 text-foreground/80">
        Environmental data collection and feedback control for plant growth. Implemented C++ firmware to monitor conditions and actuate when out of tolerance.
      </p>
      <div className="mt-6 relative w-full h-60 rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
        <Image src="/projects/placeholder.svg" alt="Arduino Ecosystem" fill className="object-cover" />
      </div>
      <ul className="mt-6 list-disc pl-6 text-foreground/80">
        <li>Sensors and data logging</li>
        <li>Feedback control loop for environmental stability</li>
        <li>Foundational relay-based control experience</li>
      </ul>
      <BackLink />
    </main>
  );
}


