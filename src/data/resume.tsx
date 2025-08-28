import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ziya Mammadov",
  initials: "ZM",
  url: "https://mziya.xyz",
  location: "Baku, Azerbaijan",
  locationLink: "https://www.google.com/maps/place/baku",
  description:
    "AI & Computer Science Student | Passionate About Innovation and Technology | Active on media.",
  summary:
    "Developer skilled in designing, developing, and maintaining software applications. Proficient in multiple programming languages, debugging, and collaborating with teams. Strong problem-solving abilities and attention to detail, excelling in fast-paced environments.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "C++",
    "AI & ML (Beginner)",
    "Haskell",
    "FORTRAN",
    "Web developing",
    "Embed systems",
    "Competitive Programming",
    "Problem Solving",
    "Analytical Thinking",
    "Teamwork",
    "Negotiation",
    "Docker",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ziyamm08@gmail.com",
    tel: "+9940105150524",
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
        url: "https://signal.me/#p/+9940105150524r",
        icon: Icons.email,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@zmmmdf",
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
        "Intern at MPAY specializing in ASP.NET MVC and ASP.NET development, contributing to innovative solutions in the fintech sector.",
    },
  ],
  education: [
    {
      school: "University of Edinburgh",
      href: "https://www.ed.ac.uk/",
      degree: "Artificial Intelligience and Computer Science",
      logoUrl: "/edinburghuniversity.svg",
      start: "2025",
      end: "2029",
    },{
      school: "Republican Humanitarian Gymnasium named after S.C. Pishavari",
      href: "https://pisheverihfg.edu.az/",
      degree: "High school",
      logoUrl: "/piseveri.jpg",
      start: "2023",
      end: "2024",
    }
  ],
  projects: [
    {
      title: "Serenify",
      href: "https://serenify.mziya.xyz",
      dates: "September 2024 - Jan 2025",
      active: true,
      description:
        "",
      technologies: [
        "Next.js",
        "Python",
        "HTML",
      ],
      links: [
        {
          type: "Website",
          href: "https://serenify.mziya.xyz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:"",    }
  ],
  hackathons: [
    {
      title: "FLL",
      dates: "2021, 2022",
      location: "Baku, Azerbaijan",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://fllazerbaijan.org/fll.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "SAF 2022",
      dates: "December , 2022",
      location: "Baku, Azerbaijan",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://kaspiliseyi.az/uploads/63970856a7000fb6d876e09207e48b15dc7011e674c6e.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
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
