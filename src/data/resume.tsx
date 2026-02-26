import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ziya Mammadov",
  initials: "ZM",
  url: "https://ziyamammadov.me",
  portfolioUrl: "https://github.com/stars/zmmmdf/lists/portfolio",
  location: "Edinburgh, UK",
  locationLink: "https://www.google.com/maps/place/edinburgh",
  description:
    "AI & Computer Science Student @ University of Edinburgh | i love coding, AI for Bio, hci, cognitive AI.",
  summary:
    "Worked on C#/ASP .NET systems in production, published PyPI libraries with 5000+ downloads, and released Hugging Face datasets for low-resource language NLP. Comfortable pairing, writing tests, and documenting decisions; thrive in fast-moving teams. Strong problem-solving abilities and attention to detail, excelling in fast-paced environments.",
  avatarUrl: "https://github.com/zmmmdf.png",
  skills: [
    "Python",
    "C++",
    "Java",
    "Haskell",
    "FORTRAN",
    "JavaScript",
    "TypeScript",

    "Machine Learning",
    "Artificial Intelligence",
    "Data Analysis",

    "Full-Stack Development",
    "Backend Development",
    "API Development",
    "Database Design",

    "High-Performance Computing",
    "Numerical Computing",
    "Embedded Systems",
    "Linux",
    "Shell Scripting",

    "Data Structures & Algorithms",
    "Competitive Programming",
    "Problem Solving",

    "Git",
    "GitHub",
    "Docker",
    "CI/CD",
    "Cloud Deployment",
    "Vibe Coding",

    "Analytical Thinking",
    "Teamwork",
    "Leadership",
    "Communication",
    "Negotiation"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ziyamm08@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/zmmmdf",
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
        url: "mailto:ziyamm08@gmail.com",
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
      location: "On-site",
      title: "Programmer",
      logoUrl: "/mpay.jpg",
      start: "Aug 2024",
      end: "Oct 2024",
      description:
        "Implemented production ASP .NET MVC features and REST APIs used by real users. Added integration tests and contributed to CI pipelines. Wrote incident reports and documentation, supporting documentation stability. Collaborated via Git/GitLab, contributing team workflows",
    },
  ],
  education: [
    {
      school: "University of Edinburgh",
      href: "https://www.ed.ac.uk/",
      degree: "Artificial Intelligence and Computer Science",
      logoUrl: "/edinburghuniversity.svg",
      start: "2025",
      end: "2029",
    }, {
      school: "Republican Humanitarian Gymnasium",
      href: "https://pisheverihfg.edu.az/index.html",
      degree: "High school",
      logoUrl: "/piseveri.jpg",
      start: "2023",
      end: "2024",
    }
  ],
  projects: [
    {
      title: "Azfar-Demo",
      href: "https://azfar-demo.ziyamammadov.me/",
      dates: "Dec 2025 - Present",
      active: true,
      description:
        "A demo app for Azfar, featuring a modern UI built with React, Vite, and shadcn/ui.",
      technologies: [
        "TypeScript",
        "Vite",
        "React",
        "shadcn-ui",
        "Tailwind CSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://azfar-demo.ziyamammadov.me/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }
  ],
  hackathons: [
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
      dates: "December , 2022",
      location: "Baku, Azerbaijan",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://kaspiliseyi.edu.az/uploads/63970856a7000fb6d876e09207e48b15dc7011e674c6e.png",
      links: [],
    },
    {
      title: "Makerthon",
      dates: "February 22th, 2022",
      location: "Baku, Azerbaijan",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://steam.edu.az/storage/slider_widget/nMUtp5hXRvdAaSwqIr0Synh1mSVEnlhmR1YQXm28.svg",
      links: [],
    },
  ],
} as const;
