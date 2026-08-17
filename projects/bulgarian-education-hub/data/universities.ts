export interface Program {
  id: string;
  name: string;
  level: "Bachelor" | "Master" | "PhD";
  duration: string;
  description: string;
}

export interface University {
  id: string;
  name: string;
  location: string;
  founded: number;
  website: string;
  image: string;
  description: string;
  programs: Program[];
  categories: string[];
  tuitionEstimate: string;
}

export const universities: University[] = [
  {
    id: "msu",
    name: "Medical University of Sofia",
    location: "Sofia",
    founded: 1917,
    website: "https://www.msu.bg",
    image: "/universities/msu.jpg",
    description: "The largest and most prestigious medical university in Bulgaria with leading research facilities.",
    categories: ["Medicine", "Nursing"],
    tuitionEstimate: "$3,500-5,000/year",
    programs: [
      {
        id: "med-gen",
        name: "General Medicine",
        level: "Bachelor",
        duration: "6 years",
        description: "Comprehensive medical education covering all major clinical disciplines.",
      },
      {
        id: "ped",
        name: "Pediatrics",
        level: "Master",
        duration: "2 years",
        description: "Specialized training in child healthcare and development.",
      },
      {
        id: "nurs",
        name: "Nursing",
        level: "Bachelor",
        duration: "4 years",
        description: "Professional nursing education with clinical practice.",
      },
      {
        id: "surg",
        name: "Surgery",
        level: "Master",
        duration: "2 years",
        description: "Advanced surgical techniques and procedures.",
      },
    ],
  },
  {
    id: "afu",
    name: "Agricultural University of Plovdiv",
    location: "Plovdiv",
    founded: 1945,
    website: "https://www.au-plovdiv.bg",
    image: "/universities/afu.jpg",
    description: "Leading institution for veterinary science and agricultural studies.",
    categories: ["Veterinary", "Management"],
    tuitionEstimate: "$2,500-3,500/year",
    programs: [
      {
        id: "vet-med",
        name: "Veterinary Medicine",
        level: "Bachelor",
        duration: "6 years",
        description: "Complete veterinary medical training with animal care specialization.",
      },
      {
        id: "vet-surg",
        name: "Veterinary Surgery",
        level: "Master",
        duration: "2 years",
        description: "Specialized training in surgical veterinary procedures.",
      },
      {
        id: "agri-bus",
        name: "Agricultural Business Management",
        level: "Bachelor",
        duration: "4 years",
        description: "Management of agricultural enterprises and agribusiness operations.",
      },
      {
        id: "agri-mngt",
        name: "Farm Management",
        level: "Master",
        duration: "2 years",
        description: "Advanced management of agricultural operations and resources.",
      },
    ],
  },
  {
    id: "nbu",
    name: "National University of Food Technologies",
    location: "Sofia",
    founded: 1961,
    website: "https://www.nuft.bg",
    image: "/universities/nuft.jpg",
    description: "Specialized university for culinary arts and food technology education.",
    categories: ["Culinary Arts", "Management"],
    tuitionEstimate: "$2,000-3,000/year",
    programs: [
      {
        id: "culinary",
        name: "Culinary Arts",
        level: "Bachelor",
        duration: "4 years",
        description: "Professional chef training with international cuisine specialization.",
      },
      {
        id: "pastry",
        name: "Pastry and Bakery Arts",
        level: "Bachelor",
        duration: "4 years",
        description: "Advanced pastry making, baking, and confectionery techniques.",
      },
      {
        id: "food-tech",
        name: "Food Technology",
        level: "Bachelor",
        duration: "4 years",
        description: "Food processing, preservation, and quality management.",
      },
      {
        id: "food-bus",
        name: "Food Industry Business",
        level: "Master",
        duration: "2 years",
        description: "Management and business operations in food industry.",
      },
      {
        id: "hosp-mngt",
        name: "Hospitality Management",
        level: "Master",
        duration: "2 years",
        description: "Hotel and restaurant management with international standards.",
      },
    ],
  },
  {
    id: "tu-sofia",
    name: "Technical University of Sofia",
    location: "Sofia",
    founded: 1945,
    website: "https://www.tu-sofia.bg",
    image: "/universities/tu-sofia.jpg",
    description: "Bulgaria's largest technical university with state-of-the-art laboratories.",
    categories: ["Technical", "Management"],
    tuitionEstimate: "$2,500-3,500/year",
    programs: [
      {
        id: "civ-eng",
        name: "Civil Engineering",
        level: "Bachelor",
        duration: "4 years",
        description: "Building and infrastructure design and construction.",
      },
      {
        id: "elec-eng",
        name: "Electrical Engineering",
        level: "Bachelor",
        duration: "4 years",
        description: "Power systems, electronics, and electrical technology.",
      },
      {
        id: "mech-eng",
        name: "Mechanical Engineering",
        level: "Bachelor",
        duration: "4 years",
        description: "Machine design, automation, and mechanical systems.",
      },
      {
        id: "comp-sci",
        name: "Computer Science",
        level: "Bachelor",
        duration: "4 years",
        description: "Programming, software development, and IT systems.",
      },
      {
        id: "bus-tech",
        name: "Technology Management",
        level: "Master",
        duration: "2 years",
        description: "Management of technical projects and engineering enterprises.",
      },
    ],
  },
  {
    id: "tu-varna",
    name: "Technical University of Varna",
    location: "Varna",
    founded: 1963,
    website: "https://www.tu-varna.bg",
    image: "/universities/tu-varna.jpg",
    description: "Premier maritime and technical education center in Bulgaria.",
    categories: ["Maritime", "Technical", "Management"],
    tuitionEstimate: "$3,000-4,000/year",
    programs: [
      {
        id: "naval-arch",
        name: "Naval Architecture",
        level: "Bachelor",
        duration: "4 years",
        description: "Ship design and marine vessel engineering.",
      },
      {
        id: "mar-eng",
        name: "Marine Engineering",
        level: "Bachelor",
        duration: "4 years",
        description: "Ship propulsion systems, mechanics, and marine technology.",
      },
      {
        id: "nav-sci",
        name: "Navigation Science",
        level: "Bachelor",
        duration: "4 years",
        description: "Maritime navigation, seamanship, and port operations.",
      },
      {
        id: "port-mngt",
        name: "Port and Shipping Management",
        level: "Master",
        duration: "2 years",
        description: "Port operations, maritime logistics, and shipping business.",
      },
      {
        id: "offshore",
        name: "Offshore Engineering",
        level: "Master",
        duration: "2 years",
        description: "Offshore structures and marine energy systems.",
      },
    ],
  },
  {
    id: "swe-u",
    name: "Sofia University 'St. Kliment Ohridski'",
    location: "Sofia",
    founded: 1888,
    website: "https://www.uni-sofia.bg",
    image: "/universities/sofia-u.jpg",
    description: "Bulgaria's oldest university with comprehensive programs across all fields.",
    categories: ["Management", "Medicine"],
    tuitionEstimate: "$2,000-3,000/year",
    programs: [
      {
        id: "bus-admin",
        name: "Business Administration",
        level: "Bachelor",
        duration: "4 years",
        description: "Business management, organizational strategy, and corporate leadership.",
      },
      {
        id: "int-business",
        name: "International Business",
        level: "Master",
        duration: "2 years",
        description: "Global business operations and international market management.",
      },
      {
        id: "econ",
        name: "Economics",
        level: "Bachelor",
        duration: "4 years",
        description: "Economic theory, policy, and market analysis.",
      },
      {
        id: "finance",
        name: "Finance and Banking",
        level: "Master",
        duration: "2 years",
        description: "Financial management, banking systems, and investment strategies.",
      },
    ],
  },
  {
    id: "nebu",
    name: "North-Eastern Bulgaria University",
    location: "Dobrich",
    founded: 1993,
    website: "https://www.nebuniversity.org",
    image: "/universities/nebu.jpg",
    description: "Regional university offering diverse programs including culinary and management.",
    categories: ["Culinary Arts", "Management", "Technical"],
    tuitionEstimate: "$1,800-2,800/year",
    programs: [
      {
        id: "hosp-cul",
        name: "Hospitality and Culinary Management",
        level: "Bachelor",
        duration: "4 years",
        description: "Combined hospitality management and culinary training.",
      },
      {
        id: "tourism",
        name: "Tourism Management",
        level: "Bachelor",
        duration: "4 years",
        description: "Tourism industry management and destination development.",
      },
      {
        id: "mgmt-sci",
        name: "Management Science",
        level: "Master",
        duration: "2 years",
        description: "Advanced management theories and business decision-making.",
      },
      {
        id: "tech-mngt",
        name: "Technology and Innovation Management",
        level: "Master",
        duration: "2 years",
        description: "Innovation strategy and technological business transformation.",
      },
    ],
  },
  {
    id: "plu",
    name: "Plovdiv University 'Paisii Hilendarski'",
    location: "Plovdiv",
    founded: 1961,
    website: "https://www.uni-plovdiv.bg",
    image: "/universities/plu.jpg",
    description: "Bulgaria's second-largest university with comprehensive research programs.",
    categories: ["Management", "Technical", "Veterinary"],
    tuitionEstimate: "$2,000-3,000/year",
    programs: [
      {
        id: "mgmt",
        name: "Management",
        level: "Bachelor",
        duration: "4 years",
        description: "General management principles and organizational behavior.",
      },
      {
        id: "project-mngt",
        name: "Project Management",
        level: "Master",
        duration: "2 years",
        description: "Advanced project management methodologies and leadership.",
      },
      {
        id: "env-mngt",
        name: "Environmental Management",
        level: "Bachelor",
        duration: "4 years",
        description: "Environmental sustainability and resource management.",
      },
      {
        id: "it-mngt",
        name: "IT Management",
        level: "Master",
        duration: "2 years",
        description: "Information technology strategy and digital transformation.",
      },
    ],
  },
];
