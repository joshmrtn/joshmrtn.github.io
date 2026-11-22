import { defineProject } from '@/lib/projects';
import thumbnail from './thumbnail.png';

export default defineProject({
  title: 'My Most Exciting Work Yet',
  subtitle: 'This is really neat',
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil delectus est magni. Eum rerum temporibus aut ullam ut sit mollitia distinctio dolore voluptatum!',
  featured: true,
  sortOrder: 1,
  //   liveUrl: "https://",
  //   repoUrl: "https://github.com",
  thumbnail,
});
