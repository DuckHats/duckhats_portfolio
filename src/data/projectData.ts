export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  stars: number;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'MenuQuack',
    description: 'A comprehensive menu management system for schools or middle infrestructures.',
    image: 'https://picsum.photos/800/400?random=1',
    github: 'https://github.com/DuckHats/eduquack',
    demo: 'https://eduquack.duckhats.com',
    stars: 15,
    tags: ['Angular', 'Node.js', 'Mysql', 'Laravel', 'Docker']
  },
  {
    id: 2,
    name: 'SummerCampDuck',
    description: 'A fun and interactive summer camp management platform.',
    image: 'https://picsum.photos/800/400?random=2',
    github: 'https://github.com/DuckHats/duckhunt',
    demo: 'https://duckhunt.duckhats.com',
    stars: 10,
    tags: ['Angular', 'Node.js', 'Mysql', 'Laravel', 'Docker']
  }
]; 