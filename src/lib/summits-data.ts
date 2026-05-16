/**
 * Climate Robotics Summit Data
 * 
 * Contains all summit metadata, programs, speakers, sponsors, and video catalogs.
 * Update this file when adding new summits or updating existing content.
 */

// =============================================================================
// TYPES
// =============================================================================

export interface Summit {
  year: string;
  name: string;
  dates: string;
  dateRange: { start: string; end: string };
  location: string;
  status: 'upcoming' | 'past';
  tagline: string;
  description: string;
  registrationUrl?: string;
  stats?: {
    attendees: string;
    countries: string;
    sessions: string;
    speakers: string;
  };
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  organization: string;
  bio?: string;
  photoUrl?: string;
  linkedIn?: string;
  isKeynote?: boolean;
  summitYear: string;
}

export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description?: string;
  duration: string;
  type: 'keynote' | 'panel' | 'talk' | 'pitch' | 'opening' | 'closing';
  speakers?: string[];
  day: number;
  order: number;
}

export interface Session {
  id: string;
  title: string;
  time: string;
  description?: string;
  videos: Video[];
  type: 'keynote' | 'panel' | 'break' | 'networking';
}

export interface ProgramDay {
  day: number;
  date: string;
  theme: string;
  sessions: Session[];
}

export interface TeamMember {
  id: string;
  name: string;
  role?: string;
  organization?: string;
  photoUrl?: string;
  linkedIn?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  tier: 'platinum' | 'gold' | 'silver' | 'partner' | 'organizing';
}

// =============================================================================
// SUMMITS
// =============================================================================

export const SUMMITS: Record<string, Summit> = {
  '2026': {
    year: '2026',
    name: 'Climate Robotics Summit 2026',
    dates: 'April 21-23, 2026',
    dateRange: { start: '2026-04-21', end: '2026-04-23' },
    location: 'Online',
    status: 'past',
    tagline: 'How Can Robotics Scale Climate Action?',
    description: 'The third annual Climate Robotics Summit brought together researchers, engineers, entrepreneurs, and policymakers across three days of keynotes, panels, and pitches on energy, biodiversity, ocean observation, recycling, water, and the built environment.',
  },
  '2025': {
    year: '2025',
    name: 'Climate Robotics Summit 2025',
    dates: 'May 6-9, 2025',
    dateRange: { start: '2025-05-06', end: '2025-05-09' },
    location: 'Online',
    status: 'past',
    tagline: 'How Can Robotics Scale Climate Action?',
    description: 'The second annual Climate Robotics Summit brought together 500+ attendees from 40+ countries to explore how robotics can address the climate crisis.',
    stats: {
      attendees: '500+',
      countries: '40+',
      sessions: '33',
      speakers: '50+',
    },
  },
};

// =============================================================================
// SUMMIT 2025 VIDEOS
// =============================================================================

export const SUMMIT_2025_VIDEOS: Video[] = [
  // Day 1 - Opening & Keynotes
  {
    id: 'v-opening',
    youtubeId: 'Dp9kfItp0Xw',
    title: 'Opening Remarks by Patrick Meier',
    duration: '6:22',
    type: 'opening',
    speakers: ['Patrick Meier'],
    day: 1,
    order: 1,
  },
  {
    id: 'v-keynote-nilles',
    youtubeId: 'WMPberHbFwk',
    title: 'Keynote: Alexandra Nilles on Minimalist Robotics',
    duration: '18:27',
    type: 'keynote',
    speakers: ['Alexandra Nilles'],
    day: 1,
    order: 2,
  },
  {
    id: 'v-keynote-kovac',
    youtubeId: 'F5_6FljaqJ8',
    title: 'Keynote: Mirko Kovac on Sustainability Robotics',
    duration: '21:16',
    type: 'keynote',
    speakers: ['Mirko Kovac'],
    day: 1,
    order: 3,
  },
  {
    id: 'v-keynote-yoerger',
    youtubeId: 'q6ebzlOQjU8',
    title: 'Keynote: Dana Yoerger on Marine Robotics',
    duration: '35:37',
    type: 'keynote',
    speakers: ['Dana Yoerger'],
    day: 1,
    order: 4,
  },
  {
    id: 'v-state',
    youtubeId: 'on5moiU7uMo',
    title: '1. The State of Climate Robotics',
    description: 'An overview of the current landscape of climate robotics applications worldwide.',
    duration: '29:07',
    type: 'panel',
    day: 1,
    order: 5,
  },
  // Day 2 - Biodiversity, Agriculture, Ocean
  {
    id: 'v-biodiversity',
    youtubeId: 'ggy4BsNSlbI',
    title: '2. Biodiversity and Robotics',
    description: 'How robotics is helping monitor and protect biodiversity.',
    duration: '49:58',
    type: 'panel',
    day: 2,
    order: 1,
  },
  {
    id: 'v-startups',
    youtubeId: 'K2-qLciC98Y',
    title: '3. Climate Robotics Startup Pitches',
    description: 'Innovative startups presenting their climate robotics solutions.',
    duration: '45:00',
    type: 'pitch',
    day: 2,
    order: 2,
  },
  {
    id: 'v-agriculture',
    youtubeId: 'csYCdjlGRCw',
    title: '4. Robotics & Sustainable Agriculture',
    description: 'Transforming agriculture with autonomous systems.',
    duration: '48:32',
    type: 'panel',
    day: 2,
    order: 3,
  },
  {
    id: 'v-ocean',
    youtubeId: 'c8CQSo9Vg5w',
    title: '5. Ocean & Marine Robotics',
    description: 'Underwater robots for ocean conservation and research.',
    duration: '52:14',
    type: 'panel',
    day: 2,
    order: 4,
  },
  // Day 3 - Energy, Waste, Infrastructure
  {
    id: 'v-forestry',
    youtubeId: 'BXrKRVrchuc',
    title: '6. Forestry & Wildfire Prevention',
    description: 'Robots fighting wildfires and managing forests.',
    duration: '44:21',
    type: 'panel',
    day: 3,
    order: 1,
  },
  {
    id: 'v-disaster',
    youtubeId: 'YdbPBsv4NO0',
    title: '7. Disaster Response Robotics',
    description: 'Deploying robots in climate disaster scenarios.',
    duration: '39:45',
    type: 'panel',
    day: 3,
    order: 2,
  },
  {
    id: 'v-waste',
    youtubeId: 'ew1rq_nYIcM',
    title: '8. Waste Management',
    description: 'Robotic solutions for waste sorting and recycling.',
    duration: '41:38',
    type: 'panel',
    day: 3,
    order: 3,
  },
  {
    id: 'v-infrastructure',
    youtubeId: 'WBM6jkI_buw',
    title: '9. Infrastructure & Construction',
    description: 'Building sustainable infrastructure with robotics.',
    duration: '43:22',
    type: 'panel',
    day: 3,
    order: 4,
  },
  {
    id: 'v-energy',
    youtubeId: 'dxP3qfxmheA',
    title: '10. Energy Management & Inspection',
    description: 'Robots for renewable energy and grid inspection.',
    duration: '47:05',
    type: 'panel',
    day: 3,
    order: 5,
  },
  // Day 4 - Ethics, Policy, Future
  {
    id: 'v-ethics',
    youtubeId: 'inbA08vV3Xs',
    title: '11. Ethical Dilemmas in Climate Robotics',
    description: 'Navigating the ethical considerations of climate robotics.',
    duration: '51:13',
    type: 'panel',
    day: 4,
    order: 1,
  },
  {
    id: 'v-future',
    youtubeId: 'vvi_qVK1BkI',
    title: '12. The Future of Climate Robotics',
    description: 'What lies ahead for robotics in climate action.',
    duration: '46:16',
    type: 'panel',
    day: 4,
    order: 2,
  },
  {
    id: 'v-policy',
    youtubeId: 'aC4QBUUl-rg',
    title: '13. Policy & Governance',
    description: 'Regulatory frameworks for climate robotics deployment.',
    duration: '38:50',
    type: 'panel',
    day: 4,
    order: 3,
  },
  {
    id: 'v-closing',
    youtubeId: 'wZgOPvtauzE',
    title: 'Closing Remarks & Call to Action',
    description: 'Summary and next steps for the climate robotics community.',
    duration: '15:30',
    type: 'closing',
    day: 4,
    order: 4,
  },
];

