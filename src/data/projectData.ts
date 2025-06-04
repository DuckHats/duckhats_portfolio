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
    name: 'eduQuack',
    description: 'An educational platform to facilitate communication between teachers and students.',
    image: 'https://picsum.photos/800/400?random=1',
    github: 'https://github.com/DuckHats/eduquack',
    demo: 'https://eduquack.duckhats.com',
    stars: 156,
    tags: ['React', 'Node.js', 'MongoDB', 'TypeScript']
  },
  {
    id: 2,
    name: 'DuckHunt',
    description: 'A modern version of the classic Duck Hunt game with new features.',
    image: 'https://picsum.photos/800/400?random=2',
    github: 'https://github.com/DuckHats/duckhunt',
    demo: 'https://duckhunt.duckhats.com',
    stars: 89,
    tags: ['JavaScript', 'Canvas', 'WebGL', 'HTML5']
  },
  {
    id: 3,
    name: 'DuckDocs',
    description: 'Documentation system for open source projects.',
    image: 'https://picsum.photos/800/400?random=3',
    github: 'https://github.com/DuckHats/duckdocs',
    stars: 234,
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker']
  }
]; 