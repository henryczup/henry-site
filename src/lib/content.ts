import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

export type MdxMeta = {
  title: string;
  summary?: string;
  date?: string;
  links?: { label: string; href: string }[];
};

export type MdxDoc = {
  slug: string;
  meta: MdxMeta;
  content: string;
};

const ROOT = process.cwd();

function dirFor(kind: 'projects' | 'writeups') {
  return path.join(ROOT, 'src', 'content', kind);
}

export async function listMdx(kind: 'projects' | 'writeups'): Promise<MdxDoc[]> {
  const dir = dirFor(kind);
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
  const docs: MdxDoc[] = [];

  for (const e of entries) {
    if (!e.isFile()) continue;
    if (!e.name.endsWith('.mdx') && !e.name.endsWith('.md')) continue;

    const slug = e.name.replace(/\.(mdx|md)$/, '');
    const raw = await fs.readFile(path.join(dir, e.name), 'utf-8');
    const parsed = matter(raw);

    docs.push({
      slug,
      meta: (parsed.data || {}) as any,
      content: parsed.content,
    });
  }

  docs.sort((a, b) => String(b.meta.date || '').localeCompare(String(a.meta.date || '')));
  return docs;
}

export async function getMdx(kind: 'projects' | 'writeups', slug: string): Promise<MdxDoc | null> {
  const dir = dirFor(kind);
  const p1 = path.join(dir, `${slug}.mdx`);
  const p2 = path.join(dir, `${slug}.md`);

  let filePath: string | null = null;
  try {
    await fs.stat(p1);
    filePath = p1;
  } catch {
    try {
      await fs.stat(p2);
      filePath = p2;
    } catch {
      return null;
    }
  }

  const raw = await fs.readFile(filePath, 'utf-8');
  const parsed = matter(raw);
  return {
    slug,
    meta: (parsed.data || {}) as any,
    content: parsed.content,
  };
}