// =============================================================================
// SUMMIT 2025 PROGRAM
// =============================================================================

export const SUMMIT_2025_PROGRAM: ProgramDay[] = [
  {
    day: 1,
    date: 'May 6, 2025',
    theme: 'Opening & Keynotes',
    sessions: [
      {
        id: 's1-1',
        title: 'Opening Ceremony',
        time: '09:00 - 09:30 UTC',
        type: 'keynote',
        videos: SUMMIT_2025_VIDEOS.filter(v => v.day === 1 && v.order === 1),
      },
      {
        id: 's1-2',
        title: 'Keynote Sessions',
        time: '09:30 - 12:00 UTC',
        description: 'Three inspiring keynotes from leading researchers in climate robotics.',
        type: 'keynote',
        videos: SUMMIT_2025_VIDEOS.filter(v => v.day === 1 && v.type === 'keynote'),
      },
      {
        id: 's1-3',
        title: 'The State of Climate Robotics',
        time: '14:00 - 15:00 UTC',
        description: 'A comprehensive overview of the climate robotics landscape.',
        type: 'panel',
        videos: SUMMIT_2025_VIDEOS.filter(v => v.day === 1 && v.order === 5),
      },
    ],
  },
  {
    day: 2,
    date: 'May 7, 2025',
    theme: 'Biodiversity, Agriculture & Ocean',
    sessions: [
      {
        id: 's2-1',
        title: 'Biodiversity and Robotics',
        time: '09:00 - 10:00 UTC',
        description: 'Exploring how robots help monitor and protect ecosystems.',
        type: 'panel',
        videos: SUMMIT_2025_VIDEOS.filter(v => v.id === 'v-biodiversity'),
      },
      {
        id: 's2-2',
        title: 'Climate Robotics Startup Pitches',
        time: '10:30 - 12:00 UTC',
        description: 'Innovative startups showcasing their solutions.',
        type: 'panel',
        videos: SUMMIT_2025_VIDEOS.filter(v => v.id === 'v-startups'),
      },
      {
        id: 's2-3',
        title: 'Sustainable Agriculture & Ocean Robotics',
        time: '14:00 - 16:00 UTC',
        description: 'Robots transforming farming and ocean conservation.',
        type: 'panel',
        videos: SUMMIT_2025_VIDEOS.filter(v => v.id === 'v-agriculture' || v.id === 'v-ocean'),
      },
    ],
  },
  {
    day: 3,
    date: 'May 8, 2025',
    theme: 'Energy, Infrastructure & Disaster Response',
    sessions: [
      {
        id: 's3-1',
        title: 'Forestry & Wildfire Prevention',
        time: '09:00 - 10:00 UTC',
        description: 'Robotic solutions for forest management and fire prevention.',
        type: 'panel',
        videos: SUMMIT_2025_VIDEOS.filter(v => v.id === 'v-forestry'),
      },
      {
        id: 's3-2',
        title: 'Disaster Response & Waste Management',
        time: '10:30 - 12:30 UTC',
        description: 'Deploying robots in emergencies and for waste solutions.',
        type: 'panel',
        videos: SUMMIT_2025_VIDEOS.filter(v => v.id === 'v-disaster' || v.id === 'v-waste'),
      },
      {
        id: 's3-3',
        title: 'Infrastructure & Energy',
        time: '14:00 - 16:00 UTC',
        description: 'Building sustainable infrastructure and managing energy.',
        type: 'panel',
        videos: SUMMIT_2025_VIDEOS.filter(v => v.id === 'v-infrastructure' || v.id === 'v-energy'),
      },
    ],
  },
  {
    day: 4,
    date: 'May 9, 2025',
    theme: 'Ethics, Policy & The Future',
    sessions: [
      {
        id: 's4-1',
        title: 'Ethical Dilemmas in Climate Robotics',
        time: '09:00 - 10:00 UTC',
        description: 'Navigating the moral complexities of autonomous systems.',
        type: 'panel',
        videos: SUMMIT_2025_VIDEOS.filter(v => v.id === 'v-ethics'),
      },
      {
        id: 's4-2',
        title: 'The Future of Climate Robotics',
        time: '10:30 - 11:30 UTC',
        description: 'Visionary perspectives on what lies ahead.',
        type: 'panel',
        videos: SUMMIT_2025_VIDEOS.filter(v => v.id === 'v-future'),
      },
      {
        id: 's4-3',
        title: 'Policy, Governance & Closing',
        time: '14:00 - 15:30 UTC',
        description: 'Regulatory frameworks and a call to action.',
        type: 'panel',
        videos: SUMMIT_2025_VIDEOS.filter(v => v.id === 'v-policy' || v.id === 'v-closing'),
      },
    ],
  },
];

