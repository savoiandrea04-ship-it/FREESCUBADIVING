// Soft wave shape divider. `color` is the fill (the section being revealed below/above).
export const WaveDivider = ({ color = "#F4F1EB", flip = false, className = "" }) => (
  <div
    className={`pointer-events-none leading-[0] ${className}`}
    style={{ transform: flip ? "rotate(180deg)" : "none" }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="w-full h-[60px] sm:h-[90px] block"
    >
      <path
        fill={color}
        d="M0,64 C240,128 480,0 720,32 C960,64 1200,128 1440,72 L1440,120 L0,120 Z"
      />
    </svg>
  </div>
);
