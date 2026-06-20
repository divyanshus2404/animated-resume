export const PROFILE = {
  name: "Divyanshu Singh",
  firstName: "Divyanshu",
  lastName: "Singh",
  role: "AI Full-Stack Developer",
  alt: "Founder · Builder · Engineer",
  email: "divyanshus2404@gmail.com",
  phone: "+91 9761601093",
  location: "Noida / Greater Noida, India",
  linkedin: "https://www.linkedin.com/in/divyanshu-singh",
  github: "https://github.com/divyanshus2404",
  resumeUrl: "https://customer-assets.emergentagent.com/job_baab3931-fc97-4787-a75c-677ea9a31666/artifacts/k05quqdo_Divyanshu_Singh_Resume_AI_v15.docx",
  tagline:
    "I ship AI-integrated products from zero to production — full-stack systems, computer vision pipelines, LLM-powered apps. Things that actually work.",
  available: "Available for full-time roles · Founding engineer / SWE",
  portrait:
    "/avatar.jpg",
};

export const STATS = [
  { k: "₹10K+", v: "Revenue in weeks of MVP" },
  { k: "30%", v: "Imaging clarity gain" },
  { k: "4+", v: "Production projects shipped" },
  { k: "#1", v: "Trending OSS contribution" },
];

export const EXPERIENCE = [
  {
    company: "BlueBottleCap",
    role: "Founder & Developer",
    period: "Jan 2026 — Present",
    location: "Remote",
    href: "#",
    bullets: [
      "Conceived and solo-built an AI SaaS for Indian engineering students — JEE Question Generator, PYQ Analyser, Study Planner powered by Gemini + Anthropic APIs.",
      "Generated ₹10,000+ within weeks of MVP launch (Apr 2026), demonstrating early product-market fit.",
      "Shipped production stack: OTP auth, Razorpay freemium tiers, ₹99 digital product with automated post-payment delivery via Supabase + Netlify.",
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
    subtitle: "AI SaaS for engineering aspirants",
    tag: "FOUNDER · LIVE",
    span: "lg:col-span-7 lg:row-span-2",
    image:
      "https://images.pexels.com/photos/30530402/pexels-photo-30530402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "JEE Question Generator, PYQ Analyser, Study Planner. Gemini + Anthropic under the hood. Razorpay freemium. Real revenue, real users.",
    stack: ["Next.js", "Gemini", "Anthropic", "Supabase", "Razorpay"],
    year: "2026",
  },
  {
    id: "underwater",
    title: "Underwater Imaging",
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
    subtitle: "Promise tracking & accountability",
    tag: "MVP SHIPPED",
    span: "lg:col-span-5",
    image:
      "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    description:
      "Cross-platform Flutter app — streak logic, completion tracking, smart reminders. Frictionless emotional UX.",
    stack: ["Flutter", "Firebase", "Cloud Functions"],
    year: "2026",
  },
  {
    id: "sports_sync",
    title: "Sports Sync",
    subtitle: "Campus sports connector",
    tag: "TEAM LEAD",
    span: "lg:col-span-7",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
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
