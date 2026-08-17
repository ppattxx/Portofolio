import { Reveal } from "./Reveal";

export const SectionHeading = ({
  label,
  title,
  description,
  align = "left",
}: {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) => (
  <div className={align === "center" ? "text-center" : ""}>
    <Reveal direction="up">
      <p className="section-label">{label}</p>
    </Reveal>
    <Reveal direction="up" delay={0.08}>
      <h2 className="section-title">{title}</h2>
    </Reveal>
    {description && (
      <Reveal direction="up" delay={0.16}>
        <p
          className={`mt-4 max-w-2xl text-sm leading-relaxed text-white/50 md:text-base ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      </Reveal>
    )}
  </div>
);
