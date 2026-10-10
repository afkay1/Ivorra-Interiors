"use client";

import type { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";

/** Editorial grid with deliberately varied card sizes and offsets. */
export default function ProjectGrid({ projects, headingLevel = "h3" }: { projects: Project[]; headingLevel?: "h2" | "h3" }) {
  const layout = [
    { cls: "md:col-span-7", ratio: "aspect-[4/3]" },
    { cls: "md:col-span-4 md:col-start-9 md:mt-40", ratio: "aspect-[4/5]" },
    { cls: "md:col-span-5 md:col-start-2", ratio: "aspect-[4/5]" },
    { cls: "md:col-span-6 md:col-start-7 md:mt-28", ratio: "aspect-[3/2]" },
  ];
  return (
    <div className="grid gap-x-8 gap-y-20 md:grid-cols-12 md:gap-y-28">
      {projects.map((p, i) => {
        const l = layout[i % layout.length];
        return (
          <div key={p.slug} className={l.cls}>
            <ProjectCard project={p} ratio={l.ratio} headingLevel={headingLevel} />
          </div>
        );
      })}
    </div>
  );
}
