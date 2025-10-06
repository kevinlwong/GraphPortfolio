import { type GraphData } from "react-force-graph-2d";

export type GraphNodeType =
  | "education"
  | "experience"
  | "project"
  | "skill"
  | "certification"
  | "interest"
  | "personal";

export type GraphNode = {
  id: string;
  type: GraphNodeType;
  label: string;
  description?: string;
  link?: string;
};

export const graphData: GraphData = {
  nodes: [
    // === CORE NODE ===
    {
      id: "Kevin Wong",
      type: "personal",
      label: "Kevin Wong",
      description: "Software Engineer | AI & Data Enthusiast",
      link: "https://portfolio-kevinlwong.vercel.app",
    },

    // === EDUCATION ===
    {
      id: "Cal Poly Pomona",
      type: "education",
      label: "Cal Poly Pomona",
      description:
        "B.S. in Computer Science (Summa Cum Laude, GPA 3.94). Coursework includes AI, Machine Learning, Big Data, Cloud Computing, and Software Engineering.",
      link: "https://www.cpp.edu",
    },

    // === COURSEWORK ===
    {
      id: "CS4200 Artificial Intelligence",
      type: "course",
      label: "CS 4200 – Artificial Intelligence",
      description:
        "Core AI concepts: search, reasoning, and knowledge representation.",
    },
    {
      id: "CS4210 Machine Learning",
      type: "course",
      label: "CS 4210 – Machine Learning and Its Applications",
      description:
        "Applied ML models, supervised/unsupervised learning, and evaluation techniques.",
    },
    {
      id: "CS4650 Big Data",
      type: "course",
      label: "CS 4650 – Big Data Analytics and Cloud Computing",
      description:
        "Data pipelines, Hadoop/Spark, and scalable data systems on cloud platforms.",
    },
    {
      id: "CS4350 Database Systems",
      type: "course",
      label: "CS 4350 – Database Systems",
      description:
        "Relational databases, SQL, normalization, and transaction processing.",
    },
    {
      id: "CS4800 Software Engineering",
      type: "course",
      label: "CS 4800 – Software Engineering",
      description:
        "Software lifecycle, UML, design patterns, and agile methodologies.",
    },
    {
      id: "CS3310 Algorithms",
      type: "course",
      label: "CS 3310 – Design and Analysis of Algorithms",
      description:
        "Algorithm efficiency, dynamic programming, graph algorithms, and complexity.",
    },
    {
      id: "CS4310 Operating Systems",
      type: "course",
      label: "CS 4310 – Operating Systems",
      description:
        "Processes, threads, synchronization, memory management, and file systems.",
    },
    {
      id: "CS3650 Computer Architecture",
      type: "course",
      label: "CS 3650 – Computer Architecture",
      description:
        "Instruction sets, memory hierarchy, and CPU design principles.",
    },
    {
      id: "CS4080 Programming Languages",
      type: "course",
      label: "CS 4080 – Concepts of Programming Languages",
      description:
        "Language paradigms, compilers, and semantics of modern programming languages.",
    },
    {
      id: "CS3110 Automata",
      type: "course",
      label: "CS 3110 – Formal Languages and Automata",
      description:
        "Theoretical CS: grammars, automata, Turing machines, and computability.",
    },

    // === CERTIFICATIONS ===
    {
      id: "AWS Certified Cloud Practitioner",
      type: "certification",
      label: "AWS Certified Cloud Practitioner",
      description: "Earned Mar. 2025",
      link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    },

    // === EXPERIENCE ===
    {
      id: "Hyundai AutoEver America",
      type: "experience",
      label: "Data Analytics Intern – Hyundai AutoEver",
      description: `Jun 2025 – Present | Costa Mesa, CA
• Designed and deployed an end-to-end SLA monitoring solution that automated Dynatrace API ingestion via Node.js/Express, surfacing real-time insights.
• Automated SLA and uptime monitoring using Python + Task Scheduler → Power BI.
• Created Power BI dashboards for API heatmaps and high-usage vehicles.
• Cut raw CSV size by 90%, speeding refreshes by 60%.`,
      link: "https://www.hyundaiautoever.com",
    },
    {
      id: "CodePath Tech Fellow",
      type: "experience",
      label: "Tech Fellow – CodePath",
      description: `May 2025 – Present | Remote
• One of 224 Tech Fellows supporting 7,800+ students in CodePath's DS&A course.
• Led live sessions, debugging, and algorithm discussions.
• Mentored students to boost problem-solving confidence.`,
      link: "https://www.codepath.org/",
    },
    {
      id: "AI-in-Construction Initiative",
      type: "experience",
      label: "Full Stack Developer – AI in Construction",
      description: `Aug 2024 – Present | Pomona, CA
• Built multi-model LLM chatbot (GPT + domain-fine-tuned models) with REST APIs.
• Reduced response latency by 40% and streamlined Precon–Postcon workflows.
• Trained proprietary models on real construction firm data for commercialization.`,
    },
    {
      id: "Up Cancer Internship",
      type: "experience",
      label: "Software Engineer Intern – Up Cancer",
      description: `Jan 2025 – Jun 2025 | Remote
• Refactored legacy CRM, implemented serverless backend with DynamoDB + Lambda.
• Reduced API latency and prepped architecture for AWS deployment.
• Connected Figma designs to backend APIs for seamless UX.`,
    },

    // === PROJECTS ===
    {
      id: "PomonaCare",
      type: "project",
      label: "PomonaCare",
      description:
        "AI-powered healthcare platform (React + Express + GPT-4 Turbo). Integrated OCR and multilingual chat for accessibility.",
      link: "https://github.com/kevinlwong",
    },
    {
      id: "FinSight",
      type: "project",
      label: "FinSight",
      description:
        "Finance intelligence app (FastAPI, Next.js, Postgres, Docker). Implemented multi-armed bandit & AI summarization.",
      link: "https://github.com/kevinlwong",
    },
    {
      id: "Graph Portfolio",
      type: "project",
      label: "Interactive Graph Portfolio",
      description:
        "This web app: an interactive graph visualization of my experience, projects, and interests.",
      link: "https://github.com/kevinlwong",
    },

    // === SKILLS ===
    {
      id: "Python",
      type: "skill",
      label: "Python",
      description: "Data analysis, APIs, ML automation, scripting",
    },
    {
      id: "JavaScript/TypeScript",
      type: "skill",
      label: "JavaScript / TypeScript",
      description: "Frontend + backend with React, Next, and Express",
    },
    {
      id: "Java",
      type: "skill",
      label: "Java",
      description: "Object-oriented programming, algorithms, data structures",
    },
    {
      id: "SQL",
      type: "skill",
      label: "SQL",
      description: "Database querying, schema optimization, analytics",
    },
    {
      id: "AWS",
      type: "skill",
      label: "AWS",
      description: "S3, EC2, Lambda, DynamoDB, Cloud Practitioner certified",
    },
    {
      id: "React",
      type: "skill",
      label: "React",
      description: "Frontend UIs and dashboards with Vite + Tailwind",
    },
    {
      id: "Docker",
      type: "skill",
      label: "Docker",
      description: "Containerization for APIs and ML pipelines",
    },
    {
      id: "Pandas",
      type: "skill",
      label: "Pandas",
      description: "Data cleaning, joins, analytics for large CSVs",
    },
    {
      id: "FastAPI",
      type: "skill",
      label: "FastAPI",
      description: "High-performance Python web framework for building APIs",
    },
    {
      id: "DynamoDB",
      type: "skill",
      label: "DynamoDB",
      description: "NoSQL database service for scalable applications",
    },
    {
      id: "Power BI",
      type: "skill",
      label: "Power BI",
      description: "Business analytics and data visualization",
    },
    {
      id: "Express",
      type: "skill",
      label: "Express.js",
      description: "Node.js web framework for building REST APIs",
    },
    {
      id: "GitHub Actions",
      type: "skill",
      label: "GitHub Actions",
      description: "CI/CD automation and workflow orchestration",
    },
    {
      id: "PostgreSQL",
      type: "skill",
      label: "PostgreSQL",
      description: "Advanced relational database for complex queries",
    },
    {
      id: "Redis",
      type: "skill",
      label: "Redis",
      description: "In-memory data structure store for caching",
    },
    {
      id: "Celery",
      type: "skill",
      label: "Celery",
      description: "Distributed task queue for Python",
    },
    {
      id: "Next.js",
      type: "skill",
      label: "Next.js",
      description: "React framework for production-grade applications",
    },
    {
      id: "OpenAI API",
      type: "skill",
      label: "OpenAI API",
      description: "GPT integration for AI-powered features",
    },
    {
      id: "OCR",
      type: "skill",
      label: "OCR",
      description: "Optical character recognition for document processing",
    },

    // === PERSONAL INTERESTS / HOBBIES ===
    {
      id: "Gym & Fitness",
      type: "interest",
      label: "Gym & Fitness",
      description: "Focused training for discipline, strength, and consistency.",
    },
    {
      id: "Martial Arts",
      type: "interest",
      label: "Muay Thai & Kickboxing",
      description: "Training to sharpen focus, adaptability, and balance between mind and body.",
    },
    {
      id: "Dance",
      type: "interest",
      label: "Inner Essence Dance Company",
      description: "Member of Cal Poly Pomona's Inner Essence team — creativity, rhythm, and community.",
    },
    {
      id: "Psychology & Growth",
      type: "interest",
      label: "Psychology & Human Growth",
      description: "Learning motivation, discipline, and mental models behind performance.",
    },
  ],
  links: [
    // Connections from core node
    { source: "Kevin Wong", target: "Cal Poly Pomona" },
    { source: "Kevin Wong", target: "AWS Certified Cloud Practitioner" },
    { source: "Kevin Wong", target: "Hyundai AutoEver America" },
    { source: "Kevin Wong", target: "CodePath Tech Fellow" },
    { source: "Kevin Wong", target: "AI-in-Construction Initiative" },
    { source: "Kevin Wong", target: "Up Cancer Internship" },
    { source: "Kevin Wong", target: "PomonaCare" },
    { source: "Kevin Wong", target: "FinSight" },
    { source: "Kevin Wong", target: "Graph Portfolio" },

    // Link skills to projects and experience
    { source: "PomonaCare", target: "JavaScript/TypeScript" },
    { source: "PomonaCare", target: "React" },
    { source: "PomonaCare", target: "Express" },
    { source: "PomonaCare", target: "OpenAI API" },
    { source: "PomonaCare", target: "OCR" },

    { source: "FinSight", target: "Python" },
    { source: "FinSight", target: "FastAPI" },
    { source: "FinSight", target: "Docker" },
    { source: "FinSight", target: "PostgreSQL" },
    { source: "FinSight", target: "Redis" },
    { source: "FinSight", target: "Celery" },
    { source: "FinSight", target: "Next.js" },

    { source: "AI-in-Construction Initiative", target: "Python" },
    { source: "AI-in-Construction Initiative", target: "AWS" },
    { source: "AI-in-Construction Initiative", target: "FastAPI" },
    { source: "AI-in-Construction Initiative", target: "Docker" },
    { source: "AI-in-Construction Initiative", target: "GitHub Actions" },

    { source: "Up Cancer Internship", target: "AWS" },
    { source: "Up Cancer Internship", target: "DynamoDB" },
    { source: "Up Cancer Internship", target: "JavaScript/TypeScript" },

    { source: "Hyundai AutoEver America", target: "Python" },
    { source: "Hyundai AutoEver America", target: "Pandas" },
    { source: "Hyundai AutoEver America", target: "Power BI" },
    { source: "Hyundai AutoEver America", target: "SQL" },
    { source: "Hyundai AutoEver America", target: "AWS" },
    { source: "Hyundai AutoEver America", target: "Express" },

    // Coursework connections
    { source: "Cal Poly Pomona", target: "CS4200 Artificial Intelligence" },
    { source: "Cal Poly Pomona", target: "CS4210 Machine Learning" },
    { source: "Cal Poly Pomona", target: "CS4650 Big Data" },
    { source: "Cal Poly Pomona", target: "CS4350 Database Systems" },
    { source: "Cal Poly Pomona", target: "CS4800 Software Engineering" },
    { source: "Cal Poly Pomona", target: "CS3310 Algorithms" },
    { source: "Cal Poly Pomona", target: "CS4310 Operating Systems" },
    { source: "Cal Poly Pomona", target: "CS3650 Computer Architecture" },
    { source: "Cal Poly Pomona", target: "CS4080 Programming Languages" },
    { source: "Cal Poly Pomona", target: "CS3110 Automata" },
    { source: "Cal Poly Pomona", target: "Java" },

    // Personal connections
    { source: "Kevin Wong", target: "Gym & Fitness" },
    { source: "Kevin Wong", target: "Dance" },
    { source: "Kevin Wong", target: "Martial Arts" },
    { source: "Kevin Wong", target: "Psychology & Growth" },
   ],
};
