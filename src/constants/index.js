import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  book_my_doct,
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
  school_mgmt,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: 0,
    title: "Advantage",
    url: "#advantage",
  },
  {
    id: 1,
    title: "approach",
    url: "#approach",
  },
  {
    id: 2,
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: 3,
    title: "Projects",
    url: "#projects",
  },
  {
    id: 4,
    title: "Contact",
    url: "#contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = ["NextBull", "ICEI", "Voxel"];

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
    date: "2025",
    status: "done",
    // imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: " Business Value-Driven Approach",
    text: "We don’t just write code—we solve real problems for businesses. Our focus is on delivering value to our clients, not just lines of code.",
    date: "2025",
    status: "progress",
    // imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Client-Centric Approach",
    text: "Listening comes before coding. We dive deep into your pain points, crafting solutions that align with your goals—not just our tech stack. Our partnerships extend beyond launch, offering scalable support and long-term evolution. And we speak your language, translating complex tech into actionable business insights.",
    date: "2025",
    status: "done",
    // imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "R&D Focus",
    text: "We invest heavily in R&D, experimenting with transformative technologies such as generative AI and quantum computing to push boundaries. Our commitment to innovation drives us to stay ahead of the curve, ensuring our clients have the latest tools to drive success.",
    date: "2025",
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
    title: "Project Initiation",
    company_name: "Vision Alignment",
    iconBg: "#383E56",
    date: "1-2 Weeks",
    // price: "24,999",
    points: [
      "Client and Sudama's Team define project goals, align on priorities and identify key expectations",
      "Prioritize features as Must-Have, Should-Have and Nice-to-Have",
      "Outline budget, timeline and technical limitations",
      "Set up collaboration tools and communication channels",
      "Formalize all agreements in a shared document",
    ],
  },
  {
    id: "1",
    title: "Sprint Planning",
    company_name: "Goal Setting",
    iconBg: "#383E56",
    date: "3 Weeks",
    // price: "24,999",
    points: [
      "Define a clear, measurable objective for the sprint",
      "Break down large and complex task into smaller, actionable tasks",
      "Team estimates the workload and commit only to what's achievable within the sprint (no overloading!)",
      "Developers self-select tasks based on skills and interest, (to boost morale)",
      "Agree on completion criteria for each task",
      "Update Client at the end of each sprint",
    ],
  },
  {
    id: "2",
    title: "Development & Iteration ",
    company_name: "Speed, flexibility and Teamwork",
    iconBg: "#383E56",
    date: "Depend on task",
    // price: "24,999",
    points: [
      "Daily Standups (15-Minute Sync)",
      "Work only on tasks committed to in sprint planning.",
      "Code merged and tested daily to avoid last-minute chaos.",
      "New requirements? Add them to the next sprint backlog.",
      "Visualize progress (tasks left vs. time remaining).",
      "Code reviewed, tested, and deployed to staging",
      "Build a little, test a little, learn a lot.",
    ],
  },
  {
    id: "3",
    title: "Review and Adaptation",
    company_name: "Continuous improvement, not blame.",
    iconBg: "#383E56",
    date: "Depend on task",
    // price: "24,999",
    points: [
      "Reflect on what worked, what not, and how to improve.",
      "Whole team joins to encourage honest feedback without judgment.",
      "Data-Driven Insight",
      "Prioritize 1-2 key improvements for the next sprint",
      "Document decisions in a shared retro board",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Custom Software Development",
    purpose: "Transform your Ideas into scalable digital product.",
    text: [
      "Enterprise Resource Planning (ERP) systems",
      "Customer Relationship Management (CRM) software",
      "Inventory management systems",
      "Workflow automation tools",
    ],
    itemPrice: "₹24,999",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Web Development",
    purpose:
      "Build a scalable, sleek, high-performance web solutions to showcase your business.",
    // text: "Need a sleek, responsive website to showcase your brand (starting from ₹19,999) or a high-performance mobile app to engage users (starting from ₹34,999). Please contact us for more details.",
    text: [
      "E-Commerce Platforms with inventory management",
      "SaaS/PaaS Development",
      "Management System",
      "Custom Content Management System Development",
    ],
    itemPrice: "₹19,999",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    // light: true,
  },
  {
    id: "2",
    title: "Mobile App Development",
    purpose:
      "Build high-performance and platform optimise apps that connect business to users anywhere",
    text: [
      "Cross-Platform Apps: Cost-effective, unified codebase solutions with Flutter or React Native.",
      "Modern UI/UX to seamless functionality",
    ],
    itemPrice: "₹34,999",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
  },
  {
    id: "3",
    title: "Cloud Solutions",
    purpose:
      "Tired of tech headaches? Our Cloud Solutions lift your business to new heights—seamless, secure, and smarter than ever!",
    text: [
      "Cloud migration (AWS, Azure, Google Cloud)",
      "Serverless architecture. Serverless? More like stress-less!",
      "DevOps & CI/CD pipelines",
      "Scalability and cost-efficiency",
    ],
    itemPrice: "₹29,999",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
  },
  {
    id: "4",
    title: "IT Consulting & Digital Transformation",
    purpose:
      "Transform your business with our IT consulting and digital transformation services.",
    text: [
      "Technology roadmap planning",
      "Legacy system modernization",
      "Digital strategy for startups/enterprises",
      "Process automation (RPA, AI)",
    ],
    itemPrice: "₹29,999",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
  },
  {
    id: "5",
    title: "Video Editing",
    purpose: "Bring Your Story to Life – Frame by Frame!",
    text: [
      "60-Second Reels (From ₹2000)",
      "Seamless Cuts + Trendy Transitions",
      "Motion Graphics (@ ₹500/sec)",
      "BG Music & SFX that pop",
    ],
    itemPrice: "₹2000",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
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
    id: 0,
    title: "Book My Doct",
    text: "Our doctor booking website enables users to find doctors by specialty or locality and book appointments easily. It features a clinic admin panel, a super admin panel to manage clinics, doctors, and…",
    url: "https://www.bookmydoct.com/",
    projectImg: book_my_doct,
  },
  {
    id: 1,
    title: "School Management System",
    text: "One system. All school operations. Zero hassles. Our School Management System is a powerful tool that streamlines school operations, making it easier for parents, teachers, and administrators to manage their school efficiently.",
    url: "https://educloud-service.vercel.app/",
    projectImg: school_mgmt,
  },
  {
    id: 2,
    title: "Dating App",
    text: "Find your perfect match effortless. With smart matchmaking algorithms, you'll discover compatible partners based on your interests and preferences. Enjoy seamless real-time chatting, and spice up your profile by uploading short videos. Swipe, chat, and meet like never before!",
    url: "https://dating-app.vercel.app/",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
  },
  {
    id: 3,
    title: "News App",
    text: "Stay informed effortlessly with our smart news app, designed to deliver personalized updates. Filter news by categories, and set preferences to see only what matters most. Get location-based alerts, ensuring you never miss what’s happening around you. With real-time highlights, breaking news reaches you instantly—anytime. Your world, your news, at your fingertips",
    url: "https://news-app.vercel.app/",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
  },
  // {
  //   id: 4,
  //   title: "Read Colab",
  //   text: "ReadColab is a real-time, live collaborative document-sharing application built with Next.js. Designed to facilitate seamless teamwork, ReadColab allows multiple users to edit and collaborate on documents simultaneously, with changes instantly reflected across all devices. Key Features: Real-Time Collaboration, Document Sharing.",
  //   url: "https://read-colab.vercel.app/",
  //   backgroundUrl: "./src/assets/benefits/card-5.svg",
  // },
];
