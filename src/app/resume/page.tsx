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
        <div className="text-sm text-zinc-500 sm:text-right">{item.date}</div>
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
        <p className="mt-3 max-w-2xl text-zinc-300">
          Computer engineering graduate student focused on RF/microwave systems,
          embedded hardware, machine learning, and practical full-stack tools.
        </p>
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

        <Section title="Selected Projects">
          {selectedProjects.map((item) => (
            <Entry key={item.title} item={item} />
          ))}
        </Section>

        <Section title="Interests">
          <p className="text-sm leading-6 text-zinc-300">
            Marathon running, programming, and technology repair.
          </p>
        </Section>
      </div>
    </main>
  );
}
