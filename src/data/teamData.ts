export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  github: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Arnau Clavijos',
    role: 'Frontend Developer',
    image: '../styles/images/team/arnau.jpg',
    github: 'https://github.com/AClavijos',
    linkedin: '',
  },
  {
    id: 2,
    name: 'Sergi Giribet',
    role: 'Designer & Developer',
    image: '../styles/images/team/sergi.jpg',
    github: 'https://github.com/SergiGiribet',
    linkedin: '',
  },
  {
    id: 3,
    name: 'Ferran Garcia',
    role: 'Designer & Developer',
    image: '../styles/images/team/ferran.jpg',
    github: 'https://github.com/fegaant04',
    linkedin: '',
  },
  {
    id: 4,
    name: 'Gerard Loriz',
    role: 'Backend Developer',
    image: '../styles/images/team/gerard.jpg',
    github: 'https://github.com/Gerijacki',
    linkedin: '',
  }
]; 