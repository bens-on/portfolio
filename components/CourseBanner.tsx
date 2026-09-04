import type { ReactNode } from "react";

export type CourseMotif =
  | "fpga"
  | "power-ai"
  | "nonlinear"
  | "adaptive-ml"
  | "radar"
  | "trajectory"
  | "em"
  | "power";

type CourseBannerProps = {
  motif: CourseMotif;
  className?: string;
  compact?: boolean;
};

const ink = {
  cyan: "var(--banner-cyan)",
  teal: "var(--banner-teal)",
  violet: "var(--banner-violet)",
  pink: "var(--banner-pink)",
  faint: "var(--banner-faint)",
  grid: "var(--banner-grid)",
  muted: "var(--banner-muted)",
};

function FigureLabel({ children }: { children: string }) {
  return (
    <text
      x="12"
      y="168"
      fill={ink.muted}
      fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      fontSize="8"
      letterSpacing="1.4"
    >
      {children}
    </text>
  );
}

function FpgaMotif() {
  const label = {
    fill: ink.muted,
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
    fontSize: 8,
  } as const;

  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M168 30 H232" stroke={ink.faint} strokeWidth="1.15" />
      <path d="M200 30 V46" stroke={ink.teal} strokeWidth="1.2" />
      <text x="238" y="33" {...label}>
        VDD
      </text>

      <path d="M200 46 V78" stroke={ink.cyan} strokeWidth="1.35" />
      <path d="M188 50 V74" stroke={ink.cyan} strokeWidth="1.35" />
      <circle cx="180" cy="62" r="4" stroke={ink.cyan} strokeWidth="1.2" />
      <path d="M176 62 H148" stroke={ink.pink} strokeWidth="1.2" />
      <path d="M200 78 V96" stroke={ink.cyan} strokeWidth="1.2" />

      <path d="M200 96 V128" stroke={ink.cyan} strokeWidth="1.35" />
      <path d="M188 100 V124" stroke={ink.cyan} strokeWidth="1.35" />
      <path d="M188 112 H176" stroke={ink.cyan} strokeWidth="1.2" />
      <path d="M176 62 V112" stroke={ink.pink} strokeWidth="1.2" />
      <path d="M148 62 H88" stroke={ink.pink} strokeWidth="1.2" />
      <text x="80" y="66" {...label} textAnchor="end">
        Vin
      </text>

      <path d="M200 87 H276" stroke={ink.violet} strokeWidth="1.2" />
      <text x="282" y="91" {...label}>
        Vout
      </text>

      <path d="M200 128 V146" stroke={ink.teal} strokeWidth="1.2" />
      <path d="M186 146 H214" stroke={ink.faint} strokeWidth="1.15" />
      <path d="M190 150 H210" stroke={ink.faint} strokeWidth="1.1" />
      <path d="M194 154 H206" stroke={ink.faint} strokeWidth="1.1" />

      <circle cx="200" cy="30" r="1.7" fill={ink.teal} />
      <circle cx="200" cy="87" r="1.7" fill={ink.violet} />
      <circle cx="88" cy="62" r="1.7" fill={ink.pink} />
      <FigureLabel>CMOS INV</FigureLabel>
    </g>
  );
}

function PowerAiMotif() {
  const towers = [56, 132, 208, 284];

  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 128 H384" stroke={ink.grid} strokeWidth="1" />
      {towers.map((x) => (
        <g key={x} stroke={ink.teal} strokeWidth="1.15">
          <path d={`M${x} 128 V52`} />
          <path d={`M${x - 16} 64 L${x} 52 L${x + 16} 64`} />
          <path d={`M${x - 12} 96 H${x + 12}`} />
          <path d={`M${x - 7} 128 L${x} 116 L${x + 7} 128`} />
        </g>
      ))}
      <path
        d="M40 56 C 88 48, 100 62, 148 54 S 196 48, 224 56 S 268 66, 300 52"
        stroke={ink.cyan}
        strokeWidth="1.1"
      />
      <path
        d="M40 62 C 88 70, 100 56, 148 64 S 196 72, 224 62 S 268 50, 300 66"
        stroke={ink.cyan}
        strokeWidth="1.1"
      />
      <rect
        x="318"
        y="78"
        width="52"
        height="36"
        rx="3"
        stroke={ink.violet}
        strokeWidth="1.15"
        fill="color-mix(in srgb, var(--banner-violet) 10%, transparent)"
      />
      <path d="M330 90 H358 M330 102 H358" stroke={ink.violet} strokeWidth="0.9" />
      <path
        className="course-banner-dash"
        d="M20 36 C 52 28, 70 44, 98 32 S 140 18, 172 30 S 220 48, 258 26 S 310 14, 348 28 S 372 40, 386 34"
        stroke={ink.pink}
        strokeWidth="1.35"
        strokeDasharray="10 7"
      />
      <FigureLabel>P(t) · GRID</FigureLabel>
    </g>
  );
}

