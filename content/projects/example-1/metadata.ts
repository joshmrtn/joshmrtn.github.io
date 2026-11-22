import { defineProject } from '@/lib/projects';
import thumbnail from './thumbnail.png';

export default defineProject({
  title: 'Example Project 1',
  subtitle: 'This project does cool stuff!',
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel officia nostrum iure aut quas recusandae, saepe dolor! Dolorum, neque qui blanditiis quo itaque ea vitae harum mollitia beatae in!',
  featured: true,
  sortOrder: 10,
  liveUrl: 'https://www.example.com',
  repoUrl: 'https://github.com/joshmrtn',
  thumbnail,
});
