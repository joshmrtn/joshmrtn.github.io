import { Project } from '@/app/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
  const cardTitle = <h3 className="text-lg font-bold">{project.title}</h3>;
  const cardImage = (
    <Image
      src={'https://placehold.co/600x400'}
      alt={'placeholder image'}
      width={600}
      height={400}
      unoptimized
    />
  );
  return (
    <article className="flex h-full w-full flex-col gap-6 rounded bg-linear-to-br from-cyan-400/10 to-emerald-400/10 px-3 py-5 shadow-xs inset-shadow-xs shadow-emerald-500 inset-shadow-cyan-500">
      {/* Conditionally wrap title and image with Link if the slug is provided */}
      {project.slug ? (
        <Link href={`/projects/${project.slug}`}>{cardTitle}</Link>
      ) : (
        cardTitle
      )}
      {project.slug ? (
        <Link href={`/projects/${project.slug}`}>{cardImage}</Link>
      ) : (
        cardImage
      )}

      <div
        role="separator"
        className="h-px w-full bg-slate-500/20 bg-linear-to-r from-cyan-400/50 to-emerald-400/50"
      ></div>
      <p className="grow">{project.summary ?? ''}</p>

      {project.slug ? (
        <Link
          className="rounded-sm bg-linear-to-b from-cyan-800/50 to-emerald-800/50 px-3 py-1 text-center shadow-2xs inset-shadow-2xs shadow-emerald-500/50 inset-shadow-cyan-500 transition-colors duration-300 hover:from-cyan-600/50 hover:to-emerald-600/50"
          href={`/projects/${project.slug}`}
        >
          Read More
        </Link>
      ) : null}
      {project.liveUrl || project.repoUrl ? (
        <div className="flex flex-row justify-between gap-2">
          {project.liveUrl ? (
            <a
              className="w-full rounded-sm bg-linear-to-b from-cyan-800/50 to-emerald-800/50 px-3 py-1 text-center shadow-2xs inset-shadow-2xs shadow-emerald-500/50 inset-shadow-cyan-500 transition-colors duration-300 hover:from-cyan-700/50 hover:to-emerald-700/50"
              href={project.liveUrl}
            >
              Live Demo
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              className="w-full rounded-sm bg-linear-to-b from-cyan-800/50 to-emerald-800/50 px-3 py-1 text-center shadow-2xs inset-shadow-2xs shadow-emerald-500/50 inset-shadow-cyan-500 transition-colors duration-300 hover:from-cyan-700/50 hover:to-emerald-700/50"
              href={project.repoUrl}
            >
              View Source
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
