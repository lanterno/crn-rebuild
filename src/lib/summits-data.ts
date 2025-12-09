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
    status: 'upcoming',
    tagline: 'Scaling Climate Action Through Robotics',
    description: 'Join us for the third annual Climate Robotics Summit, bringing together researchers, engineers, entrepreneurs, and policymakers from around the world.',
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSccaLhLTgwEd2LDtVKfWHrfoUW8B81ISnRQTHnGHQ36omyjFg/viewform',
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
    title: 'Opening Remarks by Dr. Patrick Meier',
    duration: '6:22',
    type: 'opening',
    speakers: ['Dr. Patrick Meier'],
    day: 1,
    order: 1,
  },
  {
    id: 'v-keynote-nilles',
    youtubeId: 'WMPberHbFwk',
    title: 'Keynote: Dr. Alexandra Nilles on Minimalist Robotics',
    duration: '18:27',
    type: 'keynote',
    speakers: ['Dr. Alexandra Nilles'],
    day: 1,
    order: 2,
  },
  {
    id: 'v-keynote-kovac',
    youtubeId: 'F5_6FljaqJ8',
    title: 'Keynote: Dr. Mirko Kovac on Sustainability Robotics',
    duration: '21:16',
    type: 'keynote',
    speakers: ['Dr. Mirko Kovac'],
    day: 1,
    order: 3,
  },
  {
    id: 'v-keynote-yoerger',
    youtubeId: 'q6ebzlOQjU8',
    title: 'Keynote: Dr. Dana Yoerger on Marine Robotics',
    duration: '35:37',
    type: 'keynote',
    speakers: ['Dr. Dana Yoerger'],
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
    name: 'Dr. Patrick Meier',
    title: 'Founder',
    organization: 'Climate Robotics Network',
    bio: 'Dr. Patrick Meier is an internationally recognized thought leader and practitioner who has spent 20+ years working at the intersection of technology and social impact.',
    linkedIn: 'https://www.linkedin.com/in/meierpatrick/',
    isKeynote: false,
    summitYear: '2025',
  },
  {
    id: 'mirko-kovac',
    name: 'Dr. Mirko Kovac',
    title: 'Director, Aerial Robotics Lab',
    organization: 'Imperial College London & EMPA',
    bio: 'Leading researcher in sustainability robotics and aerial systems for environmental monitoring.',
    linkedIn: 'https://www.linkedin.com/in/stefanomintchev/',
    isKeynote: true,
    summitYear: '2025',
  },
  {
    id: 'alexandra-nilles',
    name: 'Dr. Alexandra Nilles',
    title: 'Assistant Professor',
    organization: 'MIT',
    bio: 'Expert in minimalist robotics and autonomous systems for environmental applications.',
    isKeynote: true,
    summitYear: '2025',
  },
  {
    id: 'dana-yoerger',
    name: 'Dr. Dana Yoerger',
    title: 'Senior Scientist',
    organization: 'Woods Hole Oceanographic Institution',
    bio: 'Pioneer in underwater robotics and deep-sea exploration for climate research.',
    isKeynote: true,
    summitYear: '2025',
  },
  {
    id: 'katie-bradford',
    name: 'Katie Bradford',
    title: 'Climate Tech Investor',
    organization: 'Climate Capital',
    bio: 'Focused on investing in climate robotics startups and scaling solutions.',
    summitYear: '2025',
  },
  {
    id: 'fady-saad',
    name: 'Fady Saad',
    title: 'Co-Founder',
    organization: 'MassRobotics',
    bio: 'Building the robotics ecosystem and supporting climate-focused startups.',
    summitYear: '2025',
  },
  {
    id: 'brooke-zhang',
    name: 'Brooke Zhang',
    title: 'Robotics Engineer',
    organization: 'Boston Dynamics',
    bio: 'Working on deploying robots for environmental monitoring and disaster response.',
    summitYear: '2025',
  },
  {
    id: 'salman-faraji',
    name: 'Salman Faraji',
    title: 'Research Scientist',
    organization: 'ETH Zurich',
    bio: 'Developing legged robots for challenging terrain in climate applications.',
    summitYear: '2025',
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
  // Same organizing partners for 2026
  ...SPONSORS_2025.filter(s => s.tier === 'organizing'),
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

export function getSpeakersByYear(year: string): Speaker[] {
  return SPEAKERS_2025.filter(s => s.summitYear === year);
}

export function getKeynoteSpeakers(year: string): Speaker[] {
  return SPEAKERS_2025.filter(s => s.summitYear === year && s.isKeynote);
}

export function getSponsorsByTier(tier: Sponsor['tier'], year: string): Sponsor[] {
  const sponsors = year === '2025' ? SPONSORS_2025 : SPONSORS_2026;
  return sponsors.filter(s => s.tier === tier);
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

