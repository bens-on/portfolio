import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="w-full mb-12 sm:mb-16">
      <div className="glass-panel w-full rounded-2xl p-5 sm:p-6 md:p-8">
        <h2 className="relative z-10 font-header font-semibold tracking-tight text-[var(--foreground)] mb-5 sm:mb-6 text-2xl sm:text-3xl md:text-4xl">
          About Me
        </h2>
        <div className="relative z-10 space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed text-foreground/80">
          <p>
            I&apos;m an Electrical Engineering graduate student at Colorado State,
            working at the layer where firmware, analog hardware, and real-time
            control have to agree. I finished my B.S. in May 2026 (Aerospace
            concentration, Mathematics minor) and I&apos;m pursuing an MSEE focused
            on embedded systems. I keep a{" "}
            <Link
              href="/masters"
              className="text-[var(--accent-primary-light)] underline underline-offset-2 hover:text-[var(--accent-primary)]"
            >
              Masters Portfolio
            </Link>{" "}
            of the courses I&apos;m taking and what I&apos;m learning in them.
            During the school year I&apos;m a Graduate Teaching
            Assistant for ECE205 Analog Circuits, leading three lab sections and
            weekly office hours — a useful reminder that if you can&apos;t explain a
            loop or a bias point, you don&apos;t actually understand it.
          </p>
          <p>
            At the Bureau of Reclamation I work on the next digital excitation
            system for hydropower plants across the West: QNX device drivers for
            NI PCIe DAQ hardware, Simulink exciter models on an SEL-3355 target,
            and the HMI operators will use in the plant. I was on-site this
            summer and stay on the project remotely through the school year. The
            interesting part is the unglamorous part — register maps, HIL racks,
            and a controller that has to be right when it ships.
          </p>
          <p>
            Before that I interned at FIRST RF on a half-duplex phased array:
            multilayer RF boards in Altium, Zephyr SPI drivers, and S-parameter
            scripts so we weren&apos;t validating passives by hand. An earlier BOR
            tour put me on the same governor and exciter family — WECC/NERC
            testing, a field transducer I designed, and STM32/QNX firmware to
            bring plant signals into the controller. Woodward was my first look
            at aerospace DAQ and test, including a Python analysis tool that
            replaced a DIAdem workflow.
          </p>
          <p>
            On campus I led the nine-person Payload Team for CSU&apos;s NASA USLI
            rocket and did SURE research in the ECSyD lab, automating photonic
            chip measurements so we weren&apos;t parked on a probe station all
            afternoon. I do my best work when I can put a scope on the problem,
            change the thing that&apos;s actually wrong, and keep going until the
            system behaves.
          </p>
        </div>
      </div>
    </section>
  );
}
