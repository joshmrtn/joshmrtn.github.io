/**
 * Represents a portfolio project and its metadata
 */
export type Project = {
  /** The display name of the project, shown on cards */
  title: string;

  /** URL-friendly identifier used for dynamic routing */
  slug?: string;

  /** Brief description (1-2 sentences) for use in the project card */
  summary: string;

  /** Detailed project description for the project detail page */
  overview: string;

  /** Determines whether this project is highlighted */
  featured: boolean;

  /** Controls display priority when sorting projects (lower numbers appear first)*/
  sortOrder?: number;

  /** Optional link to the deployed, live application/demo */
  liveUrl?: string;

  /** Optional link to the public source code repo */
  repoUrl?: string;
};
