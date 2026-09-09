import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "block text-[0.78rem] font-medium tracking-[0.08em] uppercase text-ink-soft mb-2",
        className,
      )}
      {...props}
    />
  );
}

const fieldClass =
  "w-full min-h-12 rounded-[16px] bg-cream px-4 text-ink shadow-[0_0_0_1px_rgba(19,36,30,0.12)] placeholder:text-ink-faint outline-none transition-[box-shadow] duration-150 focus:shadow-[0_0_0_2px_var(--color-water)]";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClass, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(fieldClass, "min-h-32 py-3 resize-y", className)}
      {...props}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(fieldClass, "appearance-none pr-10", className)} {...props}>
      {children}
    </select>
  );
}
