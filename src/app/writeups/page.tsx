import Link from "next/link";
import { listMdx } from "@/lib/content";

export default async function Writeups() {
  const docs = await listMdx("writeups");

  return (
    <main className="max-w-3xl">
      <div className="mb-6">
        <Link className="text-sm text-zinc-400 hover:text-zinc-200" href="/">
          ← Back
        </Link>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight">Writeups</h2>
      <p className="mt-3 text-zinc-300">Notes and longer write-ups.</p>

      <div className="mt-8 space-y-4">
        {docs.length === 0 ? (
          <div className="text-sm text-zinc-400">No writeups yet.</div>
        ) : (
          docs.map((d) => (
            <Link
              key={d.slug}
              href={`/writeups/${d.slug}`}
              className="block rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 hover:border-zinc-700"
            >
              <div className="font-medium">{d.meta.title || d.slug}</div>
              {d.meta.summary ? (
                <div className="mt-1 text-sm text-zinc-400">{d.meta.summary}</div>
              ) : null}
            </Link>
          ))
        )}
      </div>
    </main>
  );
}
