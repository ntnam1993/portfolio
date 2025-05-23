import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Project Lead',
    icon: ux,
  },
  {
    title: 'Website architecture',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Backend Developer',
    company_name: 'Neolab',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'March 2017 - Feb 2021',
  },
  {
    title: 'Backend Developer',
    company_name: 'NFQ',
    icon: microverse,
    iconBg: '#333333',
    date: 'March 2021 - Oct 2021',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Saigon Technology',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Nov 2021 - now',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'GotoBlink',
    description: 'This project work about logistic. It provide template for end user can register, make a booking to ship from collection to direction. It will manage distance to know the shipper can ship on day, two day or more.',
    tags: [
      {
        name: 'golang',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'green-text-gradient',
      },
      {
        name: 'microservice',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://gotoblink.com/',
    demo: 'https://gotoblink.com/',
  },
  {
    id: 'project-2',
    name: 'Octopush',
    description:'This project provide send sms campaign, email campaign for many users.',
    tags: [
      {
        name: 'php',
        color: 'blue-text-gradient',
      },
      {
        name: 'symfony',
        color: 'green-text-gradient',
      },
      {
        name: 'vuejs',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://octopush.com/en/',
    demo: 'https://octopush.com/en/',
  },
  {
    id: 'project-3',
    name: 'Surveys',
    description: 'This project create survey and allow user register to make survey and recieve point- User can use point to change ticket which used to discount in market place or some shop',
    tags: [
      {
        name: 'php',
        color: 'blue-text-gradient',
      },
      {
        name: 'laravel',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://apiarybuzz.com/home/',
    demo: 'https://apiarybuzz.com/home/',
  },
  {
    id: 'project-4',
    name: 'The cups coffee',
    description: 'This project is a website for a coffee shop. It is a simple website with a lot of information about the coffee shop.',
    tags: [
      {
        name: 'laravel',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://thecupscoffee.vn/',
    demo: 'https://thecupscoffee.vn/',
  },
];

export { services, technologies, experiences, projects };
