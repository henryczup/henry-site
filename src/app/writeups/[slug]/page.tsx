import Link from "next/link";
import { notFound } from "next/navigation";
import { getMdx } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function WriteupPage({
  params,
}: {
  params: { slug: string };
}) {
  const doc = await getMdx("writeups", params.slug);
  if (!doc) return notFound();

  return (
    <main className="max-w-3xl">
      <div className="mb-6">
        <Link className="text-sm text-zinc-400 hover:text-zinc-200" href="/writeups">
          ← Back
        </Link>
      </div>

      <h2 className="text-2xl font-semibold tracking-tight">{doc.meta.title || doc.slug}</h2>
      {doc.meta.summary ? (
        <p className="mt-3 text-zinc-300">{doc.meta.summary}</p>
      ) : null}

      <article className="prose prose-invert mt-10 max-w-none prose-zinc">
        <MDXRemote source={doc.content} />
      </article>
    </main>
  );
}
