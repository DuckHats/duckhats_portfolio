export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Arnau Clavijos',
    role: 'Frontend Developer',
    image: 'src/styles/images/team/arnau.jpg',
    github: 'https://github.com/AClavijos',
    linkedin: '',
    portfolio: '',
  },
  {
    id: 2,
    name: 'Sergi Giribet',
    role: 'Designer & Developer',
    image: 'src/styles/images/team/sergi.jpg',
    github: 'https://github.com/SergiGiribet',
    linkedin: '',
    portfolio: '',
  },
  {
    id: 3,
    name: 'Ferran Garcia',
    role: 'Designer & Developer',
    image: 'src/styles/images/team/ferran.jpg',
    github: 'https://github.com/fegaant04',
    linkedin: '',
    portfolio: '',
  },
  {
    id: 4,
    name: 'Gerard Loriz',
    role: 'Backend Developer',
    image: 'src/styles/images/team/gerard.jpg',
    github: 'https://github.com/Gerijacki',
    linkedin: '',
    portfolio: '',
  }
]; 