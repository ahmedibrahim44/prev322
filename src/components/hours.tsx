import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Hours({ inverted = false }: { inverted?: boolean }) {
  const { t } = useI18n();
  const today = new Date().getDay();
  return (
    <dl className="divide-y divide-line">
      {SITE.hours.map((row) => {
        const isToday = row.js === today;
        return (
          <div
            key={row.js}
            className={cn(
              "flex items-baseline justify-between gap-4 py-2.5",
              isToday && "font-medium",
            )}
          >
            <dt className={inverted ? "text-cream/70" : "text-ink-soft"}>{t(row.day)}</dt>
            <dd className={cn("tabular-nums", inverted ? "text-cream" : "text-ink")}>
              {t(row.time)}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
