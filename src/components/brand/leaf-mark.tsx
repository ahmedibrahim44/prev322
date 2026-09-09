import { cn } from "@/lib/utils";

export function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-8", className)}
    >
      <path
        fill="currentColor"
        d="M16.2 3.4c.5 4.1 1.5 7 4.4 9.9 2.2 2.2 4.6 3.4 6.8 3.9-2.6.7-5.5.2-8.2-1.5-.5 3.4-.2 6.8 1.5 9.9-2.9-1.2-5.3-3.4-6.7-6.6-1.4 3.2-3.8 5.4-6.7 6.6 1.7-3.1 2-6.5 1.5-9.9-2.7 1.7-5.6 2.2-8.2 1.5 2.2-.5 4.6-1.7 6.8-3.9 2.9-2.9 3.9-5.8 4.4-9.9.2-.3.5-.3.8 0z"
      />
    </svg>
  );
}

export function Wordmark({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="flex items-center gap-2.5 min-w-0">
      <LeafMark
        className={cn("size-8 shrink-0", inverted ? "text-cream" : "text-forest")}
      />
      <span className="min-w-0 leading-[1.05]">
        <span
          className={cn(
            "block font-display font-medium tracking-[-0.03em] text-[1.05rem]",
            inverted ? "text-cream" : "text-ink",
          )}
        >
          Vitalida
        </span>
        {!compact ? (
          <span
            className={cn(
              "block text-[0.68rem] tracking-[0.12em] uppercase mt-0.5",
              inverted ? "text-cream/70" : "text-ink-soft",
            )}
          >
            Physio & Ostéo
          </span>
        ) : null}
      </span>
    </span>
  );
}