// =============================================================================
// SPEAKERS
// =============================================================================

export const SPEAKERS_2025: Speaker[] = [
  {
    id: 'patrick-meier',
    name: 'Patrick Meier',
    title: 'Founder',
    organization: 'Climate Robotics Network',
    bio: 'Patrick Meier is an internationally recognized thought leader and practitioner who has spent 20+ years working at the intersection of technology and social impact.',
    linkedIn: 'https://www.linkedin.com/in/meierpatrick/',
    isKeynote: false,
    summitYear: '2025',
  },
  {
    id: 'mirko-kovac',
    name: 'Mirko Kovac',
    title: 'Director, Aerial Robotics Lab',
    organization: 'Imperial College London & EMPA',
    photoUrl: '/images/speakers/mirko-kovac.jpg',
    bio: 'Leading researcher in sustainability robotics and aerial systems for environmental monitoring.',
    linkedIn: 'https://www.linkedin.com/in/mirkokovac/',
    isKeynote: true,
    summitYear: '2025',
  },
  {
    id: 'alexandra-nilles',
    name: 'Alexandra Nilles',
    title: 'Assistant Professor',
    organization: 'MIT',
    photoUrl: '/images/speakers/alexandra-nilles.jpg',
    bio: 'Expert in minimalist robotics and autonomous systems for environmental applications.',
    isKeynote: true,
    summitYear: '2025',
    linkedIn: 'https://www.linkedin.com/in/dr-alexandra-nilles/',
  },
  {
    id: 'dana-yoerger',
    name: 'Dana Yoerger',
    title: 'Senior Scientist',
    organization: 'Woods Hole Oceanographic Institution',
    photoUrl: '/images/speakers/dana-yoerger.jpg',
    bio: 'Pioneer in underwater robotics and deep-sea exploration for climate research.',
    isKeynote: true,
    summitYear: '2025',
    linkedIn: 'https://www.linkedin.com/in/dana-yoerger-a053821a/',
  },
  {
    id: 'katie-bradford',
    name: 'Katie Bradford',
    title: 'Climate Tech Investor',
    organization: 'Climate Capital',
    photoUrl: '/images/speakers/katie-bradford.jpg',
    bio: 'Focused on investing in climate robotics startups and scaling solutions.',
    summitYear: '2025',
    linkedIn: 'https://www.linkedin.com/in/bradford-katie/',
  },
  {
    id: 'fady-saad',
    name: 'Fady Saad',
    title: 'Co-Founder',
    organization: 'MassRobotics',
    photoUrl: '/images/speakers/fady-saad.jpg',
    bio: 'Building the robotics ecosystem and supporting climate-focused startups.',
    summitYear: '2025',
    linkedIn: 'https://www.linkedin.com/in/fady-saad-0a1972/',
  },
  {
    id: 'brooke-zhang',
    name: 'Brooke Zhang',
    title: 'Robotics Engineer',
    organization: 'Boston Dynamics',
    photoUrl: '/images/speakers/brooke-zhang.jpg',
    bio: 'Working on deploying robots for environmental monitoring and disaster response.',
    summitYear: '2025',
    linkedIn: 'https://www.linkedin.com/in/brookeqingzhang/',
  },
  {
    id: 'salman-faraji',
    name: 'Salman Faraji',
    title: 'Research Scientist',
    organization: 'ETH Zurich',
    photoUrl: '/images/speakers/salman-faraji.jpg',
    bio: 'Developing legged robots for challenging terrain in climate applications.',
    summitYear: '2025',
    linkedIn: 'https://www.linkedin.com/in/salman-faraji/',
  },
];

// =============================================================================
// SPONSORS & PARTNERS
// =============================================================================

export const SPONSORS_2025: Sponsor[] = [
  // Organizing Partners
  {
    id: 'eth-zurich',
    name: 'ETH Zurich',
    logoUrl: '/images/sponsors/eth-zurich.png',
    websiteUrl: 'https://ethz.ch/en.html',
    tier: 'organizing',
  },
  {
    id: 'empa',
    name: 'EMPA',
    logoUrl: '/images/sponsors/empa.png',
    websiteUrl: 'https://www.empa.ch/',
    tier: 'organizing',
  },
  {
    id: 'swissnex',
    name: 'Swissnex',
    logoUrl: '/images/sponsors/swissnex.png',
    websiteUrl: 'https://swissnex.org',
    tier: 'organizing',
  },
  {
    id: 'grasp-upenn',
    name: 'GRASP Lab - UPenn',
    logoUrl: '/images/sponsors/grasp.png',
    websiteUrl: 'https://www.grasp.upenn.edu/',
    tier: 'organizing',
  },
  {
    id: 'wpi',
    name: 'WPI',
    logoUrl: '/images/sponsors/wpi.png',
    websiteUrl: 'https://www.wpi.edu/',
    tier: 'organizing',
  },
  // Sponsors
  {
    id: 'sosv',
    name: 'SOSV',
    logoUrl: '/images/sponsors/sosv.png',
    websiteUrl: 'https://sosv.com/',
    tier: 'gold',
  },
  {
    id: 'cybernetix',
    name: 'Cybernetix VC',
    logoUrl: '/images/sponsors/cybernetix.png',
    websiteUrl: 'https://cybernetix.vc/',
    tier: 'gold',
  },
  {
    id: 'mit-aura',
    name: 'MIT Aura',
    logoUrl: '/images/sponsors/mit-aura.png',
    websiteUrl: 'https://aura.mit.edu/',
    tier: 'silver',
  },
  {
    id: 'fondation-valery',
    name: 'Fondation Valery',
    logoUrl: '/images/sponsors/fondation-valery.png',
    websiteUrl: 'https://www.fondation-valery.ch/',
    tier: 'silver',
  },
  // Partners
  {
    id: 'climate-hack',
    name: 'Climate Hack',
    logoUrl: '/images/sponsors/climate-hack.png',
    websiteUrl: 'https://www.climatehack.global',
    tier: 'partner',
  },
  {
    id: 'cnr-italy',
    name: 'CNR Italy',
    logoUrl: '/images/sponsors/cnr.png',
    websiteUrl: 'https://www.cnr.it/',
    tier: 'partner',
  },
  {
    id: 'robo-success',
    name: 'Robo Success',
    logoUrl: '/images/sponsors/robo-success.png',
    websiteUrl: 'https://robo-success.com/',
    tier: 'partner',
  },
];

