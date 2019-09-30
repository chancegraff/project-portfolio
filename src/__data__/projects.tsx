import { paramCase } from 'change-case';

const allProjects = [
  {
    name: 'project 1',
    description: 'Lorem ipsum',
    shortDescription: 'Lipsum',
  },
  {
    name: 'project 2',
    description: 'Lorem ipsum',
    shortDescription: 'Lipsum',
  },
  {
    name: 'project 3',
    description: 'Lorem ipsum',
    shortDescription: 'Lipsum',
  },
  {
    name: 'project 4',
    description: 'Lorem ipsum',
    shortDescription: 'Lipsum',
  },
  {
    name: 'project 5',
    description: 'Lorem ipsum',
    shortDescription: 'Lipsum',
  },
  {
    name: 'project 6',
    description: 'Lorem ipsum',
    shortDescription: 'Lipsum',
  },
  {
    name: 'project 7',
    description: 'Lorem ipsum',
    shortDescription: 'Lipsum',
  },
];

export default [
  ...allProjects.map((project) => ({
    ...project,
    slug: paramCase(project.name),
  })),
];
