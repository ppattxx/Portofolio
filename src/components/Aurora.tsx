/** Fixed, non-interactive backdrop: drifting colour blooms over a faint grid. */
export const Aurora = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 grid-bg" />
    <div className="blob blob-blue animate-float-slow left-[-14%] top-[-12%] h-[46vh] w-[46vw]" />
    <div
      className="blob blob-purple animate-float-slow right-[-12%] top-[18%] h-[42vh] w-[38vw]"
      style={{ animationDelay: "-7s" }}
    />
    <div
      className="blob blob-cyan animate-float-slow bottom-[-10%] left-[24%] h-[40vh] w-[44vw]"
      style={{ animationDelay: "-14s" }}
    />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_35%,rgb(var(--bg))_78%)]" />
  </div>
);
