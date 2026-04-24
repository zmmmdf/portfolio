import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ziya Mammadov",
  initials: "ZM",
  url: "https://ziyamammadov.me",
  portfolioUrl: "https://github.com/stars/mammadovziya/lists/portfolio",
  location: "Edinburgh, UK",
  locationLink: "https://www.google.com/maps/place/edinburgh",
  description:
    "AI & Computer Science student @ University of Edinburgh. I build agentic AI, LLM-powered developer tools, and AI for bio.",
  summary:
    "Artificial Intelligence & Computer Science student at the University of Edinburgh, beneficiary of the fully-funded Azerbaijani State Scholarship scheme. My areas of interest are agent-based AI and language-model-powered developer tools. I have internship experience in fin-tech production development, have authored open-source Python libraries with 6,000+ total downloads, and build AI systems spanning metabolic modelling, agentic AI, and developer tooling at hackathons and in research.",
  avatarUrl: "https://avatars.githubusercontent.com/u/151031540?v=4",
  skills: [
    "Claude API",
    "MCP",
    "Cursor",
    "Agent Orchestration",
    "Workflow Automation",
    "Prompt Engineering",
    "LLM Evaluation",

    "Python",
    "Java",
    "C#",
    "C++",
    "TypeScript",
    "JavaScript",

    "Node.js",
    "Next.js",
    "FastAPI",
    "Flask",
    "Streamlit",
    "ASP.NET MVC",
    "REST APIs",
    "PostgreSQL",

    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "GitLab CI",
    "Linux",
    "Bash",
    "Git",

    "Machine Learning",
    "Artificial Intelligence",
    "NLP Pipelines",
    "Model Evaluation",
    "Dataset Curation",
    "Protein Language Models (ESM C)",

    "COBRApy",
    "BioPython",
    "DIAMOND",
    "Gurobi",
    "Genome-Scale Metabolic Modelling",
    "Metabolic Modelling (FBA/FVA)",

    "Unity",
    "Eye Tracking",

    "Data Structures & Algorithms",
    "Problem Solving",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "z.mammadov@sms.ed.ac.uk",
    tel: "+44 7350 185646",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mammadovziya",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mziya/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Signal: {
        name: "Signal",
        url: "https://signal.me/#p/+9940105150524",
        icon: Icons.email,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@ziyamamadov",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:z.mammadov@sms.ed.ac.uk",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MPAY",
      href: "https://mpay.az",
      badges: [],
      location: "Baku, Azerbaijan",
      title: "Software Developer Intern",
      logoUrl: "/mpay.jpg",
      start: "June 2024",
      end: "September 2024",
      description:
        "Developed production features and REST APIs using C# ASP.NET MVC, supporting real-world fintech applications. Added integration tests and contributed to CI pipelines, improving code validation and release confidence. Produced incident reports and technical documentation for production issues. Collaborated via Git/GitLab workflows, including team code reviews and pull requests.",
    },
  ],
  education: [
    {
      school: "University of Edinburgh",
      href: "https://www.ed.ac.uk/",
      degree: "BSc (Hons) Artificial Intelligence and Computer Science",
      logoUrl: "/edinburghuniversity.svg",
      start: "2025",
      end: "2029",
      description:
        "Relevant coursework: Cognitive Science, Object-Oriented Programming, Functional Programming, Databases, Introduction to AI/ML, Algorithms, Data Structures, Linear Algebra.",
    },
  ],
  projects: [
    {
      title: "circuit breaker",
      href: "https://github.com/mammadovziya/circuit-breaker",
      dates: "2026",
      active: true,
      description:
        "Real-time oversight layer that intercepts and risk-scores AI finance agent actions before execution using GPT-4 as a risk assessor. Prevents catastrophic automated trades by enforcing configurable risk thresholds and generating structured audit logs. Built at AI Engine Hackathon, Scotland.",
      technologies: ["Python", "GPT-4", "TypeScript", "Agent Oversight"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/circuit-breaker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "gemiz",
      href: "https://github.com/mammadovziya/gemiz",
      dates: "2026",
      active: true,
      description:
        "Genome-scale metabolic model reconstruction tool designed to replace CarveMe and gapseq for both bacteria and eukaryotes. Integrates ESM C 600M protein language model embeddings as a novel second-order scoring method for reaction–gene mapping. Benchmarked against gold-standard GEMs (iML1515, iJO1366) with an ablation study comparing full pipeline vs. --no-esm baseline.",
      technologies: [
        "Python",
        "ESM C 600M",
        "COBRApy",
        "BioPython",
        "DIAMOND",
        "Gurobi",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/gemiz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "mcpforge",
      href: "https://github.com/mammadovziya/mcpforge",
      dates: "2026",
      active: true,
      description:
        "Automation tool that generates MCP servers from any repository URL, turning source code into tools accessible to agents with a single click. Produces one-click install files for Claude Desktop and other MCP agents. End-to-end pipeline: repo analysis → tool schema → server code generation → agent configuration. Built at AI Engine Hackathon, Scotland.",
      technologies: ["Python", "TypeScript", "Node.js", "Claude API", "MCP"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/mcpforge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "myco-optima",
      href: "https://github.com/mammadovziya/myco-optima",
      dates: "2026",
      active: true,
      description:
        "GEM-powered fungal fermentation optimisation tool for non-specialist bioprocess engineers, covering A. niger, A. oryzae, N. crassa, and R. microsporus. Applies FBA/FVA to predict growth rates, biomass yields, and organic acid production with shadow prices for media composition. Includes a gene–media component predicting pellet vs. dispersed morphology from pkaC, brlA, flbA regulation. Reduces DoE tables from ~80 to ~15 runs. Built at Edinburgh BioHackathon 2026 (Pacifico Biolabs).",
      technologies: [
        "Python",
        "COBRApy",
        "Streamlit",
        "Anthropic API",
        "FBA/FVA",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/myco-optima",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "deathlog",
      href: "https://github.com/mammadovziya/deathlog",
      dates: "2025",
      active: true,
      description:
        "AI post-mortem CLI tool that saves ~90% of incident-documentation time at roughly $0.01 per run. Pip-installable command-line interface that generates professional incident reports from Git commits, with full release pipeline and public documentation.",
      technologies: ["Python", "Claude 3.5 Sonnet", "CLI", "Git"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/deathlog",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "cognicart",
      href: "https://github.com/mammadovziya/cognicart",
      dates: "2026",
      active: true,
      description:
        "Virtual supermarket simulation assessing cognitive functions — planning, working memory, inhibition, and cognitive flexibility. Integrated eye tracking and a custom behavioural data-logging pipeline.",
      technologies: ["Unity", "C#", "Eye Tracking", "HCI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/mammadovziya/cognicart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Open-Source Python Libraries",
      href: "https://pypi.org/user/mammadovziya/",
      dates: "2022 – Present",
      active: true,
      description:
        "Python libraries with 6,000+ total downloads. CBAR Exchange Rates (3,400+ downloads): client for the Central Bank of Azerbaijan API with automatic retries and error handling. Azerbaijani Number-to-Words Converter (2,500+ downloads, 4.8★): converts numbers to Azerbaijani words for financial, legal, and statistical applications. Plus published Azerbaijan-market ML datasets on Hugging Face with cleaning, validation, and structured docs.",
      technologies: ["Python", "PyPI", "Hugging Face", "NLP", "Open Source"],
      links: [
        {
          type: "PyPI",
          href: "https://pypi.org/user/mammadovziya/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AI Engine Hackathon",
      dates: "2026",
      location: "Scotland, UK",
      description:
        "Built two projects during the event: circuit breaker, a real-time oversight layer that risk-scores AI finance agent actions before execution; and mcpforge, an automation tool that generates MCP servers from any repo URL.",
      image: "",
      links: [],
    },
    {
      title: "Edinburgh BioHackathon 2026",
      dates: "2026",
      location: "Edinburgh, UK",
      description:
        "Pacifico Biolabs track. Built myco-optima, a GEM-powered fungal fermentation optimisation tool covering four filamentous fungi, with FBA/FVA-driven media design and morphology prediction for meat-substitute applications.",
      image: "",
      links: [],
    },
    {
      title: "FLL",
      dates: "2021, 2022",
      location: "Baku, Azerbaijan",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://fll.steam.edu.az/front_assets/img/logo_1.svg",
      links: [],
    },
    {
      title: "SAF 2022",
      dates: "December 2022",
      location: "Baku, Azerbaijan",
      description:
        "Developed a mobile application which delivers university campus-wide events in real time to all students.",
      image:
        "https://kaspiliseyi.edu.az/uploads/63970856a7000fb6d876e09207e48b15dc7011e674c6e.png",
      links: [],
    },
    {
      title: "Makerthon",
      dates: "February 22, 2022",
      location: "Baku, Azerbaijan",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality.",
      image:
        "https://steam.edu.az/storage/slider_widget/nMUtp5hXRvdAaSwqIr0Synh1mSVEnlhmR1YQXm28.svg",
      links: [],
    },
  ],
  awards: [
    {
      title: "Fully-Funded State Scholarship",
      issuer: "Republic of Azerbaijan — Ministry of Science and Education",
      href: "https://edu.gov.az/",
      logoUrl: "",
      start: "2025",
      end: "2029",
      description:
        "Awarded nationally to top-performing students. Covers full tuition and living costs at the University of Edinburgh.",
    },
    {
      title: "Bronze Medal — National Olympiad in Informatics",
      issuer: "Republic of Azerbaijan",
      href: "",
      logoUrl: "",
      start: "2023",
      end: "2023",
      description:
        "Ranked 3rd nationwide in Azerbaijan for algorithmic problem-solving.",
    },
  ],
  volunteer: [
    {
      organization: "School Volunteer Programme",
      href: "",
      logoUrl: "",
      title: "Head Coordinator",
      start: "January 2024",
      end: "June 2025",
      description:
        "Led peer mentoring programmes and supported school technology initiatives for 200+ students.",
    },
  ],
} as const;
