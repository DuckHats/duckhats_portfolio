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
    name: 'Food for ducks',
    description: 'Food order management platform.',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthehomesteadinghippy.com%2Fwp-content%2Fuploads%2F2023%2F12%2Ftwo-ducks-eating-watermelon.jpg&f=1&nofb=1&ipt=2ecc5034a8922d7e68859484b26b8cdc78de21e319733f659dabdeec4016ccf3',
    github: 'https://github.com/DuckHats/menu-ginebro-front', // Cambiar al link demo
    demo: '',
    stars: 0,
    tags: ['Angular', 'Laravel', 'Mysql', 'TypeScript', 'PHP']
  }
]; 