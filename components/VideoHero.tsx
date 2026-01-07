"use client";

import { useEffect, useRef } from "react";

type VideoHeroProps = {
  videoSrc: string;
};

export default function VideoHero({ videoSrc }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay may be blocked by browser, but video will play on user interaction
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-3rem)] sm:h-[calc(100vh-3.5rem)] flex items-center justify-center bg-[var(--background)] mt-4 sm:mt-6 px-4 sm:px-6 lg:px-8">
      {/* Video Container - Constrained width like Anduril */}
      <div className="relative w-full max-w-7xl h-full overflow-hidden rounded-lg sm:rounded-xl">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
          autoPlay
          preload="metadata"
          aria-label="Portfolio background video"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />
      </div>
    </section>
  );
}
