import {
  AcademicCapIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepicme from '../images/profilepicme.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Paul Rusk',
  description: "A personal resume website built with React.js, Typescript, Next.js, and styled with Tailwind css",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Paul Rusk.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a New Jersey based <strong className="text-stone-100">Data Analyst</strong> and <strong className="text-stone-100"> recent Master's graduate</strong>, currently looking
        for <strong className="text-stone-100">Data Scientist</strong> related postions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My recent interests include reading <strong className="text-stone-100">Warhammer 40k</strong> and <strong className="text-stone-100">Berserk</strong>,
        playing my <strong className="text-stone-100">guitar</strong>, <strong className="text-stone-100">bodybuilding</strong>, and testing myself with a{' '}
        <strong className="text-stone-100">Rubik's cube</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Resume}`,
      text: 'Resume',
      primary: false,
      
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepicme,
  description: `Accomplished data analyst with extensive work experience from the world's largest musicians' labor union and recent Master's graduate.`,
  aboutItems: [
    {label: 'Location', text: 'Woodbridge, NJ', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American / Polish', Icon: FlagIcon},
    {label: 'Interests', text: 'Movies (especially scary!), anime, sports (Jets,Mets,Knicks), music (guitar, piano)', Icon: SparklesIcon},
    {label: 'Study', text: 'New Jersey Institute of Technology', Icon: AcademicCapIcon},
    {label: 'Most Recent Position', text: 'Data Analyst at Local 802 AFM', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 3,
      },
      {
        name: 'Russian',
        level: 2,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'R',
        level: 7,
      },
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'C#',
        level: 6,
      },
    ],
  },
  {
    name: 'Proficient Technologies',
    skills: [
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'Linux',
        level: 9,
      },
      {
        name: 'AWS(Ec2,s3)',
        level: 8,
      },
      {
        name: 'Pandas',
        level: 9,
      },
      {
        name: 'Scikit-Learn',
        level: 8,
      },
      {
        name: 'Tableau',
        level: 8,
      },
    ],
  },
  {
    name: 'Familiar Technologies',
    skills: [
      {
        name: 'Django',
        level: 6,
      },
      {
        name: 'React.js',
        level: 6,
      },
      {
        name: 'Flask',
        level: 5,
      },
      {
        name: 'Hadoop',
        level: 6
      },
      {
        name: 'keras',
        level: 6,
      },
      {
        name: 'Pytorch',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Streamlit',
    description: 'Here is a collection of my custom ml apps built with streamlit.',
    url: 'https://peruskjr-streamlit-welcome-vzmbmr.streamlit.app/',
    image: porfolioImage1,
  },
  {
    title: 'CatDog',
    description: 'Check out my CatDog flask app.',
    url: 'http://flask.paulrusk.com/',
    image: porfolioImage2,
  },
  {
    title: 'TBD',
    description: '',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'TBD',
    description: '',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'TBD',
    description: '',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'TBD',
    description: '',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'TBD',
    description: '',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'TBD',
    description: '',
    url: '',
    image: porfolioImage8,
  },
  {
    title: 'TBD',
    description: '',
    url: '',
    image: porfolioImage9,
  },
  {
    title: 'TBD',
    description: '',
    url: '',
    image: porfolioImage10,
  },
  {
    title: 'TBD',
    description: '',
    url: '',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2022',
    location: 'Newark, New Jersey',
    title: 'Master of Science - MS, Computational Data Science',
    title2:' ',
    content: <p></p>,
  },
  {
    date: 'May 2021',
    location: 'Newark, New Jersey',
    title: 'Bachelor of Arts - BA, Molecular Biology',
    title2: 'Minor - Information Technology',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2022 - Present',
    location: 'Consultant',
    title: 'Data Analyst | Developer',
    title2: ' ',
    content: (
      <ol>
        <li style={{marginBottom: '10px'}}>•Conducted a thorough analysis of chat service logs for a prominent online shopping website, a key client of a major tech
company, to investigate customer wait time discrepancies.</li>

        <li style={{marginBottom: '10px'}}>•Employed data cleaning techniques to improve data quality, ensuring the accuracy and reliability of analytical results.</li>

        <li style={{marginBottom: '10px'}}>•Developed automated data preprocessing scripts, reducing manual effort and improving efficiency.</li>

        <li style={{marginBottom: '10px'}}>•Crafted data-driven narratives and reports to convey insights to stakeholders, making data more accessible and actionable.
</li>

        <li style={{marginBottom: '10px'}}>•Presented findings in a visually appealing and compelling manner to enhance decision-making.
</li>

        <li style={{marginBottom: '10px'}}>•Collaborated in the development of an internal web application streamlining website creation for clients, enabling employees to
automate the process efficiently.</li>

      </ol>
    ),
  },

  {
    date: 'April 2018 - November 2022',
    location: 'Local 802 AFM',
    title: 'Data Analyst | Systems Engineer',
    title2: ' ',
    content: (
      <ol>
        <li style={{marginBottom: '10px'}}>•Centralized data from several dated proprietary systems to formulate a more stable and robust way of accessing mission critical
information for employees. This included extracting data from an old COBOL system as well as another proprietary database.</li>

        <li style={{marginBottom: '10px'}}>•Created an interactive dashboard displaying a comparative analysis of the volume of work completed over time by our members
for NY Senators. This led to increased funding. Technologies used: Python, SQL, COBOL, Tableau</li>

        <li style={{marginBottom: '10px'}}>•Automated workflows and monthly financial reports between MYSQL systems using Python, saving 20-30 hours of employee
labor a month.</li>

        <li style={{marginBottom: '10px'}}>•Identified and recovered over $700,000 of previously unallocated funds. By meticulously analyzing financial records and
reconciling discrepancies, I was able to uncover these funds that had previously gone unnoticed.
</li>

        <li style={{marginBottom: '10px'}}>•Implemented an automated payment reminder that drastically reduced the number of suspended members per quarter.
</li>

        <li style={{marginBottom: '10px'}}>•Provided experience as technical lead to assist leadership in restructuring several departments by carefully analyzing existing
processes, identifying bottlenecks, and implementing streamlined procedures.</li>

        <li style={{marginBottom: '10px'}}>•Coordinated with Sophos Antivirus Global Dev team that lead to a global patch for their 10 million users. One of their services
was causing a kernel panic on Win10.</li>

        <li style={{marginBottom: '10px'}}>•Prepared a dashboard that visualized member demographics for the cultural and inclusivity team that worked alongside an award-winning magazine.</li>
      </ol>
    ),
  },

  {
    date: 'April 2020 - September 2020',
    location: 'RMIT Services',
    title: 'Full Stack Web Developer',
    title2: '(While laid off during Covid Shutdowns)',
    content: (
      <ol>
        <li style={{marginBottom: '10px'}}>• Created and maintained websites for clients with tools and technologies including AWS, React, Next, Squarespace, and WordPress.</li>
      </ol>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'This man, is the perfect gentleman.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'The absolute wham bam.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'This guy codes!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch. (under construction)',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'peruskjr@gmail.com',
      href: 'mailto:peruskjr@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Woodbridge, New Jersey',
      href: 'https://www.google.com/maps/place/Woodbridge+Township,+NJ/@40.5498539,-74.283391,12z',
    },
    {
      type: ContactType.Github,
      text: 'peruskjr',
      href: 'https://github.com/peruskjr',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/peruskjr'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/paulruskdatascience/'},
  
];
