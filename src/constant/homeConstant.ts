
import { FaNetworkWired, FaPuzzlePiece, FaCogs, FaHandshake, FaSyncAlt, FaUserAlt, FaBolt } from "react-icons/fa";

export const HomeConstant = {
  PartnerSection: {
    title: [
      { text: 'TRUSTED BY', highlight: false },
      { text: 'PARTENERS', highlight: true },
      { text: 'WORLDWIDE', highlight: false }
    ],
    description:
      'Partnered with organizations worldwide to drive innovation and trust. Our clients include leading telecom operators, technology giants, and digital pioneers.',
    partners: [
      {
        alt: 'Odido',
        imageUrl: '/images/company-logos/odido.svg'
      },
      {
        alt: 'Proximus',
        imageUrl: 'https://digiplus.co.in/wp-content/uploads/2021/03/proximus-3.png'
      },
      {
        alt: 'Tele2',
        imageUrl: 'https://digiplus.co.in/wp-content/uploads/2021/03/tele2-3.png'
      },
      {
        alt: 'Telia',
        imageUrl: 'https://digiplus.co.in/wp-content/uploads/2021/03/telia-3.png'
      },
      {
        alt: 'Client',
        imageUrl: 'https://digiplus.co.in/wp-content/uploads/2021/03/client-logo-2.png'
      },
      {
        alt: 'Tmobile',
        imageUrl: 'https://digiplus.co.in/wp-content/uploads/2021/03/tmobile-2.png'
      },
      {
        alt: 'Windtre',
        imageUrl: 'https://digiplus.co.in/wp-content/uploads/2022/03/windtre-logo-dsk.png'
      }
    ]
  },
  OurWorkingModelSection: {
    title: [
      { text: 'OUR', highlight: false },
      { text: 'DYNAMIC', highlight: true },
      { text: 'MODEL', highlight: false }
    ],
    description:
      'We integrate innovation and collaboration into a fluid, adaptive process, crafting bespoke solutions that drive tangible results and lasting success for your business.',
    features: [
      {
        icon: FaBolt,
        title: 'Deep Domain Expertise',
        description:
          'Bringing unmatched subject matter expertise to deliver insights and solutions grounded in industry knowledge.'
      },
      {
        icon: FaSyncAlt,
        title: 'Agile & Adaptive',
        description:
          'With a flexible mindset, we embrace change and rapidly adapt to evolving requirements to deliver timely, relevant outcomes.'
      },
      {
        icon: FaHandshake,
        title: 'Strategic Collaboration',
        description:
          'We work hand-in-hand with clients as strategic partners, fostering trust and transparency at every step.'
      },
      {
        icon: FaUserAlt, // Or FaUserCheck / FaUsers for better representation
        title: 'Customer-Centric Solutions',
        description:
          'Our solutions are thoughtfully crafted around your specific needs, ensuring relevance, value, and measurable impact.'
      }
    ]
  },
  TelecomExpertiseSection: {
    title: [
      { text: 'TRUSTED BY', highlight: false },
      { text: 'TELECOM CLIENTS', highlight: true },
    ],
    description:
      'We are proud to count among our customers global leaders who trust us to optimize the management of their data and transform their operations through innovative solutions.',
    features: [
      {
        icon: FaNetworkWired,
        title: "OSS/BSS Systems",
        description:
          "Specialized expertise in Operations Support Systems with proven implementations across major telecom operators.",
      },
      {
        icon: FaPuzzlePiece,
        title: "TM Forum Standards",
        description:
          "Implementation of Open APIs and SID model standards ensuring interoperability and industry best practices.",
      },
      {
        icon: FaCogs,
        title: "Integration Solutions",
        description:
          "Seamless integration between diverse telecom systems with focus on performance, reliability and scalability.",
      },
    ]
  },
  DiverseClientPortfolioSection: {
    title: 'Diverse Client',
    subtitle: 'Portfolio',
    description:
      'From global technology giants to digital startups, our work spans industries such as gaming, entertainment, e-commerce, and enterprise transformation.',
    diverseClients: [
      {
        name: "LENOVO",
        alt: "Lenovo",
        logo: "/images/company-logos/lenovo.svg",
        description: "Enterprise reporting solutions for global technology leaders with a focus on system integration and optimization.",
        industry: "Technology"
      },
      {
        name: "INTEL",
        alt: "Intel",
        logo: "/images/company-logos/intel.svg",
        description: "Solutions tailored for scalable systems, performance optimization, and hardware-software synergy.",
        industry: "Technology"
      },
      {
        name: "ONDC",
        alt: "ONDC",
        logo: "/images/company-logos/ondc.svg",
        description: "Indian Government’s Open Network for Digital Commerce with secure transaction processing and marketplace interoperability.",
        industry: "E-Commerce"
      },
      {
        name: "HUNGAMA",
        alt: "Hungama",
        logo: "/images/company-logos/hungama.png",
        description: "Digital platforms, streaming solutions, and content delivery networks for media companies.",
        industry: "Media & Entertainment"
      },
      {
        name: "IN10MEDIA",
        alt: "IN10 Media",
        logo: "/images/company-logos/in10.png",
        description: "Media-tech innovations for linear & OTT platforms with audience-first strategies.",
        industry: "Media & Entertainment"
      },
      {
        name: "NAZARA",
        alt: "Nazara",
        logo: "/images/company-logos/nazara.png",
        description: "Gaming platforms and engagement solutions for competitive and casual mobile gamers.",
        industry: "Gaming"
      },
      {
        name: "MPL",
        alt: "MPL",
        logo: "/images/company-logos/mpl.webp",
        description: "Scalable game backends and real-time gamification services for interactive experiences.",
        industry: "Gaming"
      },
      {
        name: "POSTCARD",
        alt: "Postcard",
        logo: "/images/company-logos/postcard.png",
        description: "Travel platforms and mobility solutions with real-time data processing capabilities.",
        industry: "Travel & Social"
      },
      {
        name: "COMMUTREE",
        alt: "Commutree",
        logo: "/images/company-logos/commutree.png",
        description: "Enterprise business solutions focusing on digital transformation and user engagement.",
        industry: "Enterprise / EdTech"
      }
    ]
  },
  CallToActionSection: {
    title: [
      { text: 'Ready to', highlight: false },
      { text: 'Transform', highlight: true },
      { text: 'Your Business?', highlight: false }
    ],
    description:
      'Let’s build future-ready platforms together. Connect with DigiPlus IT to unlock innovation, agility, and measurable results for your enterprise.',
    buttonText: 'COnnect With Us',
    buttonLink: '/contact',
  },
  FooterSection: {
    brand: 'DigiPlus IT',
    logo: '/logo.svg', // Place your logo in public folder or use a URL
    links: [
      {
        title: 'Company',
        items: [
          { label: 'About Us', href: '/#about-us' },
          { label: 'Careers', href: '/#careers' },
          { label: 'Contact', href: '/contact' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Expertise',
        items: [
          { label: 'Telecom Solutions', href: '/#expertise' },
          { label: 'AI & Analytics', href: '/#solutions' },
          { label: 'Case Studies', href: '/case-study' },
          { label: 'Partners', href: '/#partners' },
        ],
      },
      {
        title: 'Legal',
        items: [
          { label: 'Privacy Policy', href: '/privacy-policy' },
          { label: 'Terms & Conditions', href: '/terms' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'FaFacebookF', href: '#' },
      { icon: 'FaDiscord', href: '#' },
      { icon: 'FaTwitter', href: '#' },
      { icon: 'FaGithub', href: '#' },
      { icon: 'FaDribbble', href: '#' },
    ],
    copyright: '© {year} DigiPlus IT. All Rights Reserved.',
  },
};
