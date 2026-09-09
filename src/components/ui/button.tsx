import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 min-h-11 px-6 text-[0.95rem] font-medium tracking-[-0.01em] rounded-full whitespace-nowrap select-none transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-water text-cream hover:bg-water-deep",
        forest: "bg-forest text-cream hover:bg-moss",
        paper:
          "bg-cream text-ink shadow-[0_0_0_1px_rgba(19,36,30,0.08)] hover:bg-paper-2",
        ghost:
          "bg-transparent text-cream shadow-[0_0_0_1px_rgba(250,247,241,0.28)] hover:bg-cream/10",
        ink: "bg-ink text-cream hover:bg-forest",
        mauve: "bg-mauve text-cream hover:bg-mauve-deep",
        link: "min-h-0 px-0 rounded-none text-water-deep underline-offset-4 hover:underline",
      },
      size: {
        md: "min-h-11 px-6",
        lg: "min-h-12 px-7 text-base",
        sm: "min-h-10 px-4 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, size, asChild, ...props }: Props) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
