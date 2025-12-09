/**
 * External Links & Constants for Climate Robotics Network
 * 
 * Update these values when links change.
 * All external URLs should be defined here for easy maintenance.
 */

// =============================================================================
// SOCIAL MEDIA & COMMUNITY
// =============================================================================

export const LINKS = {
  // Slack Community
  slack: {
    invite: 'https://join.slack.com/t/climateroboticsnet/shared_invite/zt-345tbzves-za8NP0mB1dGAf2AwxWshLg',
    codeOfConduct: 'https://api.slack.com/community/code-of-conduct',
  },

  // Social Media
  social: {
    linkedIn: 'https://www.linkedin.com/company/climate-robotics-network',
    youtube: 'https://www.youtube.com/@ClimateRoboticsNetwork',
    youtubePlaylists: 'https://www.youtube.com/@ClimateRoboticsNetwork/playlists',
    youtubeFeatured: 'https://www.youtube.com/@ClimateRoboticsNetwork/featured',
  },

  // =============================================================================
  // RESEARCH & WHITE PAPER
  // =============================================================================

  research: {
    whitePaperGoogleDoc: 'https://docs.google.com/document/d/158c54ef8swdBQX5fhccWhPKELvko0Dyu/edit?usp=sharing&ouid=115081172857523804829&rtpof=true&sd=true',
    whitePaperPdf: 'https://drive.google.com/file/d/1LMtlByr-5CbOuO-zGKQbWAMwKAzQPotg/view?usp=sharing',
    feedbackForm: 'https://docs.google.com/forms/d/e/1FAIpQLSckBwqOV8_ubUr9pjXzz_EaRHip0FZGT5CaekuSiwBS2j4Rrw/viewform',
  },

  // =============================================================================
  // MAP
  // =============================================================================

  map: {
    googleSpreadsheet: 'https://docs.google.com/spreadsheets/d/1rFJPB4g8d21JJkzxu9Ro668cL5H66HUIQCD0pNWwO74/edit#gid=1943673218',
    naxa: 'https://naxa.com.np/',
  },

  // =============================================================================
  // SUMMIT
  // =============================================================================

  summit: {
    registrationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSccaLhLTgwEd2LDtVKfWHrfoUW8B81ISnRQTHnGHQ36omyjFg/viewform',
    sponsorDeck: 'https://drive.google.com/file/d/1Gse1WSB-2YB_GvsK1hrhZW-200rgTDpT/view?usp=sharing',
  },

  // =============================================================================
  // TEAM & PEOPLE
  // =============================================================================

  team: {
    patrickMeier: {
      linkedIn: 'https://www.linkedin.com/in/meierpatrick/',
      bio: '/team',
    },
    // Additional team members can be added here
  },

  // =============================================================================
  // PARTNERS & SPONSORS
  // =============================================================================

  partners: {
    mitAura: 'https://aura.mit.edu/',
    cybernetixVc: 'https://cybernetix.vc/',
    ethZurich: 'https://ethz.ch/en.html',
    roboSuccess: 'https://robo-success.com/',
    sosv: 'https://sosv.com/',
    swissnex: 'https://swissnex.org',
    climateHack: 'https://www.climatehack.global',
    cnrItaly: 'https://www.cnr.it/',
    empa: 'https://www.empa.ch/',
    fondationValery: 'https://www.fondation-valery.ch/',
    graspUpenn: 'https://www.grasp.upenn.edu/',
    wpi: 'https://www.wpi.edu/',
  },
} as const;

// =============================================================================
// YOUTUBE EMBEDS
// =============================================================================

export const YOUTUBE = {
  // Main intro/featured video ID
  featuredVideoId: 'Dp9kfItp0Xw', // Opening Remarks - Summit 2025
  
  // Featured playlist ID (used on Research page)
  playlistId: 'PLCSxuLa5A9VqMM74yg8URkhv03t-fsdht',
  
  // Playlists
  playlists: {
    summit2025: 'PLCSxuLa5A9VqMM74yg8URkhv03t-fsdht',
    trailers: 'PLCSxuLa5A9VpDprMEm1_w-KNXZ3Y8HjDs',
    inAction: 'PLCSxuLa5A9VqUOBpHnHCYcLEWv6P8Cxwg',
  },
  
  // Summit 2025 Video IDs (organized by day)
  summit2025Videos: {
    day1: [
      'Dp9kfItp0Xw', // Opening Remarks
      'WMPberHbFwk', // Keynote: Alexandra Nilles
      'F5_6FljaqJ8', // Keynote: Mirko Kovac
      'q6ebzlOQjU8', // Keynote: Dana Yoerger
      'on5moiU7uMo', // State of Climate Robotics
    ],
    day2: [
      'ggy4BsNSlbI', // Biodiversity
      'K2-qLciC98Y', // Startup Pitches
      'csYCdjlGRCw', // Agriculture
      'c8CQSo9Vg5w', // Ocean/Marine
    ],
    day3: [
      'BXrKRVrchuc', // Forestry
      'YdbPBsv4NO0', // Disaster Response
      'ew1rq_nYIcM', // Waste Management
      'WBM6jkI_buw', // Infrastructure
      'dxP3qfxmheA', // Energy
    ],
    day4: [
      'inbA08vV3Xs', // Ethics
      'vvi_qVK1BkI', // Future
      'aC4QBUUl-rg', // Policy
      'wZgOPvtauzE', // Closing
    ],
  },
  
  // Helper to generate embed URLs
  getVideoEmbedUrl: (videoId: string, options?: { autoplay?: boolean; loop?: boolean }) => {
    const params = new URLSearchParams({
      rel: '0',
      showinfo: '0',
      autoplay: options?.autoplay ? '1' : '0',
      loop: options?.loop ? '1' : '0',
      muted: '0',
      controls: '1',
    });
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  },
  
  getPlaylistEmbedUrl: (playlistId: string) => {
    return `https://www.youtube.com/embed/videoseries?list=${playlistId}&rel=0`;
  },
  
  getThumbnailUrl: (videoId: string, quality: 'default' | 'medium' | 'high' | 'maxres' = 'high') => {
    const qualityMap = {
      default: 'default',
      medium: 'mqdefault',
      high: 'hqdefault',
      maxres: 'maxresdefault',
    };
    return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
  },
} as const;

// =============================================================================
// SITE METADATA
// =============================================================================

export const SITE = {
  name: 'Climate Robotics Network',
  tagline: 'Green Bots, Blue Planet',
  description: 'An inclusive community connecting, enabling, and supporting climate robotics worldwide.',
  url: 'https://climaterobotics.network',
  
  // Stats (update these as the community grows)
  stats: {
    members: '300+',
    countries: '30+',
    sectors: '30+',
  },
} as const;

// =============================================================================
// SUMMIT INFO
// =============================================================================

export const SUMMIT = {
  name: 'Climate Robotics Summit',
  // Current/Next Summit
  current: {
    year: '2026',
    dates: 'April 21-23, 2026',
    registrationOpens: 'January 15, 2026',
    format: 'Online',
    isRegistrationOpen: false, // Set to true when registration opens
  },
  // Past Summits
  archive: {
    '2025': {
      dates: 'May 6-9, 2025',
      playlistId: 'PLCSxuLa5A9VqMM74yg8URkhv03t-fsdht',
      videoCount: 33,
    },
  },
} as const;

// Legacy exports for backward compatibility
export const SUMMIT_DATES = SUMMIT.current.dates;
export const SUMMIT_REGISTRATION_OPENS = SUMMIT.current.registrationOpens;

