import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <div className="mb-8">
        <p className="text-sm text-zinc-400">
          A small set of things I’ve built. Click a project for details.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 transition hover:border-zinc-700"
          >
            <div className="relative mb-3 aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-900">
              <Image
                src={p.thumb}
                alt={p.title}
                fill
                className="object-cover transition group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-medium text-zinc-100">{p.title}</div>
                <div className="mt-1 text-sm text-zinc-400">{p.oneLiner}</div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {(p.tags || []).slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-800 px-2 py-0.5 text-xs text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
