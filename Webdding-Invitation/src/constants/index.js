import { testimonial01, testimonial02, testimonial03, facebook, instagram, linkedin, twitter, send, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "download",
    title: "Download",
  },
  {
    id: "plans",
    title: "Plans",
  },
  {
    id: "trynow",
    title: "Try Now",
  },
  {
    id: "login",
    title: "Log In",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "Get exclusive rewards for watching more of your favorite movies than anyone else",
  },
  {
    id: "feature-2",
    icon: star,
    title: "Security",
    content:
      "Choose who can see on your own account, only you have the control",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Plans for all",
    content:
      "Choose the plan that best suits you as an individual, couple or family.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "I don't have words to explain what i just live, better than cinemas!",
    name: "June Joseph",
    title: "Subscriber",
    img: testimonial01,
  },
  {
    id: "feedback-2",
    content:
      "I love concerts, to find a platform where it seems that the concert comes out of the screen, incredible!",
    name: "Alejandra Villareal",
    title: "Concert Lover",
    img: testimonial02,
  },
  {
    id: "feedback-3",
    content:
      "The best of all is that the subscriptions are personalized, my favorite function without a doubt, is the remaining balance because I don't always have time to watch series and/or movies.",
    name: "Grace Ryan",
    title: "Worker",
    img: testimonial03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Subscribers",
    value: "5000+",
  },
  {
    id: "stats-2",
    title: "Cinema Tittles",
    value: "1000+",
  },
  {
    id: "stats-3",
    title: "Concerts p/year",
    value: "+50",
  },
];

export const footerLinks = [
  // {
  //   title: "¿Dudas respecto al evento?",
  //   links: [
  //     {
  //       name: "Contacto",
  //       link: "",
  //     },
  //     {
  //       name: "Preguntas Frecuentes",
  //       link: "",
  //     },
  //   ],
  // },
  {
    title: "Novio",
    links: [
      {
        name: "Contacto",
        link: "",
      },
      {
        name: "Facebook",
        link: "",
      },
      {
        name: "Instagram",
        link: "",
      },
    ],
  },
  {
    title: "Novia",
    links: [
      {
        name: "Contacto",
        link: "",
      },
      {
        name: "Facebook",
        link: "",
      },
      {
        name: "Instagram",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "www.linkedin.com/in/axel-aguilar-alonso",
  },
];

export const planslist = [
  {
    id: 'basic',
    title: 'Basic',
    price: 2,
    quality: '1080p (Full HD)',
    devices: 'TV, PC, Smartphone, Tablet',
    sameDevices: 2,
    downloadDevices: 2,
    extraFeatures: [
      'Basic content access',
      'Limited offline viewing',
      'Ad-supported streaming'
    ],
  },
  {
    id: 'normal',
    title: 'Normal',
    price: 5,
    quality: '4K (Ultra HD)',
    devices: 'TV, PC, Smartphone, Tablet',
    sameDevices: 3,
    downloadDevices: 3,
    extraFeatures: [
      'Expanded content library (Movies, Series, Concerts, Festivals)',
      'Offline viewing',
      'Access to special events',
      'Limited simultaneous streams'
    ],
  },
  {
    id: 'cinefan',
    title: 'Cinefan',
    popular: true,
    price: 10,
    quality: '4K (Ultra HD) + HDR',
    devices: 'TV, PC, Smartphone, Tablet',
    sameDevices: 4,
    downloadDevices: 4,
    extraFeatures: [
      'Access to new releases (Movies, Series, Concerts, Festivals)',
      'Behind the scenes content',
      'Early access to content',
      'Cinema mode'
    ],
  },
  {
    id: 'familiar',
    title: 'Familiar',
    price: 15,
    quality: '4K (Ultra HD) + HDR',
    devices: 'TV, PC, Smartphone, Tablet',
    sameDevices: 5,
    downloadDevices: 5,
    groupSharing: true,
    maxGroupMembers: 5,
    extraFeatures: [
      'All Cinefan features',
      'Shared account access',
      'Group watch features',
      'Custom profiles',
      'Parental controls',
    ],
  },
  {
    id: 'premium',
    title: 'Premium',
    price: 20,
    quality: '8K (Ultra HD) + HDR + Dolby Atmos',
    devices: 'TV, PC, Smartphone, Tablet',
    sameDevices: 6,
    downloadDevices: 6,
    balanceIncluded: 10,
    balanceCarryOver: true,
    extraFeatures: [
      'All Cinefan Features',
      'Highest quality streaming',
      'Bonus content',
      'Carryover balance',
      'Exclusive VIP events',
    ],
  },
  {
    id: 'premiumfam',
    title: 'Premium Familiar',
    price: 25,
    quality: '8K (Ultra HD) + HDR + Dolby Atmos',
    devices: 'TV, PC, Smartphone, Tablet',
    sameDevices: 8,
    downloadDevices: 8,
    balanceIncluded: 10,
    balanceCarryOver: true,
    extraFeatures: [
      'All familiar features',
      'All Premium features'
    ],
  }
];

