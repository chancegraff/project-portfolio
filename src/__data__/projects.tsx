import { paramCase } from 'change-case';

const allProjects = [
  {
    name: 'project 1',
    description: 'Lorem ipsum',
  },
  {
    name: 'project 2',
    description: 'Lorem ipsum',
  },
  {
    name: 'project 3',
    description: 'Lorem ipsum',
  },
  {
    name: 'project 4',
    description: 'Lorem ipsum',
  },
  {
    name: 'project 5',
    description: 'Lorem ipsum',
  },
  {
    name: 'project 6',
    description: 'Lorem ipsum',
  },
  {
    name: 'project 7',
    description: 'Lorem ipsum',
  },
];

export default [
  ...allProjects.map((project) => ({
    ...project,
    slug: paramCase(project.name),
  })),
];
