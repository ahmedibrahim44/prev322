import { cn } from "@/lib/utils";

export function Arc({
  from = "forest",
  to = "paper",
  className,
}: {
  from?: "forest" | "paper" | "moss" | "mauve-deep";
  to?: "forest" | "paper" | "moss" | "mauve-deep";
  className?: string;
}) {
  const fill: Record<string, string> = {
    forest: "var(--color-forest)",
    paper: "var(--color-paper)",
    moss: "var(--color-moss)",
    "mauve-deep": "var(--color-mauve-deep)",
  };
  return (
    <div className={cn("relative h-[min(22vw,180px)] -mb-px", className)} aria-hidden="true">
      <div className="absolute inset-0" style={{ background: fill[from] }} />
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path d="M0 180 C 360 18 1080 18 1440 180 L 1440 180 L 0 180 Z" fill={fill[to]} />
      </svg>
    </div>
  );
}
