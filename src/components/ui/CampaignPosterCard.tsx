import type { ComponentPropsWithoutRef } from "react";
import type { PosterCampaign } from "@/lib/constants";
import { posterImageSrc } from "@/lib/posterAssets";

export const POSTER_WIDTH = 900;
export const POSTER_HEIGHT = 1200;

type CampaignPosterCardProps = PosterCampaign &
  Omit<ComponentPropsWithoutRef<"article">, "children">;

export function CampaignPosterCard({
  title,
  subtitle,
  gradient,
  image,
  className = "",
  ...props
}: CampaignPosterCardProps) {
  return (
    <article
      data-poster
      className={`flex w-full flex-col brutal-border brutal-shadow rounded-2xl overflow-hidden cursor-pointer transition-shadow hover:brutal-shadow-hover ${className}`.trim()}
      {...props}
    >
      <header className="shrink-0 border-b-4 border-black bg-cream px-2.5 py-2">
        <span className="font-display text-[8px] uppercase tracking-wider text-black/50 sm:text-[9px]">
          {subtitle}
        </span>
        <h3 className="mt-0.5 font-display text-[10px] uppercase leading-tight text-black sm:text-xs">
          {title}
        </h3>
      </header>

      <div className="relative aspect-[3/4] w-full bg-cream">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element -- public posters swap often; avoids Next image cache
          <img
            src={posterImageSrc(image)}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
            aria-hidden
          />
        )}
      </div>
    </article>
  );
}