export const SPONSORS_2026: Sponsor[] = [
  // Organizing Partners (per the 2026 summit page)
  {
    id: 'crn',
    name: 'Climate Robotics Network',
    logoUrl: '',
    websiteUrl: 'https://climaterobotics.network',
    tier: 'organizing',
  },
  {
    id: 'wpi-2026',
    name: 'Worcester Polytechnic Institute',
    logoUrl: '/images/sponsors/wpi.png',
    websiteUrl: 'https://www.wpi.edu/',
    tier: 'organizing',
  },
  {
    id: 'empa-2026',
    name: 'EMPA',
    logoUrl: '/images/sponsors/empa.png',
    websiteUrl: 'https://www.empa.ch/',
    tier: 'organizing',
  },
  {
    id: 'cnr-2026',
    name: 'CNR Italy',
    logoUrl: '/images/sponsors/cnr.png',
    websiteUrl: 'https://www.cnr.it/',
    tier: 'organizing',
  },
  {
    id: 'eth-zurich-2026',
    name: 'ETH Zurich',
    logoUrl: '/images/sponsors/eth-zurich.png',
    websiteUrl: 'https://ethz.ch/en.html',
    tier: 'organizing',
  },
  {
    id: 'u-michigan',
    name: 'University of Michigan',
    logoUrl: '/images/sponsors/u-michigan.png',
    websiteUrl: 'https://umich.edu/',
    tier: 'organizing',
  },
  // Gold Sponsor (welcomed on Day 1)
  {
    id: 'robo-success-2026',
    name: 'RoboSuccess',
    logoUrl: '/images/sponsors/robo-success.png',
    websiteUrl: 'https://robo-success.com/',
    tier: 'gold',
  },
];

// =============================================================================
// SUMMIT 2026 VIDEOS (placeholder — recordings published after the event)
// =============================================================================

export const SUMMIT_2026_VIDEOS: Video[] = [];

// =============================================================================
// SUMMIT 2026 SPEAKERS
// =============================================================================

