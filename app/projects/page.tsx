import { getAllProjects } from '@/lib/projects';
import ProjectCards from '@/app/ui/project-cards';

export default async function Page() {
  const projects = await getAllProjects();

  return (
    <main className="m-2 flex grow flex-col gap-5">
      <h1 className="mb-4 text-xl">Projects</h1>
      <ProjectCards
        title="Featured Projects"
        projects={projects.filter((project) => project.featured)}
      />
      <ProjectCards
        title="Other Projects"
        projects={projects.filter((project) => !project.featured)}
      />
    </main>
  );
}