function NonlinearMotif() {
  const eq = {
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
  } as const;

  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 34 V148" stroke={ink.faint} strokeWidth="0.8" />
      <text x="44" y="56" {...eq} fontSize="14" fill={ink.cyan}>
        {"V(x) = 1/2 x^T P x"}
      </text>
      <text x="44" y="84" {...eq} fontSize="13" fill={ink.teal}>
        {"dV/dt = x^T (A^T P + PA) x"}
      </text>
      <text x="44" y="112" {...eq} fontSize="13" fill={ink.violet}>
        {"A^T P + PA = -Q"}
      </text>
      <path d="M44 124 H210" stroke={ink.faint} strokeWidth="0.7" />
      <text x="44" y="144" {...eq} fontSize="13" fill={ink.pink}>
        {"=>  dV/dt = -x^T Q x  < 0"}
      </text>
      <FigureLabel>LYAPUNOV</FigureLabel>
    </g>
  );
}

function AdaptiveMlMotif() {
  const layers = [
    [46, 62, 94, 126],
    [38, 66, 94, 122, 150],
    [54, 86, 118, 150],
    [78, 118],
  ];
  const xs = [52, 148, 248, 344];

  return (
    <g fill="none" strokeLinecap="round">
      {layers.slice(0, -1).flatMap((nodes, li) =>
        nodes.flatMap((y, ni) =>
          layers[li + 1].map((ty, ti) => {
            const highlight = ni === 1 && ti === 1;
            return (
              <path
                key={`${li}-${ni}-${ti}`}
                d={`M${xs[li] + 7} ${y} C ${xs[li] + 36} ${y}, ${xs[li + 1] - 36} ${ty}, ${xs[li + 1] - 7} ${ty}`}
                stroke={highlight ? ink.pink : ink.faint}
                strokeWidth={highlight ? 1.35 : 0.75}
                className={highlight ? "course-banner-pulse" : undefined}
              />
            );
          }),
        ),
      )}
      {layers.flatMap((nodes, li) =>
        nodes.map((y, ni) => (
          <circle
            key={`n-${li}-${ni}`}
            cx={xs[li]}
            cy={y}
            r="6.5"
            stroke={li === 3 ? ink.pink : ink.cyan}
            strokeWidth="1.2"
            fill="color-mix(in srgb, var(--background) 70%, var(--banner-cyan) 12%)"
          />
        )),
      )}
      <FigureLabel>LMS</FigureLabel>
    </g>
  );
}

function RadarMotif() {
  const rings = [22, 42, 62, 80];

  return (
    <g fill="none" strokeLinecap="round">
      <g transform="translate(200 86)">
        {rings.map((r) => (
          <circle key={r} r={r} stroke={ink.grid} strokeWidth="0.85" />
        ))}
        <path d="M-86 0 H86 M0 -86 V86" stroke={ink.faint} strokeWidth="0.8" />
        <path
          d="M-61 -61 L61 61 M61 -61 L-61 61"
          stroke={ink.grid}
          strokeWidth="0.7"
        />
        <g className="course-banner-sweep">
          <path
            d="M0 0 L-10 -80 A80 80 0 0 1 16 -78 Z"
            fill="color-mix(in srgb, var(--banner-cyan) 22%, transparent)"
            stroke="none"
          />
          <path d="M0 0 V-80" stroke={ink.cyan} strokeWidth="1.35" />
        </g>
        <ellipse
          cx="-34"
          cy="-18"
          rx="11"
          ry="7"
          fill="color-mix(in srgb, var(--banner-pink) 28%, transparent)"
          stroke={ink.pink}
          strokeWidth="0.9"
        />
        <ellipse
          cx="28"
          cy="22"
          rx="14"
          ry="8"
          fill="color-mix(in srgb, var(--banner-violet) 22%, transparent)"
          stroke={ink.violet}
          strokeWidth="0.9"
        />
        <ellipse
          cx="46"
          cy="-36"
          rx="8"
          ry="5"
          fill="color-mix(in srgb, var(--banner-teal) 24%, transparent)"
          stroke={ink.teal}
          strokeWidth="0.9"
        />
      </g>
      <FigureLabel>PPI</FigureLabel>
    </g>
  );
}

function TrajectoryMotif() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 16 V156 M28 150 H380" stroke={ink.faint} strokeWidth="0.9" />
      {[50, 80, 110, 140].map((y) => (
        <path key={y} d={`M28 ${y} H380`} stroke={ink.grid} strokeWidth="0.55" />
      ))}
      <circle
        cx="132"
        cy="96"
        r="26"
        fill="color-mix(in srgb, var(--banner-cyan) 10%, transparent)"
        stroke={ink.cyan}
        strokeWidth="1.3"
      />
      <circle cx="132" cy="96" r="38" stroke={ink.teal} strokeWidth="1" />
      <ellipse
        cx="198"
        cy="96"
        rx="104"
        ry="46"
        stroke={ink.violet}
        strokeWidth="1.35"
        className="course-banner-dash"
        strokeDasharray="9 7"
      />
      <circle cx="302" cy="96" r="22" stroke={ink.pink} strokeWidth="1.15" />
      <path d="M170 56 L176 50 M226 52 L232 46 M270 64 L276 58" stroke={ink.pink} strokeWidth="1.1" />
      <circle cx="170" cy="56" r="2.1" fill={ink.pink} className="course-banner-pulse" />
      <circle cx="226" cy="52" r="2.1" fill={ink.pink} />
      <circle cx="302" cy="74" r="2.3" fill={ink.violet} className="course-banner-pulse" />
      <text
        x="118"
        y="100"
        fill={ink.muted}
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="7"
      >
        ⊕
      </text>
      <FigureLabel>Δv</FigureLabel>
    </g>
  );
}

