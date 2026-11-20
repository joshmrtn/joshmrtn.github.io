import { Project } from '@/app/lib/definitions';

export const projects: Project[] = [
  {
    title: 'Example Project 1',
    slug: 'example-1',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel officia nostrum iure aut quas recusandae, saepe dolor! Dolorum, neque qui blanditiis quo itaque ea vitae harum mollitia beatae in!',
    overview: '',
    featured: true,
    sortOrder: 10,
    liveUrl: 'https://www.example.com',
    repoUrl: 'https://github.com/joshmrtn',
  },
  {
    title: 'Example Project 2',
    slug: 'example-2',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni enim iure deleniti reiciendis placeat, maiores expedita culpa officia quasi harum maxime consequatur magnam, atque amet perferendis unde beatae? Libero.',
    overview: '',
    featured: true,
    sortOrder: 20,
    liveUrl: 'https://www.example.com',
    repoUrl: 'https://github.com/joshmrtn',
  },
  {
    title: 'Example Project 3',
    slug: 'example-3',
    summary:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, dolorem. Atque, alias sunt, sint impedit quo fugiat facere expedita accusamus cupiditate pariatur optio recusandae suscipit quae quam obcaecati corporis explicabo!',
    overview: '',
    featured: true,
    sortOrder: 50,
    liveUrl: 'https://www.example.com',
    repoUrl: 'https://github.com/joshmrtn',
  },
  {
    title: 'Example Project 4',
    slug: 'example-4',
    summary:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quam magni accusantium eligendi? Ducimus earum ad eum consequuntur voluptatum officia id vitae iste, soluta aliquid, sit recusandae voluptate. Temporibus, voluptatibus.',
    overview: '',
    featured: false,
    sortOrder: 500,
    liveUrl: 'https://www.example.com',
    repoUrl: 'https://github.com/joshmrtn',
  },

  {
    title: 'Cool Neat Project',
    slug: 'example-5',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi omnis deserunt, voluptatem magni cumque vel optio ex, quas cum maiores suscipit dolores libero eaque esse, asperiores voluptate. Consequuntur, repudiandae modi!',
    overview: '',
    featured: false,
    sortOrder: 30,
    liveUrl: 'https://www.example.com',
    repoUrl: 'https://github.com/joshmrtn',
  },
  {
    title: 'My Most Exciting Work Yet',
    slug: 'example-6',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil delectus est magni. Eum rerum temporibus aut ullam ut sit mollitia distinctio dolore voluptatum! Veniam alias molestias tempore, unde vero nihil.',
    overview: '',
    featured: true,
    sortOrder: 1,
    liveUrl: 'https://www.example.com',
    repoUrl: 'https://github.com/joshmrtn',
  },

  {
    title: 'Something',
    slug: 'example-7',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum fugiat velit, ad hic assumenda alias est, expedita cumque omnis, aperiam quo minus totam? Amet autem exercitationem libero soluta voluptate!',
    overview: '',
    featured: false,
    // sortOrder: 1,
    liveUrl: 'https://www.example.com',
    repoUrl: 'https://github.com/joshmrtn',
  },
  {
    title: 'Something without demo or repo links',
    slug: 'example-8',
    summary:
      'This one has only the project overview link! It has no Live Demo or View Source links. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum fugiat velit, aperiam quo minus totam? Amet autem exercitationem libero soluta voluptate!',
    overview: '',
    featured: false,
    sortOrder: 11,
  },
  {
    title: 'Something without any links',
    summary:
      'This one has no links at all - just a title and description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum fugiat velit, aperiam quo minus totam? Amet autem exercitationem libero soluta voluptate!',
    overview: '',
    featured: false,
    sortOrder: 11,
  },
];
