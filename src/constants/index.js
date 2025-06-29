import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  book_my_doct,
  chromecast,
  coming_soon,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  katlicherra_project_img,
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
    id: 2,
    title: "Pricing",
    url: "#pricing",
  },
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
    id: 0,
    heading: "Custom Software Development",
    description: "Transform your Ideas into scalable digital product.",
    listHeading: "What will you get",
    list: [
      "Enterprise Resource Planning (ERP) systems",
      "Customer Relationship Management (CRM) software",
      "Inventory management systems",
      "Workflow automation tools",
    ],
    price: 35999,
    discount: 10,
    // backgroundUrl: "./src/assets/benefits/card-1.svg",
    // iconUrl: benefitIcon1,
    // imageUrl: benefitImage2,
  },
  {
    id: 1,
    heading: "Web Development",
    description:
      "Build a scalable, sleek, high-performance web solutions to showcase your business.",
    // text: "Need a sleek, responsive website to showcase your brand (starting from ₹19,999) or a high-performance mobile app to engage users (starting from ₹34,999). Please contact us for more details.",
    listHeading: "What will you get",
    list: [
      "E-Commerce Platforms with inventory management",
      "SaaS/PaaS Development",
      "Management System",
      "Custom Content Management System Development",
    ],
    price: 29999,
    discount: 10,
    // backgroundUrl: "./src/assets/benefits/card-2.svg",
    // iconUrl: benefitIcon2,
    // imageUrl: benefitImage2,
    // light: true,
  },
  {
    id: 2,
    heading: "Mobile App Development",
    description:
      "Build high-performance and platform optimise apps that connect business to users anywhere",
    listHeading: "What will you get",
    list: [
      "Cross-Platform Apps: Cost-effective, unified codebase solutions with Flutter or React Native.",
      "Modern UI/UX to seamless functionality",
    ],
    price: 49999,
    discount: 10,
  },
  {
    id: 3,
    heading: "Cloud Solutions",
    description:
      "Tired of tech headaches? Our Cloud Solutions lift your business to new heights—seamless, secure, and smarter than ever!",
    listHeading: "What will you get",
    list: [
      "Cloud migration (AWS, Azure, Google Cloud)",
      "Serverless architecture. Serverless? More like stress-less!",
      "DevOps & CI/CD pipelines",
      "Scalability and cost-efficiency",
    ],
    price: 29999,
    discount: 10,
  },
  {
    id: 4,
    heading: "IT Consulting & Digital Transformation",
    description:
      "Transform your business with our IT consulting and digital transformation services.",
    listHeading: "What will you get",
    list: [
      "Technology roadmap planning",
      "Legacy system modernization",
      "Digital strategy for startups/enterprises",
      "Process automation (RPA, AI)",
    ],
    price: 39999,
    discount: 10,
  },
  {
    id: 5,
    heading: "Video Editing",
    description: "Bring Your Story to Life – Frame by Frame!",
    listHeading: "we will pay you. Yup you header right. That's Sudama",
    list: [
      "60-Second Reels (From 499)",
      "Seamless Cuts + Trendy Transitions",
      "Motion Graphics (@ 60/sec)",
      "BG Music & SFX that pop",
    ],
    price: 559,
    discount: 10,
  },
  {
    id: 6,
    heading: "Logo Designing",
    description: "Design a Logo that speaks for your business",
    price: 220,
    discount: 10,
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
    projectImg: coming_soon,
  },
  {
    id: 3,
    title: "News App",
    text: "Stay informed effortlessly with our smart news app, designed to deliver personalized updates. Filter news by categories, and set preferences to see only what matters most. Get location-based alerts, ensuring you never miss what’s happening around you. With real-time highlights, breaking news reaches you instantly—anytime. Your world, your news, at your fingertips",
    url: "https://news-app.vercel.app/",
    projectImg: coming_soon,
  },
  {
    id: 4,
    title: "Katlichera Central School",
    text: "Developed a modern, user-friendly website for the school, designed to enhance communication and engagement within the school community. With sleek and responsive design, the site keep students, parents and stuff up to date with the latest information.",
    url: "https://www.katlicherracentralschool.in/",
    projectImg: katlicherra_project_img,
  },
];