function EmMotif() {
  return (
    <g fill="none" strokeLinecap="round">
      <path d="M118 36 V78 M118 102 V144" stroke={ink.cyan} strokeWidth="2.1" />
      <circle cx="118" cy="78" r="2.4" fill={ink.cyan} />
      <circle cx="118" cy="102" r="2.4" fill={ink.cyan} />
      <path d="M110 36 H126 M110 144 H126" stroke={ink.cyan} strokeWidth="1.3" />
      {[28, 46, 64, 82].map((r, i) => (
        <ellipse
          key={r}
          cx="118"
          cy="90"
          rx={r + 8}
          ry={r * 0.62}
          stroke={ink.violet}
          strokeWidth="1"
          className="course-banner-pulse"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
      <path d="M268 58 H372" stroke={ink.teal} strokeWidth="2" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const x = 276 + i * 12;
        const h = 10 + ((i * 17) % 22);
        return (
          <g key={i}>
            <path d={`M${x} 58 V${58 - h}`} stroke={ink.pink} strokeWidth="1.15" />
            <circle cx={x} cy={58 - h} r="1.6" fill={ink.pink} />
          </g>
        );
      })}
      <path
        d="M268 58 L268 70 L372 70 L372 58"
        stroke={ink.teal}
        strokeWidth="0.85"
      />
      <FigureLabel>MoM</FigureLabel>
    </g>
  );
}

function PowerMotif() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="52" cy="90" r="18" stroke={ink.teal} strokeWidth="1.3" />
      <path
        d="M40 90 C 44 80, 48 80, 52 90 S 60 100, 64 90"
        stroke={ink.teal}
        strokeWidth="1.2"
      />
      <path d="M70 90 H118" stroke={ink.cyan} strokeWidth="1.3" />
      <path d="M118 58 V122" stroke={ink.cyan} strokeWidth="2.2" />
      <path d="M118 90 H168" stroke={ink.cyan} strokeWidth="1.3" />
      <circle cx="186" cy="90" r="16" stroke={ink.violet} strokeWidth="1.25" />
      <circle cx="202" cy="90" r="16" stroke={ink.violet} strokeWidth="1.25" />
      <path d="M218 90 H268" stroke={ink.cyan} strokeWidth="1.3" />
      <path d="M268 58 V122" stroke={ink.cyan} strokeWidth="2.2" />
      <path d="M268 90 H318" stroke={ink.cyan} strokeWidth="1.3" />
      <path
        d="M318 72 H350 L334 90 L350 108 H318 Z"
        stroke={ink.pink}
        strokeWidth="1.2"
        fill="color-mix(in srgb, var(--banner-pink) 10%, transparent)"
      />
      <g transform="translate(338 40)">
        <path d="M0 16 V0 H16" stroke={ink.faint} strokeWidth="0.8" />
        <path
          className="course-banner-sweep"
          d="M0 16 L14 6"
          stroke={ink.pink}
          strokeWidth="1.25"
        />
        <path d="M0 16 L10 20" stroke={ink.violet} strokeWidth="1.15" />
      </g>
      <FigureLabel>1-LINE</FigureLabel>
    </g>
  );
}

const motifs: Record<CourseMotif, () => ReactNode> = {
  fpga: FpgaMotif,
  "power-ai": PowerAiMotif,
  nonlinear: NonlinearMotif,
  "adaptive-ml": AdaptiveMlMotif,
  radar: RadarMotif,
  trajectory: TrajectoryMotif,
  em: EmMotif,
  power: PowerMotif,
};

export default function CourseBanner({
  motif,
  className = "",
  compact = false,
}: CourseBannerProps) {
  const Motif = motifs[motif];

  return (
    <div
      aria-hidden="true"
      className={
        compact
          ? `relative h-full w-full overflow-hidden bg-[var(--banner-paper)] ${className}`
          : `relative h-48 w-full overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[var(--banner-paper)] ${className}`
      }
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: "var(--banner-wash)",
          background:
            "radial-gradient(ellipse at 22% 20%, color-mix(in srgb, var(--banner-violet) 22%, transparent), transparent 52%), radial-gradient(ellipse at 82% 80%, color-mix(in srgb, var(--banner-cyan) 16%, transparent), transparent 48%)",
        }}
      />
      <svg
        viewBox="0 0 400 180"
        preserveAspectRatio="xMidYMid meet"
        className="relative h-full w-full"
      >
        <Motif />
      </svg>
    </div>
  );
}
