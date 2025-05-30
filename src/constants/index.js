import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  "NextBull",
  "ICEI",
  "Voxel",
  "CyberSync Technologies",
];

export const BrainwaveServices = [
  "Years of Tech Mastery",
  "Ears That Listen, Brains That Get It",
  "Solutions Before Jargon",
];

export const BrainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Inovation at Its Heart",
    text: "Sudama embraces cutting-edge trends like AI, blockchain, IoT, and cloud-native architectures. Our agile mindset ensures rapid prototyping, iterative development, and a fail-fast approach—because breakthroughs demand bold experimentation.",
    date: "May 2023",
    status: "done",
    // imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: " Business Value-Driven Approach",
    text: "We don’t just write code—we solve real problems for businesses. Our focus is on delivering value to our clients, not just lines of code.",
    date: "May 2023",
    status: "progress",
    // imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Client-Centric Approach",
    text: "Listening comes before coding. We dive deep into your pain points, crafting solutions that align with your goals—not just our tech stack. Our partnerships extend beyond launch, offering scalable support and long-term evolution. And we speak your language, translating complex tech into actionable business insights.",
    date: "May 2023",
    status: "done",
    // imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "R&D Focus",
    text: "We invest heavily in R&D, experimenting with transformative technologies such as generative AI and quantum computing to push boundaries. Our commitment to innovation drives us to stay ahead of the curve, ensuring our clients have the latest tools to drive success.",
    date: "May 2023",
    status: "progress",
    // imageUrl: roadmap4,
  },
];

export const collabText =
  "Delivering high-performance, scalable, and future-ready solutions with precision.";

export const collabContent = [
  {
    id: "0",
    title: "Quality Development",
    text: collabText,
  },
  {
    id: "1",
    title: "Client-Centric Approach",
    text: "Putting your vision first with tailored solutions that meet your unique needs.",
  },
  {
    id: "2",
    title: "Ongoing Support",
    text: "Ensuring seamless performance with continuous maintenance and expert assistance.",
  },
  {
    id: "3",
    title: "Transparent Pricing",
    text: "Clear, honest, and competitive pricing with no hidden costs.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "24,999",
    features: [
      "5-Page Custom Website",
      "Responsive Design (Mobile-Friendly)",
      "Basic SEO Setup",
      "Contact Form + Social Integration",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Note App Development and Website are separate solutions",
    price: "49,999",
    features: [
      "Website Development with Advance features",
      "App Development",
      "SaaS/PaaS Development",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Please contact us for more details",
    price: null,
    features: [
      // "An AI chatbot that can understand your queries",
      // "Personalized recommendations based on your preferences",
      // "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Custom Software Development",
    text: "Need an ERP to streamline operations? A CRM to boost sales? Or an inventory system that just works? We craft software tailored for your business. Starting from just ₹29,999",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Web & Mobile Development",
    text: "Need a sleek, responsive website to showcase your brand (starting from ₹19,999) or a high-performance mobile app to engage users (starting from ₹34,999). Please contact us for more details.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Quality Assurance & Testing",
    text: "Don’t let bugs ruin your user experience. Our Quality Assurance & Testing services ensure your software runs smoothly, securely, and exactly as intended—before it reaches your customers. Starting from just ₹14,999",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Cloud Solutions",
    text: "Tired of tech headaches? Our Cloud Solutions lift your business to new heights—seamless, secure, and smarter than ever! Starting at just ₹24,999",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Video Editing",
    text: "Bring Your Story to Life – Frame by Frame! 60-Second Reels (From ₹2000), Seamless Cuts + Trendy Transitions (From ₹2000), BG Music & SFX that pop (From ₹2000) Motion Graphics (@ ₹500/sec)",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "At Sudama, we don’t just adapt to technology—we reinvent with it. Every day, our team harnesses cutting-edge advancements in AI, cloud computing, and automation to refine our solutions, ensuring they’re faster, smarter, and more intuitive.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const work = [
  {
    id: "0",
    title: "Book My Doct",
    text: "Our doctor booking website enables users to find doctors by specialty or locality and book appointments easily. It features a clinic admin panel, a super admin panel to manage clinics, doctors, and…",
    url: "https://bookmydoct.vercel.app/",
  },
  {
    id: 1,
    title: "School Management System",
    text: "One system. All school operations. Zero hassles. Our School Management System is a powerful tool that streamlines school operations, making it easier for parents, teachers, and administrators to manage their school efficiently.",
    url: "https://school-management-system.vercel.app/",
  },
  {
    id: 2,
    title: "Dating App",
    text: "Find your perfect match effortless. With smart matchmaking algorithms, you'll discover compatible partners based on your interests and preferences. Enjoy seamless real-time chatting, and spice up your profile by uploading short videos. Swipe, chat, and meet like never before!",
    url: "https://dating-app.vercel.app/",
  },
  {
    id: 3,
    title: "News App",
    text: "Stay informed effortlessly with our smart news app, designed to deliver personalized updates. Filter news by categories, and set preferences to see only what matters most. Get location-based alerts, ensuring you never miss what’s happening around you. With real-time highlights, breaking news reaches you instantly—anytime. Your world, your news, at your fingertips",
    url: "https://news-app.vercel.app/",
  },
  {
    id: 4,
    title: "Read Colab",
    text: "ReadColab is a real-time, live collaborative document-sharing application built with Next.js. Designed to facilitate seamless teamwork, ReadColab allows multiple users to edit and collaborate on documents simultaneously, with changes instantly reflected across all devices. Key Features: Real-Time Collaboration, Document Sharing.",
    url: "https://read-colab.vercel.app/",
  },
];
