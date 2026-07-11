export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--background)]" />
      <div
        className="aurora-layer aurora-layer-a"
        style={{
          width: "55vw",
          height: "55vw",
          minWidth: "320px",
          minHeight: "320px",
          top: "-12%",
          left: "-8%",
          background: "var(--aurora-1)",
        }}
      />
      <div
        className="aurora-layer aurora-layer-b"
        style={{
          width: "50vw",
          height: "50vw",
          minWidth: "280px",
          minHeight: "280px",
          top: "10%",
          right: "-12%",
          background: "var(--aurora-2)",
        }}
      />
      <div
        className="aurora-layer aurora-layer-c"
        style={{
          width: "45vw",
          height: "45vw",
          minWidth: "260px",
          minHeight: "260px",
          bottom: "5%",
          left: "20%",
          background: "var(--aurora-3)",
        }}
      />
      <div
        className="aurora-layer aurora-layer-a"
        style={{
          width: "40vw",
          height: "40vw",
          minWidth: "220px",
          minHeight: "220px",
          bottom: "-8%",
          right: "8%",
          background: "var(--aurora-4)",
          animationDelay: "-8s",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, var(--background) 78%)",
          opacity: 0.55,
        }}
      />
    </div>
  );
}
