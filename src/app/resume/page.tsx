import {
  education,
  experience,
  selectedProjects,
  type ResumeItem,
} from "@/data/resume";
import type { ReactNode } from "react";

function Section({
  title,
  children,
}: Readonly<{ title: string; children: ReactNode }>) {
  return (
    <section className="border-t border-zinc-800 pt-6">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
        {title}
      </h2>
      <div className="mt-4 space-y-6">{children}</div>
    </section>
  );
}

function Entry({ item }: Readonly<{ item: ResumeItem }>) {
  return (
    <article>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-medium text-zinc-100">{item.title}</h3>
          {item.org || item.location ? (
            <p className="mt-1 text-sm text-zinc-400">
              {[item.org, item.location].filter(Boolean).join(" | ")}
            </p>
          ) : null}
        </div>
        {item.date ? (
          <div className="text-sm text-zinc-500 sm:text-right">{item.date}</div>
        ) : null}
      </div>

      {item.subtitle ? (
        <p className="mt-2 text-sm leading-6 text-zinc-300">{item.subtitle}</p>
      ) : null}

      {item.bullets ? (
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}

      {item.projects ? (
        <div className="mt-4 space-y-4">
          {item.projects.map((project) => (
            <div key={project.title}>
              <h4 className="text-sm font-medium text-zinc-200">{project.title}</h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {project.links ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      className="rounded-lg border border-zinc-800 px-3 py-1.5 text-sm text-zinc-200 hover:border-zinc-700"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      {item.links ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.links.map((link) => (
            <a
              key={link.href}
              className="rounded-lg border border-zinc-800 px-3 py-1.5 text-sm text-zinc-200 hover:border-zinc-700"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function Resume() {
  return (
    <main className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm text-zinc-400">
          <a className="hover:text-zinc-200" href="mailto:henryczup@gmail.com">
            henryczup@gmail.com
          </a>
          <span aria-hidden="true">|</span>
          <a className="hover:text-zinc-200" href="tel:+17157817176">
            715-781-7176
          </a>
          <span aria-hidden="true">|</span>
          <span>Madison, WI</span>
          <span aria-hidden="true">|</span>
          <span>U.S. Citizen</span>
          <span aria-hidden="true">|</span>
          <a
            className="hover:text-zinc-200"
            href="https://www.linkedin.com/in/henry-czupryna-2b3044250/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span aria-hidden="true">|</span>
          <a
            className="hover:text-zinc-200"
            href="https://henryczupryna.com"
            target="_blank"
            rel="noreferrer"
          >
            henryczupryna.com
          </a>
        </div>
      </div>

      <div className="space-y-8">
        <Section title="Education">
          {education.map((item) => (
            <Entry key={`${item.title}-${item.date}`} item={item} />
          ))}
        </Section>

        <Section title="Work Experience">
          {experience.map((item) => (
            <Entry key={`${item.title}-${item.org}`} item={item} />
          ))}
        </Section>

        <Section title="Projects">
          {selectedProjects.map((item) => (
            <Entry key={item.title} item={item} />
          ))}
        </Section>
      </div>
    </main>
  );
}
