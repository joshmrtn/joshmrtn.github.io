import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';
import type { StaticImageData } from 'next/image';

const PROJECTS_DIR = path.join(process.cwd(), '/content/projects');

/** Have Zod validate static image imports */
const StaticImageSchema = z.custom<StaticImageData>(
  (val) => typeof val === 'object' && val !== null && 'src' in val,
  'Expected a valid static image export'
);

export const ProjectMetadataSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  subtitle: z.string().optional(),
  summary: z.string().min(1, 'Summary is required'),
  featured: z.boolean().default(false),
  sortOrder: z.number().optional(),
  liveUrl: z.url().optional(),
  repoUrl: z.url().optional(),
  thumbnail: StaticImageSchema.optional(),
});

export type ProjectMetadata = z.infer<typeof ProjectMetadataSchema>;

// A Project is ProjectMetadata plus the slug
export type Project = ProjectMetadata & {
  slug: string;
};

/** Give TypeScript autocomplete in metadata files */
export function defineProject(metadata: ProjectMetadata): ProjectMetadata {
  return metadata;
}

/** Return a project with the given slug. Throws if project metadata is invalid */
export async function getProjectBySlug(slug: string): Promise<Project> {
  const mod = await import(`@/content/projects/${slug}/metadata`);
  const parsed = ProjectMetadataSchema.safeParse(mod.default);

  // Throw if there are parsing errors
  if (!parsed.success) {
    throw new Error(
      `Invalid metadata in "${slug}/metadata.ts":\n${parsed.error.message}`
    );
  }

  // Return the validated project
  return {
    ...parsed.data,
    slug,
  };
}

/** Get all the projects under "@/content/projects" and build Project objects */
export async function getAllProjects(): Promise<Project[]> {
  // Extract the project slugs from the directories that exist in @/content/projects
  const slugs = fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // Gather project metadata for all projects
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/content/projects/${slug}/metadata`);
      const parsed = ProjectMetadataSchema.safeParse(mod.default);

      // Throw an error if metadata is invalid so we know to correct it.
      if (!parsed.success) {
        throw new Error(
          `Invalid metadata in "${slug}/metadata.ts":\n${parsed.error.message}`
        );
      }

      // Return a validated project
      return {
        ...parsed.data,
        slug,
      };
    })
  );

  // Sort and return the projects
  return projects.sort(
    (a, b) => (a.sortOrder ?? Infinity) - (b.sortOrder ?? Infinity)
  );
}
