"use client";

import BackLink from "@/components/BackLink";
import Image from "next/image";

export default function L1CertificationPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 py-6 sm:py-10 pt-20 sm:pt-24">
      <BackLink />
      
      {/* Header */}
      <div className="mt-8 mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Level 1 High Power Rocketry (L1 HPR) Certification</h1>
        <p className="text-foreground/60 mb-4">November 16, 2025 | Hartsel, CO</p>
        
        {/* Project Image */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-background/90 to-background/70 border border-foreground/10">
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent"></div>
          <Image
            src="/rocket_launch/me_L1.jpeg"
            alt="Alex with L1 rocket"
            fill
            className="object-cover relative z-10"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
          />
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Successfully obtained my Level 1 High Power Rocketry (L1 HPR) certification by designing, building, and launching 
          my own high-power rocket. This certification demonstrates proficiency in rocket construction, recovery systems, 
          motor selection, and safe launch operations.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          The L1 certification requires launching a rocket with an H or I class motor, successfully recovering the rocket, 
          and demonstrating knowledge of high-power rocketry safety practices. This hands-on experience has been invaluable 
          for my work on the NASA USLI team, providing practical understanding of rocket systems, recovery mechanisms, and 
          launch operations.
        </p>
        
        {/* NAR Certification Card */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-background/90 to-background/70 border border-foreground/10 cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image
              src="/nar_card.jpg"
              alt="NAR Level 1 High Power Rocketry Certification Card"
              fill
              className="object-contain p-4"
              sizes="(max-width: 640px) 100vw, 500px"
              onClick={() => window.open('/nar_card.jpg', '_blank')}
            />
          </div>
        </div>
        <p className="text-sm text-foreground/60 text-center mt-2">
          NAR Level 1 High Power Rocketry Certification Card
        </p>
      </section>

      {/* Launch Video */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Check out the launch!</h3>
        <div className="flex justify-center">
          <div className="inline-block bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-lg border border-foreground/10 overflow-hidden max-w-2xl w-full">
            <video
              className="block w-full h-auto m-0 p-0"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ display: 'block' }}
            >
              <source src="/rocket_launch/me_L1.mov" type="video/quicktime" />
              <source src="/rocket_launch/me_L1.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Skills & Knowledge */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Skills & Knowledge Demonstrated</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">Rocket Construction</h4>
            <p className="text-foreground/80 text-sm">
              Designed and built a high-power rocket from scratch, including airframe construction, fin attachment, 
              and internal component integration.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">Recovery Systems</h4>
            <p className="text-foreground/80 text-sm">
              Implemented and tested recovery systems including parachute deployment mechanisms and shock cord 
              attachment methods.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">Motor Selection & Integration</h4>
            <p className="text-foreground/80 text-sm">
              Selected appropriate H-class motor for the rocket design and properly integrated motor retention 
              and ignition systems.
            </p>
          </div>
          
          <div className="bg-background/40 rounded-lg p-6 border border-foreground/10" style={{ borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-lg)' }}>
            <h4 className="font-semibold mb-2">Safety & Operations</h4>
            <p className="text-foreground/80 text-sm">
              Demonstrated knowledge of high-power rocketry safety practices, launch site preparation, and 
              proper recovery procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Impact on USLI Work</h3>
        <p className="text-foreground/80 leading-relaxed">
          The practical experience gained from obtaining my L1 certification directly informs my work as Payload Team Lead 
          on the NASA USLI project. Understanding rocket construction, recovery systems, and launch operations from a hands-on 
          perspective helps me make informed design decisions and effectively coordinate with the vehicle team. This certification 
          demonstrates my commitment to understanding all aspects of rocketry, not just the electrical systems I design.
        </p>
      </section>
    </main>
  );
}