export const SPEAKERS_2026: Speaker[] = [
  // Hosts & opening/closing
  {
    id: 'patrick-meier-2026',
    name: 'Patrick Meier',
    title: 'Director of Sustainable Ventures',
    organization: 'Climate Robotics Network',
    linkedIn: 'https://www.linkedin.com/in/meierpatrick/',
    summitYear: '2026',
  },
  {
    id: 'berk-calli',
    name: 'Berk Çallı',
    title: 'Faculty',
    organization: 'Worcester Polytechnic Institute',
    photoUrl: '/images/speakers/berk-calli.jpg',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/berk-calli-6313461a/',
  },
  {
    id: 'jesica-chavez',
    name: 'Jesica Chavez',
    title: 'Gold Sponsor Welcome',
    organization: 'RoboSuccess',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/jesica-chavez/',
  },
  {
    id: 'stefano-minchev',
    name: 'Stefano Mintchev',
    title: 'Day 3 Opening',
    organization: 'Climate Robotics Network',
    photoUrl: '/images/speakers/stefano-minchev.jpg',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/stefanomintchev/',
  },
  // Keynotes
  {
    id: 'anna-lerner-nesbitt',
    name: 'Anna Lerner Nesbitt',
    title: 'Chief Executive Officer',
    organization: 'Climate Collective',
    bio: 'CEO of the Climate Collective, a coalition leveraging sustainable web3 infrastructure to unlock verifiable climate action at scale. Anna brings 16+ years of international experience at the intersection of development, technology, and the private sector across four continents.',
    isKeynote: true,
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/anna-lerner-nesbitt/',
  },
  {
    id: 'cathy-wu',
    name: 'Cathy Wu',
    title: 'Gilbert W. Winslow Career Development Assistant Professor',
    organization: 'MIT',
    bio: 'Studies machine learning for control and optimization for sustainable mobility. Founder and Chair of the Interdisciplinary Research Initiative at the ACM Future of Computing Academy and recipient of the NSF Career Award for advancing learning in large-scale cyber-physical systems.',
    isKeynote: true,
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/cathywu/',
  },
  {
    id: 'thomas-walla',
    name: 'Thomas Walla',
    title: 'Team Lead, Limelight Rainforest • Professor of Biology',
    organization: 'Colorado Mesa University',
    photoUrl: '/images/speakers/thomas-walla.jpg',
    bio: 'Led the team that won the Grand Prize in the 2024 XPRIZE Rainforest Competition, developing transformative technologies for biodiversity sampling in tropical forests. Long-standing background in tropical ecology and biodiversity monitoring from field research in the Amazon and Andes.',
    isKeynote: true,
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/thomas-walla-520b49297/',
  },
  // Session 1 — Biodiversity and Robotics
  {
    id: 'raphael-zufferey',
    name: 'Raphael Zufferey',
    title: 'Professor',
    organization: 'Massachusetts Institute of Technology',
    photoUrl: '/images/speakers/raphael-zufferey.jpg',
    bio: 'Specializes in aerial robotics for environmental monitoring, using autonomous drones to support biodiversity assessment and conservation.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/raphael-zufferey/',
  },
  {
    id: 'ulrik-schultz-lundquist',
    name: 'Ulrik Pagh Schultz Lundquist',
    title: 'Professor',
    organization: 'University of Southern Denmark',
    photoUrl: '/images/speakers/ulrik-schultz-lundquist.jpg',
    bio: 'Leader in drone technology, working on autonomous robotic systems for environmental monitoring and biodiversity applications.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/ulrik/',
  },
  {
    id: 'davide-di-blasi',
    name: 'Davide Di Blasi',
    title: 'Antarctic Explorer & Researcher',
    organization: 'Istituto Italiano di Tecnologia',
    photoUrl: '/images/speakers/davide-di-blasi.jpg',
    bio: 'Studies the life cycle of toothfish and leverages robotic technologies to support biodiversity research in extreme environments.',
    summitYear: '2026',
  },
  {
    id: 'annette-govindarajan',
    name: 'Annette Govindarajan',
    title: 'Scientist',
    organization: 'Woods Hole Oceanographic Institution',
    photoUrl: '/images/speakers/annette-govindarajan.jpg',
    bio: 'Marine biodiversity and genomics, leveraging advanced sensing and robotic platforms to study ocean ecosystems and their response to environmental change.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/annette-govindarajan/',
  },
  {
    id: 'jurg-germann',
    name: 'Jürg Germann',
    title: 'Co-Founder & CEO',
    organization: 'Inverto Earth',
    photoUrl: '/images/speakers/jurg-germann.jpg',
    bio: 'Leads development of robotic and data-driven solutions for environmental monitoring, supporting biodiversity conservation at scale.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/jurggermann/',
  },
  // Session 2 — Start-up Pitches
  {
    id: 'amy-ma',
    name: 'Amy Ma',
    title: 'Chief Executive Officer',
    organization: 'Danu Robotics',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/xiaoyan-amy-m-048035123/',
  },
  {
    id: 'annie-rosas',
    name: 'Annie Aixa Rosas Hernández',
    title: 'Co-founder and Director',
    organization: 'Bluekali',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/annierosashdez/',
  },
  // Session 3 — Energy Infrastructure
  {
    id: 'alan-papalia',
    name: 'Alan Papalia',
    title: 'Assistant Professor',
    organization: 'University of Michigan',
    bio: 'Marine robotics, robot navigation, and environmental monitoring. Lead author of the "Roadmap for Climate-Relevant Robotics."',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/alan-papalia/',
  },
  {
    id: 'charles-dawson',
    name: 'Charles Dawson',
    title: 'Controls & Optimization',
    organization: 'Emerald AI',
    photoUrl: '/images/speakers/charles-dawson.jpg',
    bio: 'Works on enabling power flexibility for data centers. Previously at the Massachusetts Department of Energy Resources on load management, grid planning, and clean energy policy.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/c6d5/',
  },
  {
    id: 'dave-lane',
    name: 'Dave Lane',
    title: 'Professor Emeritus & CEO of SeaByte',
    organization: 'Heriot-Watt University',
    photoUrl: '/images/speakers/dave-lane.jpg',
    bio: 'Pioneer in marine robotics — autonomy, sonar, and subsea systems for offshore inspection, intervention, and energy applications.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/lanedavid/',
  },
  {
    id: 'yvan-petillot',
    name: 'Yvan Petillot',
    title: 'Professor of Robotics and Autonomous Systems',
    organization: 'Heriot-Watt University',
    photoUrl: '/images/speakers/yvan-petillot.jpg',
    bio: 'Marine sector robotics with a long-term vision of robot teams operating in hazardous environments. Two decades of contributions to robot perception, navigation, and planning underwater.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/yvan-petillot-7b524b4/',
  },
  // Session 4 — Earth and Ocean Observations
  {
    id: 'matthew-palmer',
    name: 'Matthew Palmer',
    title: 'Joint Director, UK National Climate Science Partnership',
    organization: 'Met Office',
    photoUrl: '/images/speakers/matthew-palmer.jpg',
    bio: 'Ocean warming, sea-level change, and climate projections supporting large-scale Earth and ocean observation.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/matt-palmer-23829228/',
  },
  {
    id: 'enrico-ajanic',
    name: 'Enrico Ajanic',
    title: 'R&D Engineer',
    organization: 'Meteomatics',
    bio: 'Develops drone-based atmospheric sensing systems that enhance weather and Earth observation capabilities.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/enricoajanic/',
  },
  {
    id: 'michal-adamkiewicz',
    name: 'Michal Adamkiewicz',
    title: 'R&D Engineer',
    organization: 'WindBorne Systems',
    photoUrl: '/images/speakers/michal-adamkiewicz.jpg',
    bio: 'Contributes to long-duration balloon platforms and meteorological sensing technologies for global atmospheric observation.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/micha%C5%82-adamkiewicz/',
  },
  {
    id: 'maarja-kruusmaa',
    name: 'Maarja Kruusmaa',
    title: 'Professor & Head, Centre for Biorobotics',
    organization: 'TalTech',
    photoUrl: '/images/speakers/maarja-kruusmaa.jpg',
    bio: 'Leads research in underwater robotics, underwater sensing, and environmental monitoring systems.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/maarja-kruusmaa/',
  },
  {
    id: 'gordon-zhang',
    name: 'Weifeng "Gordon" Zhang',
    title: 'Senior Scientist',
    organization: 'Woods Hole Oceanographic Institution',
    photoUrl: '/images/speakers/gordon-zhang.jpg',
    bio: 'Integrates ocean observation, modeling, and autonomous systems to study ocean circulation and marine ecosystem dynamics.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/gordonzhang1/',
  },
  // Session 5 — Funding Climate Robotics
  {
    id: 'benjamin-maitland-lewis',
    name: 'Benjamin Maitland-Lewis',
    title: 'Director of Startup Banking & Founder Success',
    organization: 'Silicon Valley Bank',
    photoUrl: '/images/speakers/benjamin-maitland-lewis.jpg',
    bio: 'Works closely with early-stage founders on fundraising, growth, and commercialization strategies for emerging climate robotics ventures.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/maitlandlewis/',
  },
  {
    id: 'edgar-ke',
    name: 'Edgar Ke',
    title: 'Venture Builder & Investor',
    organization: 'Marble',
    photoUrl: '/images/speakers/edgar-ke.jpg',
    bio: 'Climate deeptech investor with a focus on batteries and robotics, supporting founders working on hard-tech solutions for climate impact.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/edgarke/',
  },
  {
    id: 'fady-saad-2026',
    name: 'Fady Saad',
    title: 'General Partner • Co-founder',
    organization: 'Cybernetix Ventures / MassRobotics',
    photoUrl: '/images/speakers/fady-saad.jpg',
    bio: 'Extensive experience in robotics venture investing, startup fundraising, and scaling innovation ecosystems.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/fady-saad-0a1972/',
  },
  {
    id: 'andy-gollach',
    name: 'Andy Gollach',
    title: 'Partner',
    organization: 'SOSV / HAX',
    photoUrl: '/images/speakers/andy-gollach.jpg',
    bio: 'Supports hard-tech founders in energy, heavy industry, and climate technology, spanning investment and industrial operations.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/andrewgollach/',
  },
  // Session 6 — Recycling Management and Robotics
  {
    id: 'manuel-catalano',
    name: 'Manuel G. Catalano',
    title: 'Principal Investigator, NuBots',
    organization: 'Italian Institute of Technology',
    photoUrl: '/images/speakers/manuel-catalano.jpg',
    bio: 'Focused on Physical AI Technologies for Human-Robot Co-Evolution, developing flexible robotic solutions for the recycling of soft materials.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/manuel-giuseppe-catalano-518a5631/',
  },
  {
    id: 'alireza-rastegarpanah',
    name: 'Alireza Rastegarpanah',
    title: 'Co-Founder, Extreme Robotics Lab',
    organization: 'University of Birmingham',
    photoUrl: '/images/speakers/alireza-rastegarpanah.png',
    bio: 'Specializes in robotic EV battery recycling at the National Sustainable Robotics Centre in the UK.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/alireza-rastegarpanah-37a98441/',
  },
  {
    id: 'anwar-al-assadi',
    name: 'Anwar Al Assadi',
    title: 'Group Leader',
    organization: 'Fraunhofer Institute for Manufacturing Engineering and Automation',
    photoUrl: '/images/speakers/anwar-al-assadi.jpg',
    bio: 'Focused on automated solutions for EV battery recycling.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/anwaralassadi/',
  },
  {
    id: 'alan-winfield',
    name: 'Alan Winfield',
    title: 'Professor of Robot Ethics',
    organization: 'University of the West of England',
    photoUrl: '/images/speakers/alan-winfield.jpg',
    bio: 'Focus on the sustainable use of robotics. Honorary Professor at the University of York.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/alan-winfield-3b8822346/',
  },
  {
    id: 'helen-mcgloin',
    name: 'Helen McGloin',
    title: 'PhD Researcher',
    organization: 'Bristol Robotics Laboratory',
    photoUrl: '/images/speakers/helen-mcgloin.webp',
    bio: 'Researches environmental sustainability in the robotics industry — e-waste, reuse and repurposing, and barriers to implementing circular economy principles in industrial and consumer robotics.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/helen-mcgloin-52612765/',
  },
  // Session 7 — Built Environment and Efficiency via Robotics
  {
    id: 'mirko-kovac-2026',
    name: 'Mirko Kovac',
    title: 'Professor, Sustainability Robotics',
    organization: 'EPFL',
    photoUrl: '/images/speakers/mirko-kovac-2026.jpg',
    bio: 'Develops aerial robotic systems for inspection, sensing, and intervention in challenging built and infrastructure environments.',
    linkedIn: 'https://www.linkedin.com/in/mirkokovac/',
    summitYear: '2026',
  },
  {
    id: 'norhan-bayomi',
    name: 'Norhan Bayomi',
    title: 'Co-founder & COO • Postdoctoral Fellow',
    organization: 'Lamarr.AI / MIT',
    photoUrl: '/images/speakers/norhan-bayomi.jpg',
    bio: 'Combines AI, design, and technology to tackle challenges in the built environment.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/nourhanshaaban/',
  },
  {
    id: 'john-fernandez',
    name: 'John Fernandez',
    title: 'Speaker',
    organization: 'MIT',
    photoUrl: '/images/speakers/john-fernandez.jpg',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/johnefernandez/',
  },
  {
    id: 'ramon-weber',
    name: 'Ramon Weber',
    title: 'Assistant Professor',
    organization: 'UC Berkeley',
    photoUrl: '/images/speakers/ramon-weber.jpg',
    bio: 'Computational design, sustainability, and automation supporting the development of low-carbon and more efficient buildings.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/ramon-elias-weber/',
  },
  {
    id: 'stefana-parascho',
    name: 'Stefana Parascho',
    title: 'Professor',
    organization: 'EPFL',
    photoUrl: '/images/speakers/stefana-parascho.jpg',
    bio: 'Explores digital production methods and robot-assisted construction processes for more sustainable building practices.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/stefanaparascho/',
  },
  {
    id: 'dylan-crow',
    name: 'Dylan Crow',
    title: 'CEO & Co-founder',
    organization: 'Renovate Robotics',
    photoUrl: '/images/speakers/dylan-crow.jpg',
    bio: 'Leads the development of robotic systems for roofing and solar installation in building retrofit and maintenance.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/dylancrow/',
  },
  // Session 8 — Research Pitches
  {
    id: 'kaushik-jayaram',
    name: 'Kaushik Jayaram',
    title: 'Researcher',
    organization: 'Imperial College London',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/kaushikj1729/',
  },
  {
    id: 'enrica-zereik',
    name: 'Enrica Zereik',
    title: 'Researcher',
    organization: 'National Research Council of Italy (CNR)',
    summitYear: '2026',
  },
  {
    id: 'kevin-holdcroft',
    name: 'Kevin Andrew Holdcroft',
    title: 'Researcher',
    organization: 'EPFL',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/kevinholdcroft/',
  },
  {
    id: 'galen-brown',
    name: 'Galen Brown',
    title: 'Researcher',
    organization: 'Worcester Polytechnic Institute',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/galen-brown-83094a163/',
  },
  // Session 9 — Water Access and Conservation
  {
    id: 'simona-aracri',
    name: 'Simona Aracri',
    title: 'Researcher',
    organization: 'National Research Council of Italy (CNR)',
    photoUrl: '/images/speakers/simona-aracri.jpg',
    bio: 'Works on marine robotics and autonomous surface vehicles for environmental monitoring, with relevance to water resilience and conservation.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/simona-aracri-670bb45a/',
  },
  {
    id: 'andre-farinha',
    name: 'André Farinha',
    title: 'Researcher',
    organization: 'CSIRO Australia',
    photoUrl: '/images/speakers/andre-farinha.jpg',
    bio: 'Unmanned aircraft designer and robotics developer with experience from concept to field trials, including UAV deployments for extreme environments.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/andre-farinha-b547a54b/',
  },
  {
    id: 'adrien-desjardins',
    name: 'Adrien Desjardins',
    title: 'Professor',
    organization: 'University of British Columbia',
    photoUrl: '/images/speakers/adrien-desjardins.jpg',
    bio: 'Imaging and sensing modalities and autonomous robotics, with marine and biomedical applications relevant to aquatic conservation.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/adrien-desjardins-aa16b7/',
  },
  {
    id: 'guillaume-fery',
    name: 'Guillaume Féry',
    title: 'Climate Adaptation Specialist',
    organization: 'Water Sector',
    photoUrl: '/images/speakers/guillaume-fery.jpg',
    bio: 'Specialist in climate adaptation and the resilience of water-sector infrastructure, with experience in water utilities, digital innovation, and emerging technologies.',
    summitYear: '2026',
    linkedIn: 'https://www.linkedin.com/in/gfery/',
  },
];

