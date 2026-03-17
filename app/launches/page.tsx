import ScrollAnimations from "@/components/ScrollAnimations";
import BackLink from "@/components/BackLink";
import Image from "next/image";

interface LaunchMedia {
  id: string;
  type: "video" | "image";
  src: string;
  date: string;
  location: string;
  description: string;
  alt?: string;
}

const launchMedia: LaunchMedia[] = [
  {
    id: "subscale2",
    type: "video",
    src: "/rocket_launch/subscale2.mov",
    date: "January 3, 2026",
    location: "Pueblo, CO",
    description: "This was our second subscale launch. The electronics performed well and we learned a lot from the sensors on board the payload. The payload body suffered minor damages but was deemed reusable. The payload successfully ejected and performed as expected, showing proof of concept for our full scale payload operations.",
  },
  {
    id: "subscale1",
    type: "video",
    src: "/rocket_launch/subscale1.mov",
    date: "November 16, 2025",
    location: "Hartsel, CO",
    description: "This was our first subscale launch and we learned a lot about what to improve upon for the second launch. The electronics prototypes shifted as our designs rapidly changed, but we secured the electronics better for the second launch to get more data.",
  },
  {
    id: "me_L1",
    type: "video",
    src: "/rocket_launch/me_L1.mov",
    date: "November 16, 2025",
    location: "Hartsel, CO",
    description: "Video of my L1 rocket, where I successfully got my L1 HPR Certification.",
  },
  {
    id: "team_subscale1",
    type: "image",
    src: "/rocket_launch/team_subscale1.jpeg",
    date: "November 16, 2025",
    location: "Hartsel, CO",
    description: "Team photo with our subscale rocket for the first launch we did with it.",
    alt: "Team photo with subscale rocket",
  },
  {
    id: "subscale_payload_body",
    type: "image",
    src: "/rocket_launch/subscale_payload_body.jpeg",
    date: "November 16, 2025",
    location: "Hartsel, CO",
    description: "Recovery photo of me holding the subscale payload body after we recovered it, fully intact with no body damage.",
    alt: "Subscale payload body after recovery",
  },
  {
    id: "me_L1_photo",
    type: "image",
    src: "/rocket_launch/me_L1.jpeg",
    date: "November 16, 2025",
    location: "Hartsel, CO",
    description: "Photo of me with my L1 rocket that I hand made.",
    alt: "Alex with L1 rocket",
  },
];

export default function LaunchesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] overflow-x-hidden relative">
      <div className="relative bg-[var(--background)] w-full pt-12 sm:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <ScrollAnimations>
            <div className="mb-6 sm:mb-8">
              <BackLink />
            </div>
          </ScrollAnimations>
          <ScrollAnimations delay={50}>
            <h1 className="font-header text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--foreground)] mb-8 sm:mb-12">
              Recent Launches
            </h1>
          </ScrollAnimations>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {launchMedia.map((media, index) => (
              <ScrollAnimations key={media.id} delay={index * 100}>
                <div className="flex flex-col space-y-4">
                  {/* Media Container */}
                  {media.type === "video" ? (
                    <div className="w-full bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-lg border border-foreground/10 overflow-hidden">
                      <div className="relative w-full flex items-center justify-center max-h-[70vh] sm:max-h-none" style={{ aspectRatio: "9/16" }}>
                        <video
                          className="block w-full h-full object-contain m-0 p-0"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          style={{ display: 'block' }}
                        >
                          <source src={media.src} type="video/quicktime" />
                          <source src={media.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-lg border border-foreground/10 overflow-hidden">
                      <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                        <Image
                          src={media.src}
                          alt={media.alt || media.description}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  )}

                  {/* Date and Location */}
                  <div className="space-y-1">
                    <div className="text-accent-red font-semibold text-sm sm:text-base">
                      {media.date}
                    </div>
                    <div className="text-foreground/50 text-xs sm:text-sm">
                      {media.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                    {media.description}
                  </p>
                </div>
              </ScrollAnimations>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

