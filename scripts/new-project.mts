/** Scaffolds a new blank project into the content/ tree
 *
 * Keep this script in sync with the Project type in @/lib/projects.ts
 */

import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

/** Helper to convert project titles into valid slugs */
function convertToSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function main() {
  const title = await rl.question('Project title: ');
  if (!title.trim()) {
    console.error('Title is required.');
    process.exit(1);
  }

  // Check if slug is okay and allow it to be changed.
  const defaultSlug = convertToSlug(title);
  const customSlug = await rl.question(`Slug (${defaultSlug}): `);
  const slug = customSlug.trim() || defaultSlug;

  // Prompt for other main fields
  const subtitle = await rl.question(
    'Optional: Subtitle/Tagline (< 10 words): '
  );
  const summary = await rl.question('Short summary (1-2 sentences): ');
  const featuredInput = await rl.question('Featured project? (y/N): ');
  const featured = featuredInput.trim().toLowerCase() === 'y';

  rl.close();

  const projectDir = path.join(process.cwd(), 'content/projects', slug);
  if (fs.existsSync(projectDir)) {
    console.error(`Error: Project "${slug}" already exists.`);
    process.exit(1);
  }

  fs.mkdirSync(projectDir, { recursive: true });

  const metadataTemplate = `import { defineProject } from "@/lib/projects";
//import thumbnail from "./thumbnail.png";

export default defineProject({
title: ${JSON.stringify(title.trim())},
subtitle: ${JSON.stringify(subtitle.trim())},
summary: ${JSON.stringify(summary.trim())},
featured: ${featured},
sortOrder: 9999,
//   liveUrl: "https://",
//   repoUrl: "https://github.com",
//   thumbnail,
});
`;

  const mdxTemplate = `{/* Import images and components here. */}
{/* Figure is globally available in MDX files (see mdx-components.tsx): */}
{/* import heroImg from "./hero.png"; */}
{/* <Figure src={heroImg} alt="${title.trim()}" priority /> */}


## Overview

Introduce the project details here. This should mirror the summary while 
remaining brief.

## Problem and Context
Describe the project in terms of who it is for, the problem that existed, 
and why that matters. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper 
mattis dolor, nec efficitur ante venenatis at. Orci varius natoque penatibus 
et magnis dis parturient montes, nascetur ridiculus mus. Aenean commodo 
luctus volutpat. Nulla leo augue, auctor nec sem a, vestibulum eleifend 
felis. Integer consequat ex lacus, sit amet dapibus eros commodo vitae. 
Aliquam erat volutpat. Vivamus sit amet ullamcorper mauris, non condimentum 
ipsum. Integer consequat vestibulum erat, quis tincidunt metus elementum at. 
Sed id volutpat odio. Maecenas sollicitudin dui magna, venenatis varius massa 
volutpat tincidunt. Suspendisse fermentum ligula molestie, dignissim nisl 
non, suscipit leo. Praesent eu eros nec nisi pulvinar consectetur.

Nam fermentum turpis molestie pretium lacinia. Donec rutrum sapien at arcu 
mattis accumsan. Aenean et felis convallis, feugiat velit a, pulvinar ligula. 
Integer hendrerit risus nec turpis dapibus, sit amet maximus justo lacinia. 
Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam posuere 
elementum tristique. Duis faucibus pretium nisi, sed rhoncus eros ultrices at. 
Phasellus molestie enim nibh. 

## Architecture and Technical Decisions

How the system is structured, why specific tools or patterns were chosen over 
alternatives. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed justo sem. 
Sed sed metus risus. Quisque id massa sed felis eleifend congue quis vel 
ipsum. Maecenas consectetur aliquam dolor in interdum. Donec in ullamcorper 
nisi. Vivamus vehicula eros nec ipsum maximus, eu egestas turpis dapibus. 
Duis egestas eros at sem accumsan, nec ultrices leo lobortis. Fusce 
vehicula porttitor dui, id venenatis neque molestie vitae. Nam at nunc sem.

Duis aliquet quam at diam sollicitudin, ut commodo augue placerat. Orci 
varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Sed eu condimentum tellus, non volutpat velit. Suspendisse dolor quam, 
scelerisque ac diam sed, sagittis aliquam quam. Donec efficitur sapien nec 
erat ornare viverra. Donec tempor erat augue, aliquet facilisis mauris 
iaculis tincidunt. Suspendisse eget sem sit amet lorem efficitur suscipit 
vel eu risus. Pellentesque blandit dapibus aliquet. Vivamus pellentesque 
molestie purus, at volutpat ligula pharetra vestibulum. 

## Challenges and Tradeoffs

Specific hurdles, including performance, complexity, accessibility, and how 
they were resolved.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero 
odio, sollicitudin at semper et, pharetra vitae risus. Sed nec volutpat 
ante. Vestibulum at turpis eget lacus sollicitudin tempus. Quisque nec 
mattis tellus, sit amet efficitur orci. Mauris augue dolor, lobortis vel 
cursus blandit, hendrerit vitae nunc. Morbi commodo ante ante, at pulvinar 
metus convallis in. Pellentesque vel risus lectus.

Aliquam porttitor diam sed felis molestie consequat. Fusce neque massa, 
condimentum vitae pretium id, pulvinar ac est. Donec mauris lacus, vestibulum 
a risus ut, scelerisque fermentum tortor. Donec nec ante diam. Maecenas 
ollamcorper mi in vehicula pellentesque. Donec a arcu vel felis varius sodales. 
Suspendisse condimentum, arcu vitae lobortis iaculis, massa odio volutpat 
tellus, eu gravida sem orci et leo. Vestibulum tortor felis, pellentesque 
vitae venenatis lacinia, ultrices vitae enim. Morbi a lorem semper nisi 
hendrerit elementum nec quis nisl. Praesent vel leo maximus, aliquet velit ac, 
auctor mauris. 

## Outcome and Lessons Learned

Measurable results or concrete takeaways of what worked and what I would try 
differently next time.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum 
tristique ante id efficitur. Phasellus bibendum tempus risus id imperdiet. 
Proin eleifend scelerisque justo vitae facilisis. Suspendisse sagittis 
ultricies mauris eget tempus. Quisque et tellus eleifend, volutpat dui ac, 
vestibulum lectus. Nunc aliquam vel quam id tristique. Donec mollis 
ullamcorper hendrerit. In hac habitasse platea dictumst. Curabitur volutpat, 
velit mollis mollis feugiat, eros arcu fermentum velit, feugiat semper 
ante odio vitae erat. 
`;

  fs.writeFileSync(path.join(projectDir, 'metadata.ts'), metadataTemplate);
  fs.writeFileSync(path.join(projectDir, 'index.mdx'), mdxTemplate);

  console.log(`\nCreated src/content/projects/${slug}/`);
}

main();
