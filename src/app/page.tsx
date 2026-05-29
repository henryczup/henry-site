import Image from "next/image";
import { type Project, projectSections } from "@/data/projects";

function ProjectCard({
  project,
  wide = false,
}: Readonly<{ project: Project; wide?: boolean }>) {
  const content = (
    <>
      <div className="relative mb-3 aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-900">
        <Image
          src={project.thumb}
          alt={project.title}
          fill
          unoptimized={project.thumb.endsWith(".gif")}
          className="object-cover transition group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-medium text-zinc-100">{project.title}</div>
          <div className="mt-1 text-sm text-zinc-400">{project.oneLiner}</div>
        </div>
        {project.linkLabel ? (
          <div className="shrink-0 text-xs text-zinc-500">{project.linkLabel}</div>
        ) : null}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {(project.tags || []).slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-800 px-2 py-0.5 text-xs text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const className = [
    "group rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 transition hover:border-zinc-700",
    project.featured || wide ? "sm:col-span-2" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (!project.href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a href={project.href} target="_blank" rel="noreferrer" className={className}>
      {content}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <div className="space-y-10">
        {projectSections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {section.projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  wide={section.projects.length === 1}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
