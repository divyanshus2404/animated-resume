export const PROFILE = {
  name: "Divyanshu Singh",
  firstName: "Divyanshu",
  lastName: "Singh",
  role: "Software Engineer | AI Domain",
  alt: "Software Engineer · Problem Solver · AI Enthusiast",
  email: "divyanshus2404@gmail.com",
  phone: "+91 9761601093",
  location: "Noida / Greater Noida, India",
  linkedin: "https://www.linkedin.com/in/divyanshu-singh-2404s/",
  github: "https://github.com/divyanshus2404",
  resumeUrl: "https://customer-assets.emergentagent.com/job_baab3931-fc97-4787-a75c-677ea9a31666/artifacts/k05quqdo_Divyanshu_Singh_Resume_AI_v15.docx",
  tagline:
    "Recent B.Tech CSE graduate with a focus on Artificial Intelligence. I engineer scalable full-stack systems, computer vision pipelines, and LLM-powered applications.",
  available: "Seeking full-time Software Engineering roles in the AI domain",
  portrait:
    "/avatar.jpg",
};

export const STATS = [
  { k: "7.76", v: "CGPA (B.Tech CSE)" },
  { k: "30%", v: "Imaging clarity gain" },
  { k: "4+", v: "Production projects shipped" },
  { k: "#1", v: "Trending OSS contribution" },
];

export const EXPERIENCE = [
  {
    company: "BlueBottleCap",
    role: "Lead Developer (Personal Project)",
    period: "Jan 2026 — Present",
    location: "Remote",
    href: "#",
    bullets: [
      "Engineered an end-to-end AI platform for engineering students featuring a JEE Question Generator, PYQ Analyser, and Study Planner powered by Gemini and Anthropic APIs.",
      "Architected a scalable full-stack solution utilizing Next.js, integrating OTP authentication, automated deployment via Netlify, and secure data handling with Supabase.",
      "Optimized LLM prompts and API calls to reduce latency and improve the accuracy of technical educational content generation.",
    ],
    stack: ["Next.js", "Gemini", "Anthropic", "Supabase", "Razorpay", "Netlify"],
  },
  {
    company: "Bharat Robotix",
    role: "Full-Stack Developer Intern",
    period: "Jul 2025 — May 2026",
    location: "Hybrid",
    href: "#",
    bullets: [
      "Built an AI-powered underwater imaging pipeline using OpenCV + TensorFlow/PyTorch — real-time detection, enhancement, classification from live feeds.",
      "Applied LLM models for image enhancement and intelligent data collection — improved clarity and capture efficiency by up to 30%.",
      "Architected the full data flow — SQL ↔ backend APIs ↔ React dashboard, enabling end-to-end visibility of imaging outputs and telemetry.",
    ],
    stack: ["OpenCV", "PyTorch", "React", "Node.js", "SQL"],
  },
];

export const PROJECTS = [
  {
    id: "bluebottlecap",
    title: "BlueBottleCap",
    link: "https://bluebottlecap.com",
    subtitle: "AI platform for engineering aspirants",
    tag: "FULL-STACK · AI",
    span: "lg:col-span-7 lg:row-span-2",
    image:
      "/bluebottlecap.png",
    description:
      "JEE Question Generator, PYQ Analyser, Study Planner. Gemini + Anthropic under the hood. End-to-end scalable architecture.",
    stack: ["Next.js", "Gemini", "Anthropic", "Supabase", "Razorpay"],
    year: "2026",
  },
  {
    id: "underwater",
    title: "Underwater Imaging",
    link: "https://github.com/divyanshus2404",
    subtitle: "CV pipeline for robotics",
    tag: "INDUSTRY",
    span: "lg:col-span-5",
    image:
      "https://images.unsplash.com/photo-1720962158937-7ea890052166?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    description:
      "Real-time object detection, image enhancement & classification — boosted clarity 30%.",
    stack: ["OpenCV", "PyTorch", "TensorFlow"],
    year: "2025",
  },
  {
    id: "oath",
    title: "OaTH",
    link: "https://github.com/divyanshus2404",
    subtitle: "Promise tracking & accountability",
    tag: "MVP SHIPPED",
    span: "lg:col-span-5",
    image:
      "/oath.png",
    description:
      "Cross-platform Flutter app — streak logic, completion tracking, smart reminders. Frictionless emotional UX.",
    stack: ["Flutter", "Firebase", "Cloud Functions"],
    year: "2026",
  },
  {
    id: "sports_sync",
    title: "Sports Sync",
    link: "https://github.com/divyanshus2404/Sports-Sync",
    subtitle: "Campus sports connector",
    tag: "TEAM LEAD",
    span: "lg:col-span-7",
    image:
      "/sports-sync.png",
    description:
      "Led 3-member team at Bennett — open-player requests, real-time DB, push notifications, iOS + Android.",
    stack: ["Flutter", "Firebase", "Node.js"],
    year: "2024",
  },
];

export const SKILL_GROUPS = [
  {
    label: "LANGUAGES",
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL", "Java", "HTML/CSS"],
  },
  {
    label: "AI / ML",
    items: [
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
      "Gemini API",
      "Anthropic API",
      "Prompt Engineering",
      "RAG",
      "Pandas",
    ],
  },
  {
    label: "FRAMEWORKS",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "Flutter", "REST APIs"],
  },
  {
    label: "DATA & CLOUD",
    items: ["Firebase", "Supabase", "PostgreSQL", "MySQL", "Razorpay", "Netlify", "Git/GitHub"],
  },
];

export const OPENSOURCE = [
  {
    project: "Headroom",
    label: "GitHub — Trending #1",
    date: "May 2026",
    note:
      "Authored a structured troubleshooting guide resolving setup issues & dependency conflicts. PR merged after maintainer review — improving onboarding for a high-visibility OSS project.",
  },
];

export const EDUCATION = {
  degree: "B.Tech — Computer Science Engineering",
  school: "Bennett University (Times of India Group)",
  period: "2022 — 2026",
  cgpa: "CGPA · 7.76",
  coursework: ["DSA", "OOP", "DBMS", "OS", "Design & Analysis of Algorithms", "Computer Networks"],
};
