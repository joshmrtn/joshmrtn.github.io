import { Project } from '../lib/definitions';
import ProjectCard from '@/app/ui/project-card';

/** A responsive grid of ProjectCards  */
export default function ProjectCards({
  title,
  projects,
}: {
  /** The title of this collection of ProjectCards */
  title: string;
  /** Projects to display. */
  projects: Project[];
}) {
  // Early return - return nothing if cards is empty
  if (projects.length < 1) return null;

  return (
    <>
      <h2 className="text-lg">{title}</h2>
      <div className="grid w-full grid-cols-1 place-content-evenly justify-evenly justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project) => {
          return (
            <ProjectCard
              project={project}
              key={project.title + '-' + project.slug}
            ></ProjectCard>
          );
        })}
      </div>
    </>
  );
}