// =============================================================================
// SUMMIT 2026 PROGRAM
// =============================================================================
// Times are listed in UTC. Local equivalents (April 21-23, 2026):
//   US Eastern (EDT, UTC-4): subtract 4 hours
//   Central European (CEST, UTC+2): add 2 hours

export const SUMMIT_2026_PROGRAM: ProgramDay[] = [
  {
    day: 1,
    date: 'April 21, 2026',
    theme: 'Opening, Biodiversity, Start-ups & Energy',
    sessions: [
      {
        id: 's26-1-1',
        title: 'Welcome & Opening Remarks',
        time: '13:00 - 13:10 UTC',
        description: 'Patrick Meier (Climate Robotics Network) and Berk Çallı (WPI) open the summit.',
        type: 'keynote',
        videos: [],
      },
      {
        id: 's26-1-2',
        title: 'Welcome from Our Gold Sponsor',
        time: '13:10 - 13:20 UTC',
        description: 'Jesica Chavez, RoboSuccess.',
        type: 'keynote',
        videos: [],
      },
      {
        id: 's26-1-3',
        title: 'Keynote: Anna Lerner Nesbitt',
        time: '13:20 - 14:00 UTC',
        description: 'CEO of the Climate Collective, on web3 infrastructure for verifiable climate action at scale.',
        type: 'keynote',
        videos: [],
      },
      {
        id: 's26-1-4',
        title: 'Session 1: Biodiversity and Robotics',
        time: '14:00 - 14:45 UTC',
        description: 'Raphael Zufferey (MIT), Ulrik Pagh Schultz Lundquist (USD), Davide Di Blasi (IIT), Annette Govindarajan (WHOI), Jürg Germann (Inverto Earth).',
        type: 'panel',
        videos: [],
      },
      {
        id: 's26-1-5',
        title: 'Session 2: Start-up Pitches',
        time: '15:00 - 15:45 UTC',
        description: 'Amy Ma (Danu Robotics), Annie Aixa Rosas Hernández (Bluekali).',
        type: 'panel',
        videos: [],
      },
      {
        id: 's26-1-6',
        title: 'Session 3: Energy Infrastructure',
        time: '15:45 - 16:30 UTC',
        description: 'Alan Papalia (Univ. Michigan), Charles Dawson (Emerald AI), Dave Lane (Heriot-Watt / SeaByte), Yvan Petillot (Heriot-Watt).',
        type: 'panel',
        videos: [],
      },
    ],
  },
  {
    day: 2,
    date: 'April 22, 2026',
    theme: 'Earth & Ocean Observations, Funding, Recycling',
    sessions: [
      {
        id: 's26-2-1',
        title: 'Day 2 Opening Remarks',
        time: '13:00 - 13:05 UTC',
        description: 'Alan Papalia, University of Michigan.',
        type: 'keynote',
        videos: [],
      },
      {
        id: 's26-2-2',
        title: 'Keynote: Cathy Wu',
        time: '13:05 - 13:50 UTC',
        description: 'MIT — machine learning for control and optimization for sustainable mobility.',
        type: 'keynote',
        videos: [],
      },
      {
        id: 's26-2-3',
        title: 'Session 4: Earth and Ocean Observations',
        time: '13:50 - 14:35 UTC',
        description: 'Matthew Palmer (Met Office), Enrico Ajanic (Meteomatics), Michal Adamkiewicz (WindBorne), Maarja Kruusmaa (TalTech), Weifeng "Gordon" Zhang (WHOI).',
        type: 'panel',
        videos: [],
      },
      {
        id: 's26-2-4',
        title: 'Session 5: Funding Climate Robotics',
        time: '14:50 - 15:35 UTC',
        description: 'Benjamin Maitland-Lewis (SVB), Edgar Ke (Marble), Fady Saad (Cybernetix Ventures / MassRobotics), Andy Gollach (SOSV / HAX).',
        type: 'panel',
        videos: [],
      },
      {
        id: 's26-2-5',
        title: 'Session 6: Recycling Management and Robotics',
        time: '15:35 - 16:30 UTC',
        description: 'Manuel G. Catalano (IIT), Alireza Rastegarpanah (Birmingham), Anwar Al Assadi (Fraunhofer), Alan Winfield (UWE / York), Helen McGloin (Bristol Robotics).',
        type: 'panel',
        videos: [],
      },
    ],
  },
  {
    day: 3,
    date: 'April 23, 2026',
    theme: 'Built Environment, Research Pitches & Water',
    sessions: [
      {
        id: 's26-3-1',
        title: 'Day 3 Opening Remarks',
        time: '13:00 - 13:05 UTC',
        description: 'Stefano Mintchev.',
        type: 'keynote',
        videos: [],
      },
      {
        id: 's26-3-2',
        title: 'Keynote: Thomas Walla',
        time: '13:05 - 13:50 UTC',
        description: 'Colorado Mesa University / Limelight Rainforest — 2024 XPRIZE Rainforest Grand Prize winner, on transformative biodiversity-sampling tech in tropical forests.',
        type: 'keynote',
        videos: [],
      },
      {
        id: 's26-3-3',
        title: 'Session 7: Built Environment and Efficiency via Robotics',
        time: '13:50 - 14:35 UTC',
        description: 'Mirko Kovac (EPFL), Norhan Bayomi (Lamarr.AI / MIT), John Fernandez (MIT), Ramon Weber (UC Berkeley), Stefana Parascho (EPFL), Dylan Crow (Renovate Robotics).',
        type: 'panel',
        videos: [],
      },
      {
        id: 's26-3-4',
        title: 'Session 8: Research Pitches',
        time: '14:50 - 15:35 UTC',
        description: 'Kaushik Jayaram (Imperial), Enrica Zereik (CNR), Kevin Andrew Holdcroft (EPFL), Galen Brown (WPI).',
        type: 'panel',
        videos: [],
      },
      {
        id: 's26-3-5',
        title: 'Session 9: Water Access and Conservation via Robotics',
        time: '15:35 - 16:20 UTC',
        description: 'Simona Aracri (CNR), André Farinha (CSIRO), Adrien Desjardins (UBC), Guillaume Féry.',
        type: 'panel',
        videos: [],
      },
      {
        id: 's26-3-6',
        title: 'Closing Remarks',
        time: '16:20 - 16:30 UTC',
        description: 'Berk Çallı, Worcester Polytechnic Institute.',
        type: 'keynote',
        videos: [],
      },
    ],
  },
];

