import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function InnerHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  image?: string;
  imageAlt?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden",
        dark ? "bg-forest text-cream" : "bg-paper",
      )}
    >
      {image ? (
        <>
          <img src={image} alt={imageAlt ?? ""} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-forest/55" />
        </>
      ) : null}
      <div className="wrap relative max-w-[52rem]">
        <p className={cn("eyebrow", (dark || image) && "text-cream/80 before:bg-cream")}>{eyebrow}</p>
        <h1
          className={cn(
            "mt-4 text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[1.02] tracking-[-0.035em]",
            (dark || image) && "text-cream",
          )}
        >
          {title}
        </h1>
        {lead ? (
          <p className={cn("mt-6 text-lg max-w-[46ch]", dark || image ? "text-cream/80" : "text-ink-soft")}>
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
