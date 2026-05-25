import type { ComponentPropsWithoutRef } from "react";
import { BRAIN_TOPICS } from "@/lib/constants";

type BrainTopic = (typeof BRAIN_TOPICS)[number];

type BrainTopicCardProps = {
  topic: BrainTopic;
} & Omit<ComponentPropsWithoutRef<"article">, "children">;

function parseRotation(rotateClass: string): string {
  if (rotateClass.includes("-2")) return "-2";
  if (rotateClass.includes("2") && !rotateClass.includes("-")) return "2";
  if (rotateClass.includes("-1")) return "-1";
  if (rotateClass.includes("1")) return "1";
  return "0";
}

export function BrainTopicCard({
  topic,
  className = "",
  ...props
}: BrainTopicCardProps) {
  return (
    <article
      data-brain-card
      data-rotate={parseRotation(topic.rotate)}
      className={`brutal-border brutal-shadow-sm rounded-2xl ${topic.color} p-4 cursor-pointer transition-shadow hover:brutal-shadow-hover ${topic.rotate} ${className}`.trim()}
      {...props}
    >
      <span className="text-2xl md:text-3xl" role="img" aria-hidden>
        {topic.emoji}
      </span>
      <h3 className="mt-2 font-display text-base uppercase leading-tight md:text-lg">
        {topic.title}
      </h3>
      <p className="mt-1.5 text-xs font-medium leading-snug text-black/80 md:text-sm">
        {topic.description}
      </p>
    </article>
  );
}
