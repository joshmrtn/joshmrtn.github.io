import type { Metadata } from 'next';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Gather the project slugs of all the projects that
// Next needs to generate pages for
export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Since we're doing a static export we need to set dynamicParams to false.
export const dynamicParams = false;

// Generate the page's metadata from the project information
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  return {
    title: project.title,
    description: project.summary,
  };
}

// Import and render the MDX
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  const { default: MDXContent } = await import(
    `@/content/projects/${slug}/index.mdx`
  );

  return (
    <main className="m-2 flex grow flex-col gap-5">
      <header className="mx-auto max-w-2xl">
        <h1 className="mb-4 flex flex-col gap-2 text-center leading-tight text-balance">
          <span className="text-3xl font-bold tracking-tight">
            {project.title}
          </span>
          {project.subtitle ? (
            <span className="font-medium opacity-90">{project.subtitle}</span>
          ) : null}
        </h1>
        <div className="mx-auto flex max-w-xl flex-row flex-wrap justify-between gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="w-35 rounded-sm bg-linear-to-b from-cyan-800/50 to-emerald-800/50 px-3 py-1 text-center shadow-2xs inset-shadow-2xs shadow-emerald-500/50 inset-shadow-cyan-500 transition-colors duration-300 hover:from-cyan-700/50 hover:to-emerald-700/50"
            >
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className="w-35 rounded-sm bg-linear-to-b from-cyan-800/50 to-emerald-800/50 px-3 py-1 text-center shadow-2xs inset-shadow-2xs shadow-emerald-500/50 inset-shadow-cyan-500 transition-colors duration-300 hover:from-cyan-700/50 hover:to-emerald-700/50"
            >
              Source Code
            </a>
          )}
        </div>
      </header>
      <article className="mx-auto max-w-prose">
        <MDXContent />
      </article>
    </main>
  );
}