// =============================================================================
// ORGANIZERS & VOLUNTEERS
// =============================================================================

export const ORGANIZERS: TeamMember[] = [
  {
    id: 'patrick-meier-team',
    name: 'Patrick Meier',
    organization: 'Climate Robotics Network',
    photoUrl: '/images/team/patrick-meier.jpg',
    linkedIn: 'https://www.linkedin.com/in/meierpatrick/',
  },
  {
    id: 'berk-calli-team',
    name: 'Berk Çallı',
    organization: 'Worcester Polytechnic Institute',
    photoUrl: '/images/team/berk-calli.png',
    linkedIn: 'https://www.linkedin.com/in/berk-calli-6313461a/',
  },
  {
    id: 'raphael-zufferey-team',
    name: 'Raphael Zufferey',
    organization: 'Massachusetts Institute of Technology',
    photoUrl: '/images/team/raphael-zufferey.jpg',
    linkedIn: 'https://www.linkedin.com/in/raphael-zufferey/',
  },
  {
    id: 'heather-leson-team',
    name: 'Heather Leson',
    photoUrl: '/images/team/heather-leson.png',
    linkedIn: 'https://www.linkedin.com/in/heatherleson/',
  },
  {
    id: 'shilpa-patel-team',
    name: 'Shilpa Patel',
    photoUrl: '/images/team/shilpa-patel.jpg',
    linkedIn: 'https://www.linkedin.com/in/shilpa-patel-355144/',
  },
  {
    id: 'anahita-laverack-team',
    name: 'Anahita Laverack',
    photoUrl: '/images/team/anahita-laverack.png',
    linkedIn: 'https://www.linkedin.com/in/anahita-laverack/',
  },
  {
    id: 'ahmed-elghareeb-team',
    name: 'Ahmed Elghareeb',
    photoUrl: '/images/team/ahmed-elghareeb.jpg',
    linkedIn: 'https://www.linkedin.com/in/ahmedelghareeb',
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getSummit(year: string): Summit | undefined {
  return SUMMITS[year];
}

export function getVideosByDay(day: number): Video[] {
  return SUMMIT_2025_VIDEOS.filter(v => v.day === day).sort((a, b) => a.order - b.order);
}

export function getKeynoteVideos(): Video[] {
  return SUMMIT_2025_VIDEOS.filter(v => v.type === 'keynote');
}

export const ALL_SPEAKERS: Speaker[] = [...SPEAKERS_2025, ...SPEAKERS_2026];

export function getSpeakersByYear(year: string): Speaker[] {
  return ALL_SPEAKERS.filter(s => s.summitYear === year);
}

export function getKeynoteSpeakers(year: string): Speaker[] {
  return ALL_SPEAKERS.filter(s => s.summitYear === year && s.isKeynote);
}

export function getSponsorsByTier(tier: Sponsor['tier'], year: string): Sponsor[] {
  const sponsors = year === '2025' ? SPONSORS_2025 : SPONSORS_2026;
  return sponsors.filter(s => s.tier === tier);
}

export function getVideosByDay2026(day: number): Video[] {
  return SUMMIT_2026_VIDEOS.filter(v => v.day === day).sort((a, b) => a.order - b.order);
}

export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
}

export function getYouTubeThumbnail(videoId: string, quality: 'default' | 'medium' | 'high' | 'maxres' = 'high'): string {
  const qualityMap = {
    default: 'default',
    medium: 'mqdefault',
    high: 'hqdefault',
    maxres: 'maxresdefault',
  };
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}

