import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
};

export function Photo({ src, alt, className, imgClassName, width, height }: Props) {
  return (
    <figure className={cn("overflow-hidden rounded-[var(--radius-photo)] photo", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("h-full w-full object-cover", imgClassName)}
        loading="lazy"
      />
    </figure>
  );
}
