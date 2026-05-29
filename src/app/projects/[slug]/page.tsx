import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getMdx } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const doc = await getMdx("projects", params.slug);

  return (
    <main className="max-w-3xl">
      <div className="mb-6">
        <Link className="text-sm text-zinc-400 hover:text-zinc-200" href="/">
          ← Back
        </Link>
      </div>

      <h2 className="text-2xl font-semibold tracking-tight">{p.title}</h2>
      <p className="mt-3 text-zinc-300">{p.oneLiner}</p>

      <div className="mt-6 flex flex-wrap gap-2 text-sm">
        {p.href ? (
          <a
            className="rounded-lg border border-zinc-800 px-3 py-1.5 text-zinc-200 hover:border-zinc-700"
            href={p.href}
            target="_blank"
            rel="noreferrer"
          >
            {p.linkLabel || "Open project"}
          </a>
        ) : null}
      </div>

      <article className="prose prose-invert mt-10 max-w-none prose-zinc">
        {doc ? (
          <MDXRemote source={doc.content} />
        ) : (
          <p className="text-zinc-400">Write-up not found for this project yet.</p>
        )}
      </article>
    </main>
  );
}
