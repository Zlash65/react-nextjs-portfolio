//  ICONS
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// BRAND ICONS
import FreelancerBrandIcon from '../../public/assets/images/brands/freelancer.png';
import UpworkBrandIcon from '../../public/assets/images/brands/upwork.png';
import FiverBrandIcon from '../../public/assets/images/brands/fiverr.png';
import BehanceBrandIcon from '../../public/assets/images/brands/behance.png';
import DribbbleBrandIcon from '../../public/assets/images/brands/dribbble.png';

// PROJECT IMAGES
import Project1 from '../../public/assets/images/projects/project-1.png';
import Project2 from '../../public/assets/images/projects/project-2.gif';
import Project3 from '../../public/assets/images/projects/project-3.png';
import Project4 from '../../public/assets/images/projects/project-4.jpg';
import Project5 from '../../public/assets/images/projects/project-5.png';
import Project6 from '../../public/assets/images/projects/project-6.gif';

// SKILLS IMAGES
import SkillImg1 from '../../public/assets/images/skills/html5.png';
import SkillImg2 from '../../public/assets/images/skills/css3.png';
import SkillImg3 from '../../public/assets/images/skills/js.png';
import SkillImg4 from '../../public/assets/images/skills/reactjs.png';
import SkillImg5 from '../../public/assets/images/skills/nextjs.png';
import SkillImg6 from '../../public/assets/images/skills/nodejs.png';
import SkillImg7 from '../../public/assets/images/skills/git.png';
import SkillImg8 from '../../public/assets/images/skills/figma.png';

// NAVIGATION
export const navigation = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'about',
    href: '/#about',
  },
  {
    name: 'portfolio',
    href: '/portfolio',
  },
  {
    name: 'contact',
    href: '/contact',
  },
];

// SOCIAL LINKS
export const social = [
  {
    icon: <FiYoutube />,
    href: 'https://www.youtube.com/user/krakkaroxx/videos',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/krkroxx/?hl=en',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Zlash65',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/zlash65/',
  },
];

// BRANDS
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// PROJECTS
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Connect-4 Game',
    category: 'Web Development',
    description: 'Vanilla JS and DOM manipulation',
    href: 'https://zlash65.github.io/connect-four'
  },
  {
    id: '2',
    image: Project2,
    name: 'ProtonVPN',
    category: 'Branding',
    description: 'Animated logo for the brand',
    href: 'https://lottiefiles.com/105894-atom'
  },
  {
    id: '3',
    image: Project3,
    name: 'UI Kit',
    category: 'UI/UX Design',
    description: 'Neomorphic UI elements design'
  },
  {
    id: '4',
    image: Project4,
    name: 'Facebook AD',
    category: 'UI/UX Design',
    description: 'Social media ad campaign design'
  },
  {
    id: '5',
    image: Project5,
    name: 'Contact List App',
    category: 'Web Development',
    description: 'Bootstrap and API using MongoDB and NodeJS',
    href: 'https://contact-list-app.zlash.xyz'
  },
  {
    id: '6',
    image: Project6,
    name: 'Crunchyroll',
    category: 'Branding',
    description: 'Logo reveal for the brand'
  },
];

// PROJECTS NAVIGATION
export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'Web Development',
  },
  {
    name: 'Branding',
  },
];

// SKILLS
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// SERVICES
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design'
  },
  {
    icon: <FiSettings />,
    name: 'Web Development'
  },
  {
    icon: <FiPenTool />,
    name: 'Branding'
  },
  {
    icon: <FiTag />,
    name: 'SEO'
  },
];

// CONTACT
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at zarrar65@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Toronto, Canada',
    description: 'Serving clients worldwide',
  },
];
