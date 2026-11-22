import { defineProject } from '@/lib/projects';
import thumbnail from './thumbnail.png';

export default defineProject({
  title: 'Example Project 2',
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni enim iure deleniti reiciendis placeat, maiores expedita culpa officia quasi harum maxime consequatur magnam, atque amet perferendis unde beatae? Libero.',
  featured: true,
  sortOrder: 20,
  liveUrl: 'https://www.example.com',
  repoUrl: 'https://github.com/joshmrtn',
  thumbnail,
});
